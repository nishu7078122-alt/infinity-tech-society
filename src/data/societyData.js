export const BRAND_CONFIG = {
  name: "INFINITY",
  subtitle: "THE TECH SOCIETY",
  institution: "SRI GURU GOBIND SINGH COLLEGE OF COMMERCE",
  university: "University of Delhi",
  fullInstitution: "SGGSCC • University of Delhi",
  slogan: "Learn. Create. Design. Build. Innovate.",
  sloganPrefix: "Learn. Create. Design. Build. ",
  sloganHighlight: "Innovate.",
  description: "A student-driven tech society at SGGSCC, University of Delhi, fostering innovation, collaboration and real-world impact through technology.",
  enthusiastsCount: "1,200+",
  established: "2015",
  contactEmail: "infinity@sggscc.ac.in",
  location: "Sri Guru Gobind Singh College of Commerce, Pitampura, New Delhi, Delhi 110034"
};

export const STATS = [
  {
    id: "community",
    value: "1,200+",
    label: "Community Members",
    icon: "Users",
    description: "Active developers, designers, and tech enthusiasts across Delhi University."
  },
  {
    id: "events",
    value: "30+",
    label: "Events & Workshops",
    icon: "Calendar",
    description: "Annual hackathons, bootcamps, gaming showdowns, and speaker sessions."
  },
  {
    id: "domains",
    value: "5",
    label: "Tech Domains",
    icon: "Layers",
    description: "Specialized wings covering cutting-edge industry technology sectors."
  },
  {
    id: "opportunities",
    value: "∞",
    label: "Opportunities",
    icon: "Trophy",
    description: "Internships, hackathon bounties, mentorships, and open-source contributions."
  }
];

export const TECH_DOMAINS = [
  {
    id: "dev",
    title: "Development",
    subtitle: "Build • Deploy • Scale",
    icon: "Code",
    description: "Full-stack web architectures, distributed systems, cloud infrastructure, and mobile application engineering.",
    techStack: ["React", "Next.js", "Node.js", "TypeScript", "Docker", "PostgreSQL", "Go"]
  },
  {
    id: "cyber",
    title: "Cybersecurity",
    subtitle: "Protect • Monitor • Defend",
    icon: "Shield",
    description: "Offensive and defensive security, penetration testing, cryptography, network forensics, and ethical hacking.",
    techStack: ["Linux", "Wireshark", "Burp Suite", "Metasploit", "Reverse Engineering", "CTF"]
  },
  {
    id: "aiml",
    title: "AI / ML",
    subtitle: "Learn • Research • Innovate",
    icon: "Cpu",
    description: "Deep learning models, agentic workflows, natural language processing, computer vision, and neural network pipelines.",
    techStack: ["PyTorch", "TensorFlow", "HuggingFace", "LangChain", "OpenCV", "Python"]
  },
  {
    id: "gaming",
    title: "Gaming",
    subtitle: "Compete • Create • Collaborate",
    icon: "Gamepad2",
    description: "Esports management, competitive tournament hosting, game engine mechanics, and immersive level design.",
    techStack: ["Unreal Engine", "Unity", "C#", "Blender", "Esports Logistics", "Steam"]
  },
  {
    id: "design",
    title: "Design",
    subtitle: "Visualize • Craft • Deliver",
    icon: "PenTool",
    description: "User research, high-fidelity UI/UX prototyping, 3D motion systems, and brand design systems.",
    techStack: ["Figma", "Blender", "Spline", "After Effects", "Tailwind CSS", "Design Systems"]
  }
];

