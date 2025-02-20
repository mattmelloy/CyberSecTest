import { QuizQuestion } from '../types';

export const assessmentQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: "Software Updates",
    question: "How often do you apply operating system updates to all PCs?",
    answers: [
      {
        text: "A) As soon as updates are available.",
        points: 6.1,
        feedback: "Great job! Keeping operating systems updated as soon as updates are available is a crucial security practice. Regular updates help patch vulnerabilities that cybercriminals could exploit. To make this easier to maintain, ensure that all devices are configured for automatic updates where possible and regularly verify that updates are being applied successfully."
      },
      {
        text: "B) Whenever I remember or have time, usually every few months.",
        points: 3.66,
        feedback: "Good, but needs improvement. While updating your systems occasionally is better than not updating at all, delaying patches increases the risk of cyber threats. Many security vulnerabilities are actively exploited soon after they are discovered. Aim to apply updates as soon as they become available by enabling automatic updates or setting a routine schedule to check for updates at least weekly."
      },
      {
        text: "C) Hardly ever, unless there is s a problem or it forces me to update.",
        points: 1.22,
        feedback: "High Risk! Neglecting updates leaves your systems vulnerable to cyberattacks, including ransomware and malware. Attackers often target outdated software with known vulnerabilities. It is critical to establish a policy for regular patching and enable automatic updates to protect your business. Consider using a patch management tool to streamline this process."
      },
      {
        text: "D) I am not sure.",
        points: 0.0,
        feedback: "Uncertain? Time to Take Action. If you are unsure about your update process, your business might be at risk without knowing it. Check your system settings to see if automatic updates are enabled. If you rely on an IT provider, ask them how updates are managed. Establish a clear process to ensure all devices receive updates promptly."
      }
    ]
  },
  {
    id: 2,
    category: "Software Updates",
    question: "Do you update all applications including non-Microsoft/Apple applications such as Acrobat Reader, Chrome, Zoom etc.",
    answers: [
      {
        text: "A) As soon as updates are available.",
        points: 6.1,
        feedback: "Excellent! Updating all applications including third-party software like web browsers, PDF readers, and communication tools is just as important as updating your operating system. Cybercriminals frequently target outdated applications with security flaws. Keep automatic updates enabled where possible and routinely check that updates are applying correctly."
      },
      {
        text: "B) Whenever I remember or have time, usually every few months.",
        points: 3.66,
        feedback: "Good but can be improvement. Attackers often exploit vulnerabilities in outdated software, especially commonly used applications like web browsers and document readers. While some updates are being applied, delaying them increases security risks. Set a monthly or weekly reminder to check for updates or enable automatic updates where possible."
      },
      {
        text: "C) Hardly ever, unless there is a problem or it forces me to update.",
        points: 1.22,
        feedback: "High Risk! Outdated applications are one of the main entry points for hackers! To improve security, enable automatic updates on all applications where possible and regularly verify that software is up to date. Removing software not needed can also reduce your risk. If you have a lot of computers, consider using a patch management tool to help automate this process."
      },
      {
        text: "D) I am not sure.",
        points: 0.0,
        feedback: "Time to Investigate. If you are unsure about your application update process, you may be unknowingly exposing your business to cyber risks. Check the settings of frequently used applications to see if automatic updates are enabled. If you have an IT provider, ask how they manage updates. Establish a policy to ensure all software remains up to date."
      }
    ]
  },
  {
    id: 3,
    category: "User Authentication",
    question: "How does your business store passwords for account and system logins?",
    answers: [
      {
        text: "A) We use a secure password manager or vault to store and protect them.",
        points: 5.49,
        feedback: "Excellent! Using a password manager is one of the safest ways to store and manage passwords. It helps generate strong, unique passwords for each account and keeps them encrypted. Ensure that your password manager is up to date, protected by a strong master password, and, where possible, secured with multi-factor authentication (MFA)."
      },
      {
        text: "B) We write them down or save them in a file on the computer.",
        points: 2.2,
        feedback: "Risky Practice. Storing passwords in unprotected files or writing them down increases the risk of them being stolen or exposed. Cybercriminals often look for saved passwords on compromised devices. Consider transitioning to a secure password manager to store credentials safely. Password managers also help to increase password complexity and reduce password re-use. If you must record passwords temporarily, ensure they are encrypted and access is restricted."
      },
      {
        text: "C) We try to remember them or share them over email or messaging.",
        points: 0.0,
        feedback: "High Risk! Relying on memory often leads to weak or reused passwords, which increases the risk of cyberattacks. Sharing passwords via email or messaging apps also exposes them to interception or leaks. Instead, use a password manager to securely store and share passwords when necessary. Password managers also help to increase password complexity and reduce password re-use. Implement multi-factor authentication (MFA) to add an extra layer of security."
      },
      {
        text: "D) I do not know.",
        points: 1.1,
        feedback: "Time to Review. If you are unsure how passwords are stored, it is important to check. Weak password management is a major security vulnerability. Review your company's password storage practices and consider implementing a password manager. Ensure that employees follow best practices, such as using strong, unique passwords for each account and enabling MFA."
      }
    ]
  },
  {
    id: 4,
    category: "User Authentication",
    question: "Do you use strong and unique passwords for every account?",
    answers: [
      {
        text: "A) Yes, we use strong, unique passwords for everything.",
        points: 3.66,
        feedback: "Great job! Using strong, unique passwords for each account is a fundamental cybersecurity best practice. This minimizes the risk of credential-stuffing attacks, where hackers use stolen passwords from one account to access others. If you are not already, consider using a password manager to generate and store complex passwords securely. Also, enable multi-factor authentication (MFA) wherever possible for added protection."
      },
      {
        text: "B) Sometimes, but some accounts share the same password.",
        points: 1.46,
        feedback: "Moderate Risk. While having strong passwords is good, reusing passwords across multiple accounts is dangerous. If one account is compromised, attackers can use the same password to access others. Start by updating your most critical accounts (e.g., email, banking, cloud services) with unique passwords, and use a password manager to help keep track of them. Password managers also help to increase password complexity and reduce password re-use. Enabling MFA adds another layer of security."
      },
      {
        text: "C) No, we reuse the same password for many accounts.",
        points: 0.0,
        feedback: "High Risk! Reusing passwords across accounts is one of the biggest security risks for businesses. If just one password is leaked in a data breach, cybercriminals can use it to access multiple accounts, putting sensitive business and customer data at risk. Immediate Action: Start changing passwords for critical accounts first, making them long, complex, and unique. A password manager can help make this process easier, and MFA should be enabled wherever possible."
      },
      {
        text: "D) I do not know.",
        points: 0.73,
        feedback: "Time to Investigate. If you are unsure about your password practices, your business is at risk. Conduct a password audit to check if passwords are being reused or stored insecurely. Encourage employees to use a password manager to create and store unique passwords securely. Enable MFA for extra protection and consider cybersecurity awareness training to improve password hygiene across the business."
      }
    ]
  },
  {
    id: 5,
    category: "Multi-Factor Authentication (MFA)",
    question: "Do you use an additional security (MFA) for all online accounts such as a code sent to your phone?",
    answers: [
      {
        text: "A) Yes, we use this for all important accounts.",
        points: 12.2,
        feedback: "Well done! Multi-Factor Authentication (MFA) is the number one way to protect accounts from unauthorized access. Even if a password is stolen, MFA adds an extra layer of security by requiring a second verification step, such as a code sent to your phone or an authentication app. Keep reviewing your accounts to ensure MFA is enabled everywhere possible, especially for email, banking, and cloud services."
      },
      {
        text: "B) Sometimes, but not for everything.",
        points: 4.88,
        feedback: "Needs Improvement. Using MFA on some important accounts is a good start, but leaving other accounts unprotected creates a weak link in your security. Cybercriminals commonly target email accounts, which can be used to reset passwords for other services. Password crackers are also a frequently used tool amoungst hackets. Aim to enable MFA on all critical accounts, including email, cloud storage, and financial services, and consider expanding it to other business accounts as well."
      },
      {
        text: "C) No, we just use passwords. Phone and email codes are annoying.",
        points: 0.0,
        feedback: "High Risk! While extra authentication steps can be inconvenient, MFA significantly reduces the risk of account breaches. Passwords alone are not enough, as they can be stolen, guessed, or leaked in data breaches. Enabling MFA makes it much harder for attackers to gain access to your accounts. Urgent Action Needed: Start by enabling MFA on your most sensitive accounts (email, financial accounts, and business-critical systems), then gradually expand it to other services. If you're only going to take one action, make it this one!"
      },
      {
        text: "D) I am not sure.",
        points: 2.44,
        feedback: "Time to Check. If you are unsure whether MFA is enabled, it is important to find out. Check your email, financial accounts, and cloud services to see if MFA is turned on. If not, enable it as soon as possible. Develop company polocies to ensure employees to do the same, as MFA is a simple yet powerful way to protect against cyber threats."
      }
    ]
  },
  {
    id: 6,
    category: "Backing Up Your Data",
    question: "Do you regularly save copies of your important files in a secure location, such as an offsite external drive or secure cloud service?",
    answers: [
      {
        text: "A) Yes, all data is backed up automatic and stored safely.",
        points: 8.54,
        feedback: "Excellent! Regular, automated backups stored securely (preferably offsite or in a secure cloud service) are essential for protecting your business from data loss due to cyberattacks, hardware failures, or accidental deletion. Make sure your backups are tested regularly to confirm they can be restored when needed. A good backup strategy follows the 3-2-1 rule: Keep 3 copies of your data. Store them on 2 different types of media (e.g., cloud + external drive). Keep 1 copy offsite for disaster recovery."
      },
      {
        text: "B) I think critical systems only are backed up or backups are held at our business not offsite).",
        points: 3.41,
        feedback: "Needs Improvement. While backing up critical systems is a good start, on-site-only backups are vulnerable to physical damage (fire, theft, ransomware attacks). Consider adding offsite backups such as a secure cloud service or an external hard drive stored elsewhere to ensure data is protected. Also, verify that all important files, not just critical systems, are included in backups."
      },
      {
        text: "C) No, we do not back up our files or systems.",
        points: 0.0,
        feedback: "High Risk! Not having backups puts your business at serious risk. Cyberattacks (e.g., ransomware), hardware failures, or accidental deletions could permanently wipe out critical data. Immediate action is needed: 1.Set up regular automated backups for key files and systems.\n\t2.\tUse a secure cloud service or an external drive stored offsite. 3.Ensure backups are encrypted and protected from unauthorized access. 4.Test backups regularly to confirm they can be restored when needed."
      },
      {
        text: "D) Someone else manages our backups. I do not know the details.",
        points: 1.71,
        feedback: "Time to Verify. If an IT provider or another person manages backups, it is important to confirm where and how data is stored. Ask the following: Are backups automated and taken regularly? Are they stored offsite or in a secure cloud service? Have they been tested recently to ensure they work?\nWithout this knowledge, you might assume your data is safe when it is not. Review your backup policies to ensure they meet best practices."
      }
    ]
  },
  {
    id: 7,
    category: "Backing Up Your Data",
    question: "How often do you tested your backup by conducting a test restore of critical systems?",
    answers: [
      {
        text: "A) We schedule regular restore tests every 3 to 6 Months",
        points: 3.66,
        feedback: "Great job! Regularly testing your backups ensures they are functional and can be restored when needed. A backup is only useful if it works when you need it. Continue to document test results, address any issues found, and verify that all critical data is included in the backup process. Consider automating restore tests where possible to further streamline this process."
      },
      {
        text: "B) Manually whenever we remember",
        points: 1.46,
        feedback: "Needs Improvement. While testing backups occasionally is better than not testing at all, infrequent or inconsistent testing increases the risk that your backup may fail when needed. Set a recurring schedule (e.g., every 36 months) to test restore procedures and confirm that backups are complete and functional. Document test results to track any failures and ensure quick recovery in a real emergency."
      },
      {
        text: "C) We do not test restored. We only restore when something breaks.",
        points: 0.73,
        feedback: "High Risk! If backups are never tested, you will not know if they actually work until disaster strikes. Many businesses have lost critical data because they assumed their backups were reliable only to find out they were corrupted or incomplete. Immediate action needed: 1.Schedule a test restore immediately for critical systems. 2.Establish a regular restore test schedule (every 36 months).3.Ensure backups are verified for completeness and integrity to avoid surprises when you need them most."
      },
      {
        text: "D) I'm not sure.",
        points: 0.0,
        feedback: "Time to Investigate. If you are unsure whether backups are tested, your business could be at risk without realizing it. Reach out to whoever manages your backups and ask: When was the last test restore performed? Were any issues found? How often are restore tests conducted? If no one knows, it is time to implement a formal backup testing plan to ensure data can be recovered reliably in case of cyber incidents, system failures, or accidental deletions."
      }
    ]
  },
  {
    id: 8,
    category: "Cyber Security Training",
    question: "Does your team undergo regular cybersecurity training, whether online or in-person?",
    answers: [
      {
        text: "A) Yes, everyone receives cyber security training regularly.",
        points: 9.15,
        feedback: "Great job! Regular cybersecurity training ensures that employees recognize threats like phishing, ransomware, and social engineering attacks. Keeping staff informed about the latest security risks helps protect your business from cyber threats. Consider running simulated phishing tests and updating training materials frequently to reflect evolving threats."
      },
      {
        text: "B) Irregular training occurs, but not everyone has been trained yet.",
        points: 3.66,
        feedback: "Needs Improvement. Some training is better than none, but gaps in knowledge can leave your business vulnerable. Cybercriminals often target untrained staff through phishing emails and scams. To strengthen security, implement a structured training program that includes: Mandatory cybersecurity training for all employees. Regular refresher sessions (e.g., every 6 to 12 months).Simulated phishing tests to evaluate awareness.Clear policies on handling suspicious emails and threats."
      },
      {
        text: "C) No, we do not provide training on this.",
        points: 0.0,
        feedback: "High Risk! Without cybersecurity training, employees are more likely to fall victim to phishing attacks, ransomware, or scams. Human error is one of the biggest causes of cyber breaches. Immediate action is needed: 1.Start with basic cybersecurity training covering phishing, password security, and safe internet use. 2.Use free or paid online training programs or hire a cybersecurity expert for in-person training. 3.Create an incident response plan so employees know what to do if they suspect a cyber threat."
      },
      {
        text: "D) I'm not sure.",
        points: 1.83,
        feedback: "Time to Check. If you are unsure about cybersecurity training in your business, it likely means it is not a formalized process. Cybersecurity should be part of employee onboarding and ongoing professional development. Verify if any training exists and, if not, start implementing short, easy-to-understand sessions for staff."
      }
    ]
  },
  {
    id: 9,
    category: "Controlling Access to Information",
    question: "Do you control who can access certain information based on their role within the company?",
    answers: [
      {
        text: "A) Yes, staff are restricted only to information necessary to perform their role.",
        points: 3.05,
        feedback: "Excellent! You are following the principle of least privilege, which is a cornerstone of good cybersecurity. By ensuring that employees only have access to the information they need, you reduce the risk of data breaches and unauthorized access. Keep this practice up-to-date by regularly reviewing access rights, especially when roles change or when employees leave the company."
      },
      {
        text: "B) Only for some systems, but not consistently.",
        points: 1.22,
        feedback: "Needs Improvement. While it is good that some systems have restricted access, inconsistent application can leave significant gaps in your security. Action Step: Conduct a comprehensive review of all systems and data repositories to ensure that access is restricted based on roles across the entire organization. Consistency in access control can greatly reduce your vulnerability to insider threats and external attacks."
      },
      {
        text: "C) No, everyone has access to everything.",
        points: 0.0,
        feedback: "High Risk! Allowing unrestricted access to all information exposes your business to significant risks, including data breaches and unauthorized modifications. Immediate Action Needed: Implement role-based access control (RBAC) policies to ensure that employees have access only to the data necessary for their work. Start by identifying critical data and systems, then limit access accordingly. Regular audits can help maintain the integrity of these controls."
      },
      {
        text: "D) I am not sure.",
        points: 0.61,
        feedback: "Time to Investigate. Uncertainty about access controls could mean your business is unknowingly exposed to security risks. Recommendation: Consult with your IT or security team to review current access permissions. Establish clear policies and documentation for role-based access to ensure that everyone's permissions are appropriate for their responsibilities."
      }
    ]
  },
  {
    id: 10,
    category: "Managing Applications",
    question: "Do you only allow essential apps and programs for your business, blocking or removing any that are unnecessary?",
    answers: [
      {
        text: "A) Yes, only apps necessary to run our business are allowed. Unused apps and blocked or removed.",
        points: 3.05,
        feedback: "Excellent! Keeping only essential apps significantly reduces your attack surface by eliminating potential vulnerabilities from unnecessary or outdated software. This proactive approach helps maintain a cleaner, more secure IT environment. Action Tip: Continue to review and update your approved software list periodically to ensure that only essential applications remain installed and are regularly maintained."
      },
      {
        text: "B) Sometimes, but we have not checked for unnecessary apps recently.",
        points: 1.22,
        feedback: "Needs Improvement. While restricting apps occasionally is a step in the right direction, infrequent reviews can leave outdated or unneeded apps that may pose security risks. Action Tip: Schedule regular audits (e.g., quarterly) to identify and remove any unnecessary applications. This practice not only enhances security but also improves system performance."
      },
      {
        text: "C) No, we do not manage which apps are installed.",
        points: 0.0,
        feedback: "High Risk! Allowing all apps to remain installed, regardless of necessity, increases the likelihood of vulnerabilities from outdated or poorly maintained software. Immediate Action: Conduct a comprehensive review of all installed applications and remove or block those that are not essential to your business operations. Consider establishing a formal policy or using application management tools to enforce this practice."
      },
      {
        text: "D) I am not sure.",
        points: 0.61,
        feedback: "Time to Check. Uncertainty about managing apps can lead to potential security gaps. It is important to review your current software inventory to understand which applications are installed and assess their necessity. Recommendation: Consult with your IT team or provider to create a process for evaluating and controlling app installations, ensuring that only approved, essential software is used."
      }
    ]
  }
];