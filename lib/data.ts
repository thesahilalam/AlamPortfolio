// ============================================================
//  lib/data.ts — Single source of truth for portfolio content
//  Edit THIS FILE to update any content on the portfolio.
// ============================================================

export const PROFILE = {
  name: 'Md Sahil Alam',
  title: 'Cybersecurity & Systems Researcher',
  tagline: 'Cybersecurity · Networking · Building Practical Tech',
  bio: [
    'I am a Computer Science & Engineering undergraduate at Jamia Hamdard University, New Delhi, with a strong focus on Cybersecurity, Network Security, and IT Infrastructure.',
    'My approach to technology is hands-on and practical. I spend my time in lab environments analyzing network traffic, testing wireless security protocols, auditing system configurations, and building functional software tools to automate technical tasks.',
    'My core strength lies in technical problem solving, understanding how systems and protocols interact, debugging complex issues, and leveraging modern development workflows to build working solutions.',
  ],
  location: 'New Delhi, India',
  email: 'sahilalam7@outlook.com',
  github: 'https://github.com/thesahilalam',
  linkedin: 'https://www.linkedin.com/in/thesahilalam/',
  instagram: 'https://www.instagram.com/thesahilalam/',
  resume: '/Sahil_Alam_Resume.pdf',
  availability: 'Available for Internships & Contracts',
};

export const EDUCATION = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Jamia Hamdard University',
    location: 'New Delhi',
    period: '2024 – 2027',
    note: 'Lateral Entry · 3-Year Program',
    description:
      'Network architecture, operating systems, security fundamentals, and software development.',
    status: 'In Progress',
    statusColor: '#3b82f6',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Amity University',
    location: 'Greater Noida',
    period: 'Completed 2024',
    note: '3-Year Program',
    description:
      'Networking essentials, data structures, Linux systems administration, and web technologies.',
    status: 'Completed',
    statusColor: '#22c55e',
  },
];

export type ProjectStatus = 'Completed' | 'In Development' | 'Planned' | 'Archived';

export const PROJECTS = [
  // ── FEATURED / COMPLETED ──────────────────────────────────
  {
    id: 'encoguard',
    number: '01',
    featured: true,
    title: 'EncoGuard',
    category: 'Network Security Auditing',
    status: 'Completed' as ProjectStatus,
    description:
      'A terminal-based network security auditing tool built around Nmap that converts raw network reconnaissance data into actionable vulnerability intelligence.',
    bullets: [
      'Automated host discovery, port scanning, and service/version fingerprinting.',
      'Live CVE correlation against the National Vulnerability Database (NVD) API.',
      'Interactive CLI with scan presets (Quick, Intense, Full, Ping) and JSON/CSV export.',
    ],
    tags: ['Python', 'Nmap', 'NVD API', 'Rich CLI', 'Requests'],
    tagColor: '#3b82f6',
    github: 'https://github.com/thesahilalam/EncoGuard',
    flagship: true,
  },
  {
    id: 'encopdf',
    number: '02',
    featured: true,
    title: 'EncoPDF-Unlocker v1.0',
    category: 'Security Utility · Academic',
    status: 'Completed' as ProjectStatus,
    academicNote: 'Jamia Hamdard University · B.Tech 6th Sem · Individual Project',
    officialTitle:
      'A High-Performance Multiprocessing-Based PDF Security & Recovery Suite',
    description:
      'An academic security utility exploring multiprocessing architectures and pattern-based recovery techniques for password-protected PDF documents.',
    bullets: [
      'Multi-core CPU parallelization running simultaneous password verification attempts.',
      'Dictionary, custom pattern, and localized format permutation engines.',
      'India-specific pattern generation with Aadhaar/PAN formats and session resume.',
    ],
    tags: ['Python', 'Multiprocessing', 'Security Research'],
    tagColor: '#dc2626',
    github: 'https://github.com/thesahilalam/EncoPDF-Unlocker',
    flagship: false,
  },
  {
    id: 'encoxaudio',
    number: '03',
    featured: true,
    title: 'EncoXaudio',
    category: 'Cross-Platform Desktop App',
    status: 'Completed' as ProjectStatus,
    description:
      'A lightweight, cross-platform desktop application for high-speed local video-to-audio extraction with multilingual support and a modern glassmorphic interface.',
    bullets: [
      'Tauri v2 + Rust backend with React/TypeScript frontend for native performance.',
      'Cross-platform: Windows, macOS, and Linux — minimal memory footprint.',
      'Drag-and-drop workflow with local FFmpeg media processing. No cloud dependency.',
    ],
    tags: ['Tauri v2', 'Rust', 'React', 'TypeScript', 'FFmpeg'],
    tagColor: '#8b5cf6',
    github: 'https://github.com/thesahilalam/EncoXaudio',
    flagship: false,
  },
];

