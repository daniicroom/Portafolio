import {
  TredaLogo,
  NoLogo,
  AgRisk,
  FirmaSeguro,
  AuraQuantic,
} from "../../public/img/logos";
import { FiGithub, FiLinkedin, FiAward, FiUser, FiFolder } from "react-icons/fi";

export const RESUME_DATA_EN = {
  name: "Juan Daniel Valbuena Tapias",
  initials: "JV",
  location: "Medellín, Colombia",
  locationLink: "https://www.google.com/maps/place/Medellín,+Antioquia",
  specialty: ".NET Software Developer",
  about:
    "Full Stack Developer focused on building secure and scalable systems",
  summary:
    "Systems Engineer with more than 4 years of experience in software development and technical leadership. Expert in modern technologies such as C#, JavaScript, SQL, Docker, AWS and Azure. Proven experience in platform scaling, agile team leadership and deployment of critical systems in production.",
  avatarUrl: "/img/profile.jpeg",
  personalWebsiteUrl: "https://portafolio-mfbf.vercel.app/",
  contact: {
    email: "daniicroom@gmail.com",
    tel: "+573108234666",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/daniicroom",
        icon: FiGithub,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/daniel-valbuena-295916b1/",
        icon: FiLinkedin,
      },
    ],
  },

  education: [
    {
      school: "Metropolitan Technological Institute",
      degree: "Systems Engineering",
      start: "2022",
      end: "2023",
    },
    {
      school: "Metropolitan Technological Institute",
      degree: "Information Systems Technology",
      start: "2017",
      end: "2022",
    },
  ],

  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services Training and Certification",
      year: 2024,
    },
    {
      name: "Unit Testing for Automation Consultants",
      issuer: "Moodle",
      year: 2024,
    },
    {
      name: "Software Development Fundamentals",
      issuer: "Microsoft and LinkedIn",
      year: 2023,
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Nectec",
      year: 2022,
    },
    {
      name: "Ethical Hacking | Red Team",
      issuer: "Hacker Mentor",
      year: 2022,
    },
    {
      name: "SCRUM Web Developer",
      issuer: "International Scrum Institute",
      year: 2021,
    },
  ],

  work: [
    {
      company: "Treda Solutions S.A.S",
      link: "https://tredasolutions.com/",
      badges: ["Remote"],
      title: "Lead Product Developer",
      logo: TredaLogo,
      start: "2024",
      end: "Present",
      description:
        "As Lead Product Developer, I lead the complete product development cycle aligned with the roadmap, ensuring delivery of high-quality and timely features.\n\n" +
        "Key Responsibilities:\n" +
        "- Led and coordinated the technical team to ensure roadmap objectives execution.\n" +
        "- Task prioritization and validation of technical and functional feasibility.\n" +
        "- Collaboration with the commercial team to align business objectives with product development.\n" +
        "- Direct participation in feature development and legacy code refactoring.\n" +
        "- Planning, execution and optimization of CI/CD deployments in production environments.\n" +
        "- Automation of deployment scripts and operating system updates on critical infrastructure.\n" +
        "- Technical support to external users during API integrations and training.\n\n" +
        "Key Achievements:\n" +
        "- 95% successful deployments without critical incidents.\n" +
        "- Infrastructure scaling to support 383% increase in transactional volume.\n" +
        "- 50% reduction in deployment time through automation.",
    },
    {
      company: "Treda Solutions S.A.S",
      link: "https://tredasolutions.com/",
      badges: ["Remote"],
      title: "R&D Developer",
      logo: TredaLogo,
      start: "2021",
      end: "2024",
      description:
        "As a developer in the Research, Development and Innovation (R&D) area, I focused on planning, developing and implementing projects oriented to innovation and creation of new products and features.\n\n" +
        "Projects:\n" +
        "- FirmaSeguro\n" +
        "- AgRisk\n\n" +
        "Main Functions:\n" +
        "- Strategic planning\n" +
        "- Research and analysis\n" +
        "- Prototype development and experimentation\n" +
        "- Interdisciplinary collaboration\n" +
        "- Development of innovative products\n" +
        "- Evaluation and continuous improvement",
    },
    {
      company: "Importaciones y Soluciones de Ingeniería S.A.S",
      link: "",
      badges: [],
      title: "Technology Instructor",
      logo: NoLogo,
      start: "2021",
      end: "2021",
      description:
        "As a technology instructor I was responsible for training and strengthening staff skills in the use of immersive technologies.\n\n" +
        "Responsibilities:\n" +
        "- Training in use and support of Oculus Quest 2 devices.\n" +
        "- Design and execution of practical technical workshops.\n" +
        "- Guidance in troubleshooting and implementation best practices.",
    },
  ],

  skills: [
    {
      name: "C#",
      percent: 90,
      keywords: ["Entity Framework", "ASP.NET", "xUnit", "Moq", "Razor"],
    },
    {
      name: "Cloud",
      percent: 85,
      keywords: ["AWS", "Azure", "Lambda", "SQS", "Docker", "Meta Services"],
    },
    {
      name: "JavaScript",
      percent: 85,
      keywords: ["Ajax", "JQuery", "HTML", "CSS"],
    },
    {
      name: "SQL and NoSQL",
      percent: 80,
      keywords: ["ETL", "Relational databases", "MySQL", "MongoDB", "SQL Server"],
    },
    {
      name: "APIs and Integration",
      percent: 80,
      keywords: ["REST", "SOAP", "Microservices", "JWT", "OAuth"],
    },
    {
      name: "DevOps Tools",
      percent: 75,
      keywords: ["GitHub", "GitKraken", "Sourcetree", "Postman", "Rocketbot"],
    },
  ],

  projects: [
    {
      title: "FirmaSeguro",
      techStack: [
        "Enterprise SaaS",
        ".Net Core",
        "JavaScript",
        "Andes SCD",
        "Twilio",
        "AWS",
        "CI/CD",
        "REST API",
        "ElasticBeanstalk",
        "Docker",
      ],
      description:
        "Advanced electronic signature platform that simplifies and secures digital processes through configurable workflows, ensuring authenticity, integrity and legal validity of documents.",
      logo: FirmaSeguro,
      link: {
        label: "firmaseguro.co",
        href: "https://firmaseguro.co/",
      },
    },
    {
      title: "AgRisk",
      techStack: [".Net Core", "Azure", "Microsoft Graph", "JavaScript", "MySQL"],
      description:
        "Specialized system for agro-industrial risk management, farm assessment and intelligent report generation.",
      logo: AgRisk,
      link: {
        label: "agrisk.com.co",
        href: "https://agrisk.com.co/",
      },
    },
    {
      title: "AuraQuantic Integrations",
      techStack: [
        "Enterprise Integration",
        "AuraQuantic",
        "C#",
        ".NET Core",
        "REST APIs",
        "SOAP",
        "SQL Server",
        "IIS",
      ],
      description:
        "Development of custom integrations for business process automation using C# and .NET Core.",
      logo: AuraQuantic,
      link: {
        label: "auraquantic.com",
        href: "https://www.auraquantic.com/es/",
      },
    },
  ],

  stats: [
    { value: 4, label: "Years of experience", icon: <FiAward /> },
    { value: 10, label: "Completed projects", icon: <FiFolder /> },
    { value: 2, label: "Products developed", icon: <FiUser /> },
  ],

  references: [
    { name: "Erika Romero", position: "Systems Engineer", contact: "" },
    { name: "Cristhian Sandoval", position: "Systems Engineer", contact: "" },
  ],

  awards: [
    {
      title: "Excellence Recognition",
      awarder: "Treda Solutions S.A.S.",
      description:
        "For consolidating the FirmaSeguro architecture and its white labels, reaching 100,000 digital signatures.",
      year: 2025,
    },
    {
      title: "Gold Excellence Recognition",
      awarder: "Treda Solutions S.A.S.",
      description:
        "For leadership of the development team and fast delivery of new features.",
      year: 2024,
    },
    {
      title: "Gold Excellence Recognition",
      awarder: "Treda Solutions S.A.S.",
      description:
        "For development of the certified digital signature microservice and WhatsApp authentication.",
      year: 2022,
    },
  ],

  languages: [
    { name: "Spanish", level: "Native", proficiency: 5 },
    { name: "English", level: "Intermediate", proficiency: 3 },
  ],

  volunteering: [
    {
      organization: "Fundación Huellas",
      role: "Volunteer Teacher",
      description:
        "Academic and recreational accompaniment to children and young people, and support to the foundation's information systems.",
      start: "2017",
      end: "2023",
    },
  ],
} as const;
