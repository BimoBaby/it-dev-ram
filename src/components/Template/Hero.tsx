import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <p className="hero-kicker">Software &amp; Engineering</p>
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>
          {/* <p className="hero-tagline">
            I&apos;m a {profile.role}
            <a href="https://openai.com" className="hero-highlight">
              {profile.employer}
            </a>
            , working on{' '}
            <a href="https://promptfoo.dev" className="hero-highlight">
              Promptfoo
            </a>{' '}
            and{' '}
            <a
              href="https://openai.com/index/codex-security-now-in-research-preview/"
              className="hero-highlight"
            >
              Codex Security
            </a>
            .
          </p> */}

          <p className="hero-summary">
          I’m a software engineer with 3+ years of experience delivering
                high-quality software solutions that drive real business
                results. I specialize in React, Next.js, and Vue.js, building
                scalable applications from polished user interfaces to complex
                enterprise systems with a strong focus on performance,
                maintainability, and user experience.
          </p>

          <div className="hero-cta">
            <Link href="/about" className="button">
              About me <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/resume" className="hero-resume-link">
              View resume
            </Link>
          </div>
        </div>

        <figure className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
          <figcaption>{profile.currentCity}</figcaption>
        </figure>
      </div>
    </section>
  );
}
