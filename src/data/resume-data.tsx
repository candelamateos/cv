import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  initials: "CMV",
  personalWebsiteUrl: "https://candelamateos.com",
  name: "Candela Mateos Valverde",
  location: "Madrid, Spain",
  locationLink: "https://www.google.com/maps/place/Madrid",
  about: "Last year student of the Double Bachelor in Computer Engineering and Mathematics",
  summary: (
    <>
      Double Bachelor student in Mathematics and Computer Engineering with a keen interest in participating in high-impact engineering projects. Developer and published music artist (Spotify: La extinción), combining a deep understanding of algorithmic complexity with a passion for audio engineering and creation.
    </>
  ),
  avatarUrl: "/FOTOCV1.jpg",
  contact: {
    email: "candelamateosvalverde@gmail.com",
    tel: "+34 662 049 409",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/candelamateos",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/candelamateos/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Universidad Complutense de Madrid",
      degree: "Double Bachelor's Degree in Mathematics and Computer Engineering",
      description: (
        <>
          Relevant Coursework: Data Structures and Algorithms, Discrete Mathematics, Linear Algebra, Probability and Statistics, Software Engineering, Database Systems, Operating Systems, Numerical Analysis.
        </>
      ),
      start: "2021",
      end: "2025",
    },

{
      school: "Universität Leipzig",
      degree: "Exchange Program in Computer Science and Mathematics",
      start: "2023",  
      end: "2024",
},   
{
      school: "University of Seville",
      degree: "Estalmat Project",
      start: "2017",
      end: "2019",
      description: (
        <>
          Selected for a prestigious program by the Royal Spanish Academy of Sciences for students with exceptional mathematical aptitude.
          Focused on advanced logic and mathematical theory.
        </>
      ),
    }
	

  ],
  work: [
    {
      company: "Jóvenes Promesas",
      link: "https://jovenespromesas.org/",
      badges: ["Remote", "Data Bases", "Scrum", "Entrepreneurship", "Leadership", "Social Impact"],
      title: "Administrator",
      start: "2021",
      end: "2023",
      description: (
        <>
          Supervised the coordination and management of programs aimed at fostering young talent in communication.
          Managed databases and implemented Scrum methodologies to streamline project delivery.
        </>
      ),
    },

    {
      company: "Camps for friends",
      link: "camps-for-friends.com",
      badges: [
        "On Site", "Leadership", "Organization", "Communication in German", "Problem Solving"
      ],
      title: "Camp Coordinator",
      start: "2025",
      end: "2025",
      description: (
        <>
          I managed the operational logistics and care of over 100 children at a language camp in Germany.
          I coordinated activities, provided translation, and solved both logistical and child-related problems.
        </>
      ),
    },
    {
      company: "Freelance teacher",
      link: "https://www.freelancer.com/u/candelamateos",
      badges: ["Remote", "Python", "Mathematics", "Communication", "Problem Solving", "Online Classes"],
      title: "STEM Mentor for Young Students",
      start: "2024",
      end: "2025",
      description: (
        <>
         Designed and delivered technical curriculum for gifted students, focusing on Data Analysis with Pandas and NumPy 
         and Algorithm Visualization with Matplotlib. Mentored students in building functional games using Pygame, emphasizing logic 
         and event-driven programming.
      
        </>),
    },
    
  ],
  skills: [
   "Languages: Python, Java, C++, TypeScript, Haskell, C",
    "Web/Backend: React, Next.js, Node.js, SQL, NoSQL",
    "Mathematics/Data: MATLAB, R, LaTeX, Algorithmic Optimization, Statistical Analysis",
    "Tools: Git, Bash, Scrum, Docker",
    "Languages: Spanish (Native), English (C1), German (B2)"
  ],
  projects: [

    {
      title: "Travel Agent Management System",
      techStack: [
        "Java",
        "Swing/JavaFX", 
        "JSON", "OOP", 
        "Design Patterns"
      ],
      description:
        "Developed a robust management system focusing on Software Engineering principles and clean architecture. Implemented JSON-based data persistence for image metadata and user records, ensuring efficient data serialization and system state management through Object-Oriented Design.",
      link: {
        label: "Agencia de viajes",
        href: "https://github.com/candelamateos/IS2",
      },
    },
    {
      title: "La extinción",
      techStack: ["Music Composition", "Piano", "Digital Audio Workstation", "Sound Design", "Artist management"],
      description:
        "A musical composition project published on Spotify and other platforms, showcasing skills in music production and composition.",
      link: {
        label: "La extinción",
        href: "https://open.spotify.com/intl-es/album/2sBtkGrDFP1KEw9TEVR390?utm_source=copy-link&utm_medium=social&utm_content=link_in_bio",
      },
    },
     {
      title: "PlantsVsZombies",
      techStack: ["Java", "JUnit", "OOP"],
      description: "Engineered a Java-based strategy game using Test-Driven Development (TDD). Achieved high code coverage with JUnit, ensuring the reliability of complex game logic and Object-Oriented interactions.",
      link: {
        label: "PlantsVsZombies GitHub",
        href: "https://github.com/candelamateos/PlantsVsZombies",
      },
    },
    {
    title: "Collaborative Music Social Platform (AI-Driven)",
    techStack: ["Figma", "Product Design", "AI Personalization", "Systems Modeling", "User Research"],
    description: 
      "Architected the full-cycle modeling of a social music app featuring AI-generated collaborative jams and playlists. Led the four stages of product development: Investigation , Conceptualization, Prototyping (Figma modeling), and Validation."  ,
  link: {
    label: "Figma Prototype",
    href: "https://chief-enamel-82440898.figma.site",
  },
},
{
  title: "Professional Engineering Portfolio",
  techStack: ["TypeScript", "Next.js 14", "Tailwind CSS", "Vercel CI/CD"],
  description: (
    "Developed and deployed a accessible web-based curriculum. Forked and customized an open-source architecture to implement a new typed data schema. Optimized for print-to-PDF consistency and integrated Vercel CI/CD for automated deployment pipelines."
  ),
  link: {
    label: "candelamateoscv.vercel.app",
    href: "https://candelamateoscv.vercel.app/",
  },
},
  ],
} as const;
