\# ⚡ Azure Function: Lead Data Validator (HTTP Trigger)



\*\*Role:\*\* The Gatekeeper

\*\*Tech Stack:\*\* Node.js (JavaScript) | Azure Functions Core Tools



---



\## 📖 For Beginners: What is this?

\### The "Night Club Bouncer" Analogy

Imagine your Dynamics 365 environment is an exclusive VIP club.

\* \*\*The Problem:\*\* Without a bouncer, anyone can walk in—people with fake IDs (bad email addresses), people on the "Banned List" (competitors), or people wearing the wrong clothes (missing data).

\* \*\*The Solution:\*\* This Azure Function is the \*\*Bouncer\*\*. It stands at the door. Every time a new Lead tries to enter (from a website form or external app), the Bouncer checks their ID.

&nbsp;   \* \*Fake email?\* \*\*"You can't come in."\*\*

&nbsp;   \* \*Competitor company?\* \*\*"You're banned."\*\*

&nbsp;   \* \*Valid data?\* \*\*"Welcome to the club!"\*\* (Passes data to Dynamics).



---



\## 🆚 Strategic Comparison: Why Azure Functions?



A common interview question is: \*"Why didn't you just use Power Automate or a Plugin for this?"\*



| Technology | Can it Validate? | The Downside (Why we chose Azure Functions) |

| :--- | :--- | :--- |

| \*\*Power Automate\*\* | ⚠️ Yes | \*\*Too Slow \& Expensive.\*\* If you receive 10,000 leads in an hour, Power Automate will queue up, run slowly, and burn through your API limits. Parsing complex JSON logic in Flow is also visually messy. |

| \*\*Dynamics Plugins (C#)\*\* | ⚠️ Yes | \*\*Too Rigid.\*\* Plugins run inside the Dynamics environment. If you want to use external libraries (like advanced email verification tools) or complex math, Plugins are restrictive and can slow down the user's "Save" experience. |

| \*\*Azure Functions\*\* | ✅ \*\*BEST\*\* | \*\*Scalable \& Decoupled.\*\* It runs \*outside\* of Dynamics. It can handle 1 request or 1,000,000 requests instantly (Serverless). It costs fractions of a penny per run and keeps the heavy logic away from your CRM database. |



---



\## ⚙️ How It Works (The Logic)

This function triggers whenever it receives an \*\*HTTP POST\*\* request.



1\.  \*\*Receive Data:\*\* It accepts a raw JSON body containing `name`, `email`, and `company`.

2\.  \*\*Check 1 (Required Fields):\*\* If any field is missing -> Return \*\*400 Error\*\*.

3\.  \*\*Check 2 (Blacklist):\*\* If the Company is "Test" or "Competitor" -> Return \*\*406 Not Acceptable\*\*.

4\.  \*\*Check 3 (Regex):\*\* It scans the email format. If it doesn't look like `x@y.z` -> Return \*\*400 Error\*\*.

5\.  \*\*Success:\*\* If all checks pass, it returns a \*\*200 OK\*\* status with a success message.



---



\## 🚀 Implementation Guide (How to Deploy)



\### Prerequisites

\* A Microsoft Azure Subscription (Free Tier works).

\* \*\*VS Code\*\* installed on your PC.

\* \*\*Azure Functions Extension\*\* for VS Code.



\### Step 1: Local Testing

1\.  Open this folder in VS Code.

2\.  Press \*\*F5\*\* to start the local server.

3\.  VS Code will give you a local URL: `http://localhost:7071/api/HttpTrigger1`.



\### Step 2: Testing with Postman

Send a \*\*POST\*\* request to the URL with this body:



\*\*Scenario A: The Success\*\*

```json

{

&nbsp;   "name": "John Doe",

&nbsp;   "email": "john.doe@example.com",

&nbsp;   "company": "Valid Corp"

}

```

\*Result:\* Status 200 OK.



\*\*Scenario B: The Failure (Competitor)\*\*

```json

{

&nbsp;   "name": "Evil Spy",

&nbsp;   "email": "spy@competitor.com",

&nbsp;   "company": "Competitor"

}

```

\*Result:\* Status 406 Not Acceptable (Blocked).



\### Step 3: Deployment to Cloud

1\.  Click the \*\*Azure Icon\*\* in the VS Code sidebar.

2\.  Under "Functions", click the \*\*Blue Arrow (Deploy to Function App)\*\*.

3\.  Select \*\*Create new Function App in Azure\*\*.

4\.  Give it a unique name (e.g., `MyLeadValidator2025`).

5\.  Select \*\*Node.js 18 LTS\*\*.

6\.  Select your region (e.g., \*\*US East\*\*).

7\.  Wait for the notification: "Deployment Completed."



---

\*Created by \[Bala Gowtham Narisetty]\*

