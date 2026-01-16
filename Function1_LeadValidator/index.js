module.exports = async function (context, req) {
    context.log('Lead Validator function processing a request.');

    // 1. Get data from the body
    const name = (req.body && req.body.name);
    const email = (req.body && req.body.email);
    const company = (req.body && req.body.company);

    // 2. Validation 1: Check for missing fields
    if (!name || !email || !company) {
        context.res = {
            status: 400, // Bad Request
            body: "Error: Missing required fields (name, email, or company)."
        };
        return;
    }

    // 3. Validation 2: Block specific companies (e.g., Competitors or Test data)
    if (company.toLowerCase() === "test" || company.toLowerCase() === "competitor") {
        context.res = {
            status: 406, // Not Acceptable
            body: "Error: Leads from this company are blocked."
        };
        return;
    }

    // 4. Validation 3: Simple Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        context.res = {
            status: 400,
            body: "Error: Invalid email format."
        };
        return;
    }

    // 5. Success! Return the cleaned data
    context.res = {
        status: 200,
        body: {
            message: "Validation Successful. Ready for Dynamics 365.",
            data: {
                leadName: name,
                leadEmail: email,
                leadCompany: company,
                processedAt: new Date().toISOString()
            }
        }
    };
}