\# ☁️ Dynamics 365 \& Azure Functions Portfolio



\## 📄 Project Overview

This repository demonstrates "Pro-Code" backend integration patterns for Microsoft Dynamics 365 using \*\*Azure Functions (Node.js)\*\*. 



While Power Automate handles basic workflows, this portfolio focuses on \*\*High-Performance\*\* scenarios requiring complex validation, scheduled maintenance, and advanced financial mathematics.



\## 🛠️ Tech Stack

\* \*\*Language:\*\* JavaScript (Node.js)

\* \*\*Framework:\*\* Azure Functions V4

\* \*\*Triggers Used:\*\* HTTP Trigger, Timer Trigger



---



\## 📂 Function Catalog



| # | Function Name | Trigger Type | Scenario |

| :--- | :--- | :--- | :--- |

| \*\*01\*\* | \[\*\*Lead Data Validator\*\*](./Function1\_LeadValidator) | \*\*HTTP\*\* | \*\*"The Gatekeeper"\*\* - Validates incoming JSON data (Regex, Blacklists) before it enters CRM. Replaces complex/slow Power Automate parsing. |

| \*\*02\*\* | \[\*\*Nightly Cleanup Job\*\*](./Function2\_NightlyCleanup) | \*\*Timer\*\* | \*\*"The Night Janitor"\*\* - Runs automatically at 2:00 AM to perform maintenance tasks (e.g., Log deletion) without affecting user performance. |

| \*\*03\*\* | \[\*\*Complex Loan Calculator\*\*](./Function3\_LoanCalculator) | \*\*HTTP\*\* | \*\*"The Math Professor"\*\* - Accepts loan inputs and uses advanced Math (Exponents) to calculate amortization schedules. Solves the limitation of Dynamics Calculated Fields. |



---



\## 🚀 Deployment Instructions

1\.  \*\*Clone\*\* this repository.

2\.  Open in \*\*VS Code\*\*.

3\.  Install the \*\*Azure Functions Extension\*\*.

4\.  Press \*\*F5\*\* to run locally.

5\.  Use the "Deploy to Function App" button to push to your Azure Subscription.



---

\*Created by \[Bala Gowtham Narisetty]\*

