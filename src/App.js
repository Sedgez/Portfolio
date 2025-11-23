import React from 'react';

export default function App() {
  const projects = [
    {
      id: 1,
      title: 'Otaku-Mart',
      desc: 'A group project to create a Ecommerce website selling different japanese animation related products.',
      link: 'https://github.com/andrewdejito/otakumart-ecommerce',
      tags: ['React', 'Bootstrap', 'HTML', 'PHP']
    },
    {
      id: 2,
      title: 'Library Management System',
      desc: 'A group project to create a simple Library Management System.',
      link: 'https://github.com/ztifff/Simple-Library-Management-System',
      tags: ['React', 'HTML', 'CSS', 'PHP']
    },
    {
      id: 3,
      title: 'Nova-Learn',
      desc: 'A group project to create a Learner Management System. .',
      link: 'https://github.com/Sedgez/NovaLearn',
      tags: ['LMS', 'Java']
    }
  ];

  const skills = ['JavaScript', 'React', 'Bootstrap', 'CSS', 'Git', 'Java'];

  return (
    <div className="bg-light min-vh-100">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Sedgewick Howard Domingo</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container py-5">
        <marquee className="text-primary text-uppercase fw-bold small display-6">WELCOME</marquee>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-primary text-uppercase fw-bold small">Hello, I'm</p>
            <h1 className="fw-bold display-5">Sedgewick howard Domingo</h1>
            <p className="text-muted mt-3">
    Aspiring programmer/web developer studying at University of Cabuyao 3rd year
            </p>
            <div className="mt-4 d-flex gap-2">
              <a href="#projects" className="btn btn-primary">View Projects</a>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="container py-5">
        <h2 className="fw-bold">Projects</h2>
        <p className="text-muted">Some of my recent work:</p>

        <div className="row g-4 mt-3">
          {projects.map((p) => (
            <div className="col-md-6" key={p.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{p.title}</h5>
                  <p className="card-text text-muted small">{p.desc}</p>

                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-1 flex-wrap">
                      {p.tags.map((t, idx) => (
                        <span key={idx} className="badge bg-light text-secondary border">{t}</span>
                      ))}
                    </div>
                    <a href={p.link} className="small text-decoration-underline">View</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-5">
        <div className="row g-4">
          <div className="col-md-8">
            <div className="card p-4 shadow-sm">
              <h3 className="fw-semibold">About Me</h3>
              <p className="text-muted small mt-3">
                I'm currently studying at the University of Cabuyao 3rd Year on Bachelor of Science in Computer Science
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h5 className="fw-medium">Skills</h5>
              <div className="d-flex flex-wrap gap-2 mt-3">
                {skills.map((s, idx) => (
                  <span key={idx} className="badge bg-light text-secondary border">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-top py-3">
        <div className="container d-flex justify-content-between small text-muted">
          <span>© {new Date().getFullYear()} Doming, Sedgewick Howard</span>
          <div className="d-flex gap-3">
            <p>Contact me:</p>
            <a href="https://www.facebook.com/sedgewick.howard.domingo.2025" className="text-decoration-none">Facebook</a>
            <a href="https://github.com/Sedgez" className="text-decoration-none">GitHub</a>
            <a href="https://steamcommunity.com/id/Sedgez/" className="text-decoration-none">Steam</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