export const EVENTS = [
  {
    id: "game-fest-2026",
    badge: "FLAGSHIP EVENT",
    title: "Game Fest 2026",
    subtitle: "The Annual Gaming Showdown by Infinity",
    date: "19 Feb 2026",
    venue: "Seminar Hall, SGGSCC",
    category: "Gaming & Esports",
    image: "/assets/controller-only.png",
    fullImage: "/assets/gamefest-event.png",
    overview: "Game Fest is Delhi University's premiere gaming championship hosted annually by Infinity. Compete across PC and console titles with state-of-the-art gaming stations, live shoutcasting, and a total prize pool of ₹1,00,000.",
    schedule: [
      { time: "09:30 AM", title: "Registration & Hardware Setup" },
      { time: "10:30 AM", title: "Valorant & FIFA 26 Qualifiers" },
      { time: "02:00 PM", title: "BGMI & Tekken 8 Knockouts" },
      { time: "04:30 PM", title: "Grand Finals & Trophy Ceremony" }
    ],
    prizes: "₹1,00,000 + Sponsored Hardware & Medals",
    isRegistrationOpen: true
  },
  {
    id: "hackinfinity-2026",
    badge: "ANNUAL HACKATHON",
    title: "HackInfinity 2026",
    subtitle: "36-Hour National Code Sprint",
    date: "15-16 Mar 2026",
    venue: "Main Auditorium, SGGSCC",
    category: "Hackathon",
    image: "/assets/bulletin-ai.png",
    overview: "Assemble teams of 2 to 4 to build impactful software solutions in Agentic AI, FinTech, Cyber Security, and Web3. Mentored by industry leaders with real-world developer APIs.",
    schedule: [
      { time: "Day 1, 09:00 AM", title: "Opening Ceremony & Problem Tracks" },
      { time: "Day 1, 11:00 AM", title: "Hacking Begins" },
      { time: "Day 2, 02:00 PM", title: "Project Demos to Jury" },
      { time: "Day 2, 05:00 PM", title: "Results Announcement" }
    ],
    prizes: "₹2,50,000 Cash Pool + Cloud Credits",
    isRegistrationOpen: true
  },
  {
    id: "cybershield-2026",
    badge: "WORKSHOP",
    title: "CyberShield CTF & Workshop",
    subtitle: "Hands-on Red vs Blue Team Defense",
    date: "04 Apr 2026",
    venue: "Computer Center 3, SGGSCC",
    category: "Cybersecurity",
    image: "/assets/bulletin-cyber.png",
    overview: "An intensive live Capture The Flag (CTF) tournament preceded by a 3-hour masterclass on network vulnerabilities, web exploitation, and modern zero-day mitigation techniques.",
    schedule: [
      { time: "10:00 AM", title: "Zero-Day Analysis & Threat Vectors" },
      { time: "01:00 PM", title: "CTF Live Sandbox Launch" },
      { time: "04:00 PM", title: "Flag Submissions & Debrief" }
    ],
    prizes: "Exclusive Certifications & Bounty Vouchers",
    isRegistrationOpen: true
  }
];

export const LEADERSHIP_TEAM = [
  {
    id: "gurkirat",
    name: "Gurkirat Singh",
    role: "President",
    tenure: "2025 - 2026",
    department: "B.Sc (Hons) Computer Science",
    bio: "Passionate about distributed cloud systems, community building, and leading tech-driven student initiatives across Delhi University.",
    socials: { github: "#", linkedin: "#", twitter: "#" }
  },
  {
    id: "ananya",
    name: "Ananya Sharma",
    role: "Vice President",
    tenure: "2025 - 2026",
    department: "B.Com (Hons)",
    bio: "Driving strategic partnerships, sponsor relationships, and community expansion for Infinity's flagship events.",
    socials: { github: "#", linkedin: "#", twitter: "#" }
  },
  {
    id: "raghav",
    name: "Raghav Malhotra",
    role: "Technical Head",
    tenure: "2025 - 2026",
    department: "B.Sc (Hons) Computer Science",
    bio: "Full-stack developer and AI researcher focused on agentic systems, scalable web apps, and mentoring juniors.",
    socials: { github: "#", linkedin: "#", twitter: "#" }
  },
  {
    id: "kabir",
    name: "Kabir Grover",
    role: "Operations & Esports Lead",
    tenure: "2025 - 2026",
    department: "B.A. (Hons) Business Economics",
    bio: "Spearheading event logistics, production management, and college gaming tournaments with precision.",
    socials: { github: "#", linkedin: "#", twitter: "#" }
  }
];

