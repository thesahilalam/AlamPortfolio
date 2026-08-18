// ============================================================
//  lib/data.ts — Single source of truth for portfolio content
//  Edit THIS FILE to update any content on the portfolio.
// ============================================================

export const PROFILE = {
  name: 'Md Sahil Alam',
  title: 'Aspiring Cybersecurity Analyst',
  tagline: 'Network Security • Penetration Testing • Web Development',
  bio: [
    'Computer Science undergraduate at Jamia Hamdard University with a focus on network security, basic penetration testing, and software development.',
    'I focus on practical lab work—analyzing network traffic, testing Wi-Fi security, and building working security utilities.',
    'I enjoy solving technical problems, working with network protocols, and writing scripts to automate security tasks.',
  ],
  location: 'New Delhi, India',
  email: 'sahilalam7@outlook.com',
  github: 'https://github.com/thesahilalam',
  linkedin: 'https://www.linkedin.com/in/thesahilalam/',
  instagram: 'https://www.instagram.com/thesahilalam/',
  resume: '/Sahil_Alam_Resume.pdf',
  availability: 'Available for Internships & Projects',
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
      'A Python CLI tool built with Nmap that scans local networks and matches open ports with known CVE vulnerabilities.',
    bullets: [
      'Discovers live hosts, open ports, and running service versions.',
      'Checks detected services against the NIST National Vulnerability Database (NVD) API.',
      'Includes scan presets (Quick, Full, Ping) and exports reports to JSON/CSV.',
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
      'A Python tool for testing password-protected PDF files using multiple recovery methods.',
    bullets: [
      'Uses multi-core CPU parallel processing to test passwords efficiently.',
      'Supports dictionary lists and custom number/date pattern generators.',
      'Includes presets for common number formats and supports session resume.',
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
      'A cross-platform desktop app for converting videos to audio locally, with support for 6 languages.',
    bullets: [
      'Built with Tauri v2 (Rust) and React/TypeScript for a responsive native desktop app.',
      'Runs on Windows, macOS, and Linux.',
      'Simple drag-and-drop interface powered by local FFmpeg—no cloud upload required.',
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
      'Network scanning and vulnerability assessments',
      'Wi-Fi security testing and basic audits',
      'Security tool setup and Python automation scripts',
      'Basic penetration testing in lab environments',
    ],
    skills: ['Nmap', 'Wireshark', 'Metasploit', 'Burp Suite', 'Aircrack-ng', 'Kali Linux', 'Python'],
  },
  {
    id: 'network',
    icon: '🌐',
    title: 'Network & IT Infrastructure',
    color: '#3b82f6',
    items: [
      'Router, switch, and Wi-Fi setup and troubleshooting',
      'LAN setup, subnetting (CIDR/VLSM), and IP planning',
      'CCTV, DVR, NVR, and IP camera installation',
      'Network simulation and diagnostics in Cisco Packet Tracer',
    ],
    skills: ['TCP/IP', 'Router & Switch Config', 'Subnetting / CIDR', 'CCTV / NVR Setup', 'Packet Tracer', 'LAN Troubleshooting'],
  },
  {
    id: 'web',
    icon: '💻',
    title: 'Web & Software Development',
    color: '#8b5cf6',
    items: [
      'Desktop utilities built with Tauri (Rust) and React',
      'Web applications built with React, Next.js, and TypeScript',
      'Custom Python automation scripts and API connections',
    ],
    skills: ['Python', 'Rust / Tauri', 'TypeScript / React', 'Next.js', 'Git / GitHub'],
  },
  {
    id: 'support',
    icon: '⚙️',
    title: 'Systems & OS Administration',
    color: '#22c55e',
    items: [
      'Linux setup and administration (Kali, Parrot, Ubuntu, Mint)',
      'Virtual machine and lab setup (VMware / VirtualBox)',
      'System troubleshooting, performance checks, and shell scripting',
    ],
    skills: ['Kali Linux', 'Parrot OS', 'Ubuntu / Debian', 'VMware', 'Bash Scripting'],
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
      'Built web interfaces for a weather app and an online auction platform during two diploma internship periods.',
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
      'Provided hands-on IT support, resolved hardware and software issues for team members, and assisted with daily e-commerce operations.',
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
      'Completed a virtual cybersecurity simulation focused on Identity & Access Management (IAM). Created RBAC matrices and wrote clear security guides for non-technical teams.',
    skills: ['IAM', 'RBAC', 'Security Documentation'],
    projects: [],
    note: 'Virtual simulation — not a TCS employment role.',
  },
];
