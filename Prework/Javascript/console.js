/* 
This function calculates the monthly insurance premium for a single driver. The driver is expected to have these properties:
    name: string
    ageInYears: number
    recentViolations: number: traffic violations recieved in the last 2 years
*/

function getMonthlyPremium(driver) {
    // Create a variable for the calculation
    let monthlyPremium; 

    // Establish base rate by age
    if (driver.ageInYears < 26) {
        monthlyPremium = 130;
    } else if (driver.ageInYears > 65) {
        monthlyPremium = 115;
    } else {
        monthlyPremium = 100;
    }

    // Higher risk for citations in last two years
    monthlyPremium += driver.recentViolations * 25;

    return monthlyPremium;
}

/*
This function creates a quote for a family of drivers.
'Family' is an array of drivers.
*/

function getFamilyAnnualQuote(family) {
    // Create a variable to sum up individual premiums
    let annualQuote = 0;
    // Loop for each member of the family, and call getMonthlyPremium
    for (let i = 0; i < family.length; i++) {
        //Display each members monthly premium
        let familyMember = family[i];
        let month = getMonthlyPremium(familyMember);
        console.log('\tMonthly premium for ' + familyMember.name + ": $" + month);  
        // Add the monthly premium * 12 to the total annual premium     
        annualQuote += month * 12;
    }

    // Print total to the console
    console.log('');
    console.log('Total annual premium: $' + annualQuote);
    return annualQuote;
}

// Create the family array

let myFamily = [
    { name: 'Trudy', ageInYears: 52, recentViolations: 0},
    { name: 'Max', ageInYears: 48, recentViolations: 1},
    { name: 'Aiden', ageInYears: 22, recentViolations: 0},
    { name: 'ki', ageInYears: 25, recentViolations: 3}
]

getFamilyAnnualQuote(myFamily);