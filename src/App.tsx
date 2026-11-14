import { useEffect } from "react";

const experiences = [
  {
    title: "IT Networking",
    text: "Infrastructure work across government NDA projects and financial institutions in the banking sector.",
  },
  {
    title: "Community",
    text: "Contributed at North Health Sciences and Community Living Greater Sudbury, including work as a culinary professional.",
  },
  {
    title: "Teaching",
    text: "Guiding movement and thought through yoga training and chess coaching.",
  },
  {
    title: "Entrepreneurship",
    text: "Founder and owner of Isth.in, building at the intersection of intuition, discipline and enterprise.",
  },
];

const disciplines = [
  "Kalaripayattu",
  "Kayaking",
  "Perfumery",
  "Culinary arts",
  "Astrology",
  "Chess",
  "Computer networking",
  "Sales",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Param Dave, back to top">
          PD
        </a>
        <nav aria-label="Primary navigation">
          <a href="#profile">Profile</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-red" data-reveal>
          <div className="hero-meta micro">
            <span>Ahmedabad, India</span>
          </div>
          <p className="hero-intro">
            A disciplined polymath moving between technology, enterprise, movement and the senses.
          </p>
          <figure className="hero-portrait frame">
            <img src="/image1.jpg" alt="Meditative athlete in a dark editorial portrait" />
            <figcaption>
              <strong>Param Rajesh Dave</strong>
              <span className="micro">Ahmedabad, India</span>
            </figcaption>
          </figure>
        </div>

        <div className="hero-sheet" data-reveal>
          <div className="hero-contact micro">
            <span>Based in Ahmedabad</span>
            <a href="mailto:Paramdaverajesh@gmail.com">Write to me</a>
            <a href="tel:+917859898490">Call me</a>
          </div>
          <p className="eyebrow">Portfolio of</p>
          <h1 id="hero-title">
            Param
            <br />
            Rajesh Dave
          </h1>
          <div className="hero-sheet-footer micro">
            <span>Mind</span>
            <span>Body</span>
            <span>Enterprise</span>
          </div>
        </div>

        <figure className="hero-wide frame" data-reveal>
          <img src="/image2.jpg" alt="Runners in motion photographed in black and white" />
        </figure>
        <p className="scroll-cue micro">Scroll to discover</p>
      </section>

      <section className="profile section-ivory" id="profile">
        <div className="section-label micro" data-reveal>
          <span>Profile</span>
        </div>
        <div className="profile-grid">
          <div className="profile-heading" data-reveal>
            <p className="eyebrow">A study in contrasts</p>
            <h2>
              Spirit.
              <br />
              Structure.
              <br />
              Momentum.
            </h2>
          </div>
          <div className="profile-copy" data-reveal>
            <p className="lead">
              Spiritual and ambitious, Param brings sportsmanship and discipline to every field he
              enters.
            </p>
            <p>
              His world spans martial arts, judo, yoga, perfumery, information technology and sales.
              Polymathic by nature, he connects seemingly distant disciplines through curiosity,
              practice and intent.
            </p>
          </div>
          <figure className="profile-image frame" data-reveal>
            <img
              src="/image5.jpg"
              alt="Athletic figure in an expressive monochrome portrait"
              loading="lazy"
            />
          </figure>
          <figure className="profile-detail frame" data-reveal>
            <img src="/image8.jpg" alt="Athlete balancing in a handstand" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-visual" data-reveal>
          <figure className="frame">
            <img
              src="/image3.jpg"
              alt="Network infrastructure in a dark server room"
              loading="lazy"
            />
          </figure>
          <p className="micro">Infrastructure, service, human connection</p>
        </div>
        <div className="experience-content">
          <div className="section-label micro" data-reveal>
            <span>Selected experience</span>
          </div>
          <h2 data-reveal>
            Work with
            <br />
            consequence.
          </h2>
          <div className="experience-list">
            {experiences.map((item) => (
              <article data-reveal key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education section-ivory">
        <div className="section-label micro" data-reveal>
          <span>Education</span>
        </div>
        <div className="education-title" data-reveal>
          <p className="eyebrow">Foundations and formation</p>
          <h2>
            Ahmedabad
            <br />
            to Ontario.
          </h2>
        </div>
        <div className="education-items">
          <article data-reveal>
            <span className="micro">School</span>
            <h3>St. Xavier's High School</h3>
            <p>Loyola Hall, Ahmedabad</p>
          </article>
          <article data-reveal>
            <span className="micro">Higher education</span>
            <h3>Computer Networking</h3>
            <p>Cambrian College, Sudbury, Northern Ontario</p>
          </article>
        </div>
      </section>

      <section className="disciplines">
        <div className="disciplines-copy">
          <div className="section-label micro" data-reveal>
            <span>Skills and disciplines</span>
          </div>
          <h2 data-reveal>
            Many practices.
            <br />
            One standard.
          </h2>
          <div className="discipline-list" data-reveal>
            {disciplines.map((discipline) => (
              <div key={discipline}>{discipline}</div>
            ))}
          </div>
        </div>
        <div className="disciplines-images">
          <figure className="frame" data-reveal>
            <img
              src="/image4.jpg"
              alt="Red and black perfume bottle in an editorial still life"
              loading="lazy"
            />
          </figure>
          <figure className="frame" data-reveal>
            <img
              src="/image7.jpg"
              alt="Perfume bottle photographed as an object study"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="passion section-ivory">
        <div className="passion-header">
          <div className="section-label micro" data-reveal>
            <span>Passion</span>
          </div>
          <h2 data-reveal>
            Motion is
            <br />a language.
          </h2>
          <p data-reveal>
            Running, workouts, adrenaline, hyperactive sports, yoga, trekking and marathons keep the
            body honest and the mind precise.
          </p>
        </div>
        <div className="passion-gallery">
          <figure className="frame image-tall" data-reveal>
            <img src="/image6.jpg" alt="Runner moving through an open landscape" loading="lazy" />
            <figcaption className="micro">Endurance</figcaption>
          </figure>
          <figure className="frame image-wide" data-reveal>
            <img src="/image9.jpg" alt="Yoga practice beside the water" loading="lazy" />
            <figcaption className="micro">Stillness</figcaption>
          </figure>
          <figure className="frame image-landscape" data-reveal>
            <img src="/image10.jpg" alt="Athlete leaping across an open field" loading="lazy" />
            <figcaption className="micro">Intensity</figcaption>
          </figure>
        </div>
      </section>

      <section className="credentials">
        <div className="section-label micro" data-reveal>
          <span>Credentials</span>
        </div>
        <div className="credentials-layout">
          <h2 data-reveal>
            Proof of
            <br />
            practice.
          </h2>
          <div className="credentials-list">
            <p data-reveal>Yoga International Certification</p>
            <p data-reveal>Marathon participation</p>
            <p data-reveal>State volleyball</p>
            <p data-reveal>Karate championship</p>
          </div>
        </div>
      </section>

      <section className="closing section-ivory" id="contact">
        <div className="section-label micro" data-reveal>
          <span>Contact</span>
        </div>
        <div className="closing-content">
          <p className="eyebrow" data-reveal>
            For conversations and collaborations
          </p>
          <h2 data-reveal>
            Let's build
            <br />
            with intent.
          </h2>
          <div className="contact-links" data-reveal>
            <a href="mailto:Paramdaverajesh@gmail.com">
              Write to Param <Arrow />
            </a>
            <a href="tel:+917859898490">
              Start a conversation <Arrow />
            </a>
            <a href="https://isth.in" target="_blank" rel="noreferrer">
              Visit Isth.in <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>Param Rajesh Dave</p>
        <p className="micro">Ahmedabad, India</p>
        <a className="micro" href="#top">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}
