/* =====================================================================
   C9_VECTOR portfolio — configuration
   ---------------------------------------------------------------------
   This file is PUBLIC. Never put tokens, secrets or passwords here.
   Secrets (GitHub token, webhook secret, WhatsApp token) belong in the
   optional backend's .env file only.
   ===================================================================== */
const CONFIG = {
  /* ---------- Identity ---------- */
  portfolioName: "Muhammad Umer",
  handle: "C9_VECTOR",
  githubUsername: "cyber-vector",
  githubUrl: "https://github.com/cyber-vector",
  linktreeUrl: "https://linktr.ee/cyber_vector",

  /* ---------- GitHub synchronisation (Mode A: no backend) ---------- */
  githubSyncEnabled: true,
  cacheMinutes: 10,            // how long a visitor's browser reuses GitHub data
  includeForks: false,         // show forked repositories?
  hideArchived: false,         // hide archived repositories?
  excludeRepos: ["cyber-vector"], // repo names to never show (e.g. the profile README repo)

  /* Optional backend (Mode B). Leave "" to use GitHub directly.
     Example: "https://api.your-domain.com"  (also add it to connect-src in index.html) */
  apiBase: "",

  /* ---------- Contact & social links ----------
     Only links you fill in are displayed. Empty string = hidden. Nothing is invented. */
  email: "",
  whatsappEnabled: false,      // set true AND fill socials.whatsapp to show a WhatsApp link
  socials: {
    github:    "https://github.com/cyber-vector",
    linktree:  "https://linktr.ee/cyber_vector",
    whatsapp:  "",             // e.g. "https://wa.me/92XXXXXXXXXX"
    instagram: "",
    discord:   "",
    tryhackme: ""
  },

  /* ---------- Tool classification ----------
     A repository becomes a "SECURITY TOOL" when one of these words appears in its
     TOPICS or DESCRIPTION. Repository names are deliberately NOT used to guess. */
  toolKeywords: [
    "tool", "security", "cybersecurity", "osint", "scanner", "pentest",
    "soc", "blue-team", "red-team", "automation"
  ],

  /* Optional per-repository overrides, keyed by repository name (case and - _ are ignored).
       tool: true|false   force or forbid the "tool" classification
       label:             short category text shown on the card
       demoUrl / docsUrl: extra buttons (shown only when set)
       aliases:           other repo names that should match this entry */
  toolOverrides: {
    "vectoria":    { tool: true, label: "OSINT tool" },
    "vector-osint": { tool: true, label: "OSINT tool" },
    "c9_pishing":  { tool: true, label: "Security education / testing", aliases: ["c9_phishing", "c9-phishing"] }
  },

  /* ---------- Hero orbit labels ---------- */
  heroLabels: [
    "NETWORK", "THREAT INTELLIGENCE", "SOC", "BLUE TEAM",
    "RED TEAM", "OSINT", "WEB SECURITY", "THREAT HUNTING"
  ],

  /* ---------- Specialization cards ---------- */
  specializations: [
    {
      id: "blue", title: "BLUE TEAM", tone: "blue", tagline: "Detect and respond.",
      items: ["SOC Operations", "Threat Detection", "Log Analysis", "Incident Response", "Threat Hunting", "SIEM", "Detection Engineering"]
    },
    {
      id: "red", title: "RED TEAM", tone: "red", tagline: "Test and break, ethically.",
      items: ["Ethical Hacking", "Web Security", "Reconnaissance", "Vulnerability Assessment", "Security Testing", "CTFs"]
    },
    {
      id: "research", title: "SECURITY RESEARCH", tone: "green", tagline: "Understand and build.",
      items: ["OSINT", "Security Automation", "Security Tool Development", "Research", "Scripting"]
    }
  ],

  /* ---------- Skill map ----------
     Set  confirmed: false  on anything you do not want shown yet.
     Descriptions explain what the technology IS; edit them to say how YOU use it. */
  skillGroups: {
    core:     { label: "Foundation",  color: "#F5F5F5" },
    blue:     { label: "Blue Team",   color: "#00A8FF" },
    red:      { label: "Red Team",    color: "#FF304F" },
    research: { label: "Research",    color: "#00FF41" }
  },
  skillNodes: [
    { id: "linux",      label: "Linux",        group: "core",     confirmed: true, desc: "The operating system most security tooling is built for. Shell, permissions, processes and logs.", links: ["python", "networking", "nmap"] },
    { id: "python",     label: "Python",       group: "core",     confirmed: true, desc: "General-purpose scripting language used for automation, parsers and small security tools.", links: ["osint", "git", "yara"] },
    { id: "networking", label: "Networking",   group: "core",     confirmed: true, desc: "TCP/IP, DNS, HTTP and the protocols every detection and every attack travels over.", links: ["nmap", "wireshark", "websec"] },
    { id: "git",        label: "Git",          group: "core",     confirmed: true, desc: "Version control. Keeps a public, reviewable history of every tool and experiment.", links: ["github"] },
    { id: "github",     label: "GitHub",       group: "core",     confirmed: true, desc: "Where the code lives. Repositories on this site are synchronised from here automatically.", links: [] },
    { id: "nmap",       label: "Nmap",         group: "red",      confirmed: true, desc: "Network mapper for host discovery and service enumeration on systems you are authorised to test.", links: ["websec"] },
    { id: "burp",       label: "Burp Suite",   group: "red",      confirmed: true, desc: "Intercepting proxy for inspecting and testing web application traffic.", links: ["websec"] },
    { id: "websec",     label: "Web Security", group: "red",      confirmed: true, desc: "How web applications fail: injection, broken access control, misconfiguration and more.", links: ["osint"] },
    { id: "wireshark",  label: "Wireshark",    group: "blue",     confirmed: true, desc: "Packet analyser for reading captures and understanding what really crossed the wire.", links: ["siem"] },
    { id: "siem",       label: "SIEM",         group: "blue",     confirmed: true, desc: "Central log collection and correlation, the working surface of a SOC.", links: ["sigma", "mitre"] },
    { id: "mitre",      label: "MITRE ATT&CK", group: "blue",     confirmed: true, desc: "A public knowledge base of adversary tactics and techniques, used to describe and map behaviour.", links: ["sigma", "yara"] },
    { id: "sigma",      label: "Sigma",        group: "blue",     confirmed: true, desc: "A vendor-neutral rule format for describing log-based detections.", links: [] },
    { id: "yara",       label: "YARA",         group: "blue",     confirmed: true, desc: "Pattern-matching rules for identifying and classifying malware samples.", links: [] },
    { id: "osint",      label: "OSINT",        group: "research", confirmed: true, desc: "Open-source intelligence: collecting and verifying information from public sources.", links: [] }
  ],

  /* ---------- Research focus areas ----------
     Add real entries with date / link / technologies as you publish work.
     Fields left empty are simply not shown. */
  research: [
    { title: "Security research",      category: "Research",    date: "", summary: "Reading, reproducing and documenting how real-world security issues work.", technologies: ["Python", "Linux"], link: "" },
    { title: "CTF learning",           category: "Red Team",    date: "", summary: "Capture-the-flag practice for building hands-on offensive fundamentals.", technologies: ["Web Security", "Linux"], link: "" },
    { title: "OSINT research",         category: "Research",    date: "", summary: "Collecting, correlating and verifying public information ethically.", technologies: ["OSINT", "Python"], link: "" },
    { title: "Detection engineering",  category: "Blue Team",   date: "", summary: "Turning attacker behaviour into detections that are testable and maintainable.", technologies: ["Sigma", "YARA", "SIEM"], link: "" },
    { title: "Threat analysis",        category: "Blue Team",   date: "", summary: "Mapping observed behaviour to techniques to understand intent and impact.", technologies: ["MITRE ATT&CK", "Wireshark"], link: "" },
    { title: "Security automation",    category: "Engineering", date: "", summary: "Scripting the repetitive parts of investigation and testing.", technologies: ["Python", "Git"], link: "" }
  ]
};
