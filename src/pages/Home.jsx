import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero-text">
          <h1>Engineering Work With Follow‑Through</h1>
          <p className="hero-sub">
            I&apos;m <span className="highlight">Josh Gee</span> – an engineer who learns fast, stays with a
            problem until it&apos;s solved, and builds processes that are stable,
            efficient, and easy to work with.
          </p>
          <p className="hero-body">
            My strength lies in my ability to learn and stay the course until
            completion. I work well with others, adapt quickly, and focus on
            process control, forward‑thinking use of AI, and practical systems
            that actually get used.
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
            src="/jpgeemusic-site/assets/headshot.jpg"
            alt="Professional headshot of Josh Gee"
            className="headshot-img"
          />
        </div>
      </section>

      <section className="section about">
        <h2>About</h2>
        <p>
          I&apos;m an engineering student with a strong bias toward action and
          follow‑through. I like taking messy, half‑defined problems and turning
          them into repeatable workflows—especially when there&apos;s a chance to
          tighten up process control or connect hardware and software in useful
          ways.
        </p>
        <p>
          Recently I&apos;ve been working with virtualized Linux environments and
          AI tools to support real projects, not just experiments. I&apos;m
          interested in roles where I can combine process control, forward‑looking
          AI integration, and solid engineering fundamentals.
        </p>
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
      </section>
    </div>
  )
}

export default Home
