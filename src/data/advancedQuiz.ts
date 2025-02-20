import { ControlFamily } from '../types';

export const advancedQuiz = {
  title: "NIST 800-53 Self-Assessment Quiz",
  description: "Assess your organization's alignment with NIST 800-53 control families.",
  controlFamilies: [
    {
      name: "Access Control (AC)",
      questions: [
        {
          text: "Having a policy and procedures for access control",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "To align with NIST 800-53 Access Control (AC-1), IT professionals should draft a comprehensive access control policy that defines authorized access based on the principle of least privilege. Start by identifying all systems, applications, and data repositories, then categorize them by sensitivity (e.g., public, internal, confidential). The policy should specify access conditions (e.g., role-based, need-to-know), methods for granting/revoking access (e.g., ticketing system), and escalation processes for exceptions. Procedures should detail how to implement this using tools like Active Directory (AD) or Identity Governance and Administration (IGA) solutions (e.g., SailPoint, Okta). Include a requirement for annual policy reviews, triggered by audits or incidents, and ensure documentation is stored securely (e.g., encrypted SharePoint). Assign a policy owner (e.g., CISO) to oversee updates and train staff on compliance using real-world examples like insider threat scenarios."
        },
        {
          text: "Managing accounts, including defining account types, assigning managers, and reviewing for compliance",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For AC-2 compliance, establish a structured account management process within your Identity and Access Management (IAM) framework. Define account types (e.g., standard user, privileged, service accounts) in a documented schema, specifying their privileges and lifecycle (creation, modification, deletion). Use AD or LDAP to assign account managers—typically team leads or system owners—who approve access requests via a workflow tool (e.g., ServiceNow). Implement automated provisioning/deprovisioning with tools like Microsoft Identity Manager or Saviynt, integrating HR systems to sync employee status changes. Conduct quarterly compliance reviews using scripts (e.g., PowerShell to query AD) to identify dormant accounts (inactive >90 days), orphaned accounts, or policy violations, and disable them promptly. Log all actions in a SIEM (e.g., Splunk) for audit trails, aligning with NIST's emphasis on accountability."
        }
      ]
    },
    {
      name: "Awareness and Training (AT)",
      questions: [
        {
          text: "Having a policy and procedures for security and privacy awareness and training",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "To meet AT-1, craft a detailed policy mandating annual security and privacy awareness training for all employees, contractors, and third parties with system access. Specify content areas like phishing recognition, password hygiene, and GDPR/HIPAA compliance, tailored to your industry. Procedures should outline delivery methods—e.g., e-learning platforms (KnowBe4, Proofpoint), in-person sessions, or simulated attacks (phishing campaigns)—and require tracking via a Learning Management System (LMS) like Cornerstone. Define metrics (e.g., 95% completion rate) and escalation for non-compliance (e.g., access suspension). Update training annually using threat intelligence feeds (e.g., from CISA) and document versioning in a repository like Confluence. Assign an Awareness Officer to oversee content relevance and ensure new hires complete training within 30 days."
        },
        {
          text: "Providing role-based security and privacy training to personnel",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For AT-3, identify roles with elevated risk—e.g., sysadmins (system access), HR (PII handling), developers (code security)—and map them to specific training modules in your LMS. Use NIST 800-50 as a guide to create content, such as secure coding with OWASP Top 10 for devs or incident response drills for IT staff. Deliver via interactive platforms (e.g., Cybrary, SANS) with hands-on labs (e.g., configuring firewalls, encrypting data). Require annual certification, tracked via badges or certificates, and conduct post-training assessments (e.g., quizzes scoring >80%). Simulate role-specific incidents—like a developer's API key leak—to reinforce learning. Maintain a compliance dashboard in your IAM tool to verify completion and flag gaps."
        }
      ]
    },
    {
      name: "Audit and Accountability (AU)",
      questions: [
        {
          text: "Having a policy and procedures for audit and accountability",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "Align with AU-1 by creating a policy that mandates auditing of all security-relevant events (e.g., logins, config changes) across systems, networks, and apps. Specify tools like Windows Event Logs, syslog, or a SIEM (e.g., Splunk, Elastic) for collection, and require tamper-proof storage (e.g., WORM drives, S3 with versioning). Procedures should detail configuration—e.g., enabling AD audit policies (Event IDs 4624, 4672)—and assign an Audit Manager to oversee log integrity. Define retention (e.g., 1 year per FISMA) and access controls (e.g., role-based in SIEM). Conduct monthly reviews to validate setup and train IT staff on interpreting logs using NIST 800-92 guidelines, ensuring accountability for anomalies."
        },
        {
          text: "Defining, logging, and reviewing audit events",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For AU-2, conduct a risk assessment (per RA-3) to define auditable events—e.g., failed logins (Event ID 4625), privilege escalations (4720), file access (4663)—and document them in an audit plan. Configure logging in systems (e.g., Linux auditd, Windows GPOs) and aggregate via a SIEM, setting alerts for high-risk events (e.g., >5 failed logins in 1 minute). Review logs weekly using dashboards or scripts (e.g., Splunk SPL, Python log parsers) to spot trends like brute-force attempts. Retain logs for 12 months minimum, encrypted at rest (AES-256), and test log integrity quarterly by simulating events (e.g., test account lockout). Train auditors on NIST 800-61 for incident correlation."
        }
      ]
    },
    {
      name: "Assessment, Authorization, and Monitoring (CA)",
      questions: [
        {
          text: "Having a policy and procedures for assessment, authorization, and monitoring",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "To comply with CA-1, develop a policy requiring annual security control assessments, formal authorization (ATO) before system deployment, and continuous monitoring. Base it on NIST 800-53A, detailing roles (e.g., Authorizing Official, Security Assessor) and tools (e.g., Nessus, OpenSCAP). Procedures should outline assessment scoping (all in-scope systems), authorization via a System Security Plan (SSP) in a tool like Xacta, and monitoring with a Continuous Diagnostics and Mitigation (CDM) solution (e.g., Tenable). Require remediation plans for findings within 30 days, tracked in Jira, and annual policy updates based on NIST revisions or incidents."
        },
        {
          text: "Conducting regular security and privacy control assessments",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For CA-2, schedule annual assessments using NIST 800-53A's assessment procedures—e.g., interviewing staff, testing controls (AC-3 via AD logs), inspecting configs. Use automated scanners (e.g., Tenable.io, Qualys) to check vulnerabilities and manual reviews for policy adherence (e.g., PII handling). Document findings in an SSP or POA&M (Plan of Actions and Milestones), prioritizing high-risk items (CVSS >7.0). Engage a third-party assessor annually for objectivity, and integrate results into your SIEM for trend analysis. Train IT staff on assessment tools and NIST SP 800-137 for continuous monitoring follow-up."
        }
      ]
    },
    {
      name: "Configuration Management (CM)",
      questions: [
        {
          text: "Having a configuration management policy and procedures",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "Align with CM-1 by drafting a policy that mandates secure configuration management for all IT assets (servers, endpoints, network devices). Define a Configuration Control Board (CCB) to approve changes and use CM tools (e.g., Ansible, Puppet) to enforce standards. Procedures should detail baseline creation (e.g., CIS Benchmarks), change request processes via ITSM (e.g., ServiceNow), and auditing with tools like Tripwire. Require monthly config reviews, logged in a CMDB (e.g., BMC Helix), and train admins on NIST 800-128 for secure hardening practices."
        },
        {
          text: "Maintaining a current baseline configuration of the system",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For CM-2, establish baseline configs for each asset type (e.g., Windows Server 2019, Cisco routers) using industry standards (CIS, DISA STIGs). Document them in a CM tool (e.g., Chef, SCCM), including OS settings, ports (e.g., disable unused like 23/Telnet), and patch levels. Automate baseline enforcement with scripts (e.g., PowerShell DSC) and verify monthly via scans (e.g., Nessus). Update baselines after patches or OS upgrades, testing in a sandbox first, and track deviations in a SIEM for rapid rollback if needed."
        }
      ]
    },
    {
      name: "Contingency Planning (CP)",
      questions: [
        {
          text: "Having a contingency planning policy and procedures",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "To meet CP-1, create a policy requiring contingency plans for all critical systems, aligned with NIST 800-34. Define scope (e.g., ERP, email), Recovery Time Objectives (RTOs), and Recovery Point Objectives (RPOs), assigning a Contingency Planning Coordinator. Procedures should detail plan development (e.g., BIA in ServiceNow), testing schedules (biannual), and updates after incidents, stored securely (e.g., encrypted DR site). Include escalation paths to execs and train staff on roles using NIST tabletop exercise templates."
        },
        {
          text: "Developing and testing contingency plans for system disruptions",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For CP-2, conduct a Business Impact Analysis (BIA) to prioritize systems (e.g., payroll over intranet) and develop plans with detailed recovery steps—e.g., restoring from backups (Veeam), failover to DR site (AWS). Specify RTOs/RPOs (e.g., 4 hours, 15 minutes data loss) and test biannually via full simulations (e.g., power outage) and tabletop exercises (NIST 800-84). Use tools like DRaaS (Zerto) for automation, document results in a lessons-learned log, and refine plans to address gaps like single points of failure."
        }
      ]
    },
    {
      name: "Identification and Authentication (IA)",
      questions: [
        {
          text: "Having a policy and procedures for identification and authentication",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "Align with IA-1 by creating a policy mandating unique IDs and strong authentication for all users/devices, per NIST 800-63. Specify credential standards (e.g., 12-char passwords, MFA), lifecycle management, and tools (e.g., AD, Okta). Procedures should detail ID issuance (HR-driven), password policies (via GPOs), and MFA rollout (e.g., Duo for VPN). Require annual reviews, integrate with IAM solutions, and train staff on NIST Digital Identity Guidelines to prevent credential misuse."
        },
        {
          text: "Implementing identification and authentication mechanisms, such as multi-factor authentication",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For IA-2, deploy MFA across critical systems (e.g., email, VPN, privileged accounts) using hardware tokens (YubiKey), biometrics, or apps (Google Authenticator). Configure via AD FS or Azure AD, enforcing for remote access first. Audit monthly with tools like BeyondTrust to ensure compliance (e.g., no single-factor logins), and remediate weak passwords using password managers (e.g., LastPass). Test MFA failover annually and educate users on setup via IT portals."
        }
      ]
    },
    {
      name: "Incident Response (IR)",
      questions: [
        {
          text: "Having an incident response policy and procedures",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "To meet IR-1, develop a policy defining incidents (e.g., malware, data breaches) and requiring a formal response process, per NIST 800-61. Specify an Incident Response Team (IRT) with roles (e.g., coordinator, forensic analyst) and tools (e.g., TheHive, Splunk). Procedures should cover detection (SIEM alerts), reporting (ticketing in Jira), containment (e.g., isolate VLAN), and recovery, with templates for communication (internal, legal). Train IRT quarterly and update the policy post-incident using After Action Reports (AARs)."
        },
        {
          text: "Detecting, responding to, and recovering from security incidents",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For IR-4, deploy a SIEM (e.g., QRadar) to detect incidents via rules (e.g., >10 failed logins) and integrate with IDS/IPS (e.g., Snort). Define response playbooks for common incidents—e.g., ransomware: disconnect, image, restore from backup (Commvault)—and test monthly with red team exercises. Recover using predefined RTOs/RPOs, validate data integrity post-recovery, and log all steps in a chain-of-custody tool (e.g., CaseGuard). Train staff on NIST 800-61 phases and conduct annual full-scale drills."
        }
      ]
    },
    {
      name: "Maintenance (MA)",
      questions: [
        {
          text: "Having a maintenance policy and procedures for information systems",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "Align with MA-1 by creating a policy that governs system maintenance, restricting it to authorized personnel (e.g., IT admins) and approved tools (e.g., WSUS, SolarWinds). Procedures should detail scheduling (e.g., monthly patch windows), documentation (in a CMDB like ServiceNow), and approval via a Change Advisory Board (CAB). Specify secure methods (e.g., remote via VPN, on-site with escorts) and train staff on NIST 800-128 for logging and auditing maintenance securely."
        },
        {
          text: "Controlling and monitoring maintenance activities",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For MA-3, restrict maintenance to a vetted team, tracked in an IAM tool (e.g., CyberArk), and log all actions (e.g., patch installs, hardware swaps) in a SIEM with Event IDs (e.g., 7045 for service changes). Monitor live via dashboards (e.g., Nagios) and review logs weekly for anomalies (e.g., unscheduled maintenance). Use endpoint management (e.g., SCCM) to enforce configs post-maintenance and test controls quarterly by simulating unauthorized access attempts, ensuring NIST alignment."
        }
      ]
    },
    {
      name: "Media Protection (MP)",
      questions: [
        {
          text: "Having a media protection policy and procedures",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "To meet MP-1, draft a policy protecting all media (e.g., USBs, HDDs, backups) with sensitive data, per NIST 800-111. Classify media by data type (e.g., PII, IP) and define controls—encryption (BitLocker), access restrictions (DLP like Symantec), and disposal rules. Procedures should detail tracking (e.g., asset tags in Ivanti), secure storage (locked cabinets), and annual audits. Train IT on NIST 800-88 for sanitization and use a DLP tool to enforce policy across endpoints."
        },
        {
          text: "Protecting and controlling media, including sanitization before disposal",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For MP-6, encrypt removable media with AES-256 (e.g., VeraCrypt) and restrict access via endpoint controls (e.g., McAfee DLP). Track media in a CMDB, requiring checkout logs, and sanitize before disposal using NIST 800-88 methods—e.g., DBAN for wiping, shredders for physical destruction. Audit quarterly with tools like Tanium to detect unencrypted media, and train staff on secure handling (e.g., no USBs in public PCs), documenting all sanitization in a compliance log."
        }
      ]
    },
    {
      name: "Physical and Environmental Protection (PE)",
      questions: [
        {
          text: "Having a physical and environmental protection policy and procedures",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "Align with PE-1 by creating a policy to secure facilities hosting systems (e.g., data centers, server rooms) against physical and environmental threats (fire, flood), per NIST 800-53. Specify controls—e.g., access badges, HVAC redundancy—and assign a Facility Security Officer. Procedures should detail implementation (e.g., installing fire suppression like FM-200), monitoring (e.g., IoT sensors), and maintenance schedules (e.g., quarterly HVAC checks). Train staff on emergency protocols and audit annually with penetration tests (e.g., lock-picking attempts)."
        },
        {
          text: "Implementing physical security controls to protect the system",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For PE-2, deploy layered controls—e.g., biometric locks (HID), CCTV (Axis), visitor logs—at all system locations. Integrate with a Physical Security Information Management (PSIM) system (e.g., Genetec) for real-time monitoring and alerts (e.g., door forced open). Test monthly via drills (e.g., unauthorized entry simulation) and remediate gaps (e.g., add bollards for vehicle threats). Train guards and IT on NIST 800-116 badge standards and maintain a 6-month log retention policy for compliance."
        }
      ]
    },
    {
      name: "Planning (PL)",
      questions: [
        {
          text: "Having a planning policy and procedures for information security and privacy",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "To meet PL-1, develop a policy mandating security and privacy planning for all systems, per NIST 800-18. Define scope (e.g., all production environments), roles (e.g., Security Planner), and integration with risk management (RA-3). Procedures should outline SSP creation using templates (e.g., FedRAMP SSP in Word), review cycles (annual), and updates post-incident, stored in a GRC tool (e.g., RSA Archer). Train planners on NIST 800-53 controls and conduct tabletop exercises to validate planning assumptions."
        },
        {
          text: "Developing and maintaining security and privacy plans",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For PL-2, create SSPs for each system, detailing controls (e.g., AC-3, SI-4), risks, and mitigations, using a tool like Xacta or CSAM. Include system boundaries, data flows (e.g., Visio diagrams), and owner sign-off. Review annually with stakeholders (e.g., app owners, legal) and update after changes (e.g., new vendors), testing via mock audits. Use NIST 800-53A to assess plan effectiveness and store versions in a secure repo (e.g., Git with encryption)."
        }
      ]
    },
    {
      name: "Program Management (PM)",
      questions: [
        {
          text: "Having a program management policy and procedures for security and privacy",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "Align with PM-1 by establishing a policy for an enterprise-wide security and privacy program, per NIST 800-53. Define a Program Management Office (PMO) with a CISO lead, setting goals (e.g., 100% control coverage) and metrics (e.g., incidents/year). Procedures should detail implementation—e.g., GRC platform (ServiceNow GRC), budget allocation, staff training—and quarterly reviews using dashboards (e.g., Tableau). Train PMO on NIST 800-39 for risk-based management and document in a central policy hub."
        },
        {
          text: "Implementing and managing a security and privacy program",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For PM-2, appoint a Security Program Manager to oversee policy enforcement, using a GRC tool to track compliance (e.g., MetricStream). Implement via phased rollouts—e.g., Phase 1: critical systems, Phase 2: endpoints—measuring progress with KPIs (e.g., training completion, vuln remediation time). Conduct monthly reviews with execs, adjusting based on N IST 800-137 monitoring data (e.g., CDM dashboards), and run annual program audits to identify gaps, documenting all in a secure wiki (e.g., Confluence)."
        }
      ]
    },
    {
      name: "Personnel Security (PS)",
      questions: [
        {
          text: "Having a personnel security policy and procedures",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "To meet PS-1, create a policy ensuring personnel trustworthiness, covering hiring, role changes, and terminations, per NIST 800-53. Specify screening levels (e.g., criminal checks for admins), access controls, and exit processes (e.g., NDA enforcement). Procedures should detail HR-IT workflows—e.g., background checks via HireRight, access revocation in AD—and annual audits using IAM tools (e.g., SailPoint). Train HR and IT on NIST 800-12 personnel security basics and store records securely (e.g., encrypted HRIS)."
        },
        {
          text: "Screening and managing personnel with access to sensitive information",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For PS-2, implement tiered screening—e.g., basic checks for all, deep vetting (credit, references) for sensitive roles—using a vendor (e.g., Sterling). Manage access via IAM (e.g., Okta), tying it to HR status, and revoke instantly on termination with automated scripts (e.g., PowerShell to disable AD accounts). Audit quarterly for compliance (e.g., excess privileges), train managers on NIST 800-100 insider threat risks, and log all actions in a SIEM for traceability."
        }
      ]
    },
    {
      name: "PII Processing and Transparency (PT)",
      questions: [
        {
          text: "Having a policy and procedures for processing and transparency of personally identifiable information (PII)",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "Align with PT-1 by drafting a policy governing PII lifecycle (collection, use, storage, disposal), per NIST 800-53 and privacy laws (e.g., GDPR). Map PII flows using tools (e.g., OneTrust), define consent mechanisms (e.g., opt-in forms), and require annual reviews. Procedures should detail data classification (e.g., tag PII in DLP), access controls (e.g., RBAC in AD), and transparency via notices, managed in a GRC tool. Train staff on NIST 800-122 and audit PII handling biannually."
        },
        {
          text: "Providing transparency to individuals regarding PII collection and use",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For PT-4, publish detailed privacy notices on your website and apps, explaining PII types (e.g., name, SSN), purposes (e.g., payroll), and retention (e.g., 7 years), per NIST 800-53. Offer a self-service portal (e.g., built in ServiceNow) for data access requests, validated via MFA. Train customer-facing staff on transparency scripts, audit notice compliance with tools like PrivacyInsight, and update notices quarterly based on legal changes (e.g., CCPA amendments)."
        }
      ]
    },
    {
      name: "Risk Assessment (RA)",
      questions: [
        {
          text: "Having a risk assessment policy and procedures",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "To meet RA-1, create a policy mandating risk assessments for all systems, aligned with NIST 800-30. Define scope (e.g., IT assets, vendors), frequency (annual), and roles (e.g., Risk Manager). Procedures should detail methodology—e.g., qualitative (likelihood x impact) or quantitative (ALE)—using tools like RiskLens, and require documentation in a GRC platform (e.g., Archer). Train IT on NIST 800-39 risk frameworks and integrate findings into SSPs, reviewing post-incident or quarterly."
        },
        {
          text: "Conducting regular risk assessments to identify and mitigate risks",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For RA-3, perform annual risk assessments using NIST 800-30 steps: identify threats (e.g., ransomware), vulnerabilities (e.g., unpatched servers via Nessus), and controls (e.g., SI-4). Calculate risk scores (e.g., CVSS), prioritize mitigation (e.g., patch critical vulns in 7 days), and track in a POA&M (Excel or Jira). Use automated scanners (e.g., Qualys) and manual reviews (e.g., vendor contracts), validating with penetration tests biannually. Train staff on risk tools and update risk registers monthly."
        }
      ]
    },
    {
      name: "System and Services Acquisition (SA)",
      questions: [
        {
          text: "Having a system and services acquisition policy and procedures",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "Align with SA-1 by creating a policy ensuring acquired systems/services meet NIST 800-53 controls. Define procurement roles (e.g., IT Acquisition Lead), security requirements (e.g., FIPS 140-2 encryption), and vendor vetting processes. Procedures should detail RFPs with security clauses (e.g., SOC 2 compliance), evaluation via tools (e.g., BitSight), and pre-deployment testing (e.g., vulnerability scans). Train procurement on NIST 800-161 and audit contracts annually in a GRC tool like SAP Ariba."
        },
        {
          text: "Ensuring acquired systems and services meet security requirements",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For SA-4, embed security specs in contracts—e.g., MFA, audit logging—aligned with NIST 800-53, and assess vendors with questionnaires (e.g., SIG Lite) and tools (e.g., Panorays). Test systems pre-deployment with scans (e.g., Burp Suite) and post-deployment with continuous monitoring (e.g., Tenable). Reject non-compliant products, document acceptance in an SSP, and review vendor compliance quarterly, training IT on NIST 800-160 system security engineering."
        }
      ]
    },
    {
      name: "System and Communications Protection (SC)",
      questions: [
        {
          text: "Having a system and communications protection policy and procedures",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "To meet SC-1, draft a policy securing all communications (e.g., email, VPN), per NIST 800-53. Specify encryption (e.g., TLS 1.3), boundary protection (e.g., DMZ), and roles (e.g., Network Security Lead). Procedures should detail implementation—e.g., configuring IPsec VPNs (Cisco AnyConnect), deploying WAFs (Cloudflare)—and validation via packet captures (Wireshark). Train staff on NIST 800-47 security interconnections and audit configs biannually in a SIEM."
        },
        {
          text: "Implementing boundary protection mechanisms, such as firewalls",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For SC-7, deploy next-gen firewalls (e.g., Palo Alto) and IDS/IPS (e.g., Suricata) at network perimeters, segmenting with VLANs (e.g., 802.1Q). Configure rules to block non-essential ports (e.g., 445/SMB externally), allowlisted IPs, and log traffic in a SIEM (e.g., Splunk). Test monthly with penetration tests (e.g., Kali Linux) and update rules based on threat intel (e.g., MITRE ATT&CK). Train net admins on NIST 800-41 firewall guidelines and review logs weekly for anomalies."
        }
      ]
    },
    {
      name: "System and Information Integrity (SI)",
      questions: [
        {
          text: "Having a system and information integrity policy and procedures",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "Align with SI-1 by creating a policy to ensure system and data integrity, per NIST 800-53. Define controls—e.g., patching (SI-2), malware defense (SI-3), monitoring (SI-4)—and assign an Integrity Officer. Procedures should detail patch deployment (e.g., WSUS), AV setup (e.g., CrowdStrike), and integrity checks (e.g., Tripwire), logged in a CMDB. Train IT on NIST 800-128 configuration security and audit monthly with automated tools like Qualys."
        },
        {
          text: "Monitoring and responding to system and information integrity violations",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For SI-4, deploy endpoint protection (e.g., Carbon Black) and file integrity monitoring (e.g., OSSEC) to detect violations (e.g., unauthorized file changes). Set SIEM alerts for anomalies (e.g., hash mismatches), integrating with threat feeds (e.g., VirusTotal). Respond per IR-4 playbooks—e.g., isolate, analyze with Volatility, remediate—and test quarterly with simulated malware drops. Train staff on NIST 800-61 incident handling and log all responses for audits."
        }
      ]
    },
    {
      name: "Supply Chain Risk Management (SR)",
      questions: [
        {
          text: "Having a supply chain risk management policy and procedures",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "To meet SR-1, draft a policy protecting all media (e.g., USBs, HDDs, backups) with sensitive data, per NIST 800-111. Classify media by data type (e.g., PII, IP) and define controls—encryption (BitLocker), access restrictions (DLP like Symantec), and disposal rules. Procedures should detail tracking (e.g., asset tags in Ivanti), secure storage (locked cabinets), and annual audits. Train IT on NIST 800-88 for sanitization and use a DLP tool to enforce policy across endpoints."
        },
        {
          text: "Assessing and managing risks associated with the supply chain",
          options: [
            { value: 1, text: "Our organization has no implementation of this control" },
            { value: 2, text: "Our organization has minimal implementation of this control" },
            { value: 3, text: "Our organization has partial implementation of this control (approximately half)" },
            { value: 4, text: "Our organization has substantial implementation of this control" },
            { value: 5, text: "Our organization has full implementation of this control" }
          ],
          advice: "For SR-2, assess suppliers with risk frameworks (e.g., NIST 800-30), using tools like Panorays for security ratings and questionnaires (e.g., CAIQ). Include SR clauses in contracts—e.g., right to audit, incident notification within 24 hours—and verify with penetration tests or SOC reports. Mitigate high risks (e.g., single-source vendors) with backups (e.g., multi-cloud) and review quarterly, logging in a SIEM. Train IT on NIST 800-161 SCRM practices and test contingency plans biannually."
        }
      ]
    }
  ]
};