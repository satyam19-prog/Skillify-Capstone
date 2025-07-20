import './AboutPage.css';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="login-page">
      <header className="header">
        <div className="logo"><a href="./.">SKILLIFY</a></div>
        <nav className="nav-links">
          <a href="./.">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/services">SERVICES</a>
          <a href="/blog">BLOG</a>
        </nav>
      </header>

      <main className="login-main">
        <h1 className="login-title">ABOUT SKILLIFY</h1>

        <div className="about-content">
          <section className="about-section">
            <h2 className="section-title">Our Mission</h2>
            <p>
              At Skillify, we believe that quality education should be accessible to everyone.
              Our platform is designed to make learning interactive, engaging, and most
              importantly, effective. We focus on practical skill development across multiple
              domains including programming, mathematics, language learning, and general knowledge.
            </p>
          </section>

          <section className="about-section">
            <h2 className="section-title">Our Approach</h2>
            <p>
              We take a multi-faceted approach to learning that combines theory with practice.
              Through our carefully curated content, interactive exercises, and community-driven
              resources, we ensure that learners not only understand concepts but can apply them
              in real-world scenarios.
            </p>
          </section>

          <section className="about-section">
            <h2 className="section-title">The Developer</h2>
            <p>
              Skillify was developed by <strong>Satyam Singh</strong>, a B.Tech CSE (AI) student at
              Newton School of Technology. The platform represents his vision for democratizing
              skill-based education and making quality learning resources available to everyone,
              regardless of their background or location.
            </p>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="social-icons">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/x.jpg" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.webp" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <Image src="/youtube.webp" alt="YouTube" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.webp" alt="LinkedIn" className="social-icon" />
          </a>
        </div>
        <p className="footer-text">© 2025 SKILLIFY. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}