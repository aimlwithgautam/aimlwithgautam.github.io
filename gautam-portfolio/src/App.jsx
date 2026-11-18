import profileImage from "./assets/profile.jpg";
import "./App.css";

import {
  Linkedin, Github, ExternalLink, ArrowUpRight, Mail, MapPin,
  BrainCircuit, Code2, Database, Workflow, Cloud, BarChart3,
  GraduationCap, Award, Languages, FileText, Video, ScanText,
  MessageSquareText, ShieldCheck, BriefcaseBusiness
} from "lucide-react";

const profile = {
  email: "aimlwithgautam@gmail.com",
  linkedin: "https://www.linkedin.com/in/gautam-keshri-5a1b075b/",
  github: "https://github.com/aimlwithgautam",
  youtube: "https://www.youtube.com/@gautam-jap",
  medium: "https://medium.com/@aimlwithgautlwithgautam",
};

const socialLinks = [
  { name: "LinkedIn", url: profile.linkedin, icon: Linkedin },
  { name: "GitHub", url: profile.github, icon: Github },
  { name: "YouTube", url: profile.youtube, icon: Video },
  { name: "Medium", url: profile.medium, icon: FileText },
];

const experiences = [
  {
    role: "Application Engineer",
    company: "Kacoms Co. Ltd.",
    location: "Japan",
    period: "Jul 2026 – current ",
    points: [
      "Develop AI agents using Microsoft Copilot Studio, including agent workflows and supporting design documentation.",
      "Work on FFmpeg-based audio and video normalization to standardize media assets.",
      "Apply Meta Segment Anything Model (SAM) 3.1 to prompt-based object tracking in video.",
      "Use Python and Power BI for data analysis.",
      "Create a perspective dictionary for web application development."
    ]
  },
  {
    role: "AI Engineer (Japan Geo)",
    company: "IBM India Pvt. Ltd.",
    location: "Bangalore, India",
    period: "Dec 2023 – Sep 2025",
    points: [
      "Designed end-to-end OCR pipelines for Japanese document digitization and handwritten-content extraction.",
      "Designed Agentic RAG workflows for enterprise knowledge management.",
      "Integrated LLMs into customer-support and call-centre automation solutions.",
      "Developed multilingual chatbot solutions using IBM watsonx Orchestrate and prompt engineering.",
      "Worked on AI governance and compliance proof-of-concepts using watsonx.governance.",
      "Built NLP pipelines for text classification using IBM Slate LLMs."
    ]
  },
  {
    role: "Workforce Management & Data Analytics",
    company: "IBM India Pvt. Ltd.",
    location: "Bangalore, India",
    period: "Apr 2016 – Nov 2023",
    points: [
      "Worked on workforce and operational analytics for Japanese-market engagements.",
      "Used Python and data analysis to prepare reports, dashboards and actionable insights.",
      "Collaborated with cross-functional teams on workforce planning and operational improvement."
    ]
  },

  {
    role: "Business Coordinator (Japanese Projects)",
    company: "Toyota, Honda and Nippon Steel projects",
    location: "Bangalore, India",
    period: "June 2013 – March 2016",
    points: [
      "Coordinated between Japanese and Indian engineers on cross-border projects.",
      "Supported KPI measurement and improvement strategies across multiple business areas.",
      "Joined business trips with Japanese clients to Indian vendors and delivered bilingual presentations in Japanese and English."
    ]
  }


];

const skillGroups = [
  { title: "Generative AI", icon: BrainCircuit, skills: ["LLMs & Foundation Models", "RAG", "Agentic RAG", "Multi-agent Systems", "Prompt Engineering", "Chatbot Development"] },
  { title: "AI Development", icon: Code2, skills: ["Python", "LangChain", "LangGraph", "AutoGen", "CrewAI", "IBM Bee", "FastAPI", "REST APIs"] },
  { title: "AI Platforms", icon: Workflow, skills: ["IBM watsonx.ai", "watsonx Assistant", "watsonx Orchestrate", "watsonx.governance", "Microsoft Copilot Studio"] },
  { title: "Data Science", icon: BarChart3, skills: ["Machine Learning", "SQL", "Power BI", "Pandas", "NLP", "Text Classification", "Time-series Forecasting"] },
  { title: "Cloud & DevOps", icon: Cloud, skills: ["IBM Cloud", "Azure", "AWS", "GCP", "Docker", "Podman", "Code Engine"] },
  { title: "Other Technologies", icon: Database, skills: ["OCR", "Computer Vision", "Meta SAM 3.1", "FFmpeg", "React", "TypeScript", "JavaScript", "Streamlit", "Gradio"] }
];

