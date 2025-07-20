"use client";
import Image from 'next/image';

import './SignUp.css';

export default function SignUpPage() {
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
        <h1 className="login-title">CREATE YOUR ACCOUNT</h1>
        <form className="login-form">
          <input type="text" placeholder="FULL NAME" required />
          <input type="email" placeholder="EMAIL" required />
          <input type="password" placeholder="PASSWORD" required />
          <input type="password" placeholder="CONFIRM PASSWORD" required />
          <button
            type="button"
            className="login-btn"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            SIGN UP
          </button>

        </form>

        <div className="login-divider">
          <hr /><span>OR</span><hr />
        </div>

        <div className="google-login">
          <a href="https://google.com/">
            <Image src="/google.webp" alt="Google" />
          </a>
        </div>

        <p className="login-note">
          ALREADY HAVE AN ACCOUNT? <a href="/login">LOG IN</a>
        </p>
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