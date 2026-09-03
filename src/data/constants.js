export const NAV = ["Home","About","Skills","Experience","Projects","Education","Contact"];

export const PERSON = {
  name:     "Muhammad Anas Raza",
  role:     "System & Network Administrator",
  tags:     ["Infrastructure","Virtualization","Cloud","DevOps"],
  email:    "manasraza18@gmail.com",
  phone:    "(+92) 3209241276",
  location: "Karachi, Pakistan",
  linkedin: "https://www.linkedin.com/in/muhammad-anas-raza-882327259/",
  about:    "IT and Network Professional with 3+ years of hands-on experience in system administration, enterprise networking, and cloud environments. Skilled in Windows Server, Active Directory, DNS/DHCP, VMware ESXi, and LAN/WAN infrastructure. Experienced with Azure, PowerShell scripting, CI/CD pipelines, Docker, and Kubernetes. Focused on security, availability, and performance across dev, QA, and production environments.",
  stats:    [{v:"3+",l:"Years Exp."},{v:"3",l:"Companies"},{v:"6",l:"Projects"},{v:"3",l:"Certifications"}],
};

export const SKILLS = [
  {cat:"System Admin",    icon:"🖥️", color:"#7c3aed", items:[
    {n:"Windows Server",  p:90},{n:"Linux",           p:75},{n:"Active Directory",p:88},
    {n:"Group Policy",    p:85},{n:"IIS (ASP/PHP)",   p:80},{n:"PowerShell/Bash", p:78},
    {n:"Backup & Recovery",p:82},{n:"Patch Management",p:85},
  ]},
  {cat:"Networking",      icon:"🌐", color:"#06b6d4", items:[
    {n:"LAN/WAN",         p:90},{n:"VLANs",           p:88},{n:"Routing & Switching",p:87},
    {n:"DNS & DHCP",      p:90},{n:"Firewall Config", p:85},{n:"VPN Connectivity", p:82},
    {n:"TCP/IP",          p:92},{n:"CCNA Certified",  p:95},
  ]},
  {cat:"Virtualization & Cloud",icon:"☁️",color:"#10b981",items:[
    {n:"VMware ESXi",     p:85},{n:"Hyper-V",         p:78},{n:"Microsoft Azure",  p:80},
    {n:"Azure VMs/VNet",  p:82},{n:"NSG & Load Balancer",p:78},{n:"AD DS",         p:85},
  ]},
  {cat:"DevOps & Automation",icon:"🚀",color:"#f59e0b",items:[
    {n:"Docker",          p:75},{n:"Kubernetes",       p:70},{n:"Jenkins CI/CD",   p:72},
    {n:"ArgoCD/GitOps",   p:68},{n:"GitHub",           p:85},{n:"Nginx",           p:78},
  ]},
];

export const TECH_PILLS = [
  "Windows Server","VMware ESXi","Azure","Active Directory","Docker","Kubernetes",
  "Jenkins","Linux","CCNA","IIS","Nginx","MySQL","PowerShell","ArgoCD","GitHub",
];

export const EXPERIENCES = [
  {
    role:"Network Executive", company:"Logicose Pvt. Ltd",
    type:"Full-time", period:"Mar 2025 – Present", location:"Karachi, Pakistan",
    color:"#7c3aed",
    bullets:[
      "Configured LAN/WAN, VLANs, routers, switches, DNS, DHCP, VPN & firewall policies.",
      "Administered Windows Server — installation, patching, hardening & optimization.",
      "Managed Active Directory, GPO, DNS, DHCP, file services & access control.",
      "Deployed VMware ESXi / Hyper-V VMs — provisioning, snapshots & monitoring.",
      "Provisioned Azure VMs, Storage, Load Balancer, NSGs & enterprise cloud resources.",
      "Supported DevOps, Dev, QA & Demo environments with access & compliance management.",
      "Automated tasks via PowerShell/Bash; resolved CI/CD pipeline issues.",
      "Hosted ASP.NET MVC & PHP apps on IIS with secure external accessibility.",
    ],
    achievement:"Improved uptime & fault tolerance; deepened expertise in virtualization, cloud & networking.",
    tech:["Windows Server","VMware ESXi","Azure","AD","PowerShell","IIS","Firewall","VLANs"],
  },
  {
    role:"System & Network Administrator", company:"Burooj Institute",
    type:"Full-time", period:"Feb 2024 – Jan 2025", location:"Karachi, Pakistan",
    color:"#06b6d4",
    bullets:[
      "Managed Windows Server & Linux-based servers — installation & configuration.",
      "Created & managed user accounts, access permissions & documentation.",
      "Maintained institute network, VLANs & switches for optimized connectivity.",
      "Managed live streaming via Microsoft Teams for lectures & meetings.",
      "Performed backup/recovery operations & implemented security practices.",
    ],
    achievement:"",
    tech:["Windows Server","Linux","VLANs","Teams","Backup","Firewall"],
  },
  {
    role:"System & Network Engineer", company:"Ilma University",
    type:"Full-time", period:"Jan 2023 – Jan 2024", location:"Karachi, Pakistan",
    color:"#10b981",
    bullets:[
      "Configured routers, switches & VLANs for university network infrastructure.",
      "Installed & configured Windows Server & Linux systems.",
      "Managed user accounts, permissions, backup & security policies.",
      "Supported faculty & students with troubleshooting & connectivity.",
    ],
    achievement:"",
    tech:["Windows Server","Linux","Networking","VLANs","Switching","Firewall"],
  },
];

