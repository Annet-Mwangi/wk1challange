// Function to calculate Net Salary
function netSalaryCalculator() {
    // Prompt user for basic salary and benefits
    let basicSalary = prompt("Enter basic salary:");
    let benefits = prompt("Enter benefits:");

    // Convert inputs to numbers
    basicSalary = Number(basicSalary);
    benefits = Number(benefits);

    // Validate the inputs
    if (isNaN(basicSalary) || isNaN(benefits)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate deductions
    let payee = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);

    // Calculate net salary
    let netSalary = grossSalary - payee - nhif - nssf;

    // Output the results
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE: ${payee}`);
    console.log(`NHIF: ${nhif}`);
    console.log(`NSSF: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Function to calculate PAYE (Tax)
function calculatePAYE(grossSalary) {
    // Example calculation, you should replace this with the actual rates from the provided link
    return grossSalary * 0.1; // 10% tax
}

// Function to calculate NHIF
function calculateNHIF(grossSalary) {
    // Example calculation, replace with actual NHIF rates
    return 500; // Flat rate example
}

// Function to calculate NSSF
function calculateNSSF(grossSalary) {
    // Example calculation, replace with actual NSSF rates
    return 200; // Flat rate example
}

// Call the function
netSalaryCalculator();
