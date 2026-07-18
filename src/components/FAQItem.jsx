import { useState } from 'react'

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'active' : ''}`}>
      <div
        className="faq-q"
        role="button"
        tabIndex={0}
        onClick={() => setOpen(o => !o)}
        onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
      >
        <span>{question}</span>
        <i className="fas fa-chevron-down" />
      </div>
      <div className="faq-a">
        <p>{answer}</p>
      </div>
    </div>
  )
}
