// import { useEffect, useRef, useState } from 'react'
// import { CERTIFICATES } from '../data/portfolio'

// function CertModal({ cert, onClose }) {
//   const [closing, setClosing] = useState(false)

//   const close = () => {
//     setClosing(true)
//     setTimeout(onClose, 180)
//   }

//   useEffect(() => {
//     const onKey = (e) => { if (e.key === 'Escape') close() }
//     window.addEventListener('keydown', onKey)
//     document.body.style.overflow = 'hidden'
//     return () => {
//       window.removeEventListener('keydown', onKey)
//       document.body.style.overflow = ''
//     }
//   }, [])

//   return (
//     <div className={`modal-overlay${closing ? ' closing' : ''}`} onClick={e => { if (e.target === e.currentTarget) close() }}>
//       <div className="modal-box">
//         <div className="modal-header">
//           <div>
//             <div className="modal-title">{cert.title}</div>
//             <div className="modal-meta" style={{marginTop:4}}>Issued by {cert.issuer}</div>
//           </div>
//           <button className="modal-close" onClick={close} aria-label="Close">✕</button>
//         </div>
//         <div className="modal-body">
//           <div className="modal-cert-img">
//             {cert.image ? (
//               <img src={cert.image} alt={cert.title} />
//             ) : (
//               <div className="modal-placeholder">
//                 <div className="modal-placeholder-icon">🏆</div>
//                 <div style={{fontWeight:700, fontSize:15, color:'var(--text-muted)'}}>Certificate Preview</div>
//                 <p>Replace <code style={{color:'var(--accent)', fontSize:11}}>image: null</code> in <code style={{color:'var(--accent)', fontSize:11}}>src/data/portfolio.js</code></p>
//                 <p style={{marginTop:6}}>with the path to your certificate image.</p>
//                 <p style={{marginTop:12, fontSize:11, color:'var(--text-dim)'}}>e.g. <code style={{color:'var(--text-muted)'}}>{`image: "/certs/cert${cert.id}.jpg"`}</code></p>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="modal-footer">
//           <div className="modal-issuer">🎓 {cert.issuer}</div>
//           <div className="modal-issued">📅 {cert.date}</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function Certificates() {
//   const ref = useRef(null)
//   const [active, setActive] = useState(null)

//   useEffect(() => {
//     const obs = new IntersectionObserver(entries => {
//       entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
//     }, { threshold: 0.05 })
//     ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
//     return () => obs.disconnect()
//   }, [])

//   const selected = CERTIFICATES.find(c => c.id === active)

//   return (
//     <section id="certificates" ref={ref}>
//       <div className="section-label">Certificates</div>
//       <div className="reveal">
//         <h2 className="section-title">Credentials &amp; <span className="serif">achievements</span></h2>
//         <p style={{fontSize:14, color:'var(--text-muted)', marginTop:12, maxWidth:480}}>
//           Certifications and achievements I've earned. Add your own in <code style={{color:'var(--accent)', fontSize:12}}>src/data/portfolio.js</code>.
//         </p>
//       </div>
//       <div className="certs-grid">
//         {CERTIFICATES.map((c, i) => (
//           <div className="cert-card reveal" key={c.id} style={{transitionDelay: `${i * 0.07}s`}}>
//             <div className="cert-thumb">
//               {c.image
//                 ? <img src={c.image} alt={c.title} />
//                 : (
//                   <div className="cert-thumb-placeholder">
//                     <div className="cert-award-icon">🏆</div>
//                     <div style={{fontSize:10, fontFamily:'var(--font-mono)', color:'var(--text-dim)'}}>
//                       // certificate image
//                     </div>
//                   </div>
//                 )
//               }
//             </div>
//             <div className="cert-issuer">{c.issuer}</div>
//             <div className="cert-title">{c.title}</div>
//             <div className="cert-date">📅 {c.date}</div>
//             <button className="cert-btn" onClick={() => setActive(c.id)}>
//               <span>🔍</span>
//               <span>Verify Certificate</span>
//             </button>
//           </div>
//         ))}
//       </div>
//       {selected && <CertModal cert={selected} onClose={() => setActive(null)} />}
//     </section>
//   )
// }


