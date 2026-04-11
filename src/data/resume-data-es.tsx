import {
  TredaLogo,
  NoLogo,
  AgRisk,
  FirmaSeguro,
  AuraQuantic,
} from "../../public/img/logos";
import { FiGithub, FiLinkedin, FiAward, FiUser, FiFolder } from "react-icons/fi";

export const RESUME_DATA_ES = {
  name: "Juan Daniel Valbuena Tapias",
  initials: "JV",
  location: "Medellín, Colombia",
  locationLink: "https://www.google.com/maps/place/Medellín,+Antioquia",
  specialty: "Desarrollador de Software .NET",
  about:
    "Desarrollador Full Stack enfocado en construir sistemas seguros y escalables",
  summary:
    "Ingeniero de Sistemas con más de 4 años de experiencia en desarrollo de software y liderazgo técnico. Experto en tecnologías modernas como C#, JavaScript, SQL, Docker, AWS y Azure. Experiencia comprobada en escalamiento de plataformas, liderazgo de equipos ágiles y despliegue de sistemas críticos en producción.",
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

  work: [
    {
      company: "Treda Solutions S.A.S",
      link: "https://tredasolutions.com/",
      badges: ["Remoto"],
      title: "Lead Product Developer",
      logo: TredaLogo,
      start: "2024",
      end: "Actualidad",
      description:
        "Como Lead Product Developer, lidero el ciclo completo de desarrollo de producto alineado al roadmap, garantizando entregas de funcionalidades con alta calidad y oportunidad.\n\n" +
        "Responsabilidades clave:\n" +
        "- Lideré y coordiné el equipo técnico para asegurar la ejecución de los objetivos del roadmap.\n" +
        "- Priorización de tareas y validación de su viabilidad técnica y funcional.\n" +
        "- Colaboración con el equipo comercial para alinear objetivos de negocio con el desarrollo del producto.\n" +
        "- Participación directa en el desarrollo de funcionalidades y refactorización de código legado.\n" +
        "- Planeación, ejecución y optimización de despliegues CI/CD en ambientes productivos.\n" +
        "- Automatización de scripts de despliegue y actualización de sistemas operativos en infraestructura crítica.\n" +
        "- Soporte técnico a usuarios externos durante integraciones de API y capacitaciones.\n\n" +
        "Logros principales:\n" +
        "- 95% de despliegues exitosos sin incidentes críticos.\n" +
        "- Escalamiento de infraestructura para soportar un aumento del 383% en volumen transaccional.\n" +
        "- Reducción del tiempo de despliegue en 50% mediante automatización.",
    },
    {
      company: "Treda Solutions S.A.S",
      link: "https://tredasolutions.com/",
      badges: ["Remoto"],
      title: "Desarrollador I+D+I",
      logo: TredaLogo,
      start: "2021",
      end: "2024",
      description:
        "Como desarrollador en el área de Investigación, Desarrollo e Innovación (I+D+I), me enfoqué en planear, desarrollar e implementar proyectos orientados a la innovación y creación de nuevos productos y funcionalidades.\n\n" +
        "Proyectos:\n" +
        "- Firma Seguro\n" +
        "- AgRisk\n\n" +
        "Funciones principales:\n" +
        "- Planeación estratégica\n" +
        "- Investigación y análisis\n" +
        "- Desarrollo de prototipos y experimentación\n" +
        "- Colaboración interdisciplinaria\n" +
        "- Desarrollo de productos innovadores\n" +
        "- Evaluación y mejora continua",
    },
    {
      company: "Importaciones y Soluciones de Ingeniería S.A.S",
      link: "",
      badges: [],
      title: "Instructor Tecnológico",
      logo: NoLogo,
      start: "2021",
      end: "2021",
      description:
        "Como instructor tecnológico fui responsable de la capacitación y fortalecimiento de habilidades del personal en el uso de tecnologías inmersivas.\n\n" +
        "Responsabilidades:\n" +
        "- Capacitación en uso y soporte de dispositivos Oculus Quest 2.\n" +
        "- Diseño y ejecución de talleres técnicos prácticos.\n" +
        "- Guía en solución de problemas y buenas prácticas de implementación.",
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
      name: "SQL y NoSQL",
      percent: 80,
      keywords: ["ETL", "Bases de datos relacionales", "MySQL", "MongoDB", "SQL Server"],
    },
    {
      name: "APIs e Integración",
      percent: 80,
      keywords: ["REST", "SOAP", "Microservicios", "JWT", "OAuth"],
    },
    {
      name: "Herramientas DevOps",
      percent: 75,
      keywords: ["GitHub", "GitKraken", "Sourcetree", "Postman", "Rocketbot"],
    },
  ],

  projects: [
    {
      title: "FirmaSeguro",
      techStack: [
        "SaaS Empresarial",
        ".Net Core",
        "JavaScript",
        "Andes SCD",
        "Twilio",
        "AWS",
        "CI/CD",
        "API REST",
        "ElasticBeanstalk",
        "Docker",
      ],
      description:
        "Plataforma avanzada de firma electrónica que simplifica y asegura procesos digitales mediante flujos configurables, garantizando autenticidad, integridad y validez legal de documentos.",
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
        "Sistema especializado para la gestión de riesgos agroindustriales, evaluación de fincas y generación de reportes inteligentes.",
      logo: AgRisk,
      link: {
        label: "agrisk.com.co",
        href: "https://agrisk.com.co/",
      },
    },
    {
      title: "Integraciones AuraQuantic",
      techStack: [
        "Integración Empresarial",
        "AuraQuantic",
        "C#",
        ".NET Core",
        "REST APIs",
        "SOAP",
        "SQL Server",
        "IIS",
      ],
      description:
        "Desarrollo de integraciones personalizadas para automatización de procesos empresariales usando C# y .NET Core.",
      logo: AuraQuantic,
      link: {
        label: "auraquantic.com",
        href: "https://www.auraquantic.com/es/",
      },
    },
  ],

  stats: [
    { value: 4, label: "Años de experiencia", icon: <FiAward /> },
    { value: 10, label: "Proyectos completados", icon: <FiFolder /> },
    { value: 2, label: "Productos desarrollados", icon: <FiUser /> },
  ],

  references: [
    { name: "Erika Romero", position: "Ingeniera de Sistemas", contact: "" },
    { name: "Cristhian Sandoval", position: "Ingeniero de Sistemas", contact: "" },
  ],

  awards: [
    {
      title: "Reconocimiento a la Excelencia",
      awarder: "Treda Solutions S.A.S.",
      description:
        "Por consolidar la arquitectura de Firma Seguro y sus marcas blancas, alcanzando 100,000 firmas digitales.",
      year: 2025,
    },
    {
      title: "Reconocimiento Oro a la Excelencia",
      awarder: "Treda Solutions S.A.S.",
      description:
        "Por liderazgo del equipo de desarrollo y entregas rápidas de nuevas funcionalidades.",
      year: 2024,
    },
    {
      title: "Reconocimiento Oro a la Excelencia",
      awarder: "Treda Solutions S.A.S.",
      description:
        "Por el desarrollo del microservicio de firma digital certificada y autenticación por WhatsApp.",
      year: 2022,
    },
  ],

  languages: [
    { name: "Español", level: "Nativo", proficiency: 5 },
    { name: "Inglés", level: "Intermedio", proficiency: 3 },
  ],

  volunteering: [
    {
      organization: "Fundación Huellas",
      role: "Docente Voluntario",
      description:
        "Acompañamiento académico y recreativo a niños y jóvenes, y apoyo a sistemas de información de la fundación.",
      start: "2017",
      end: "2023",
    },
  ],
} as const;
