import Image from 'next/image';
import { Navigation } from './components/Navigation';
import { ProjectShowcase, SectionHeading } from './components/ProjectShowcase';
import { Reveal } from './components/Reveal';
import { achievements, certifications, coursework, projects, skillGroups } from './data';

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="top">
        <section className="hero page-wrap" aria-labelledby="hero-title">
          <Reveal className="hero-content">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow"><span className="status-dot" /> Informatics Engineering · ITS · Indonesia</p>
                <h1 id="hero-title">Naruto<br />Sitanggang<span>.</span></h1>
                <p className="hero-role">Informatics Engineering student focused on Software Engineering and DevOps</p>
                <p className="hero-intro">I build full-stack applications, backend systems, and deployment workflows.</p>
              </div>
              <div className="hero-portrait"><Image src="/naruto-portrait.jpg" alt="Naruto wearing a blue Informatics jacket" fill sizes="(max-width: 760px) 150px, 260px" className="gallery-image" priority /></div>
              <div className="hero-actions"><a className="button button--primary" href="#projects">View projects <span aria-hidden="true">↓</span></a><a className="button button--text" href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div>
              <div className="hero-foot"><span><i className="status-dot" /> Open to internship opportunities</span><div className="social-links"><a className="social-link" href="https://github.com/narutostg" target="_blank" rel="noreferrer" aria-label="GitHub profile"><SocialIcon type="github" /><span>GitHub</span><b aria-hidden="true">↗</b></a><a className="social-link" href="https://www.linkedin.com/in/narutositanggang/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><SocialIcon type="linkedin" /><span>LinkedIn</span><b aria-hidden="true">↗</b></a></div></div>
            </div>
          </Reveal>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="page-wrap"><Reveal><SectionHeading headingId="about-title" eyebrow="01 / About" title="A little about me." /></Reveal>
            <div className="about-grid"><Reveal className="about-copy"><p>I’m an Informatics Engineering student at <strong>Institut Teknologi Sepuluh Nopember</strong> with hands-on experience in software development, backend systems, full-stack applications, databases, APIs, and deployment.</p><p>My primary interests are software engineering and the systems behind useful products. I also explore AI/data and cybersecurity.</p></Reveal>
              <Reveal className="about-facts" delay={100}><div><span>Education</span><strong>Bachelor of Informatics Engineering</strong></div><div><span>University</span><strong>Institut Teknologi Sepuluh Nopember</strong></div><div><span>GPA</span><strong>3.50 / 4.00</strong></div></Reveal>
            </div>
          </div>
        </section>

        <section className="section section--projects" id="projects" aria-labelledby="projects-title">
          <div className="page-wrap"><Reveal><SectionHeading headingId="projects-title" eyebrow="02 / Projects" title="Selected work." note="A few academic and applied projects I’ve worked on." /></Reveal>
            <div className="project-list">{projects.map((project, index) => <Reveal key={project.number} delay={index * 45}><ProjectShowcase project={project} /></Reveal>)}</div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="page-wrap"><Reveal><SectionHeading headingId="skills-title" eyebrow="03 / Skills" title="Tools I work with." /></Reveal>
            <div className="skills-grid">{skillGroups.map((group) => <Reveal className="skill-group" key={group.title}><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></Reveal>)}</div>
          </div>
        </section>

        <section className="section section--education" id="education" aria-labelledby="education-title">
          <div className="page-wrap"><Reveal><SectionHeading headingId="education-title" eyebrow="04 / Education" title="Learning at ITS." /></Reveal>
            <Reveal className="education-row"><span className="education-date mono">2023 — Present</span><div><h3>Institut Teknologi Sepuluh Nopember</h3><p>Bachelor of Informatics Engineering</p><p className="education-gpa">GPA <strong>3.50 / 4.00</strong></p></div></Reveal>
            <Reveal className="coursework"><span className="micro-label">Relevant coursework</span><p>{coursework.join(' · ')}</p></Reveal>
          </div>
        </section>

        <section className="section" id="achievements" aria-labelledby="achievements-title">
          <div className="page-wrap"><Reveal><SectionHeading headingId="achievements-title" eyebrow="05 / Achievements" title="Recognition." /></Reveal>
            <div className="achievement-list">{achievements.map((item) => <Reveal className="achievement-row" key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></Reveal>)}</div>
            <Reveal className="certifications"><span className="micro-label">Certifications</span><div>{certifications.map((cert) => <p key={cert.provider}><strong>{cert.provider}</strong><span>{cert.items.join(' · ')}</span></p>)}</div></Reveal>
          </div>
        </section>

        <section className="section section--contact" id="contact" aria-labelledby="contact-title">
          <div className="page-wrap"><Reveal><p className="eyebrow">06 / Contact</p><div className="contact-layout"><h2 id="contact-title">Let’s build<br />something useful.</h2><div><p>I’m open to internship opportunities in software engineering, backend development, and related technical roles.</p><a className="button button--primary email-button" href="https://mail.google.com/mail/?view=cm&fs=1&to=narutositanggang%40gmail.com" target="_blank" rel="noreferrer"><SocialIcon type="email" /> <span>Email me</span><b aria-hidden="true">↗</b></a></div></div><div className="contact-links"><a className="social-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=narutositanggang%40gmail.com" target="_blank" rel="noreferrer"><SocialIcon type="email" /><span>narutositanggang@gmail.com</span></a><a className="social-link" href="https://github.com/narutostg" target="_blank" rel="noreferrer"><SocialIcon type="github" /><span>GitHub</span><b aria-hidden="true">↗</b></a><a className="social-link" href="https://www.linkedin.com/in/narutositanggang/" target="_blank" rel="noreferrer"><SocialIcon type="linkedin" /><span>LinkedIn</span><b aria-hidden="true">↗</b></a></div></Reveal></div>
        </section>
      </main>
      <footer className="site-footer"><div className="page-wrap"><span>© 2026 Naruto Sitanggang</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}

function SocialIcon({ type }: { type: 'github' | 'linkedin' | 'email' }) {
  if (type === 'github') return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.74 2.83 4.35 2.83 2.64 0 4.76-1.09 1.09-4.76 1.09-1.09 2.9-4.76 3.76-4.76.08 0 .28.03.42.09v-1.83c0-.29.2-.63.76-.53A11.1 11.1 0 0 0 12 .9Z" /></svg>;
  if (type === 'linkedin') return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.85 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM7.93 18.74H4.96V9.18h2.97v9.56ZM6.45 7.88a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.3 10.86h-2.96v-4.65c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H9.5V9.18h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.57 1.97 3.57 4.54v5.26Z" /></svg>;
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
}
