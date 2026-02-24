import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Academic from './pages/Academic'
import Resume from './pages/Resume'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="site-header">
          <div className="brand">Josh Gee</div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/academic">Academic Work</Link>
            <Link to="/resume">Resume</Link>
          </nav>
        </header>
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <p>
            © {new Date().getFullYear()} Josh Gee · Engineering Portfolio
          </p>
        </footer>
      </div>
    </Router>
  )
}

export default App
