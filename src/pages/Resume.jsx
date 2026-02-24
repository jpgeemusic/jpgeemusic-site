import './Resume.css'

function Resume() {
  return (
    <div className="page resume">
      <section className="section">
        <h1>Resume</h1>
        <p>
          Download a concise overview of my engineering experience, skills, and
          projects.
        </p>
        <a
          href="/Josh_Gee_Resume_Spring_2_23_26.pdf"
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume (PDF)
        </a>
        <div className="resume-summary">
          <h2>Snapshot</h2>
          <ul>
            <li>Engineering student with focus on AI, automation, and systems.</li>
            <li>
              Hands‑on experience with process optimization, hardware/software
              integration, and data‑driven projects.
            </li>
            <li>
              Comfortable working across Linux, virtual machines, and
              instrumentation‑driven lab environments.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Resume
