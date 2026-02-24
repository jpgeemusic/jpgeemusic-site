import './Home.css'

function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-text">
          <h1>Engineering Systems That Work Harder Than I Do</h1>
          <p className="hero-sub">
            I&apos;m <span className="highlight">Josh Gee</span> – an engineer focused on AI‑augmented workflows, process
            optimization, and practical hardware/software systems that deliver
            outsized results.
          </p>
          <p className="hero-body">
            I build systems that turn messy, real‑world problems into reliable
            processes: from AI‑driven automation infrastructure and production
            workflows to hybrid guitar rigs and hands‑on electrical repair.
          </p>
          <div className="hero-ctas">
            <a href="/projects" className="btn btn-primary">
              View Featured Projects
            </a>
            <a href="/resume" className="btn btn-secondary">
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="headshot-placeholder">Professional Headshot</div>
        </div>
      </section>

      <section className="section about">
        <h2>About</h2>
        <p>
          I&apos;m an engineering student with a strong bias toward action and
          systems thinking. Recently I&apos;ve been building AI‑augmented workflows
          inside a Linux virtual machine, using tools like OpenClaw to automate
          everything from portfolio generation to job monitoring and client
          communication.
        </p>
        <p>
          My background spans hands‑on hardware work (electrical repair, signal
          chains, custom guitar systems), process optimization using Lean Six
          Sigma principles, and data‑driven analysis for engineering and campus
          infrastructure projects.
        </p>
      </section>

      <section className="section skills">
        <h2>Core Skills</h2>
        <div className="skill-grid">
          <div className="skill-card">
            <h3>AI &amp; Automation</h3>
            <ul>
              <li>AI‑assisted workflows with tools like OpenClaw</li>
              <li>Automation for content, portfolios, and job monitoring</li>
              <li>Structured systems that scale with new tasks</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Process Improvement</h3>
            <ul>
              <li>Lean Six Sigma mindset and methods</li>
              <li>Control charts and process control</li>
              <li>Real‑world cycle time reduction</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Systems &amp; Integration</h3>
            <ul>
              <li>Hybrid analog‑digital audio systems</li>
              <li>Hardware/software integration and DAW control</li>
              <li>Linux, virtualization, and terminal workflows</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Hardware &amp; Data</h3>
            <ul>
              <li>Electrical diagnostics and repair</li>
              <li>Stress–strain and ROI analysis</li>
              <li>Clear technical communication</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section contact">
        <h2>Contact</h2>
        <p>
          I&apos;m exploring roles in engineering, automation, and systems‑oriented
          work. If you&apos;d like to talk about a role, project, or collaboration,
          feel free to reach out.
        </p>
        <p className="contact-email">
          Email: <span>you@example.com</span>
        </p>
      </section>
    </div>
  )
}

export default Home