export const PROJECTS = [
  {title:"Cloud Deployment & High Availability",  desc:"Azure VMs, virtual networks, NSG rules, DNS, load balancer for HA & failover. Secure & scalable cloud infrastructure.",       tech:["Azure","VMs","VNet","NSG","Load Balancer"],  emoji:"☁️", color:"#7c3aed"},
  {title:"CI/CD Pipeline & Containerized Deploy", desc:"Jenkins pipelines, Docker images on DockerHub, Kubernetes clusters, GitOps via ArgoCD with integrated security checks.",       tech:["Jenkins","Docker","Kubernetes","ArgoCD"],    emoji:"🚀", color:"#06b6d4"},
  {title:"Virtualization & Two-Tier Architecture",desc:"VMware ESXi setup, Windows & Linux VMs, two-tier web+database architecture with secure inter-server communication.",            tech:["VMware ESXi","Windows Server","Linux"],      emoji:"🖥️", color:"#10b981"},
  {title:"Linux Server & Web Hosting",            desc:"Static & dynamic websites on Linux, Nginx virtual hosts, MySQL integration, performance & availability tuning.",                tech:["Linux","Nginx","MySQL"],                     emoji:"🐧", color:"#f59e0b"},
  {title:"Windows Server & App Hosting",          desc:"Windows Server config, PHP & ASP.NET apps on IIS, user access management, performance monitoring & uptime assurance.",         tech:["Windows Server","IIS","ASP.NET","PHP"],      emoji:"🪟", color:"#ec4899"},
  {title:"Enterprise Network Infrastructure",     desc:"Full LAN/WAN config, VLANs, routing/switching, DNS, DHCP, VPN & firewall for enterprise environments with security hardening.", tech:["LAN/WAN","VLANs","DNS","DHCP","VPN"],       emoji:"🌐", color:"#8b5cf6"},
];

export const EDUCATION = [
  {degree:"Bachelor of Information Technology",  institute:"University of Sindh Madressatul Islam",  year:"2026 (In Progress)", location:"Karachi",desc:"Networking, cloud computing, system administration & IT infrastructure.", icon:"🎓"},
  {degree:"Diploma in Mechatronics",             institute:"Pakistan Swedish Institute of Technology",year:"2021",               location:"Karachi",desc:"Automation, electronics & mechatronic system design.",                   icon:"⚙️"},
  {degree:"Matriculation in Science",            institute:"Arif Hussain English Medium School",      year:"2018",               location:"Karachi",desc:"Mathematics, physics & chemistry foundation.",                           icon:"📚"},
];

export const CERTS = [
  {name:"CCNA – Cisco Certified Network Associate",body:"NAVTTC",icon:"🏆",color:"#7c3aed"},
  {name:"Web Development",                         body:"NAVTTC",icon:"🌐",color:"#06b6d4"},
  {name:"Robotics Technician",                     body:"NAVTTC",icon:"🤖",color:"#10b981"},
];

export const CONTACT = [
  {icon:"📧",label:"Email",   value:"manasraza18@gmail.com",                        href:"mailto:manasraza18@gmail.com"},
  {icon:"📱",label:"Phone",   value:"(+92) 3209241276",                             href:"tel:+923209241276"},
  {icon:"💼",label:"LinkedIn",value:"muhammad-anas-raza-882327259",                 href:"https://www.linkedin.com/in/muhammad-anas-raza-882327259/"},
  {icon:"📍",label:"Location",value:"Quaidabad, Karachi, Pakistan",                 href:"#"},
];
