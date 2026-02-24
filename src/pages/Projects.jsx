import './Projects.css'
import { useState } from 'react'

function AccordionItem({ title, subtitle, tags, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`project-card ${open ? 'open' : ''}`}>
      <button className="project-header" onClick={() => setOpen(!open)}>
        <div className="project-title-block">
          <h3>{title}</h3>
          {subtitle && <p className="project-subtitle">{subtitle}</p>}
          {tags && (
            <div className="tag-row">
              {tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="toggle-indicator">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="project-body">{children}</div>}
    </div>
  )
}

function Projects() {
  return (
    <div className="page projects">
      <section className="section">
        <h1>Featured Projects</h1>
        <p className="section-intro">
          Key projects that highlight process control, practical engineering,
          and forward‑thinking use of tools like AI.
        </p>

        {/* AI / Automation project – text collapsible, visuals minimal */}
        <AccordionItem
          title="AI‑Augmented Workflow Engineering & Automation Infrastructure"
          subtitle="Linux VM automation hub supporting real work"
          tags={["AI Integration", "Automation", "Linux", "Process Support"]}
        >
          <p>
            Built and operated an AI‑assisted workflow environment inside a
            Linux virtual machine (Ubuntu on VMware) to support actual projects
            rather than just demos.
          </p>
          <ul>
            <li>
              Generated portfolio content, scripts, and site structure from
              within the environment.
            </li>
            <li>
              Monitored job channels and drafted emails for potential clients,
              designed for click‑to‑send review.
            </li>
            <li>
              Designed the framework to scale with additional accounts, data
              sources, and dashboards over time.
            </li>
            <li>
              Gained experience with virtualization (VMware), Ubuntu, and
              terminal‑based workflows.
            </li>
          </ul>
        </AccordionItem>

        {/* Lean Six Sigma project */}
        <AccordionItem
          title="Lean Six Sigma Content Workflow Optimization"
          subtitle="2.5‑hour content process reduced to ~30 minutes"
          tags={["Lean Six Sigma", "Process Control", "Continuous Improvement"]}
        >
          <p>
            Applied Lean Six Sigma principles to my social media production
            workflow, treating it like a real process engineering problem.
          </p>
          <ul>
            <li>
              Broke the workflow into explicit steps and measured each run to
              create a time‑based data set.
            </li>
            <li>
              Built a simple control chart to track cycle times and variation
              over time.
            </li>
            <li>
              Iteratively redesigned the workflow, introducing new subsystems
              and tools to remove bottlenecks.
            </li>
            <li>
              Reduced overall cycle time from roughly 2.5 hours to about 30
              minutes (≈5× throughput).
            </li>
          </ul>
        </AccordionItem>

        {/* Pedalboard project – media always visible via YouTube embed, text collapsible */}
        <div className="project-card media-first">
          <div className="project-media">
            <h3 className="project-media-title">
              Hybrid Guitar Pedalboard & Next‑Gen Guitar Platform
            </h3>
            <p className="project-subtitle">
              Hybrid analog‑digital rig + product‑oriented prototype
            </p>
            <div className="tag-row">
              <span className="tag">Hardware/Software</span>
              <span className="tag">Audio</span>
              <span className="tag">Product Concept</span>
            </div>
            <div className="video-embed-wrapper">
              <iframe
                className="project-video"
                src="https://www.youtube.com/embed/whpucr4cBIE"
                title="Hybrid guitar pedalboard demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <AccordionItem title="Details" subtitle="" tags={[]}>
            <p>
              Designed and built a custom pedalboard from scratch that
              integrates analog pedals with digital control in a way that
              emulates multi‑thousand‑dollar rigs at a fraction of the price.
            </p>
            <ul>
              <li>
                Constructed the board and wired a hybrid analog‑digital signal
                chain.
              </li>
              <li>
                Programmed a pedal to send control signals to a DAW, linking
                physical pedals with computer‑based effects.
              </li>
              <li>
                Began prototyping a modular guitar platform using advanced
                pickups and guitar‑to‑MIDI to enable per‑string processing and
                software‑defined rigs.
              </li>
              <li>
                Exploring AI assistance for hardware design, firmware, and
                signal chain optimization.
              </li>
            </ul>
          </AccordionItem>
        </div>

        {/* Couch repair project */}
        <AccordionItem
          title="Electrical Repair & Reverse Engineering – High‑End Couch"
          subtitle="Restoring a nearly $3000 motorized couch for ~$20"
          tags={["Diagnostics", "Electrical Repair", "Cost Optimization"]}
        >
          <p>
            Treated a non‑working, high‑end motorized couch as a small
            reverse‑engineering project and restored it from “broken” to fully
            functional.
          </p>
          <ul>
            <li>
              Acquired the couch for free and inspected the electrical system.
            </li>
            <li>
              Used a multimeter to diagnose faulty connections and a failed
              transformer.
            </li>
            <li>Resoldered connections and replaced the transformer (~$20).</li>
            <li>
              Returned the system to full functionality, maximizing value from
              minimal spend.
            </li>
          </ul>
        </AccordionItem>
      </section>

      <section className="section">
        <h2>Additional Projects</h2>

        {/* Freshman challenge – image always visible, text collapsible */}
        <div className="project-card media-first">
          <div className="project-media">
            <h3 className="project-media-title">
              Freshman Engineering Truss Bridge Challenge
            </h3>
            <p className="project-subtitle">
              Fast design, full material utilization, and top performance
            </p>
            <div className="tag-row">
              <span className="tag">Structural Design</span>
              <span className="tag">Teamwork</span>
              <span className="tag">Rapid Prototyping</span>
            </div>
            <img
              src="/jpgeemusic-site/assets/freshman-challenge.jpg"
              alt="Freshman engineering truss bridge loaded with weights"
              className="project-image"
            />
          </div>
          <AccordionItem title="Details" subtitle="" tags={[]}>
            <p>
              In a 45‑minute freshman engineering challenge, my team built a
              bridge designed to carry weight using limited materials. While
              most teams built standard car‑style bridges, I proposed a truss
              design that used every piece of material we were given.
            </p>
            <ul>
              <li>
                Our truss significantly outperformed other designs; most
                competing bridges failed around 1–2 kg.
              </li>
              <li>
                The professor eventually ran out of weights and started
                stacking water bottles—the bridge still didn&apos;t fail.
              </li>
              <li>
                Demonstrated structural intuition, efficient material usage,
                and rapid team execution.
              </li>
            </ul>
          </AccordionItem>
        </div>
      </section>
    </div>
  )
}

export default Projects
