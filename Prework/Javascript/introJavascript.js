// Declare the greeting.
let message;

// Assign it a value.
message = 'Goodbye, world!';

// Declare and initialize constant.
const DAYS_PER_WEEK = 7;
let daysPerWeek = 7;
console.log('There are ' + DAYS_PER_WEEK + ' days per week. ');

// Declare and assign the forecast Object.
let forecast = {
    description: 'Mostly cloudy',
    currentTemperature: 36,
    highTemperature: 46,
    lowTemperature: 32,
    chanceOfPrecipitation: 65
};

// Change description.
forecast.description = 'Sunny';
forecast.chanceOfPrecipitation = 10;

// Print the forecast.
console.log('Today will be ' + forecast.description + ' with a ' + forecast.chanceOfPrecipitation + '% chance of precipitation. ');