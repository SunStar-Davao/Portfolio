import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={ref}>
      <div className="section-label">About Me</div>
      <div className="about-grid">
        <div className="reveal">
          <div className="about-photo">
            <div className="about-photo-inner">
             <img src="/images/Me.jpeg" alt="Your Name" style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:8}} />
            </div>
          </div>
        </div>
        <div className="reveal" style={{transitionDelay:'0.15s'}}>
          <h2 className="section-title">Building digital<br /><span className="serif">experiences</span></h2>
          <div className="about-text" style={{marginTop:28}}>
            <p>
              Hi, I'm <strong>Marc Angel Villarosa</strong> — an IT graduate and full-stack developer passionate about creating clean, performant, and user-centered digital products.
            </p>
            <p>
              I specialize in building modern web and mobile applications using <strong>React, Node.js, and scalable databases</strong>. I love turning complex problems into elegant solutions.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-num">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">13+</div>
              <div className="stat-label">Tech Stacks</div>
            </div>
            <div className="stat-box">
              <div className="stat-num">5+</div>
              <div className="stat-label">Certificates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
