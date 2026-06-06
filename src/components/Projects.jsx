import { useEffect, useRef } from 'react'
import { PROJECTS } from '../data/portfolio'

export default function Projects() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref}>
      <div className="section-label">Projects</div>
      <div className="reveal">
        <h2 className="section-title">Selected <span className="serif">work</span></h2>
        <p style={{fontSize:14, color:'var(--text-muted)', marginTop:12, maxWidth:480}}>
          A collection of projects I've built.
        </p>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div className="project-card reveal" key={p.id} style={{transitionDelay: `${i * 0.08}s`}}>
            {p.placeholder && <div className="placeholder-badge">PLACEHOLDER</div>}
            <div className="project-thumb">
              <div className="project-thumb-inner">
                <div className="project-thumb-icon">{p.icon}</div>
                <div style={{fontSize:10, fontFamily:'var(--font-mono)', color:'var(--text-dim)'}}>
                  <img src={p.image} alt={p.title} style={{objectFit: 'cover', width: '100%', height: '100%'}} />
                </div>
              </div>
            </div>
            <div className="project-num">/{String(p.id).padStart(2,'0')}</div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
            <div className="project-footer">
              <div className="project-links">
                <a className="proj-link" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="proj-link" href={p.live} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
              <div className="project-arrow">↗</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
