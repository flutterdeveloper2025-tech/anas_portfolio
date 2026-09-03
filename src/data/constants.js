export const NAV = ["Home","About","Skills","Experience","Projects","Education","Contact"];

export const PERSON = {
  name:     "Muhammad Anas Raza",
  role:     "System & Network Administrator",
  tags:     ["Infrastructure","Virtualization","Cloud","DevOps"],
  email:    "manasraza18@gmail.com",
  phone:    "(+92) 3209241276",
  location: "Karachi, Pakistan",
  linkedin: "https://www.linkedin.com/in/muhammad-anas-raza-882327259/",
  about:    "IT and Network Professional with 4+ years of hands-on experience in system administration, enterprise networking, and cloud environments. Skilled in Windows Server, Active Directory, DNS/DHCP, VMware ESXi, and LAN/WAN infrastructure. Experienced with Azure, PowerShell scripting, CI/CD pipelines, Docker, and Kubernetes. Focused on security, availability, and performance across dev, QA, and production environments.",
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
  {
  title: "On-Premises Virtualized Infrastructure & CRM Deployment",
  desc: "Designed and deployed an on-premises virtualized infrastructure using VMware ESXi with dedicated Windows Server and Linux virtual machines. Configured SQL Server 2022 and SSMS for database management, IIS for ASP.NET MVC and PHP application hosting, and MySQL 8.0 with MySQL Workbench. Deployed and configured a CRM application with complete networking, firewall rules, inter-server communication, and secure access between application and database servers.",
  tech: [
    "VMware ESXi",
    "Windows Server",
    "Linux",
    "IIS",
    "ASP.NET MVC",
    "PHP",
    "SQL Server 2022",
    "SSMS",
    "MySQL 8.0",
    "MySQL Workbench",
    "CRM",
    "Networking",
    "Firewall"
  ],
  emoji: "🖥️",
  color: "#10b981"
},

{
  title: "Enterprise Linux Web, Database & Mail Server Infrastructure",
  desc: "Built a complete Linux-based server environment hosting PHP applications, MySQL databases, and ASP.NET Core MVC applications. Configured Nginx with PHP-FPM, FastCGI and reverse proxy architecture, deployed ASP.NET Core applications using Kestrel and systemd, and implemented enterprise mail infrastructure using iRedMail with Postfix, Dovecot, MariaDB, OpenSSL, Roundcube and iRedAdmin. Secured services with SSL/HTTPS and production-ready server configurations.",
  tech: [
    "Linux",
    "Ubuntu Server",
    "Nginx",
    "PHP",
    "PHP-FPM",
    "MySQL",
    "ASP.NET Core MVC",
    "Kestrel",
    "systemd",
    "FastCGI",
    "Reverse Proxy",
    "iRedMail",
    "Postfix",
    "Dovecot",
    "MariaDB",
    "OpenSSL",
    "Roundcube",
    "iRedAdmin",
    "SSL/HTTPS"
  ],
  emoji: "🐧",
  color: "#f59e0b"
},

{
  title: "Microsoft Azure Cloud Infrastructure, Networking & High Availability",
  desc: "Designed and deployed Microsoft Azure infrastructure using Azure Virtual Machines, Windows Server 2019, Virtual Networks, subnets and Network Security Groups. Configured Azure DNS and Windows DNS, hosted ASP.NET Core applications on IIS with SSL/HTTPS using Let's Encrypt, and implemented Azure Load Balancer with health probes for high availability and failover. Integrated Active Directory Domain Services with GPO and configured the AD.anas.local domain for centralized identity and server management.",
  tech: [
    "Microsoft Azure",
    "Azure VM",
    "Windows Server 2019",
    "Azure VNet",
    "Subnets",
    "NSG",
    "Azure DNS",
    "Windows DNS",
    "IIS",
    "ASP.NET Core",
    "SSL/HTTPS",
    "Let's Encrypt",
    "Active Directory",
    "AD DS",
    "GPO",
    "Azure Load Balancer",
    "Health Probes",
    "High Availability",
    "RDP"
  ],
  emoji: "☁️",
  color: "#7c3aed"
},

{
  title: "End-to-End DevOps CI/CD Pipeline on Azure — DEV → PROD",
  desc: "Implemented a complete automated DevOps CI/CD pipeline using Jenkins and GitHub for application delivery from development to production. Created Jenkinsfile-based pipelines covering source checkout, application build, Docker image creation, Docker Hub push, DEV deployment, approval gate, smoke testing and production deployment. Implemented image-based rollback, backup procedures, GitHub webhooks, automated notifications and controlled sudo permissions. Followed a Build Once → Deploy Anywhere approach for consistent and reliable deployments.",
  tech: [
    "Microsoft Azure",
    "Linux",
    "Jenkins",
    "GitHub",
    "Jenkinsfile",
    "Docker",
    "Docker Hub",
    "Nginx",
    "CI/CD",
    "DevOps",
    "DEV Environment",
    "PROD Environment",
    "Smoke Testing",
    "Backup",
    "Rollback",
    "GitHub Webhooks",
    "Automation"
  ],
  emoji: "🚀",
  color: "#06b6d4"
},

{
  title: "Enterprise Kubernetes DevSecOps & GitOps Platform on Azure",
  desc: "Built an enterprise Kubernetes DevSecOps and GitOps platform on Microsoft Azure using AKS. Integrated Jenkins and GitHub for CI/CD automation with SonarQube quality gates and Trivy HIGH/CRITICAL vulnerability scanning before container deployment. Built and pushed Docker images to Docker Hub, deployed workloads to separate Dev and Prod namespaces, and implemented ArgoCD for GitOps-based continuous delivery. Added Prometheus, Grafana and Alertmanager for monitoring, dashboards and production alerting, with smoke testing and Kubernetes LoadBalancer-based application exposure.",
  tech: [
    "Microsoft Azure",
    "AKS",
    "Kubernetes",
    "Jenkins",
    "GitHub",
    "Docker",
    "Docker Hub",
    "SonarQube",
    "Trivy",
    "ArgoCD",
    "GitOps",
    "Prometheus",
    "Grafana",
    "Alertmanager",
    "CI/CD",
    "DevSecOps",
    "Namespaces",
    "Deployments",
    "ReplicaSets",
    "Pods",
    "LoadBalancer",
    "Observability",
    "Security Scanning"
  ],
  emoji: "☸️",
  color: "#8b5cf6"
},
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
