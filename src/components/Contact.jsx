// import { useEffect, useRef, useState } from 'react'

// export default function Contact() {
//   const ref = useRef(null)
//   const [sent, setSent] = useState(false)

//   useEffect(() => {
//     const obs = new IntersectionObserver(entries => {
//       entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
//     }, { threshold: 0.1 })
//     ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
//     return () => obs.disconnect()
//   }, [])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     setSent(true)
//     setTimeout(() => setSent(false), 4000)
//   }

//   return (
//     <section id="contact" ref={ref}>
//       <div className="section-label">Contact</div>
//       <div className="reveal">
//         <h2 className="section-title">Let's build<br /><span className="serif">something great</span></h2>
//       </div>
//       <div className="contact-inner">
//         <div className="reveal" style={{transitionDelay:'0.1s'}}>
//           <a href="mailto:your@email.com" className="contact-email">tracksakyanapp@gmail.com </a>
//           <p className="contact-desc">
//             I'm open to full-time roles, freelance projects, and collaborations. If you have an idea you'd like to bring to life, let's talk.
//           </p>
//           <div className="socials">
//             <div className="socials-label">Find me on</div>
//             <div className="social-links">
//               {[
//                 { label: 'GitHub', href: 'https://github.com/marcangelvillarosa', icon: '⌥' },
//                 { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marc-angel-villarosa-a78645323/?skipRedirect=true', icon: '🔗' },
//                 { label: 'Facebook', href: 'https://www.facebook.com/neya.only', icon: '◈' },
//               ].map(s => (
//                 <a key={s.label} href={s.href} className="social-link" target="_blank" rel="noreferrer">
//                   <span>{s.icon}</span>
//                   <span>{s.label}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="reveal" style={{transitionDelay:'0.2s'}}>
//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label className="form-label">Name</label>
//               <input className="form-input" type="text" placeholder="Your name" required />
//             </div>
//             <div className="form-group">
//               <label className="form-label">Email</label>
//               <input className="form-input" type="email" placeholder="your@email.com" required />
//             </div>
//             <div className="form-group">
//               <label className="form-label">Message</label>
//               <textarea className="form-textarea" rows={5} placeholder="Tell me about your project..." required />
//             </div>
//             <button type="submit" className="submit-btn">
//               {sent ? '✓ Message Sent!' : (<><span>Send Message</span><span>→</span></>)}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   )
// }


import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
// Alternative: You can also use these if you prefer simpler designs:
// import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi'
// import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'

export default function Contact() {
  const ref = useRef(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" ref={ref}>
      <div className="section-label">Contact</div>
      <div className="reveal">
        <h2 className="section-title">Let's build<br /><span className="serif">something great</span></h2>
      </div>
      <div className="contact-inner">
        <div className="reveal" style={{transitionDelay:'0.1s'}}>
          <a href="mailto:tracksakyanapp@gmail.com" className="contact-email">tracksakyanapp@gmail.com</a>
          <p className="contact-desc">
            I'm open to full-time roles, freelance projects, and collaborations. If you have an idea you'd like to bring to life, let's talk.
          </p>
          <div className="socials">
            <div className="socials-label">Find me on</div>
            <div className="social-links">
              {[
                { label: 'GitHub', href: 'https://github.com/marcangelvillarosa', icon: FaGithub },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marc-angel-villarosa-a78645323/?skipRedirect=true', icon: FaLinkedin },
                { label: 'Facebook', href: 'https://www.facebook.com/neya.only', icon: FaFacebook },
              ].map(s => (
                <a key={s.label} href={s.href} className="social-link" target="_blank" rel="noreferrer">
                  <s.icon size={20} />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="reveal" style={{transitionDelay:'0.2s'}}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input className="form-input" type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" rows={5} placeholder="Tell me about your project..." required />
            </div>
            <button type="submit" className="submit-btn">
              {sent ? '✓ Message Sent!' : (<><span>Send Message</span><span>→</span></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}