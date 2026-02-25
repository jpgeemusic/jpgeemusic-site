import './Academic.css'
import { useState } from 'react'

function AccordionItem({ title, subtitle, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`academic-card ${open ? 'open' : ''}`}>
      <button className="academic-header" onClick={() => setOpen(!open)}>
        <div>
          <h3>{title}</h3>
          {subtitle && <p className="academic-subtitle">{subtitle}</p>}
        </div>
        <span className="toggle-indicator">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="academic-body">{children}</div>}
    </div>
  )
}

function Academic() {
  return (
    <div className="page academic">
      <section className="section">
        <h1>Selected Academic Work</h1>
        <p className="section-intro">
          A sample of coursework and projects that demonstrate experimental
          skills, data analysis, and communication.
        </p>

        <AccordionItem
          title="Tensile Testing & Material Data Analysis"
          subtitle="Stress–strain characterization and reporting"
        >
          <p>
            Performed tensile tests in a lab setting, collected stress–strain
            data, and interpreted the results to characterize material
            behavior. Prepared written reports summarizing findings and
            implications for material selection.
          </p>
          <ul>
            <li>Set up and ran tensile tests according to lab procedures.</li>
            <li>
              Analyzed stress–strain curves to extract key properties and
              failure behavior.
            </li>
            <li>
              Communicated results clearly in technical report format.
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem
          title="LED Lighting ROI Study – Ohio University"
          subtitle="Energy efficiency, ROI modeling, and recommendations"
        >
          <p>
            As part of a graduate‑level technical elective, worked on a campus
            lighting analysis project focused on energy efficiency and cost
            savings.
          </p>
          <ul>
            <li>
              Analyzed existing campus lighting and energy consumption data.
            </li>
            <li>
              Compared LED vs fluorescent lighting systems, modeling power
              usage and cost differences.
            </li>
            <li>
              Performed ROI and payback period calculations for targeted
              upgrades.
            </li>
            <li>
              Identified high‑impact zones where LED conversion would have the
              greatest benefit.
            </li>
          </ul>
          <p className="note">
            Supporting material: “LED Lighting at Ohio University.pptx” (30‑minute
            presentation). Full presentation available here:{' '}
            <a
              href="https://catmailohio-my.sharepoint.com/:p:/g/personal/jg381322_ohio_edu/IQD83HjNSFhBRILXeioqu1I_ARFooKKp3Riu3ozazy33dA0?rtime=OejfLkRz3kg"
              target="_blank"
              rel="noreferrer"
            >
              View Presentation
            </a>
            .
          </p>
        </AccordionItem>

        <div className="academic-card media-first">
          <div className="academic-header static">
            <div>
              <h3>Freshman Engineering Truss Bridge Challenge</h3>
              <p className="academic-subtitle">
                Fast design, full material utilization, and top performance
              </p>
            </div>
          </div>
          <div className="academic-body">
            <img
              src="/jpgeemusic-site/freshman-challenge.jpg"
              alt="Freshman engineering truss bridge loaded with weights"
              className="academic-image"
            />
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Academic
