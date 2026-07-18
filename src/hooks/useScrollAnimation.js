import { useEffect } from 'react'

// Replicates the original site's scroll-reveal behaviour: any element
// matching one of the given selectors gets an `in-view` class added
// once it scrolls into the viewport. Runs once on mount and again on
// every scroll/resize event, with an IntersectionObserver as a more
// efficient backup for the same effect.
export default function useScrollAnimation(selectors = []) {
  useEffect(() => {
    if (!selectors.length) return

    const selectorString = selectors.join(', ')

    function animateOnScroll() {
      const elements = document.querySelectorAll(selectorString)
      const triggerBottom = window.innerHeight * 0.85
      elements.forEach((el) => {
        if (el.getBoundingClientRect().top < triggerBottom) {
          el.classList.add('in-view')
        }
      })
    }

    animateOnScroll()
    window.addEventListener('scroll', animateOnScroll)
    window.addEventListener('resize', animateOnScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll(selectorString).forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener('scroll', animateOnScroll)
      window.removeEventListener('resize', animateOnScroll)
      observer.disconnect()
    }
  }, [selectors])
}