export const TECH_BULLETINS = [
  {
    id: "rise-of-agentic-ai",
    title: "The Rise of Agentic AI",
    snippet: "How autonomous AI is reshaping the next decade.",
    date: "12 Nov 2026",
    readTime: "4 min read",
    category: "Artificial Intelligence",
    image: "/assets/bulletin-ai.png",
    author: "Raghav Malhotra",
    content: `
Autonomous AI agents are transitioning from conversational chatbots into goal-driven systems capable of reasoning, executing complex multi-step workflows, and collaborating with software tools.

Unlike static generative models, agentic workflows utilize iterative reflection, dynamic memory retrieval, and API integration. This paradigm shift enables machines to write, test, debug, and deploy software autonomously while maintaining human-in-the-loop oversight.

At Infinity Tech Society, our AI/ML wing is actively building and benchmarking local multi-agent simulations to empower students with production-grade AI engineering capabilities.
    `
  },
  {
    id: "spatial-computing-next-interface",
    title: "Spatial Computing: The Next Interface",
    snippet: "From screens to immersive experiences.",
    date: "08 Nov 2026",
    readTime: "5 min read",
    category: "Immersive Tech",
    image: "/assets/bulletin-spatial.png",
    author: "Ishaan Mathur",
    content: `
With the rapid maturation of high-density micro-OLED displays and low-latency computer vision tracking, spatial computing is dissolving the boundary between digital pixels and the physical environment.

Designing for three-dimensional user interfaces requires an entirely new lexicon: eye-gaze intent, micro-gestures, depth layering, and spatial audio cues.

As developers, mastering WebXR, Three.js, and spatial shaders will be as fundamental in the coming decade as responsive web design was in the 2010s.
    `
  },
  {
    id: "cyber-hygiene-for-students",
    title: "Cyber Hygiene for Students",
    snippet: "Simple practices for a safer digital life.",
    date: "03 Nov 2026",
    readTime: "3 min read",
    category: "Cybersecurity",
    image: "/assets/bulletin-cyber.png",
    author: "Harpreet Kaur",
    content: `
In an era of AI-generated phishing campaigns, session hijacking, and pervasive credential harvesting, proactive cyber hygiene is the first line of defense for every university student.

Essential safeguards include:
1. Enabling hardware or passkey-based Multi-Factor Authentication (MFA).
2. Segmenting primary email accounts from disposable social registrations.
3. Exercising strict caution with third-party OAuth app permissions on GitHub and Google accounts.
4. Utilizing encrypted DNS and avoiding unencrypted public Wi-Fi without VPN tunnels.
    `
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Game Fest Arena",
    category: "Gaming",
    caption: "Esports players battling in the Grand Finals at SGGSCC Auditorium.",
    image: "/assets/gamefest-event.png"
  },
  {
    id: 2,
    title: "Infinity Leadership 2025-26",
    category: "Team",
    caption: "The executive committee driving technical excellence at University of Delhi.",
    image: "/assets/executive-team.png"
  },
  {
    id: 3,
    title: "Campus Tech Installation",
    category: "Campus",
    caption: "The illuminated 3D Infinity monument standing in front of the SGGSCC campus building at night.",
    image: "/assets/hero-sculpture.png"
  },
  {
    id: 4,
    title: "Agentic AI Workshop",
    category: "Workshops",
    caption: "Hands-on machine learning and autonomous agent development lab session.",
    image: "/assets/bulletin-ai.png"
  },
  {
    id: 5,
    title: "Spatial Interface Lab",
    category: "Innovation",
    caption: "Exploring WebXR spatial interaction models with mixed-reality headsets.",
    image: "/assets/bulletin-spatial.png"
  },
  {
    id: 6,
    title: "Cyber Defense CTF",
    category: "Cybersecurity",
    caption: "Red vs Blue team ethical hacking tournament in progress.",
    image: "/assets/bulletin-cyber.png"
  }
];