export const ARCHIVED_PROJECTS = [
  'Weather Forecast Website',
  'Online Auction Platform',
  'Tourist Place Portal',
  'Currency Converter',
  'Gym Website',
  'Tic-Tac-Toe Game',
  'Per-Kg Calculator Extension',
];

export type SkillLevel = 'Hands-on' | 'Working Knowledge' | 'Learning' | 'Project Experience';

export const SKILLS = [
  {
    group: 'Security Tools',
    icon: '🛡️',
    items: [
      { name: 'Nmap', level: 'Hands-on' as SkillLevel },
      { name: 'Wireshark', level: 'Hands-on' as SkillLevel },
      { name: 'Metasploit', level: 'Hands-on' as SkillLevel },
      { name: 'Burp Suite', level: 'Hands-on' as SkillLevel },
      { name: 'Aircrack-ng / Wifite', level: 'Hands-on' as SkillLevel },
      { name: 'Airmon-ng / Reaver', level: 'Hands-on' as SkillLevel },
      { name: 'Hashcat', level: 'Working Knowledge' as SkillLevel },
    ],
  },
  {
    group: 'Security Concepts',
    icon: '🔐',
    items: [
      { name: 'Network Reconnaissance', level: 'Hands-on' as SkillLevel },
      { name: 'Wireless Security (WPA/WPS)', level: 'Hands-on' as SkillLevel },
      { name: 'Vulnerability Assessment', level: 'Working Knowledge' as SkillLevel },
      { name: 'Penetration Testing Fundamentals', level: 'Working Knowledge' as SkillLevel },
      { name: 'Packet/Handshake Capture', level: 'Hands-on' as SkillLevel },
      { name: 'IAM Fundamentals', level: 'Working Knowledge' as SkillLevel },
      { name: 'Web Security (Basic)', level: 'Learning' as SkillLevel },
    ],
  },
  {
    group: 'Networking & Infrastructure',
    icon: '🌐',
    items: [
      { name: 'Subnetting / CIDR / VLSM', level: 'Working Knowledge' as SkillLevel },
      { name: 'TCP/IP, DNS, DHCP, NAT', level: 'Working Knowledge' as SkillLevel },
      { name: 'Router / Wi-Fi Configuration', level: 'Hands-on' as SkillLevel },
      { name: 'CCTV / DVR / NVR / IP Camera Setup', level: 'Hands-on' as SkillLevel },
      { name: 'LAN Troubleshooting', level: 'Hands-on' as SkillLevel },
      { name: 'Cisco Packet Tracer', level: 'Working Knowledge' as SkillLevel },
      { name: 'VLAN / Firewall Concepts', level: 'Learning' as SkillLevel },
    ],
  },
  {
    group: 'Programming',
    icon: '💻',
    items: [
      { name: 'Python', level: 'Working Knowledge' as SkillLevel },
      { name: 'C / C++', level: 'Working Knowledge' as SkillLevel },
      { name: 'JavaScript', level: 'Working Knowledge' as SkillLevel },
      { name: 'Java', level: 'Working Knowledge' as SkillLevel },
      { name: 'PHP / SQL / HTML / CSS', level: 'Working Knowledge' as SkillLevel },
      { name: 'TypeScript / React', level: 'Project Experience' as SkillLevel },
      { name: 'Rust / Tauri', level: 'Project Experience' as SkillLevel },
    ],
  },
  {
    group: 'Linux Distributions',
    icon: '🐧',
    items: [
      { name: 'Kali Linux', level: 'Hands-on' as SkillLevel },
      { name: 'Parrot OS / BackBox', level: 'Hands-on' as SkillLevel },
      { name: 'Ubuntu / Zorin / Mint', level: 'Hands-on' as SkillLevel },
      { name: 'macOS', level: 'Hands-on' as SkillLevel },
      { name: 'VMware / Virtual Machines', level: 'Working Knowledge' as SkillLevel },
    ],
  },
  {
    group: 'Web & Deployment',
    icon: '🚀',
    items: [
      { name: 'WordPress / Elementor', level: 'Working Knowledge' as SkillLevel },
      { name: 'Bootstrap', level: 'Working Knowledge' as SkillLevel },
      { name: 'Domain / DNS / Hosting', level: 'Working Knowledge' as SkillLevel },
      { name: 'Git / GitHub', level: 'Working Knowledge' as SkillLevel },
      { name: 'API Integration', level: 'Working Knowledge' as SkillLevel },
      { name: 'Tailwind CSS', level: 'Project Experience' as SkillLevel },
    ],
  },
];

