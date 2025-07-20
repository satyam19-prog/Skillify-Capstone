'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('loggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    window.location.reload();
  };

  return (
    <div className="home-page">
      <header className="header">
        <div className="logo"><a href="./.">SKILLIFY</a></div>
        <nav className="nav-links">
          <a href="./.">HOME</a>
          {isLoggedIn && (
            <>
              <a href="/about">ABOUT</a>
              <a href="/services">SERVICES</a>
              <a href="/blog">BLOG</a>
              <button onClick={handleLogout} className="logout-button">LOGOUT</button>
            </>
          )}
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h2 className="subheading">YOUR SKILLS. YOUR JOURNEY.</h2>
          <h1 className="main-heading">SKILLIFY</h1>

          {isLoggedIn ? (
            <div className="services">
              <a href="/language" className="service-button">LANGUAGE</a>
              <a href="/cp" className="service-button">COMPETITIVE PROGRAMMING</a>
              <a href="/maths" className="service-button">MATHS</a>
              <a href="/trivia" className="service-button">TRIVIA</a>
            </div>
          ) : (
            <div className="auth-buttons">
              <div className="auth-button-container">
                <a
                  href="/login"
                  className="auth-button"
                  onClick={() => localStorage.setItem('loggedIn', 'true')}
                >
                  LOG IN
                </a>
                <p className="auth-subtext">ALREADY HAVE AN ACCOUNT?</p>
              </div>
              <div className="auth-button-container">
                <a
                  href="/signup"
                  className="auth-button"
                  onClick={() => localStorage.setItem('loggedIn', 'true')}
                >
                  SIGN UP
                </a>
                <p className="auth-subtext">CREATE YOUR ACCOUNT NOW!</p>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <div className="social-icons">
          <a href="https://twitter.com/"><Image src="/x.jpg" alt="X" className="social-icon" width={32} height={32} /></a>
          <a href="https://www.instagram.com"><Image src="/instagram.webp" alt="Instagram" className="social-icon" width={32} height={32} /></a>
          <a href="https://www.youtube.com"><Image src="/youtube.webp" alt="YouTube" className="social-icon" width={32} height={32} /></a>
          <a href="https://www.linkedin.com"><Image src="/linkedin.webp" alt="LinkedIn" className="social-icon" width={32} height={32} /></a>
        </div>
        <p className="footer-text">© 2025 SKILLIFY. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}