const projects = [
  {
    number: "01", category: "DOCUMENT AI · OCR", title: "Japanese Document Digitization",
    client: "Enterprise OCR proof of concept",
    description: "Designed end-to-end OCR pipelines to digitize Japanese documents and extract handwritten content for automated document processing.",
    technologies: ["OCR", "Handwriting Extraction", "Document AI"]
  },
  {
    number: "02", category: "GENERATIVE AI · RAG", title: "Agentic RAG for Enterprise Knowledge",
    client: "Toyota",
    description: "Designed and implemented a retrieval-augmented generation solution with agentic workflows to improve access to internal enterprise knowledge.",
    technologies: ["RAG", "Agentic AI", "LLMs", "Enterprise Search"]
  },
  {
    number: "03", category: "CONVERSATIONAL AI", title: "LLM-powered Call-centre Automation",
    client: "Otafuku Bank",
    description: "Integrated LLM capabilities with watsonx Assistant to support customer interactions and automate call-centre workflows.",
    technologies: ["IBM watsonx", "LLMs", "Automation"]
  },
  {
    number: "04", category: "MULTILINGUAL AI", title: "Multilingual Customer-support Chatbot",
    client: "Anshin",
    description: "Developed multilingual chatbot capabilities using watsonx Orchestrate and prompt engineering for customer support.",
    technologies: ["watsonx Orchestrate", "Prompt Engineering", "Chatbots"]
  },
  {
    number: "05", category: "RESPONSIBLE AI", title: "AI Governance & Compliance",
    client: "MUFG Bank",
    description: "Worked on watsonx.governance proof-of-concepts supporting AI governance, oversight and compliance workflows.",
    technologies: ["watsonx.governance", "AI Governance", "Compliance"]
  },
  {
    number: "06", category: "NLP · CLASSIFICATION", title: "Automotive Component Text Classification",
    client: "Toyota",
    description: "Built NLP pipelines using IBM Slate LLMs to classify unstructured text related to automotive components and technical information.",
    technologies: ["NLP", "IBM Slate LLMs", "Classification"]
  },
  {
    number: "07", category: "COMPUTER VISION", title: "Prompt-based Video Object Tracking",
    client: "Applied AI / R&D",
    description: "Applied Meta Segment Anything Model (SAM) 3.1 for prompt-based object tracking in video.",
    technologies: ["Python", "SAM 3.1", "Computer Vision"]
  },
  {
    number: "08", category: "MEDIA ENGINEERING", title: "Audio & Video Normalization Pipeline",
    client: "Media processing",
    description: "Worked on FFmpeg-based audio and video normalization to standardize media assets for downstream workflows.",
    technologies: ["FFmpeg", "Python", "Media Processing"]
  }
];

const dataProjects = [
  "Employee attrition prediction using Logistic Regression and Random Forest.",
  "Workforce-demand time-series forecasting using ARIMA and Prophet.",
  "K-means clustering to segment workforce skill profiles and support training optimization.",
  "Python data pipelines for HR data cleaning, anomaly detection and reporting.",
  "NLP-based survey text analysis to identify employee sentiment trends and relate them to workforce KPIs."
];

const education = [
  {
    degree: "MS in Data Science",
    school: "Liverpool John Moores University, UK",
    period: "2020 – 2022",
    url: "https://www.ljmu.ac.uk/"
  },
  {
    degree: "PG Diploma in Data Science",
    school: "IIIT Bangalore",
    period: "2020 – 2021",
    url: "https://www.iiitb.ac.in/"
  }
];

const certifications = [
  "2025 IBMer watsonx Challenge",
  "watsonx Orchestrate Practitioner Advanced",
  "watsonx.governance Technical Sales Intermediate",
  "watson Discovery Technical Sales Intermediate",
  "watsonx.ai Technical Sales Intermediate",
  "IBM watsonx Foundations",
  "watsonx.ai Sales Foundation",
  "watsonx.governance Sales Foundation",
  "Cognitive Practitioner",
  "Data Analysis Using Python",
  "Machine Learning with Python – Level 1",
  "Data Visualization Using Python",
  "Python for Data Science",
  "WebMethods API Management Technical Sales Intermediate"
];

function SocialLinks({ footer = false }) {
  return (
    <div className={footer ? "footer-socials" : "social-links"}>
      {socialLinks.map(({ name, url, icon: Icon }) => (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
          <Icon size={footer ? 18 : 17} /> {!footer && <><span>{name}</span><ExternalLink size={12} /></>}
        </a>
      ))}
    </div>
  );
}

