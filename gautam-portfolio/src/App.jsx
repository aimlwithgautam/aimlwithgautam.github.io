
import profileImage from "./assets/profile.jpg";
import "./App.css";

import {
  Linkedin,
  Github,
  ExternalLink,
} from "lucide-react";

// ========================================
// SOCIAL MEDIA LINKS
// ========================================

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gautam-keshri-5a1b075b/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/aimlwithgautam",
    icon: Github,
  },
];

// ========================================
// TECHNICAL SKILLS
// ========================================

const skills = [
  "Python",
  "Machine Learning",
  "Generative AI",
  "LLMs",
  "RAG",
  "LangChain",
  "IBM Watsonx",
  "FastAPI",
  "Computer Vision",
  "Power BI",
];

// ========================================
// PROJECTS
// ========================================

const projects = [
  {
    number: "01",
    title: "AI Agents & Automation",
    category: "GENERATIVE AI",
    description:
      "Developing intelligent agents and agent workflows using Microsoft Copilot Studio and enterprise AI technologies.",
    technologies: ["AI Agents", "Copilot Studio", "LLMs"],
  },
  {
    number: "02",
    title: "Video Object Tracking",
    category: "COMPUTER VISION",
    description:
      "Applying Meta Segment Anything Model (SAM 3.1) for prompt-based object tracking in video.",
    technologies: ["Python", "SAM 3.1", "Computer Vision"],
  },
  {
    number: "03",
    title: "Media Normalization Pipeline",
    category: "AI ENGINEERING",
    description:
      "Building FFmpeg-based audio and video normalization workflows to standardize media assets.",
    technologies: ["Python", "FFmpeg", "Video Processing"],
  },
];

// ========================================
// SOCIAL LINKS COMPONENT
// ========================================

