import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1200)
    return () => clearTimeout(t)
  }, [])
  return (
    <div id="loading-screen" className={hidden ? 'hidden' : ''}>
      <div className="loader-ring" />
      <div className="loader-wordmark">Gadaa Securities Dealer</div>
      <div className="loader-tagline">Ethiopian Securities Exchange</div>
    </div>
  )
}
