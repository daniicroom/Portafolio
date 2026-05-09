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

export const RESUME_DATA_ES = {
  personal: {
    name: "Juan Daniel Valbuena Tapias",
    initials: "JV",

    title:
      "Senior Full Stack .NET Engineer | Lead Product Developer",

    specialty:
      "Arquitectura SaaS, Integraciones Empresariales, Cloud, Automatización e IA aplicada",

    location: "Medellín, Colombia",

    locationLink:
      "https://www.google.com/maps/place/Medellín,+Antioquia",

    avatarUrl: "/img/profile.jpeg",

    personalWebsiteUrl:
      "https://portafolio-mfbf.vercel.app/",
  },

  summary: {
    short:
      "Senior Full Stack .NET Engineer especializado en plataformas SaaS, automatización, arquitectura distribuida e integración empresarial.",

    full:
      "Ingeniero de Sistemas con más de 4 años de experiencia desarrollando plataformas SaaS empresariales y soluciones distribuidas sobre AWS y Azure.\n\n" +
      "Especializado en arquitectura multi-tenant, APIs REST, microservicios, CI/CD, mensajería asíncrona y escalabilidad utilizando RabbitMQ, Redis y procesamiento background.\n\n" +
      "Experiencia liderando equipos técnicos, diseñando integraciones empresariales y optimizando productividad mediante IA aplicada, Claude Code, MCP Servers y automatización de workflows.",
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
      degree: "Ingeniería de Sistemas",
      start: "2022",
      end: "2023",
    },
    {
      school: "Instituto Tecnológico Metropolitano",
      degree: "Tecnología en Sistemas de Información",
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
      issuer: "Microsoft y LinkedIn",
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
        "Microservicios",
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
      category: "Bases de Datos",
      skills: [
        "SQL Server",
        "MySQL",
        "MongoDB",
        "Redis",
        "ETL",
        "Diseño de bases de datos",
      ],
    },

    {
      category: "Integraciones y APIs",
      skills: [
        "REST APIs",
        "SOAP",
        "JWT",
        "OAuth",
        "OIDC",
        "SSO",
        "Microsoft Graph",
        "Twilio",
        "Integraciones empresariales",
      ],
    },

    {
      category: "Arquitectura y Escalabilidad",
      skills: [
        "Arquitectura SaaS",
        "Multi-tenant",
        "Escalamiento horizontal",
        "Arquitectura distribuida",
        "Workers",
        "Procesamiento asíncrono",
        "Background Jobs",
      ],
    },

    {
      category: "Mensajería y Procesamiento",
      skills: [
        "RabbitMQ",
        "Redis Streams",
        "Colas distribuidas",
        "Mensajería asíncrona",
      ],
    },

    {
      category: "Testing y Calidad",
      skills: [
        "Playwright",
        "JMeter",
        "Pruebas automatizadas",
        "Pruebas E2E",
        "Pruebas de carga",
        "Testing funcional",
      ],
    },

    {
      category: "IA Aplicada y Automatización",
      skills: [
        "Claude Code",
        "MCP Servers",
        "Agentes IA",
        "Desarrollo agéntico",
        "Skills personalizadas",
        "AI-assisted development",
        "Automatización de workflows",
        "n8n",
        "Prompt workflows",
      ],
    },
  ],

  work: [
    {
      company: "Treda Solutions S.A.S",
      link: "https://tredasolutions.com/",
      badges: ["Remoto"],

      title: "Lead Product Developer",

      logo: TredaLogo,

      start: "2024",
      end: "Actualidad",

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
        "Liderazgo técnico del roadmap y coordinación del equipo de desarrollo.",
        "Diseño y evolución de arquitectura SaaS multi-tenant.",
        "Escalamiento de infraestructura para soportar incremento del 383% en volumen transaccional.",
        "Reducción del 50% en tiempos de despliegue mediante automatización CI/CD.",
        "Mantenimiento de una tasa superior al 95% de despliegues exitosos en entornos productivos.",
        "Implementación de automatización y flujos de productividad usando Claude Code, MCP Servers y n8n.",
        "Diseño de integraciones empresariales mediante APIs REST y SOAP.",
        "Implementación de autenticación SSO/OIDC y arquitecturas basadas en workers y colas.",
        "Mentoría técnica, code reviews y acompañamiento al equipo de desarrollo.",
      ],
    },

    {
      company: "Treda Solutions S.A.S",
      link: "https://tredasolutions.com/",
      badges: ["Remoto"],

      title: "Desarrollador I+D+I",

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
        "Investigación, diseño y desarrollo de nuevas funcionalidades y productos empresariales.",
        "Participación en el desarrollo de FirmaSeguro y AgRisk.",
        "Construcción de prototipos y validación técnica de soluciones.",
        "Automatización de procesos e integraciones empresariales.",
        "Desarrollo de funcionalidades orientadas a escalabilidad y seguridad.",
      ],
    },

    {
      company:
        "Importaciones y Soluciones de Ingeniería S.A.S",

      link: "",

      badges: [],

      title: "Instructor Tecnológico",

      logo: NoLogo,

      start: "2021",
      end: "2021",

      achievements: [
        "Capacitación técnica en dispositivos Oculus Quest 2.",
        "Diseño y ejecución de talleres tecnológicos prácticos.",
        "Acompañamiento técnico y resolución de problemas.",
      ],
    },
  ],

  projects: [
    {
      title: "FirmaSeguro",

      role: "Lead Product Developer",

      techStack: [
        "SaaS Empresarial",
        ".NET Core",
        "AWS",
        "Docker",
        "Twilio",
        "REST APIs",
        "CI/CD",
        "Elastic Beanstalk",
      ],

      impact: [
        "Plataforma escalada a más de 100.000 firmas digitales.",
        "Implementación de autenticación por WhatsApp.",
        "Arquitectura multi-tenant y marcas blancas.",
      ],

      description:
        "Plataforma avanzada de firma electrónica enfocada en escalabilidad, automatización y seguridad documental.",

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
        "Digitalización de procesos de evaluación agroindustrial.",
        "Automatización de reportes y análisis.",
      ],

      description:
        "Sistema especializado para gestión de riesgos agroindustriales y evaluación de fincas.",

      logo: AgRisk,

      link: {
        label: "agrisk.com.co",
        href: "https://agrisk.com.co/",
      },
    },

    {
      title: "Integraciones AuraQuantic",

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
        "Automatización de procesos empresariales.",
        "Integración entre plataformas corporativas.",
      ],

      description:
        "Desarrollo de integraciones empresariales personalizadas utilizando C# y .NET.",

      logo: AuraQuantic,

      link: {
        label: "auraquantic.com",
        href: "https://www.auraquantic.com/es/",
      },
    },
  ],

  architecture: [
    "Arquitectura SaaS",
    "Multi-tenant",
    "OAuth/OIDC",
    "SSO",
    "CI/CD",
    "Microservicios",
    "Workers",
    "Background Jobs",
    "Arquitectura distribuida",
    "Procesamiento asíncrono",
    "Integraciones empresariales",
  ],

  leadership: [
    "Mentoría técnica",
    "Code reviews",
    "Planeación técnica",
    "Definición de arquitectura",
    "Acompañamiento a desarrolladores",
    "Coordinación técnica de roadmap",
    "Priorización técnica",
    "Soporte a integraciones empresariales",
  ],

  focusAreas: [
    "Plataformas SaaS",
    "Integraciones empresariales",
    "Escalabilidad",
    "Arquitectura distribuida",
    "Productividad de desarrollo",
  ],

  coreCompetencies: [
    "Arquitectura SaaS",
    "Full Stack Development",
    "Microservicios",
    "Cloud Computing",
    "Integraciones empresariales",
    "Arquitectura Multi-tenant",
    "Mensajería distribuida",
    "Automatización",
    "Liderazgo técnico",
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
    "Playwright"
  ],

  aiExperience: [
    "Automatización de tareas de desarrollo mediante IA",
    "Configuración de MCP Servers",
    "Desarrollo agéntico",
    "Automatización de workflows",
    "Optimización de productividad usando IA",
  ],

  stats: [
    {
      value: 4,
      label: "Años de experiencia",
      icon: <FiAward />,
    },
    {
      value: 10,
      label: "Proyectos completados",
      icon: <FiFolder />,
    },
    {
      value: 4,
      label: "Productos desarrollados",
      icon: <FiUser />,
    },
  ],

  awards: [
    {
      title: "Reconocimiento a la Excelencia",
      awarder: "Treda Solutions S.A.S.",

      description:
        "Por consolidar la arquitectura de FirmaSeguro y sus marcas blancas, alcanzando más de 100.000 firmas digitales.",

      year: 2025,
    },

    {
      title: "Reconocimiento Oro a la Excelencia",
      awarder: "Treda Solutions S.A.S.",

      description:
        "Por liderazgo técnico y entregas rápidas de funcionalidades críticas.",

      year: 2024,
    },

    {
      title: "Reconocimiento Oro a la Excelencia",
      awarder: "Treda Solutions S.A.S.",

      description:
        "Por desarrollo del microservicio de firma digital certificada y autenticación vía WhatsApp.",

      year: 2022,
    },
  ],

  languages: [
    {
      name: "Español",
      level: "Nativo",
      proficiency: 5,
    },

    {
      name: "Inglés",
      level: "B1",
      proficiency: 3,
    },
  ],

  volunteering: [
    {
      organization: "Fundación Huellas",

      role: "Docente Voluntario",

      description:
        "Acompañamiento académico y recreativo a niños y jóvenes, además de apoyo tecnológico y sistemas de información.",

      start: "2017",
      end: "2023",
    },
  ],

  references: [
    {
      name: "Erika Romero",
      position: "Ingeniera de Sistemas",
      contact: "",
    },

    {
      name: "Cristhian Sandoval",
      position: "Ingeniero de Sistemas",
      contact: "",
    },
  ],
} as const;