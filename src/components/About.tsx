export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="reveal-left">
          <div className="section-tag">01 — about</div>
          <h2 className="section-title">A developer who<br />ships what matters.</h2>
        </div>

        <div className="reveal-right">
          <div className="about-text">
            <p>
              I&apos;m a B.Tech CSE student who enjoys designing attractive and intuitive frontends and connecting them with robust backend systems.
              I have hands-on experience building full-stack projects using <strong>React.js</strong> and <strong>Spring Boot</strong>, including API development, server-side logic, and database integration.
            </p>
            <p>
              Alongside web development, I have a growing interest in <strong>Cyber Security</strong> and <strong>Ethical Hacking</strong>.
              I&apos;ve explored Linux fundamentals and security tools such as Nmap, Zenmap, Burp Suite, and Metasploitable to better understand how secure systems are built and tested.
            </p>
          </div>
          <div className="about-meta">
            <div className="meta-row"><div className="meta-dot"></div>Surat, India</div>
            <div className="meta-row"><div className="meta-dot"></div>B.Tech CSE</div>
            <div className="meta-row"><div className="meta-dot"></div>Open to full-time roles</div>
          </div>
          <div className="tech-tags" style={{ marginTop: "24px" }}>
            <span className="tech-tag">React.js</span>
            <span className="tech-tag">Spring Boot</span>
            <span className="tech-tag">Linux</span>
            <span className="tech-tag">Cyber Security</span>
            <span className="tech-tag">MySQL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
