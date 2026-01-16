module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    // 1. Log the start time
    context.log('Nightly Cleanup Job started at:', timeStamp);

    // 2. Check if the job is running late (missed schedule)
    if (myTimer.isPastDue) {
        context.log('Warning: This job is running late!');
    }

    // 3. SIMULATION: In a real scenario, you would connect to Dynamics 365 here
    // Example: "DELETE FROM Logs WHERE CreatedOn < 30_Days_Ago"
    
    context.log("Scanning database for old logs...");
    
    // Simulate a process taking time (e.g., deleting 5000 records)
    // We use a simple loop here to represent 'work'
    var deletedCount = 0;
    for (let i = 0; i < 50; i++) {
        deletedCount++; // Deleting record...
    }

    context.log(`Cleanup complete. Automatically deleted ${deletedCount} old log records.`);
    context.log('Job finished successfully.');
};