import {
  TredaLogo,
  NoLogo,
  AgRisk,
  FirmaSeguro,
  AuraQuantic,
} from "../../public/img/logos";
import { FiGithub, FiLinkedin, FiAward, FiUser, FiFolder } from "react-icons/fi";

export const RESUME_DATA = {
  name: "Juan Daniel Valbuena Tapias",
  initials: "JV",
  location: "Medellín, Colombia",
  locationLink: "hhttps://www.google.com/maps/place/Medellín,+Antioquia",
  specialty: "Middle .NET Software Developer",
  about:
    "Full Stack Developer focused on building scalable and secure systems",
  summary:
    "Information Systems Engineer with 3+ years of experience in software development and technical leadership. Skilled in modern technologies such as C#, JavaScript, SQL, Docker, AWS, and Azure. Proven success in scaling platforms, leading agile teams, and delivering critical system deployments.",
  avatarUrl: "/img/profile.jpeg",
  personalWebsiteUrl: "https://jarocki.me",
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
      "school": "Instituto Tecnológico Metropolitano",
      "degree": "Systems Engineering",
      "start": "2022",
      "end": "2024"
    },
    {
      "school": "Instituto Tecnológico Metropolitano",
      "degree": "Information Systems Technology",
      "start": "2017",
      "end": "2022"
    },
  ],
  certifications: [
    {
      "name": "AWS Certified Cloud Practitioner",
      "issuer": "Amazon Web Services Training and Certification",
      "year": 2024
    },
    {
      "name": "Unit Testing for Automation Consultants",
      "issuer": "Moodle",
      "year": 2024
    },
    {
      "name": "Software Development Fundamentals",
      "issuer": "Microsoft and LinkedIn",
      "year": 2023
    },
    {
      "name": "AWS Cloud Practitioner Essentials",
      "issuer": "Nectec",
      "year": 2022
    },
    {
      "name": "Ethical Hacking | Red Team",
      "issuer": "Hacker Mentor",
      "year": 2022
    },
    {
      "name": "SCRUM Web Developer",
      "issuer": "International Scrum Institute",
      "year": 2021
    }
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
      description: "As Lead Product Developer, I oversee the full product development lifecycle in alignment with the roadmap, ensuring high-quality and timely feature delivery.\n\n" +
      "Key Responsibilities:\n" +
      "- Led and coordinated the technical team to ensure execution and delivery of roadmap objectives.\n" +
      "- Prioritized tasks and validated their technical and functional feasibility.\n" +
      "- Collaborated with the commercial team to align business goals with product development.\n" +
      "- Actively contributed to hands-on development of key features and refactoring legacy code.\n" +
      "- Planned, executed, and optimized CI/CD deployments across production environments.\n" +
      "- Automated deployment scripts and handled OS updates on critical infrastructure.\n" +
      "- Provided technical support to external users during API integration and training.\n\n" +
      "Key Achievements:\n" +
      "- Achieved a 95% successful deployment rate with zero critical production issues.\n" +
      "- Scaled infrastructure to support a 383% increase in transaction volume.\n" +
      "- Reduced deployment time by 50% through automation and optimization."
    },
   {
      company: "Treda Solutions S.A.S",
      link: "https://tredasolutions.com/",
      badges: ["Remote"],
      title: "I+D+I Developer",
      logo: TredaLogo,
      start: "2021",
      end: "2024",
      description: "As a developer in the Research, Development, and Innovation (R&D&I) area, my main focus was to plan, develop, and implement projects that drive innovation and lead to the creation of innovative products and the introduction of new functionalities in the market. My role involved a constant commitment to exploring new technologies, methodologies, and approaches to solve problems and seize emerging opportunities.\n\n" +
      "Projects Participated:\n" +
      "- Firma Seguro\n" +
      "- AgRisk\n\n" +
      "Main Functions:\n" +
      "- Strategic Planning\n" +
      "- Research and Analysis\n" +
      "- Prototyping and Experimentation Development\n" +
      "- Interdisciplinary Collaboration\n" +
      "- Development of Innovative Products\n" +
      "- Continuous Evaluation and Improvement"
    },    
    {
      company: "Importaciones y Soluciones de Ingeniería S.A.S",
      link: "",
      badges: [],
      title: "Trainer",
      logo: NoLogo,
      start: "2021",
      end: "2021",
      description: "As a technology trainer, I was responsible for onboarding and upskilling staff in the use of immersive technologies.\n\n" +
      "Key Responsibilities:\n" +
      "- Trained personnel in the use and support of Oculus Quest 2 VR devices.\n" +
      "- Designed and delivered hands-on technical workshops.\n" +
      "- Provided guidance on VR troubleshooting and best practices for implementation.",
    },
  ],
  skills: [
    {
      name: "C#",
      percent: 90,
      keywords: 
      [
        "Entity Framework", 
        "ASP.NET", 
        "Xunit",
        "Moq",
        "Razor"
      ]
    },
    {
      name: "Cloud",
      percent: 85,
      keywords: 
      [
        "AWS", 
        "Azure", 
        "Lambda", 
        "SQS", 
        "Docker",
        "Meta Services"
      ]
    },
    {
      name: "JavaScript",
      percent: 85,
      keywords: 
      [
        "Ajax", 
        "JQuery", 
        "HTML", 
        "CSS"
      ]
    },
    {
      name: "SQL & NoSQL",
      percent: 80,
      keywords: 
      [
        "ETL", 
        "Relational DBs",
        "MySQL", 
        "MongoDB",
        "SQL Server",
      ]
    },
    {
      name: "API & Integration",
      percent: 80,
      keywords: 
      [
        "REST", 
        "SOAP", 
        "Microservices", 
        "Jwt",
        "OAuth"
      ]
    },
    {
      name: "DevOps Tools",
      percent: 75,
      keywords: 
      [
        "GitHub", 
        "GitKraken", 
        "Sourcetree", 
        "Postman", 
        "Rocketbot",
      ]
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
        "Api Rest",
        "ElasticBean stalk",
        "Docker",
      ],
      description: "An advanced electronic signature platform that simplifies and secures your digital processes. With fully customizable workflows, it guarantees the authenticity, integrity, and legal validity of your documents, complying with international regulations. Ideal for accelerating operations, reducing costs, and eliminating paper, without sacrificing security or compliance.",
      logo: FirmaSeguro,
      link: {
        label: "firmaseguro.co",
        href: "https://firmaseguro.co/",
      },
    },
    {
      title: "AgRisk",
      techStack: [
        ".Net Core",
        "Azure",
        "Microsoft Graph",
        "JavaScript",
        "Mysql"
      ],
      description: "Specialized system for agro-industrial risk management, farm evaluation, and intelligent reporting for insurers and producers.",
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
        "IIS"
      ],
      description: "Development and implementation of custom integrations for business process automation for AuraQuantic clients, using C# and .NET Core to connect systems and optimize workflows.",
      logo: AuraQuantic,
      link: {
        label: "auraquantic.com",
        href: "https://www.auraquantic.com/es/",
      },
    }
  ],
  stats: [
    { 
      value: 3, 
      label: "Years Experience", 
      icon: <FiAward /> 
    },
    { 
      value: 10, 
      label: "Projects Completed", 
      icon: <FiFolder /> 
    },
    { 
      value: 2, 
      label: "Products Developed", 
      icon: <FiUser /> 
    }
  ],
  references: [
    {
      name: "Erika Romero",
      position: "Systems Engineer",
      contact: ""
    },
    {
      name: "Cristhian Sandoval",
      position: "Systems Engineer",
      contact: ""
    }
  ],
  awards: [
    {
      title: "Recognition for Excellence",
      awarder: "Treda Solutions S.A.S.",
      description: "For consolidating the architecture of the Firma Seguro product and its white brands, achieving the milestone of 100,000 digital signatures.",
      year: 2025
    },
    {
      title: "Gold Recognition for Excellence",
      awarder: "Treda Solutions S.A.S.",
      description: "for his excellent performance in leading the product development team, achieving rapid deliveries in the construction of new features prioritized in the roadmap.",
      year: 2024
    },
    {
      title: "Gold Recognition for Excellence",
      awarder: "Treda Solutions S.A.S.",
      description: "Awarded for outstanding performance and development of the microservice for certified digital signature and WhatsApp-based authentication.",
      year: 2022
    }
  ],
  languages: [
    {
      name: "Spanish",
      level: "Native",
      proficiency: 5
    },
    {
      name: "English",
      level: "Intermediate",
      proficiency: 3
    }
  ],
  volunteering: [
    {
      organization: "Fundación Huellas",
      role: "Volunteer Teacher",
      description: "Guided children and youth academically and recreationally in underserved communities of Bello, and supported the foundation’s database and IT systems.",
      start: "2017",
      end: "2023"
    }
  ]
} as const;