import { useEffect, useRef, useState } from 'react'
import { CERTIFICATES } from '../data/portfolio'
import { FaTrophy, FaGraduationCap, FaCalendarAlt, FaSearch, FaTimes, FaAward } from 'react-icons/fa'

function CertModal({ cert, onClose }) {
  const [closing, setClosing] = useState(false)

  const close = () => {
    setClosing(true)
    setTimeout(onClose, 180)
  }

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className={`modal-overlay${closing ? ' closing' : ''}`} onClick={e => { if (e.target === e.currentTarget) close() }}>
      <div className="modal-box">
        <div className="modal-header">
          <div>
            <div className="modal-title">{cert.title}</div>
            <div className="modal-meta" style={{marginTop:4}}>Issued by {cert.issuer}</div>
          </div>
          <button className="modal-close" onClick={close} aria-label="Close"><FaTimes /></button>
        </div>
        <div className="modal-body">
          <div className="modal-cert-img">
            {cert.image ? (
              <img src={cert.image} alt={cert.title} />
            ) : (
              <div className="modal-placeholder">
                <div className="modal-placeholder-icon"><FaTrophy size={40} /></div>
                <div style={{fontWeight:700, fontSize:15, color:'var(--text-muted)'}}>Certificate Preview</div>
                <p>Replace <code style={{color:'var(--accent)', fontSize:11}}>image: null</code> in <code style={{color:'var(--accent)', fontSize:11}}>src/data/portfolio.js</code></p>
                <p style={{marginTop:6}}>with the path to your certificate image.</p>
                <p style={{marginTop:12, fontSize:11, color:'var(--text-dim)'}}>e.g. <code style={{color:'var(--text-muted)'}}>{`image: "/certs/cert${cert.id}.jpg"`}</code></p>
              </div>
            )}
          </div>
        </div>
        <div className="modal-footer">
          <div className="modal-issuer"><FaGraduationCap style={{marginRight: 6}} /> {cert.issuer}</div>
          <div className="modal-issued"><FaCalendarAlt style={{marginRight: 6}} /> {cert.date}</div>
        </div>
      </div>
    </div>
  )
}

export default function Certificates() {
  const ref = useRef(null)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const selected = CERTIFICATES.find(c => c.id === active)

  return (
    <section id="certificates" ref={ref}>
      <div className="section-label">Certificates</div>
      <div className="reveal">
        <h2 className="section-title">Credentials &amp; <span className="serif">achievements</span></h2>
        <p style={{fontSize:14, color:'var(--text-muted)', marginTop:12, maxWidth:480}}>
          Certifications and achievements I've earned.
        </p>
      </div>
      <div className="certs-grid">
        {CERTIFICATES.map((c, i) => (
          <div className="cert-card reveal" key={c.id} style={{transitionDelay: `${i * 0.07}s`}}>
            <div className="cert-thumb">
              {c.image
                ? <img src={c.image} alt={c.title} />
                : (
                  <div className="cert-thumb-placeholder">
                    <div className="cert-award-icon"><FaAward size={32} /></div>
                    <div style={{fontSize:10, fontFamily:'var(--font-mono)', color:'var(--text-dim)'}}>
                      // certificate image
                    </div>
                  </div>
                )
              }
            </div>
            <div className="cert-issuer">{c.issuer}</div>
            <div className="cert-title">{c.title}</div>
            <div className="cert-date"><FaCalendarAlt style={{marginRight: 4}} /> {c.date}</div>
            <button className="cert-btn" onClick={() => setActive(c.id)}>
              <span><FaSearch /></span>
              <span>Verify Certificate</span>
            </button>
          </div>
        ))}
      </div>
      {selected && <CertModal cert={selected} onClose={() => setActive(null)} />}
    </section>
  )
}