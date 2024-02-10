/*
    This program creates a sentence to greet the program user.
    It first defines their name, then the greeting.
    Next, it combines them and prints the resulting sentence to the screen.
*/

// Declare the user's name.
let nameThem = 'Sam';

// Declare the greeting.
let greeting = 'Hello';

// Combine into a sentence and print it.

let greetingMessage = greeting + ', ' + nameThem + '. ';
console.log(greetingMessage);
 
// Declare his hourly wage.
let hourlyWage = 20;

// Declare his schedule
let hoursPerDay = 8;
let daysPerWeek = 5;

// Calculate his wages.
let dailyWage = hourlyWage * hoursPerDay;
let weeklyWage = hourlyWage * hoursPerDay * daysPerWeek;
let holidayTime = dailyWage * 12;

// Calculate gross annual income and print it.
let grossAnnualIncome = weeklyWage * 52 - holidayTime;

console.log('Your hourly pay: $' + hourlyWage + 'USD. ');
console.log('You work ' + hoursPerDay + ' hours per day, and ' + daysPerWeek + ' days per week.');
console.log('Your Gross Annual Income: $' + grossAnnualIncome + 'USD. ');
