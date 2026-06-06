export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg" />
      <div className="reveal visible">
        <h1 className="hero-title">
          <span className="serif">Marc Angel</span><br/>
          Villarosa
        </h1>
        <div className="hero-sub">
          <p className="hero-desc">
            Information Technology graduate & full-stack developer. I build fast, scalable web and mobile applications with modern tooling.
          </p>
          <div className="hero-status">
            <p><span className="dot" />Available for opportunities</p>
            <p style={{marginTop: 6, fontSize: 11}}>Based in Philippines 🇵🇭</p>
          </div>
        </div>
      </div>
    </section>
  )
}