function SectionHeading({ index, label, title, description }) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{index} / {label}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">GK<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#experience">Experience</a>
          <a href="#skills">Skills</a><a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>
        <a className="contact-btn" href="#contact">Let's Connect <ArrowUpRight size={14} /></a>
      </nav>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability"><span className="status-dot" /> AI ENGINEER · GENERATIVE AI · DATA SCIENCE</div>
            <p className="eyebrow">HELLO, I'M GAUTAM KESHRI</p>
            <h1>Building the <span>Intelligence</span> of Tomorrow.</h1>
            <p className="hero-description">
              AI Engineer with hands-on experience designing and developing LLM-powered applications and enterprise AI proofs of concept. Focused on RAG, Agentic RAG, multi-agent workflows, chatbots, document intelligence and applied machine learning.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">Explore My Work <ArrowUpRight size={15} /></a>
              <a className="secondary-btn" href="#contact">Get In Touch</a>
      
            </div>
            <SocialLinks />
            <div className="hero-meta"><span><MapPin size={13} /> BASED IN JAPAN</span><span>AI · ML · GENERATIVE AI</span></div>
          </div>
          <div className="hero-visual">
            <div className="profile-glow" />
            <div className="profile-frame"><img src={profileImage} alt="Gautam Keshri" className="profile-image" /></div>
          </div>
        </section>

        <section className="section" id="about">
          <SectionHeading index="01" label="ABOUT ME" title={<>Engineering ideas into <span>intelligence.</span></>} />
          <div className="about-layout">
            <div className="about-copy">
              <p>I am an AI and Data Science professional with experience developing enterprise AI solutions, intelligent agents, machine learning applications and automation workflows.</p>
              <p>My work spans Generative AI, LLM applications, Retrieval-Augmented Generation, Agentic RAG, computer vision and applied research. I have delivered AI solutions for Japanese enterprise use cases, combining technical development with cross-cultural collaboration.</p>
              <p>I hold an MS in Data Science from Liverpool John Moores University and bring English–Japanese technical communication experience, including POC documentation and meeting interpretation.</p>
            </div>
            <div className="about-highlights">
              <div><BrainCircuit /><strong>Generative AI</strong><span>LLMs · RAG · Agentic AI</span></div>
              <div><Workflow /><strong>AI Engineering</strong><span>Agents · APIs · Automation</span></div>
              <div><BarChart3 /><strong>Data Science</strong><span>ML · Analytics · Forecasting</span></div>
              <div><Languages /><strong>Japan Market</strong><span>English–Japanese collaboration</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading index="02" label="EXPERIENCE" title={<>Professional <span>journey.</span></>} description="Experience across enterprise AI engineering, data analytics and Japanese-market projects." />
          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-card" key={`${item.company}-${item.role}`}>
                <div className="experience-topline"><span className="card-label">{item.period}</span><span className="experience-location"><MapPin size={13} /> {item.location}</span></div>
                <h3>{item.role}</h3><p className="company">{item.company}</p>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading index="03" label="TECHNICAL EXPERTISE" title={<>Technologies I <span>work with.</span></>} />
          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, skills: groupSkills }) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-heading"><Icon size={21} /><h3>{title}</h3></div>
                <div className="tech-tags">{groupSkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading index="04" label="SELECTED WORK" title={<>Projects & <span>experimentation.</span></>} description="Selected enterprise AI engagements and applied engineering projects." />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top"><span>{project.category}</span><span>{project.number}</span></div>
                <h3>{project.title}</h3><p className="project-client">{project.client}</p>
                <p>{project.description}</p>
                <div className="tech-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="data-projects">
            <h3><BarChart3 size={20} /> Data Science Projects</h3>
            <ul>{dataProjects.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="section" id="education">
          <SectionHeading index="05" label="EDUCATION" title={<>Academic <span>background.</span></>} />
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.degree}>
                <GraduationCap size={23} />
                <span className="card-label">{item.period}</span>

                <h3>{item.degree}</h3>

                <p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="university-link"
                  >
                    {item.school}
                    <ExternalLink size={13} />
                  </a>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="certifications">
          <SectionHeading index="06" label="CERTIFICATIONS" title={<>Learning that keeps <span>moving.</span></>} />
          <div className="certification-grid">
            {certifications.map((item) => <div className="certification-item" key={item}><Award size={17} /><span>{item}</span></div>)}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-panel">
            <p className="eyebrow">07 / GET IN TOUCH</p>
            <h2>Have an interesting idea? <span>Let's connect.</span></h2>
            <p>Interested in AI Engineering, Generative AI, Machine Learning and meaningful technology projects.</p>
            <a className="email-link" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
            <div><a className="primary-btn" href={`mailto:${profile.email}`}>Contact Me <ArrowUpRight size={15} /></a></div>
            <SocialLinks />
          </div>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">GK<span>.</span></a>
        <p>Designed & Built by Gautam Keshri · © {new Date().getFullYear()}</p>
        <SocialLinks footer />
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