function SocialLinks({ footer = false }) {
  return (
    <div className={footer ? "footer-socials" : "social-links"}>
      {socialLinks.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${social.name} profile`}
            title={social.name}
          >
            <Icon size={footer ? 19 : 20} />

            {!footer && <span>{social.name}</span>}

            {!footer && <ExternalLink size={12} />}
          </a>
        );
      })}
    </div>
  );
}

// ========================================
// MAIN APP COMPONENT
// ========================================

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}

      <nav className="navbar">
        <a className="logo" href="#home">
          GK<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>

        <a className="contact-btn" href="#contact">
          Let's Talk ↗
        </a>
      </nav>

      <main>

        {/* HERO SECTION */}

        <section className="hero section" id="home">

          <div className="hero-content">

            <div className="availability">
              <span className="status-dot"></span>
              AI ENGINEER · DATA SCIENCE
            </div>

            <p className="eyebrow">
              HELLO, I'M GAUTAM KESHRI
            </p>

            <h1>
              Building the
              <br />
              <span>Intelligence</span>
              <br />
              of Tomorrow.
            </h1>

            <p className="hero-description">
              AI Engineer with hands-on experience designing and developing LLM-powered applications and enterprise AI
              proofs of concept, with a focus on Retrieval-Augmented Generation (RAG), Agentic RAG, multi-agent
              workflows, chatbots and document intelligence. Practical experience using Python, IBM watsonx, LangChain,
              LangGraph and AutoGen, alongside prompt engineering, LLM evaluation and monitoring. Delivered AI
              solutions for Japanese enterprise use cases spanning knowledge management, OCR-based document
              digitization, call-centre automation, multilingual customer support and AI governance. Experienced in
              integrating and deploying AI services on IBM Cloud, building API-based services with FastAPI, and
              containerizing applications with Docker/Podman. Currently developing AI agents and supporting agent design
              documentation using Microsoft Copilot Studio. Bilingual English–Japanese technical communication
              experience, including POC documentation and meeting interpretation.
            </p>

            <div className="hero-actions">

              <a className="primary-btn" href="#projects">
                Explore My Work ↗
              </a>

              <a className="secondary-btn" href="#contact">
                Get In Touch
              </a>

            </div>

            {/* LINKEDIN AND GITHUB */}

            <SocialLinks />

            <div className="hero-meta">
              <span>BASED IN JAPAN 🇯🇵</span>
              <span>AI · ML · GENERATIVE AI</span>
            </div>

          </div>

          {/* PROFESSIONAL PHOTOGRAPH */}


          <div className="hero-visual">

            <div className="profile-glow"></div>

            <div className="profile-frame">
              <img
                src={profileImage}
                alt="Gautam Keshri - AI Engineer"
                className="profile-image"
              />
            </div>

          </div>


        </section>

        {/* ABOUT ME */}

        <section className="section about" id="about">

          <p className="eyebrow">
            01 / ABOUT ME
          </p>

          <h2>
            Engineering ideas into <span>intelligence.</span>
          </h2>

          <p className="section-description">
            I am an AI and Data Science professional with
            experience developing enterprise AI solutions,
            intelligent agents, machine learning applications
            and automation workflows.

            My interests include Generative AI, LLM applications,
            Retrieval-Augmented Generation (RAG), computer vision
            and applied research.
          </p>

        </section>

        {/* EXPERIENCE */}

        <section className="section" id="experience">

          <p className="eyebrow">
            02 / EXPERIENCE
          </p>

          <h2>
            My professional <span>journey.</span>
          </h2>

          <div className="experience-card">

            <div>
              <p className="card-label">
                CURRENT / RECENT EXPERIENCE
              </p>

              <h3>Application Engineer</h3>

              <p className="company">
                Kacoms Co. Ltd. · Japan
              </p>
            </div>

            <p className="experience-description">
              Developing AI agents using Microsoft Copilot Studio,
              working on FFmpeg-based media normalization,
              applying Meta SAM 3.1 for video object tracking,
              and performing Python-based data analysis.
            </p>

          </div>

          <div className="experience-card">

            <div>
              <p className="card-label">
                ENTERPRISE AI EXPERIENCE
              </p>

              <h3>AI Engineer</h3>

              <p className="company">
                IBM Watsonx Projects
              </p>
            </div>

            <p className="experience-description">
              Experience delivering enterprise AI proof-of-concepts
              using foundation models and LLM technologies,
              including OCR-based document digitization,
              Retrieval-Augmented Generation (RAG),
              chatbot solutions and AI automation.
            </p>

          </div>

        </section>

        {/* TECHNICAL SKILLS */}

        <section className="section" id="skills">

          <p className="eyebrow">
            03 / TECHNICAL EXPERTISE
          </p>

          <h2>
            Technologies I <span>work with.</span>
          </h2>

          <div className="skills-grid">

            {skills.map((skill) => (
              <div className="skill-item" key={skill}>

                <span className="skill-dot"></span>

                {skill}

              </div>
            ))}

          </div>

        </section>

        {/* PROJECTS */}

        <section className="section" id="projects">

          <p className="eyebrow">
            04 / SELECTED WORK
          </p>

          <h2>
            Projects & <span>experimentation.</span>
          </h2>

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.number}
              >

                <div className="project-top">

                  <span>{project.category}</span>

                  <span>{project.number}</span>

                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-tags">

                  {project.technologies.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* EDUCATION */}

        <section className="section education" id="education">

          <p className="eyebrow">
            05 / EDUCATION
          </p>

          <h2>
            Academic <span>background.</span>
          </h2>

          <div className="education-card">

            <h3>
              Master of Science – Data Science
            </h3>

            <p>
              Liverpool John Moores University
            </p>

          </div>

        </section>

        {/* CONTACT */}

        <section className="section contact" id="contact">

          <p className="eyebrow">
            06 / GET IN TOUCH
          </p>

          <h2>
            Have an interesting idea?
            <span> Let's connect.</span>
          </h2>

          <p>
            Interested in AI Engineering, Generative AI,
            Machine Learning and meaningful technology projects.
          </p>

          <a
            className="primary-btn"
            href="mailto:YOUR_EMAIL@example.com"
          >
            Contact Me ↗
          </a>

          {/* SOCIAL LINKS */}

          <SocialLinks />

        </section>

      </main>

      {/* FOOTER */}

      <footer>

        <a className="logo" href="#home">
          GK<span>.</span>
        </a>

        <p>
          Designed & Built by Gautam Keshri · © 2026
        </p>

        <SocialLinks footer />

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </div>
  );
}

export default App;
