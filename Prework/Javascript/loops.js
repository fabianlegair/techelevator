/*
function doCountdownProcess() {

}

function launchRocket(startingCount) {
    let counter = startingCount;
    while (counter >= 0) {
        doCountdownProcess();
        counter = counter - 1;
    };
};

launchRocket(10);


function followBreadRecipe(riseGoal) {
    addIngredients();
    kneadDough();

    for (let riseCounter = 0; riseCounter < riseGoal; riseCounter++) {
        punchDoughDown();
        riseDough(20);
    };
    
    bakeBread(30);
};


function calculateCartTotal(cart) {
    //let cartItems =[cart]
    let itemTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        let itemCost = cart[i].price;
        itemTotal = itemTotal + itemCost;
    }

    return itemTotal;
}

console.log(calculateCartTotal([{name: 'paper towels', price: 9.90},
                                {name: 'cereal', price: 4.25},
                                {name: 'milk', price: 3.29}]));
console.log(calculateCartTotal([]));


function performExercise(exercise) {
    for (let iRep = 1; iRep <= exercise.reps; iRep++)
        console.log(exercise.name  + ': ' + iRep + '! ');   
}

function performWorkout(workout) {
    for (let iSet = 0; iSet < workout.length; iSet++) {
        let exercise = workout[iSet];
        performExercise(exercise);
    }

} 


function hasFreezingTemp(temperatures) {
    let freezing = false;
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] <= 0) {
            freezing = true;
        }
    }

    return freezing;
}

console.log(hasFreezingTemp([10, 20, 30]));
console.log(hasFreezingTemp([0, 10, 20, 30]));
console.log(hasFreezingTemp([1, 2, 3, -1]));


function getHighestTemperature(temperatures) {
    let highestTemp = temperatures[0];
    for (let i = 0; i < temperatures.length; i++)
        if (temperatures[i] > highestTemp) {
            highestTemp = temperatures[i]; 
        }

    return highestTemp;
}

console.log(getHighestTemperature([0, 40, 20, 30]));
console.log(getHighestTemperature([-10, -5, 0]));
console.log(getHighestTemperature([-20, -5, -10]));


const noAlertDay1 = { highTemperature: 28, humidity: 33, date: "2024/03/03" }
const noAlertDay2 = { highTemperature: 32, humidity: 10, date: "2024/04/04" }
const alertDay3   = { highTemperature: 38, humidity: 10, date: "2024/05/05" }
const alertDay4   = { highTemperature: 33, humidity: 28, date: "2024/06/06" }

function issueFireAlert(forecast) {
    let alert = false;
    for (let i = 0; i < forecast.length; i++) {
        if (forecast[i].highTemperature > 32 && forecast[i].humidity < 30) {
            alert = true;
            console.log(forecast[i].date);
            return forecast[i].date;
        }
    }
    if (alert !== true) {
            alert = null;
            console.log(alert);
        }

    return alert;
}

issueFireAlert([noAlertDay1, noAlertDay2]);
issueFireAlert([noAlertDay1, alertDay3, alertDay4]);
issueFireAlert([alertDay4, alertDay3]);


const forecasts = [
    { date: '2023/05/01', city: 'Oklahoma City', 
      highTemperature: 80, lowTemperature: 60, humidity: 70 },
    { date: '2023/05/02', city: 'Oklahoma City', 
      highTemperature: 75, lowTemperature: 55, humidity: 65 },
    { date: '2023/05/01', city: 'Tulsa', 
      highTemperature: 82, lowTemperature: 62, humidity: 75 },
    { date: '2023/05/02', city: 'Tulsa', 
      highTemperature: 79, lowTemperature: 59, humidity: 70 }
  ];

function getForecastCities(cities) {
    let cityNames = [];
    let currentCity = '';
    for (let i = 0; i < cities.length; i++) {
        currentCity = cities[i].city;
        if (cityNames.includes(currentCity)) {
        } else {
            cityNames.push(currentCity);
        }
    }
return cityNames;
}

console.log(getForecastCities(forecasts));


const precipitationPhoenixAugust2022 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ;
const precipitationSeattleJanuary2023 = [0.5, 0.2, 0.8, 0, 0, 0, 0, 0, 0, 0.1, 0, 0, 0, 0.3, 0.6, 0.9, 0, 0, 0, 0, 0.4, 0, 0, 0, 0, 0.7, 0, 0, 0, 0.5, 0.2];
const precipitationClevelandMay2022 = [0, 0, 0, 0.1, 0, 0, 0, 0, 0, 0, 0.3, 0.2, 0.1, 0.4, 0, 0, 0, 0, 0, 0.5, 0.1, 0, 0, 0.2, 0.3, 0, 0, 0, 0.4, 0.2, 0];

function getLongestDryStreak(rainData) {
    let currentValue = 0;
    let currentStreak = 0;
    let highestStreak = 0;

    for (let counter = 0; counter < rainData.length; counter++) {
        currentValue = rainData[counter];
        if (currentValue === 0) {
            currentStreak += 1;
            if (currentStreak === rainData.length) {
                highestStreak = currentStreak;
            }
        }
        else if (currentValue != 0) {
            if (currentStreak >= highestStreak) {
                highestStreak = currentStreak;
                currentStreak = 0; 
            } else {
                currentStreak = 0;
            }
        }
    }

    return highestStreak;
}
console.log(getLongestDryStreak(precipitationPhoenixAugust2022));
console.log(getLongestDryStreak(precipitationSeattleJanuary2023));
console.log(getLongestDryStreak(precipitationClevelandMay2022));


function createDeck(suits, ranks) {
    let cards = [];
    for (let iSuits = 0; iSuits < suits.length; iSuits++) {
        for (let iRanks = 0; iRanks < ranks.length; iRanks++) {
            let newCard = {
                suit: suits[iSuits],
                rank: ranks[iRanks]
        }
        cards.push(newCard);
        }
    }

    return cards;
}

console.log(createDeck(['clubs', 'spades'], ['2', '3']))


function dealHand(numCards) {
    let hand = [];
    for (let i = hand.length; i < numCards; i++) {
        hand.push(drawCard());
    }
    
    return hand;
}


function drawCard() {
    
}

function drawUntilPlayable(targetCard) {
    const DRAWN_CARDS = [];

    while (true) {
        const DRAWN_CARD = drawCard();
        DRAWN_CARDS.push(DRAWN_CARD);

        if (DRAWN_CARD.rank === targetCard.rank || DRAWN_CARD.suit === targetCard.suit) {
            break;
        }              
    }

    return DRAWN_CARDS;
    */