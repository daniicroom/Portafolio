import {
  TredaLogo,
  NoLogo,
  AgRisk,
  FirmaSeguro,
  AuraQuantic,
} from "../../public/img/logos";

import {
  FiGithub,
  FiLinkedin,
  FiAward,
  FiUser,
  FiFolder,
} from "react-icons/fi";

export const RESUME_DATA_EN = {
  personal: {
    name: "Juan Daniel Valbuena Tapias",
    initials: "JV",

    title:
      "Senior Full Stack .NET Engineer | Lead Product Developer",

    specialty:
      "SaaS Architecture, Enterprise Integrations, Cloud, Automation and Applied AI",

    location: "Medellín, Colombia",

    locationLink:
      "https://www.google.com/maps/place/Medellín,+Antioquia",

    avatarUrl: "/img/profile.jpeg",

    personalWebsiteUrl:
      "https://portafolio-mfbf.vercel.app/",
  },

  summary: {
    short:
      "Senior Full Stack .NET Engineer specialized in SaaS platforms, automation, distributed architecture, and enterprise integrations.",

    full:
      "Systems Engineer with more than 4 years of experience in software development, technical leadership, and enterprise platform engineering. Specialized in multi-tenant SaaS architecture, REST APIs, microservices, CI/CD automation, systems integration, and scalable cloud solutions on AWS and Azure.\n\n" +
      "Experience designing distributed systems using queues, workers, and asynchronous processing with RabbitMQ, and Redis. Knowledge of SSO/OIDC authentication, workflow automation, and developer productivity optimization through Applied AI, Claude Code, MCP Servers, agentic systems, and n8n.\n\n" +
      "Strong ability to lead technical teams, participate in architectural decision-making, optimize critical deployments, and build business-oriented solutions.",
  },

  contact: {
    email: "daniicroom@gmail.com",
    tel: "+573108234666",

    social: [
      {
        name: "GitHub",
        url: "https://github.com/daniicroom",
        username: "daniicroom",
        icon: FiGithub,
      },
      {
        name: "LinkedIn",
        url:
          "https://www.linkedin.com/in/daniel-valbuena-295916b1/",
        icon: FiLinkedin,
      },
    ],
  },

  education: [
    {
      school: "Instituto Tecnológico Metropolitano",
      degree: "Systems Engineering",
      start: "2022",
      end: "2023",
    },
    {
      school: "Instituto Tecnológico Metropolitano",
      degree: "Information Systems Technology",
      start: "2017",
      end: "2022",
    },
  ],

  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer:
        "Amazon Web Services Training and Certification",
      year: 2024,
    },
    {
      name: "Unit Testing for Automation Consultants",
      issuer: "Moodle",
      year: 2024,
    },
    {
      name: "Software Development Fundamentals",
      issuer: "Microsoft & LinkedIn",
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

  skills: [
    {
      category: "Backend",
      skills: [
        "C#",
        ".NET Core",
        "ASP.NET",
        "Entity Framework",
        "Minimal APIs",
        "Microservices",
        "SignalR",
        "Hangfire",
        "xUnit",
        "Moq",
        "Razor",
      ],
    },

    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "jQuery",
        "Ajax",
      ],
    },

    {
      category: "Cloud & DevOps",
      skills: [
        "AWS",
        "Azure",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "Elastic Beanstalk",
        "Linux",
        "IIS",
      ],
    },

    {
      category: "Databases",
      skills: [
        "SQL Server",
        "MySQL",
        "MongoDB",
        "Redis",
        "ETL",
        "Database Design",
      ],
    },

    {
      category: "Integrations & APIs",
      skills: [
        "REST APIs",
        "SOAP",
        "JWT",
        "OAuth",
        "OIDC",
        "SSO",
        "Microsoft Graph",
        "Twilio",
        "Enterprise Integrations",
      ],
    },

    {
      category: "Architecture & Scalability",
      skills: [
        "SaaS Architecture",
        "Multi-tenant",
        "Horizontal Scaling",
        "Distributed Architecture",
        "Workers",
        "Asynchronous Processing",
        "Background Jobs",
      ],
    },

    {
      category: "Messaging & Processing",
      skills: [
        "RabbitMQ",
        "Redis Streams",
        "Distributed Queues",
        "Asynchronous Messaging",
      ],
    },

    {
      category: "Testing & Quality",
      skills: [
        "Playwright",
        "JMeter",
        "Automated Testing",
        "E2E Testing",
        "Load Testing",
        "Functional Testing",
      ],
    },

    {
      category: "Applied AI & Automation",
      skills: [
        "Claude Code",
        "MCP Servers",
        "AI Agents",
        "Agentic Systems",
        "Custom Skills",
        "AI-assisted Development",
        "Workflow Automation",
        "n8n",
        "Prompt Workflows",
      ],
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

      technologies: [
        ".NET",
        "AWS",
        "Docker",
        "RabbitMQ",
        "Redis",
        "CI/CD",
        "SQL Server",
        "JavaScript",
        "GitHub Actions",
        "OAuth/OIDC",
      ],

      achievements: [
        "Led technical roadmap execution and coordinated the development team.",
        "Designed and evolved multi-tenant SaaS architecture.",
        "Scaled infrastructure to support a 383% increase in transaction volume.",
        "Reduced deployment times by 50% through CI/CD automation.",
        "Maintained a success rate above 95% for production deployments.",
        "Implemented automation and productivity workflows using Claude Code, MCP Servers, and n8n.",
        "Designed enterprise integrations using REST and SOAP APIs.",
        "Implemented SSO/OIDC authentication and queue/worker-based architectures.",
        "Provided technical mentoring, code reviews, and team guidance.",
      ],
    },

    {
      company: "Treda Solutions S.A.S",
      link: "https://tredasolutions.com/",
      badges: ["Remote"],

      title: "R&D Developer",

      logo: TredaLogo,

      start: "2021",
      end: "2024",

      technologies: [
        ".NET Core",
        "Azure",
        "JavaScript",
        "MySQL",
        "Twilio",
      ],

      achievements: [
        "Researched, designed, and developed new enterprise products and features.",
        "Contributed to the development of FirmaSeguro and AgRisk.",
        "Built prototypes and validated technical solutions.",
        "Automated business processes and enterprise integrations.",
        "Developed scalable and security-oriented functionalities.",
      ],
    },

    {
      company:
        "Importaciones y Soluciones de Ingeniería S.A.S",

      link: "",

      badges: [],

      title: "Technology Instructor",

      logo: NoLogo,

      start: "2021",
      end: "2021",

      achievements: [
        "Provided technical training for Oculus Quest 2 devices.",
        "Designed and delivered hands-on technology workshops.",
        "Supported troubleshooting and technical guidance.",
      ],
    },
  ],

  projects: [
    {
      title: "FirmaSeguro",

      role: "Lead Product Developer",

      techStack: [
        "Enterprise SaaS",
        ".NET Core",
        "AWS",
        "Docker",
        "Twilio",
        "REST APIs",
        "CI/CD",
        "Elastic Beanstalk",
      ],

      impact: [
        "Platform scaled to over 100,000 digital signatures.",
        "Implemented WhatsApp authentication.",
        "Designed multi-tenant and white-label architecture.",
      ],

      description:
        "Advanced electronic signature platform focused on scalability, automation, and document security.",

      logo: FirmaSeguro,

      link: {
        label: "firmaseguro.co",
        href: "https://firmaseguro.co/",
      },
    },

    {
      title: "AgRisk",

      role: "Full Stack Developer",

      techStack: [
        ".NET Core",
        "Azure",
        "Microsoft Graph",
        "JavaScript",
        "MySQL",
      ],

      impact: [
        "Digitized agro-industrial evaluation processes.",
        "Automated reports and analysis workflows.",
      ],

      description:
        "Specialized platform for agro-industrial risk management and farm evaluation.",

      logo: AgRisk,

      link: {
        label: "agrisk.com.co",
        href: "https://agrisk.com.co/",
      },
    },

    {
      title: "AuraQuantic Integrations",

      role: "Backend Developer",

      techStack: [
        "AuraQuantic",
        ".NET Core",
        "REST APIs",
        "SOAP",
        "SQL Server",
        "IIS",
      ],

      impact: [
        "Automated enterprise business processes.",
        "Integrated multiple corporate platforms.",
      ],

      description:
        "Development of custom enterprise integrations using C# and .NET.",

      logo: AuraQuantic,

      link: {
        label: "auraquantic.com",
        href: "https://www.auraquantic.com/es/",
      },
    },
  ],

  architecture: [
    "SaaS Architecture",
    "Multi-tenant",
    "OAuth/OIDC",
    "SSO",
    "CI/CD",
    "Microservices",
    "Workers",
    "Background Jobs",
    "Distributed Architecture",
    "Asynchronous Processing",
    "Enterprise Integrations",
  ],

  leadership: [
    "Technical Mentoring",
    "Code Reviews",
    "Technical Planning",
    "Architecture Definition",
    "Developer Guidance",
    "Technical Roadmap Coordination",
    "Technical Prioritization",
    "Enterprise Integration Support",
  ],

  focusAreas: [
    "SaaS Platforms",
    "Enterprise Integrations",
    "Scalability",
    "Distributed Architecture",
    "Developer Productivity",
  ],

  coreCompetencies: [
    "SaaS Architecture",
    "Full Stack Development",
    "Microservices",
    "Cloud Computing",
    "Enterprise Integrations",
    "Multi-tenant Architecture",
    "Distributed Messaging",
    "Automation",
    "Technical Leadership",
  ],

  tooling: [
    "Claude Code",
    "GitHub",
    "GitHub Actions",
    "Postman",
    "Docker",
    "Sourcetree",
    "GitKraken",
    "n8n",
    "Playwright",
  ],

  aiExperience: [
    "AI-powered development automation",
    "MCP Server configuration",
    "Agentic systems development",
    "Workflow automation",
    "Developer productivity optimization using AI",
  ],

  stats: [
    {
      value: 4,
      label: "Years of Experience",
      icon: <FiAward />,
    },
    {
      value: 10,
      label: "Completed Projects",
      icon: <FiFolder />,
    },
    {
      value: 4,
      label: "Products Developed",
      icon: <FiUser />,
    },
  ],

  awards: [
    {
      title: "Excellence Recognition",
      awarder: "Treda Solutions S.A.S.",

      description:
        "For consolidating the FirmaSeguro architecture and white-label ecosystem, reaching more than 100,000 digital signatures.",

      year: 2025,
    },

    {
      title: "Gold Excellence Recognition",
      awarder: "Treda Solutions S.A.S.",

      description:
        "For technical leadership and rapid delivery of critical features.",

      year: 2024,
    },

    {
      title: "Gold Excellence Recognition",
      awarder: "Treda Solutions S.A.S.",

      description:
        "For developing the certified digital signature microservice and WhatsApp authentication.",

      year: 2022,
    },
  ],

  languages: [
    {
      name: "Spanish",
      level: "Native",
      proficiency: 5,
    },

    {
      name: "English",
      level: "B1",
      proficiency: 3,
    },
  ],

  volunteering: [
    {
      organization: "Fundación Huellas",

      role: "Volunteer Teacher",

      description:
        "Provided academic and recreational support for children and young people, as well as technology and information systems assistance.",

      start: "2017",
      end: "2023",
    },
  ],

  references: [
    {
      name: "Erika Romero",
      position: "Systems Engineer",
      contact: "",
    },

    {
      name: "Cristhian Sandoval",
      position: "Systems Engineer",
      contact: "",
    },
  ],
} as const;