export const PROJECTS = [
  {
    title: "On-Premises Virtualized Infrastructure & CRM Deployment",

    desc: `Designed and implemented a complete on-premises virtualized infrastructure using VMware ESXi, Windows Server and Linux. Installed and configured VMware ESXi on a physical server and deployed multiple virtual machines for different infrastructure roles.

Built a Windows Server environment for application hosting and database services, including SQL Server 2022 with Database Engine, Replication, Reporting & Analysis Services and Integration Services. Configured SQL Server Management Studio (SSMS) for database administration and management.

Implemented a two-tier CRM architecture using separate virtual servers: an IIS + PHP Web Server and a MySQL 8.0 Database Server. Configured IIS for PHP-based application hosting, integrated PHP with required extensions including mysqli, pdo_mysql, curl and mbstring, and verified PHP execution and database connectivity.

On the database server, installed MySQL Server 8.0 and MySQL Workbench, created dedicated database users and configured LAN-based access. Established secure communication between the Web Server and Database Server and configured firewall rules for web and database traffic.

Also deployed an ASP.NET MVC CRM application on IIS by publishing the application from Visual Studio, creating an IIS website, configuring required IIS components and validating the application through localhost and server IP access.

This project provided hands-on experience in server virtualization, Windows Server administration, IIS hosting, PHP integration, SQL Server, MySQL, CRM deployment, networking, firewall configuration and enterprise-style two-tier infrastructure.`,

    tech: [
      "VMware ESXi",
      "Virtualization",
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
      "Firewall",
    ],

    emoji: "🖥️",
    color: "#8b5cf6",
  },

  {
    title: "Enterprise Linux Web, Database & Mail Server Infrastructure",

    desc: `Built and configured a complete Linux-based server environment for web hosting, application deployment, database services and enterprise mail.

Configured Ubuntu/Linux servers with Nginx, PHP-FPM and MySQL Server. Created structured web-hosting directories, configured ownership and permissions, deployed PHP applications and configured Nginx virtual hosts with custom domains. Enabled PHP processing through FastCGI and verified live database-driven application functionality.

Installed and configured MySQL Server, secured the database environment, imported database tables and verified schemas through the MySQL CLI. Established application-to-database connectivity so that PHP applications could dynamically retrieve and display database information.

Also deployed an ASP.NET Core MVC application on Linux. Published the application using dotnet publish, created a systemd service to run the application as www-data, configured automatic service startup, environment variables and logging, and used Nginx as a reverse proxy to forward requests to the Kestrel application running on port 5000.

Implemented a complete Linux mail-server environment using iRedMail. Configured Postfix, Dovecot, MariaDB and Nginx, prepared hostname and /etc/hosts configuration, generated SSL certificates using OpenSSL, configured HTTPS redirection and firewall rules, and verified mail services through Roundcube Webmail and iRedAdmin.

This project provided practical experience in Linux system administration, Nginx web hosting, PHP/PHP-FPM, MySQL administration, ASP.NET Core deployment, systemd service management, reverse proxy configuration, SSL/HTTPS, DNS/hosts configuration and enterprise mail infrastructure.`,

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
      "SSL/HTTPS",
    ],

    emoji: "🐧",
    color: "#22c55e",
  },

  {
    title: "Microsoft Azure Cloud Infrastructure, Networking & High Availability",

    desc: `Designed and implemented a complete Microsoft Azure infrastructure environment covering virtual machines, networking, DNS, IIS application hosting, HTTPS/SSL, Active Directory and high availability.

Provisioned Windows Server virtual machines in Azure and configured Resource Groups, virtual networking, subnets, Network Security Groups, public/private IP addressing, RDP access and server management settings. Configured Azure VM networking and used Azure Public IP DNS label functionality to provide a clean DNS hostname for cloud services.

Deployed ASP.NET-based web applications on Windows Server using IIS. Installed the required ASP.NET Core Hosting Bundle and IIS components, published applications in Release configuration, configured IIS websites and application pools, and exposed applications through Azure networking.

Implemented DNS infrastructure using Azure Public IP DNS labels as well as Windows Server DNS with forward and reverse lookup zones and A records. Configured custom domain resolution for cloud-hosted services.

Implemented HTTPS/SSL for IIS web applications using SSL certificates and configured HTTPS bindings on port 443. Troubleshot an Azure Load Balancer HTTPS issue by identifying missing NSG port 443 access, IIS HTTPS bindings and load-balancing configuration. Configured HTTPS health probes, frontend/backend ports and DNS A records pointing the domain toward the Load Balancer.

Built a high-availability web architecture using Primary and Secondary Windows Server 2019 VMs. Placed both servers behind an Azure Standard Public Load Balancer, configured backend pools, health probes, load-balancing rules and inbound NAT rules for administration. This enabled traffic distribution and failover between the web servers.

Also deployed Active Directory Domain Services in Azure. Created a dedicated VNet, deployed a Windows Server VM with a static private IP, installed AD DS and DNS, promoted the server to a domain controller and created the AD.anas.local domain. Designed organizational units including AD-Users, IT, Pharm-D and Finance, created user accounts and prepared the environment for Group Policy management.

This project provided hands-on experience with Azure cloud infrastructure, Windows Server, Azure networking, DNS, NSG, IIS, HTTPS, SSL, Active Directory, Load Balancing, high availability and enterprise cloud administration.`,

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
      "RDP",
    ],

    emoji: "☁️",
    color: "#3b82f6",
  },

  {
    title: "End-to-End DevOps CI/CD Pipeline on Azure — DEV → PROD",

    desc: `Designed and implemented an end-to-end DevOps CI/CD environment on Microsoft Azure with automated source-code integration, testing, development deployment, production approval, Docker image management, smoke testing, backups and rollback.

Provisioned a Linux VM on Azure and configured the required networking and access rules for SSH, HTTP and Jenkins. Prepared the server to host web applications and CI/CD services.

Created separate DEV and PROD environments using dedicated directories:
DEV → /var/www/dev
PROD → /var/www/prod
Backups → /var/backups/prod-last

Configured Jenkins and integrated it with GitHub. Created a Jenkinsfile to define the pipeline as code and implemented stages for source-code checkout, testing, DEV deployment, manual production approval, production backup, production deployment and rollback.

Extended the pipeline with Docker containerization. Implemented automated Docker image builds and versioned images, pushed images to Docker Hub and deployed containers into separate DEV and PROD environments.

The DEV workflow performs automatic Git checkout, Docker image build, container deployment and smoke testing. The PROD workflow introduces a manual approval gate, promotes the release from DEV to PROD, builds the production Docker image, deploys it and performs comprehensive smoke testing.

Implemented an image-based rollback strategy so that if a production deployment or smoke test fails, the last stable version can be restored. Also configured Jenkins success/failure notifications and handled server permission issues by assigning appropriate ownership and configuring controlled passwordless sudo for deployment operations.

The final architecture follows the principle of Build Once → Deploy Anywhere and provides safer, repeatable and automated application delivery while reducing manual deployment errors and production risk.`,

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
      "Automation",
    ],

    emoji: "⚙️",
    color: "#f59e0b",
  },

  {
    title: "Enterprise Kubernetes DevSecOps & GitOps Platform on Azure",

    desc: `Built an advanced cloud-native DevSecOps and GitOps platform on Microsoft Azure integrating GitHub, Jenkins, SonarQube, Docker, Trivy, Azure Kubernetes Service (AKS), Kubernetes, ArgoCD, Prometheus, Grafana and Alertmanager.

Designed an end-to-end workflow where developers push application code and Kubernetes manifests to GitHub. Jenkins running on an Azure VM handles the CI process including source-code checkout, SonarQube static code analysis, quality-gate validation, Docker image building and Trivy container security scanning.

Integrated SonarQube into the CI pipeline to perform automated code-quality analysis. Configured the pipeline so that the quality gate determines whether the build should continue or fail.

Integrated Trivy for Docker image security scanning. The pipeline checks container images for HIGH and CRITICAL vulnerabilities before they are pushed to Docker Hub. Vulnerable builds can be stopped before reaching the deployment stage, embedding security directly into the CI/CD workflow.

Implemented Docker-based application packaging and pushed versioned images to Docker Hub. Jenkins then updates Kubernetes deployment manifests with the required image version.

Implemented Azure Kubernetes Service (AKS) as the container orchestration platform. Deployed applications into Kubernetes with separate Dev and Prod namespaces to provide environment isolation. Configured Kubernetes Deployments, ReplicaSets, Pods and LoadBalancer-based external access.

Implemented GitOps using ArgoCD. Jenkins focuses on CI activities while ArgoCD manages continuous deployment. After Jenkins updates the Kubernetes deployment manifests in GitHub, ArgoCD monitors the manifests repository, detects changes and synchronizes the desired state into the Kubernetes cluster. Only out-of-sync changes are applied, reducing unnecessary restarts and maintaining a clear deployment audit trail.

Added automated smoke tests and health checks after deployment and configured notifications for deployment status.

Implemented full Kubernetes observability using Prometheus, Alertmanager and Grafana. Prometheus collects node, pod and cluster-level metrics, Alertmanager generates alerts for critical or warning conditions, and Grafana provides real-time dashboards and historical performance visualization.

The resulting platform provides an integrated DevSecOps lifecycle covering source control, CI automation, code quality, container security, image management, Kubernetes deployment, GitOps-based continuous delivery, automated validation, monitoring, alerting and observability.`,

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
      "Security Scanning",
    ],

    emoji: "☸️",
    color: "#06b6d4",
  },
];