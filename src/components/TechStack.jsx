// import { useEffect, useRef } from 'react'
// import { TECH_STACKS } from '../data/portfolio'

// export default function TechStack() {
//   const ref = useRef(null)
//   useEffect(() => {
//     const obs = new IntersectionObserver(entries => {
//       entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
//     }, { threshold: 0.05 })
//     ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
//     return () => obs.disconnect()
//   }, [])

//   return (
//     <section id="stack" ref={ref}>
//       <div className="section-label">Tech Stack</div>
//       <div className="reveal">
//         <h2 className="section-title">Tools I <span className="serif">work with</span></h2>
//         <p style={{fontSize:14, color:'var(--text-muted)', marginTop:12, maxWidth:480}}>
//           Technologies I use to design, build, and ship full-stack applications.
//         </p>
//       </div>
//       <div className="tech-grid reveal" style={{transitionDelay:'0.1s'}}>
//         {TECH_STACKS.map((t, i) => (
//           <div className="tech-card" key={t.name} style={{transitionDelay: `${i * 0.03}s`}}>
//             <div className="tech-icon">{t.icon}</div>
//             <div className="tech-name">{t.name}</div>
//             <div className="tech-cat">{t.cat}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }


import { useEffect, useRef } from 'react'
import { TECH_STACKS } from '../data/portfolio'
import * as SiIcons from 'react-icons/si'

// Helper component to render the correct icon
const TechIcon = ({ iconName, size = 48 }) => {
  const IconComponent = SiIcons[iconName]
  if (!IconComponent) {
    console.warn(`Icon ${iconName} not found`)
    return <span>🔧</span>
  }
  return <IconComponent size={size} />
}

export default function TechStack() {
  const ref = useRef(null)
  
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { 
        if (e.isIntersecting) e.target.classList.add('visible') 
      })
    }, { threshold: 0.05 })
    
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="stack" ref={ref}>
      <div className="section-label">Tech Stack</div>
      <div className="reveal">
        <h2 className="section-title">Tools I <span className="serif">work with</span></h2>
        <p style={{fontSize:14, color:'var(--text-muted)', marginTop:12, maxWidth:480}}>
          Technologies I use to design, build, and ship full-stack applications.
        </p>
      </div>
      <div className="tech-grid reveal" style={{transitionDelay:'0.1s'}}>
        {TECH_STACKS.map((t, i) => (
          <div className="tech-card" key={t.name} style={{transitionDelay: `${i * 0.03}s`}}>
            <div className="tech-icon">
              <TechIcon iconName={t.iconName} />
            </div>
            <div className="tech-name">{t.name}</div>
            <div className="tech-cat">{t.cat}</div>
          </div>
        ))}
      </div>
    </section>
  )
}