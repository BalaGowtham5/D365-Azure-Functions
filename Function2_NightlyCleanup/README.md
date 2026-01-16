# ⏰ Azure Function: Nightly Cleanup (Timer Trigger)

**Role:** The Night Janitor
**Tech Stack:** Node.js (JavaScript) | CRON Expressions

---

## 📖 For Beginners: What is this?
### The "Night Janitor" Analogy
Imagine your Dynamics 365 database is a busy office building.
* **The Problem:** Every day, people leave trash around (Log files, temporary data, completed workflow history). If nobody cleans it up, the office eventually fills with trash and people can't work (The database gets slow).
* **The Solution:** This Azure Function is the **Night Janitor**. It sleeps all day. At exactly **2:00 AM**, when the office is empty, it wakes up, sweeps the floors (deletes old logs), empties the bins, and goes back to sleep. No human needs to call it; it just happens.

---

## 🆚 Strategic Comparison: Why Azure Functions?

A common interview question: *"Why didn't you use a Power Automate 'Scheduled Cloud Flow'?"*

| Technology | Can it Schedule? | The Downside (Why we chose Azure Functions) |
| :--- | :--- | :--- |
| **Power Automate** | ⚠️ Yes | **Timeout Limits.** A standard Flow times out after **30 days** (for running instances), but more importantly, a single action has strict timeout limits (minutes). If you need to delete 50,000 records, the Flow will likely fail or time out in the middle of the loop. |
| **Dynamics Jobs** | ⚠️ Yes | **Performance Impact.** "Bulk Delete Jobs" inside Dynamics use the CRM server's resources. If you run a massive cleanup job, it can slow down the system for users in other time zones. |
| **Azure Functions** | ✅ **BEST** | **Unlimited Time & Power.** In the "Premium" plan, Azure Functions can run indefinitely. Even on the Consumption plan, they are optimized for quick execution of backend code without slowing down your CRM front-end. |

---

## ⚙️ How It Works (The Logic)
This function uses a **Timer Trigger** defined by a **NCrontab Expression**.

1.  **Schedule:** `0 0 2 * * *`.
    * `0` (Seconds)
    * `0` (Minutes)
    * `2` (Hours - 2 AM)
    * `*` (Any Day)
    * `*` (Any Month)
    * `*` (Any Day of Week)
2.  **Wake Up:** At 2:00 AM, Azure boots up the server instance.
3.  **Execute:** It connects to the database (simulated in this code) and runs a query to find records older than X days.
4.  **Clean:** It deletes those records to free up storage space.
5.  **Sleep:** It shuts down immediately to save money until tomorrow.

---

## 🚀 Implementation Guide (How to Deploy)

### Prerequisites
* A Microsoft Azure Subscription.
* **VS Code** with Azure Functions Extension.

### Step 1: Local Testing (Force Run)
Since you don't want to wait until 2:00 AM to test it, you can "Force Run" it locally.

1.  Open VS Code and press **F5** to start.
2.  You cannot "browse" to a Timer Trigger like a website.
3.  Instead, right-click the function in the **Azure sidebar** (under "Local Project") and select **"Execute Function Now"**.
4.  Watch the **Terminal** at the bottom of the screen. You will see:
    > `Nightly Cleanup Job started at: 2025-01-15T10:00:00.000Z`
    > `Cleanup complete. Automatically deleted 50 old log records.`

### Step 2: Deployment
1.  Click the **Azure Icon** in the VS Code sidebar.
2.  Click the **Blue Arrow (Deploy)**.
3.  Select your existing Function App (created in Function 1) or create a new one.
4.  Once deployed, Azure takes over the schedule. It will run automatically tonight!

---
*Created by [Bala Gowtham Narisetty]*
