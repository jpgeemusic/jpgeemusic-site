import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-text">
          <h1>Engineering Work With Follow‑Through</h1>
          <p className="hero-sub">
            Mechanical engineering student passionate about process control and
            process efficiency, with a strong ability to quickly learn and apply
            complex technical concepts.
          </p>
          <p className="hero-body">
            I enjoy analyzing how systems behave and engineering practical,
            efficient solutions that improve performance.
          </p>
          <div className="hero-ctas">
            <Link to="/projects" className="btn btn-primary">
              View Featured Projects
            </Link>
            <Link to="/resume" className="btn btn-secondary">
              Download Resume
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/jpgeemusic-site/headshot.jpg"
            alt="Professional headshot of Josh Gee"
            className="headshot-img"
          />
        </div>
      </section>

      <section className="section skills">
        <h2>Core Skills</h2>
        <div className="skill-grid">
          <div className="skill-card">
            <h3>Process Control &amp; Improvement</h3>
            <ul>
              <li>Applying Lean Six Sigma concepts in real workflows</li>
              <li>Control charts and cycle‑time tracking</li>
              <li>Iterative, data‑driven improvement</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Forward‑Thinking AI Use</h3>
            <ul>
              <li>Using AI tools to support and extend engineering work</li>
              <li>Automating repeatable tasks and content workflows</li>
              <li>Keeping humans in the loop for key decisions</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Systems &amp; Integration</h3>
            <ul>
              <li>Hybrid analog‑digital audio systems and control</li>
              <li>Hardware/software integration with DAWs and tools</li>
              <li>Linux, virtualization, and terminal workflows</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Hands‑On Engineering</h3>
            <ul>
              <li>Electrical diagnostics, soldering, and repair</li>
              <li>Stress–strain and ROI analysis</li>
              <li>Collaborative, adaptable project work</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section skills">
        <h2>Technical Skills</h2>
        <div className="skill-grid">
          <div className="skill-card">
            <h3>Design &amp; CAD</h3>
            <ul>
              <li>SolidWorks 3D</li>
              <li>AutoCAD</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Engineering Tools</h3>
            <ul>
              <li>Matlab</li>
              <li>Minitab</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Programming</h3>
            <ul>
              <li>Java</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Audio &amp; Media</h3>
            <ul>
              <li>Ableton Live</li>
              <li>Premiere Pro</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section contact">
        <h2>Contact</h2>
        <p>
          I&apos;m exploring roles in engineering and process‑oriented work where I
          can contribute as a fast learner and reliable collaborator. If you&apos;d
          like to talk about a role, project, or collaboration, feel free to
          reach out.
        </p>
        <p className="contact-email">
          Email: <span>joshgee103@gmail.com</span>
        </p>
        <p className="contact-email">
          Text: <span>440-420-6779</span>
        </p>
      </section>
    </div>
  )
}

export default Home
