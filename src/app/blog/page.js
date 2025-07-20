import './Blog.css';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="blog-page">
      <header className="header">
        <div className="logo"><a href="./.">SKILLIFY</a></div>
        <nav className="nav-links">
          <a href="./.">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/services">SERVICES</a>
          <a href="/blog">BLOG</a>
        </nav>
      </header>

      <main className="blog-main">
        <h1 className="blog-title">LATEST FROM OUR BLOG</h1>

        <div className="blog-grid">

          <div className="blog-card">
            <h2>Mastering Greedy Algorithms</h2>
            <p>Explore how greedy techniques can simplify complex problems and when it's the best choice for optimization.</p>
            <a href="https://codeforces.com/blog/entry/60612" className="read-more">Read more →</a>
          </div>

          <div className="blog-card">
            <h2>Crack Aptitude Like a Pro</h2>
            <p>Learn quick tricks and strategies to solve aptitude problems under 30 seconds.</p>
            <a href="https://codeforces.com/blog/entry/118882" className="read-more">Read more →</a>
          </div>

          <div className="blog-card">
            <h2>Understanding Recursion in Depth</h2>
            <p>From stack memory to recursive tree visualization — this post breaks down recursion like never before.</p>
            <a href="https://codeforces.com/blog/entry/64844" className="read-more">Read more →</a>
          </div>

          <div className="blog-card">
            <h2>5 Common Mistakes in Competitive Programming</h2>
            <p>Off-by-one errors, TLEs, overflows... and how to fix them with ease.</p>
            <a href="https://codeforces.com/blog/entry/111217" className="read-more">Read more →</a>
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