export const SERVICES = [
  {
    id: 'security',
    icon: '🛡️',
    title: 'Cybersecurity & Security Assessment',
    color: '#dc2626',
    items: [
      'Network vulnerability scanning & intelligence reporting',
      'Wireless security auditing (WPA/WPS testing & handshake analysis)',
      'Security tool setup and automated CLI scripting',
      'Penetration testing fundamentals in controlled environments',
      'IAM policy design & RBAC documentation',
    ],
    skills: ['Nmap', 'Wireshark', 'Metasploit', 'Burp Suite', 'Aircrack-ng', 'Kali Linux', 'Python'],
  },
  {
    id: 'network',
    icon: '🌐',
    title: 'Network & IT Infrastructure',
    color: '#3b82f6',
    items: [
      'Router, switch & Wi-Fi configuration & troubleshooting',
      'LAN topology design, subnetting (CIDR/VLSM) & IP allocation',
      'CCTV, DVR, NVR & IP Camera setup & surveillance wiring',
      'Cisco Packet Tracer simulation & network diagnostics',
      'Small office IT support & hardware/software setup',
    ],
    skills: ['TCP/IP & DNS', 'Router & Switch Config', 'Subnetting / CIDR', 'CCTV / NVR Setup', 'Packet Tracer', 'LAN Troubleshooting'],
  },
  {
    id: 'web',
    icon: '💻',
    title: 'Web & Software Development',
    color: '#8b5cf6',
    items: [
      'High-performance desktop utilities (Tauri v2 + Rust)',
      'Modern web applications (React, Next.js, TypeScript, Tailwind)',
      'Custom Python automation scripts & API integrations',
      'WordPress development, domain setup & server hosting',
    ],
    skills: ['Python', 'Rust / Tauri', 'TypeScript / React', 'C / C++', 'Java', 'PHP / SQL', 'Tailwind CSS', 'Git / GitHub'],
  },
  {
    id: 'support',
    icon: '⚙️',
    title: 'Systems & OS Administration',
    color: '#22c55e',
    items: [
      'Linux distribution administration (Kali, Parrot OS, Ubuntu, Mint)',
      'Virtual Machine setup (VMware / VirtualBox lab environments)',
      'System optimization, memory management & log analysis',
      'Automated batch scripts for system maintenance',
    ],
    skills: ['Kali Linux', 'Parrot OS', 'Ubuntu / Debian', 'VMware', 'Bash Scripting', 'System Diagnostics'],
  },
];

export const EXPERIENCE = [
  {
    id: 'khabai',
    role: 'Web Development Intern',
    company: 'Khabai Tech',
    period: 'During Diploma (Two periods)',
    mode: 'Virtual',
    description:
      'Developed web interfaces including a weather forecast platform and an online auction application during two internship periods while completing my Diploma.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
    projects: ['Weather Forecast Website', 'Online Auction Platform'],
  },
  {
    id: 'nukaichau',
    role: 'IT & Technical Operations',
    company: 'Nukaichau',
    period: '~1 Month',
    mode: 'On-site · New Delhi',
    description:
      'Provided day-to-day IT support including employee computer troubleshooting and hardware/software problem resolution. Also assisted with e-commerce operations and general business processes.',
    skills: ['IT Support', 'Troubleshooting', 'Hardware/Software'],
    projects: [],
  },
  {
    id: 'tcs',
    role: 'Cybersecurity Analyst Job Simulation',
    company: 'Tata Consultancy Services (Forage)',
    period: 'Completed',
    mode: 'Virtual Simulation',
    description:
      'Completed TCS\'s virtual cybersecurity simulation covering Identity & Access Management (IAM). Designed RBAC matrices and authored technical documentation explaining security concepts for non-technical stakeholders.',
    skills: ['IAM', 'RBAC', 'Security Documentation'],
    projects: [],
    note: 'Virtual simulation — not a TCS employment role.',
  },
];
