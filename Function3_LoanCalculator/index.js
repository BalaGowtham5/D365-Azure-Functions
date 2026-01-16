module.exports = async function (context, req) {
    context.log('Loan Calculator processed a request.');

    // 1. Get Input Data (Principal, Rate, Years)
    // Supports both Query Strings (URL) and Body (JSON)
    const principal = parseFloat(req.query.principal || (req.body && req.body.principal));
    const annualRate = parseFloat(req.query.rate || (req.body && req.body.rate));
    const years = parseInt(req.query.years || (req.body && req.body.years));

    // 2. Validate Input
    if (!principal || !annualRate || !years) {
        context.res = {
            status: 400,
            body: "Please pass principal, rate (percent), and years in the request body."
        };
        return;
    }

    // 3. Perform Complex Calculation (The "Business Logic")
    // Monthly Interest Rate (r)
    const r = (annualRate / 100) / 12;
    // Total Number of Payments (n)
    const n = years * 12;

    // Amortization Formula: M = P [ r(1+r)^n ] / [ (1+r)^n – 1 ]
    const numerator = r * Math.pow((1 + r), n);
    const denominator = Math.pow((1 + r), n) - 1;
    const monthlyPayment = principal * (numerator / denominator);

    // Calculate Totals
    const totalPaid = monthlyPayment * n;
    const totalInterest = totalPaid - principal;

    // 4. Return the result as a clean JSON object
    context.res = {
        status: 200,
        body: {
            loanDetails: {
                principal: principal,
                annualRate: annualRate + "%",
                termYears: years
            },
            calculation: {
                monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
                totalRepayment: parseFloat(totalPaid.toFixed(2)),
                totalInterestCost: parseFloat(totalInterest.toFixed(2))
            }
        }
    };
}