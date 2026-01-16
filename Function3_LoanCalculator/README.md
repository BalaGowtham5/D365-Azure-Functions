# 🧮 Azure Function: Complex Loan Calculator (HTTP Trigger)

**Role:** The Math Professor
**Tech Stack:** Node.js (JavaScript) | Math.pow()

---

## 📖 For Beginners: What is this?
### The "Scientific Calculator" Analogy
Imagine you are filling out a form in Dynamics 365 for a new car loan.
* **The Problem:** Dynamics 365 and Power Automate are like basic "Pocket Calculators." They are great for adding `A + B`, but they struggle with complex exponents, financial curves, or massive number crunching.
* **The Solution:** This Azure Function is a **Scientific Calculator**. You send it three numbers (Loan Amount, Rate, Years), and it instantly performs advanced algebra to tell you exactly what the monthly payment will be, down to the penny.

---

## 🆚 Strategic Comparison: Why Azure Functions?

A common interview question: *"Why didn't you use a Calculated Field or Power Automate Expressions?"*

| Technology | Can it Calculate? | The Downside (Why we chose Azure Functions) |
| :--- | :--- | :--- |
| **Power Automate** | ⚠️ Sort of | **Math is Hard.** Writing complex math in Flow expressions is a nightmare. It looks like `div(mul(interest, add(1, interest)), ...)` and is incredibly hard to debug. Power Automate is for *Process*, not *Math*. |
| **Calculated Fields** | ❌ NO | **Too Simple.** Dynamics Calculated Fields support basic `+ - * /`. They do **not** support exponents (`^`) or complex financial functions like Amortization. |
| **Azure Functions** | ✅ **BEST** | **Native Math Support.** JavaScript has built-in `Math` libraries. We can write complex financial models, statistical analysis, or physics engines in standard code and get results in milliseconds. |

---

## ⚙️ How It Works (The Logic)
This function uses the standard **Mortgage Amortization Formula**:

`M = P [ r(1+r)^n ] / [ (1+r)^n – 1 ]`

1.  **Input:** It accepts `principal` (Loan Amount), `rate` (Annual Interest), and `years` (Term).
2.  **Convert:** It converts the Annual Rate to a Monthly Rate (`rate / 1200`) and Years to Months (`years * 12`).
3.  **Compute:** It uses `Math.pow()` to handle the exponents in the formula.
4.  **Output:** It returns a JSON object containing the `monthlyPayment`, `totalRepayment`, and `totalInterestCost`.

---

## 🚀 Implementation Guide (How to Deploy)

### Prerequisites
* VS Code with Azure Functions Extension.

### Step 1: Local Testing
1.  Open VS Code and press **F5**.
2.  The function URL will appear: `http://localhost:7071/api/HttpTrigger1`.

### Step 2: Testing with Postman
Send a **POST** request with this body:

**Request:**
```json
{
    "principal": 350000,
    "rate": 4.5,
    "years": 30
}
```

**Response (What Dynamics 365 receives):**
```json
{
    "loanDetails": {
        "principal": 350000,
        "annualRate": "4.5%",
        "termYears": 30
    },
    "calculation": {
        "monthlyPayment": 1773.40,
        "totalRepayment": 638423.64,
        "totalInterestCost": 288423.64
    }
}
```

---
*Created by [Bala Gowtham Narisetty]*
