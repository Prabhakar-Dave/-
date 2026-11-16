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

const imagePath = (filename: string) => `${import.meta.env.BASE_URL}${filename}`;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

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
          <a href="#journey">Journey</a>
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
        </div>

        <figure className="hero-portrait frame" data-reveal>
          <img
            src={imagePath("image1.jpg")}
            alt="Meditative athlete in a dark editorial portrait"
          />
          <figcaption>
            <strong>Param Rajesh Dave</strong>
            <span className="micro">Ahmedabad, India</span>
          </figcaption>
        </figure>

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
          <img
            src={imagePath("image2.jpg")}
            alt="Runners in motion photographed in black and white"
          />
        </figure>
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
              src={imagePath("image3.jpg")}
              alt="Athletic figure in an expressive monochrome portrait"
              loading="lazy"
            />
          </figure>
          <figure className="profile-detail frame" data-reveal>
            <img
              src={imagePath("image4.jpg")}
              alt="Athlete balancing in a handstand"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <div className="education-credentials">
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
      </div>

      <section className="experience" id="experience">
        <div className="experience-visual" data-reveal>
          <figure className="frame">
            <img
              src={imagePath("image5.jpg")}
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
              src={imagePath("image6.jpg")}
              alt="Red and black perfume bottle in an editorial still life"
              loading="lazy"
            />
          </figure>
          <figure className="frame" data-reveal>
            <img
              src={imagePath("image7.jpg")}
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
            <img
              src={imagePath("image8.jpg")}
              alt="Runner moving through an open landscape"
              loading="lazy"
            />
            <figcaption className="micro">Endurance</figcaption>
          </figure>
          <figure className="frame image-wide" data-reveal>
            <img
              src={imagePath("image9.jpg")}
              alt="Yoga practice beside the water"
              loading="lazy"
            />
            <figcaption className="micro">Stillness</figcaption>
          </figure>
          <figure className="frame image-landscape" data-reveal>
            <img
              src={imagePath("image10.jpg")}
              alt="Athlete leaping across an open field"
              loading="lazy"
            />
            <figcaption className="micro">Intensity</figcaption>
          </figure>
        </div>
      </section>

      <section className="travel" id="journey" aria-labelledby="travel-title">
        <div className="travel-heading">
          <div className="travel-heading-main">
            <div className="section-label micro" data-reveal>
              <span>Beyond borders</span>
            </div>
            <h2 id="travel-title" data-reveal>
              A wider world.
              <br />
              A longer chapter.
            </h2>
          </div>
          <p className="travel-intro" data-reveal>
            Singapore, Malaysia, Thailand and Dubai widened the map. Canada became the longest
            chapter—where I spent the most time studying and working.
          </p>
        </div>

        <div className="travel-layout">
          {/* Public-domain map: Wikimedia Commons, BlankMap-World.svg by Canuckguy et al. */}
          <figure className="travel-map" data-reveal>
            <svg
              viewBox="0 0 1000 508"
              role="img"
              aria-labelledby="travel-map-title travel-map-desc"
            >
              <title id="travel-map-title">A world of journeys from Ahmedabad</title>
              <desc id="travel-map-desc">
                Curved routes connect Ahmedabad with Canada, Dubai, Thailand, Malaysia and
                Singapore.
              </desc>
              <image href={imagePath("world-map.png")} height="508" width="1000" />
              <g className="travel-routes" fill="none">
                <path d="M 670 204 C 564 91, 414 93, 255 126" />
                <path d="M 670 204 C 637 155, 615 165, 607 194" />
                <path d="M 670 204 C 713 154, 750 183, 739 235" />
                <path d="M 670 204 C 724 175, 770 218, 746 260" />
                <path d="M 670 204 C 728 192, 772 233, 748 272" />
              </g>
              <g className="travel-map-pins" aria-hidden="true">
                <circle className="travel-pin" cx="255" cy="126" r="5" />
                <circle className="travel-pin" cx="607" cy="194" r="5" />
                <circle className="travel-pin" cx="739" cy="235" r="5" />
                <circle className="travel-pin" cx="746" cy="260" r="5" />
                <circle className="travel-pin" cx="748" cy="272" r="5" />
                <circle className="travel-origin-ring" cx="670" cy="204" r="10" />
                <circle className="travel-origin" cx="670" cy="204" r="4" />
              </g>
              <text className="travel-origin-label" x="684" y="211">
                AHMEDABAD
              </text>
            </svg>
            <figcaption className="travel-map-caption micro">
              <span>Lines from home</span>
              <span>Places that stayed with me</span>
            </figcaption>
          </figure>

          <aside className="travel-canada" data-reveal>
            <p className="eyebrow">The longest chapter</p>
            <h3>Canada.</h3>
            <p className="travel-canada-copy">
              Study. Work. More time here than anywhere else I explored.
            </p>
            <div className="travel-canada-footer micro">
              <span>Study</span>
              <span>Work</span>
              <span>Life abroad</span>
            </div>
          </aside>
        </div>

        <ul className="travel-destinations" aria-label="Places explored" data-reveal>
          {["Singapore", "Malaysia", "Thailand", "Dubai", "Canada"].map((place) => (
            <li className="travel-destination" key={place}>
              <span aria-hidden="true" />
              {place}
            </li>
          ))}
        </ul>
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
