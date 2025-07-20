import './Services.css';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <header className="header">
        <div className="logo"><a href="./.">SKILLIFY</a></div>
        <nav className="nav-links">
          <a href="./.">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/services">SERVICES</a>
          <a href="/blog">BLOG</a>
        </nav>
      </header>

      <main className="services-main">
        <h1 className="services-title">WHAT WE OFFER</h1>
        <div className="services-grid">

          <div className="service-card">
            <Image src="/4341139.png" alt="Math Quiz" className="service-image" />
            <h2>🧠 Maths Quizzes</h2>
            <p>Challenge yourself with engaging and interactive math questions — from basics to brain-twisters.</p>
          </div>

          <div className="service-card">
            <Image src="/3135715.png" alt="Aptitude" className="service-image" />
            <h2>🧩 Aptitude Practice</h2>
            <p>Sharpen your logical reasoning and aptitude skills with tricky and insightful puzzles.</p>
          </div>

          <div className="service-card">
            <Image src="/2721296.png" alt="Programming" className="service-image" />
            <h2>💻 Programming Languages</h2>
            <p>Explore syntax and examples for Python, C++, JavaScript, and more — all in one place.</p>
          </div>

          <div className="service-card">
            <Image src="/1087815.png" alt="CP" className="service-image" />
            <h2>⚔️ Competitive Programming</h2>
            <p>Solve curated CP problems from platforms like Codeforces, filtered by topic and rating.</p>
          </div>

          <div className="service-card">
            <Image src="/3131986.png" alt="Challenges" className="service-image" />
            <h2>📅 Daily Challenges</h2>
            <p>Stay sharp with daily challenges designed to test your thinking and problem-solving consistency.</p>
          </div>

          <div className="service-card">
            <Image src="/4359967.png" alt="Tracking" className="service-image" />
            <h2>📈 Progress Tracking</h2>
            <p>Coming Soon: Keep tabs on your learning streaks, strong topics, and areas to improve.</p>
          </div>

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