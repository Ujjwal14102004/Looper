import React from "react";
import { Link } from "react-router-dom";
import "./../styles/global.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            The Future of <span className="highlight">Music Creation</span> is
            Here 🎶
          </h1>
          <p>
            Looper empowers creators to design, mix, and share beats like never
            before — all from your browser. No installs. No limits. Just pure
            creativity.
          </p>
          <div className="hero-buttons">
            <Link to="/dashboard" className="btn-primary">
              Launch Looper
            </Link>
            <a href="#features" className="btn-secondary">
              Explore Features
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://cdn.dribbble.com/users/730703/screenshots/15533719/media/59e702b89d80d2c7e59cbd5c389d46b0.png"
            alt="Looper UI Preview"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>🎵 What is Looper?</h2>
        <p>
          Looper is an online platform built for modern music creators. Whether
          you’re producing beats, experimenting with sound, or jamming with
          friends — Looper gives you the tools to create effortlessly. Designed
          with simplicity, speed, and community in mind.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="features">
        <h2>🚀 Powerful Features for Every Creator</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🎛 Live Loop Editor</h3>
            <p>
              Craft loops in real-time with our intuitive sound grid — drag,
              drop, and hear it come alive instantly.
            </p>
          </div>
          <div className="feature-card">
            <h3>🤝 Real-Time Collaboration</h3>
            <p>
              Invite your friends or team members to create together. No sync
              delays. Just seamless creativity.
            </p>
          </div>
          <div className="feature-card">
            <h3>🎚 Smart Mixing Tools</h3>
            <p>
              Auto-adjust levels, balance EQs, and get professional sound output
              without extra plugins.
            </p>
          </div>
          <div className="feature-card">
            <h3>☁️ Cloud Storage</h3>
            <p>
              Your loops and tracks are saved automatically and securely in the
              cloud — never lose your progress.
            </p>
          </div>
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section className="preview">
        <h2>🎧 Experience the Sound of Looper</h2>
        <p>
          Here’s a glimpse of what creators are building using Looper. Every
          beat, every loop — unique and made with passion.
        </p>
        <div className="preview-grid">
          <img
            src="https://cdn.dribbble.com/users/2414988/screenshots/15692891/media/abf4a48d4cfa4a3dbb6cbd908ec0e498.png"
            alt="Beat 1"
          />
          <img
            src="https://cdn.dribbble.com/users/218526/screenshots/16087483/media/fc0da4e7a2d47a37e1952d547a00f24a.png"
            alt="Beat 2"
          />
          <img
            src="https://cdn.dribbble.com/users/5489/screenshots/16839132/media/4b50f27c6b2e4b68be2e25a637b01ed0.png"
            alt="Beat 3"
          />
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">
        <h2>💬 What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              “Looper completely changed my workflow. It’s fast, minimal, and
              makes collaboration so easy!”
            </p>
            <span>- Rhea Sharma, Producer</span>
          </div>
          <div className="testimonial-card">
            <p>
              “I made my first track on Looper in under 10 minutes — no setup,
              no confusion. Just fun.”
            </p>
            <span>- Dev Patel, Sound Designer</span>
          </div>
          <div className="testimonial-card">
            <p>
              “It feels like Figma, but for music. A clean and powerful tool for
              modern creators.”
            </p>
            <span>- Akira Tanaka, DJ</span>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq">
        <h2>❓ Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>Do I need to install anything?</h4>
          <p>Nope! Looper runs 100% in your browser. Just open and start creating.</p>
        </div>
        <div className="faq-item">
          <h4>Is Looper free?</h4>
          <p>
            Yes, Looper is free to start. Premium features will be added soon
            for professional creators.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I share my loops?</h4>
          <p>
            Absolutely. You can share loops privately or post them publicly for
            others to remix.
          </p>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <h2>Start Creating Beats with Looper Today 🔥</h2>
        <p>Join a growing community of 10,000+ creators around the world.</p>
        <Link to="/dashboard" className="btn-primary">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
