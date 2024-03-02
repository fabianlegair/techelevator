/*
function allowCarRental(age, hasInsurance) {
    const MIN_AGE = 25;
    let allowRent = false;

    if (age >= MIN_AGE && hasInsurance) {
        allowRent = true;
    }
    return allowRent;
}

console.log(allowCarRental(20, false) );
console.log(allowCarRental(20, true) );
console.log(allowCarRental(25, true) );
console.log(allowCarRental(30, false) );


function prepareProduceList(monthNumber) {
    let produceList = ['onions', 'potatoes'];

    if (monthNumber >= 5 && monthNumber <= 9) {
        produceList.push('spinach');
    }
    if (monthNumber === 6) {
        produceList.push('strawberries');  
    }
    if (monthNumber >= 7 && monthNumber <= 8) {
        produceList.push('raspberries', 'peas');
    }
    if (monthNumber >= 7 && monthNumber <= 10) {
        produceList.push('tomatoes');  
    }
    if (monthNumber >= 8 && monthNumber <=10) {
        produceList.push('apples');
    }
    
    return produceList;
}

console.log(prepareProduceList(1) );
console.log(prepareProduceList(5) );
console.log(prepareProduceList(6) );
console.log(prepareProduceList(7) );
console.log(prepareProduceList(9) );


function prepareGroceryList(priceOfButter, priceOfMargarine) {
    let groceryList = ['milk'];

    if (priceOfMargarine < priceOfButter) {
        groceryList.push('margarine');
    } else {
        groceryList.push('butter');
    }   
    
    return groceryList;
}

console.log(prepareGroceryList(3.75, 4) );
console.log(prepareGroceryList(4, 3.75) );
console.log(prepareGroceryList(4, 4) );


function getRoom(age) {
    let room = 'Turtle'

    if (age <= 10) {
        room = 'Turtle';
    }
    else if (age <= 18) {
        room = 'Zebra';
    } else {
        room = 'Lion';
    };
    
    return room;
}

console.log(getRoom(10) );
console.log(getRoom(18) );
console.log(getRoom(19) );


function winOrLose(playerGuess, nextCard) {
    
    if (playerGuess === nextCard.color) {
    return 'win';

    } else {
    return 'lose';

    }
    
}
console.log(winOrLose("red", {rank: 'Q', suit: 'hearts', color: 'red'} ) );
console.log(winOrLose("red", {rank: 'J', suit: 'spades', color: 'black'} ) );
console.log(winOrLose("black", {rank: 'Q', suit: 'hearts', color: 'red'} ) );


function determinePoints(card) {

    let cardValue = {
        suit: card.suit,
        rank: card.rank
    };

    if (card.rank === 'jack') {
        cardValue = 11;
    }
    else if (card.rank === 'queen') {
        cardValue = 12;
    }
    else if (card.rank === 'king') {
        cardValue = 13;
    }
    else if (card.rank === 'ace') {
        cardValue = 14;
    } else {
        cardValue = Number(card.rank);
    };
    
    return cardValue;
}

console.log(determinePoints( {rank: 'queen', suit: 'hearts' } ) );
console.log(determinePoints( {rank: '8', suit: 'clubs' } ) );
console.log(determinePoints( {rank: 'ace', suit: 'diamonds' } ) );


function winOrLose(difficulty, redBlack, highLow) {
    let gameMode = difficulty;
    let result = 'win';

    if (gameMode === 'hard') {
        if (redBlack === true && highLow === true) {
            result = 'win';
        } else {
            result = 'lose';
        }
    }
    else if (gameMode === 'easy') {
        if (redBlack === true || highLow === true) {
            result = 'win';
        } else {
            result = 'lose';    
        }
    };
    
    return result;    
}

console.log(winOrLose('easy', false, true) );
console.log(winOrLose('easy', false, false) );
console.log(winOrLose('hard', true, true) );
console.log(winOrLose('hard', false, true) );


function getDeliveryCharge(orderPostalCode, deliveryPostalCodes) {
    let deliveryCharge = 10;
    
    if (deliveryPostalCodes.includes(orderPostalCode)) {
        deliveryCharge = 10;
    } else {
        deliveryCharge = null;
    };

    return deliveryCharge;
}

console.log(getDeliveryCharge('94102', ['94114', '94102', '94103']));
console.log(getDeliveryCharge('90210', ['94114', '94102', '94103']));


function getDeliveryCharge(orderPostalCode, deliveryPostalCodes) {
    const EXPRESS_DELIVERY = 5;
    const REACH_DELIVERY = 15;
    let deliveryCharge = null;

    let express = deliveryPostalCodes.express;
    let reach = deliveryPostalCodes.reach;
    
    if (express.includes(orderPostalCode)) {
        deliveryCharge = EXPRESS_DELIVERY;
    }
    else if (reach.includes(orderPostalCode)) {
        deliveryCharge = REACH_DELIVERY;  
    } else {
        // no change
    }

    return deliveryCharge;
}

console.log(getDeliveryCharge('94102', { express: ['94114', '94102'], reach: ['94103', '94110']}));
console.log(getDeliveryCharge('94103', { express: ['94114', '94102'], reach: ['94103', '94110']}));
console.log(getDeliveryCharge('90210', { express: ['94114', '94102'], reach: ['94103', '94110']}));


function  getDeliveryCharge(orderPostalCode, orderTotal, deliveryPostalCodes) {
    const EXPRESS_DELIVERY = 5;
    const REACH_DELIVERY = 15;
    let deliveryCharge = null;

    let express = deliveryPostalCodes.express;
    let reach = deliveryPostalCodes.reach;

    if (express.includes(orderPostalCode)) {
        if (orderTotal >= 30) {
            deliveryCharge = 0;
        } else {
            deliveryCharge = EXPRESS_DELIVERY;
        }
    } 
    else if (reach.includes(orderPostalCode)) {
        if (orderTotal >= 75) {
            deliveryCharge = 0;
        } else {
            deliveryCharge = REACH_DELIVERY;
        }
    } else {
        // no change
    }

    return deliveryCharge;
}

console.log(getDeliveryCharge('94102', 15,  { express: ['94114', '94102'], reach: ['94103', '94110']}));
console.log(getDeliveryCharge('94102', 50,  { express: ['94114', '94102'], reach: ['94103', '94110']}));
console.log(getDeliveryCharge('94103', 50,  { express: ['94114', '94102'], reach: ['94103', '94110']}));
console.log(getDeliveryCharge('94103', 100, { express: ['94114', '94102'], reach: ['94103', '94110']}));
console.log(getDeliveryCharge('90210', 100, { express: ['94114', '94102'], reach: ['94103', '94110']}));


function getGradeValue(letterGrade) {
    let pointValue = letterGrade

    if (letterGrade === 'A') {
        pointValue = 4;
    }
    else if (letterGrade === 'B') {
        pointValue = 3;
    }
    else if (letterGrade === 'C') {
        pointValue = 2;
    }
    else if (letterGrade === 'D') {
        pointValue = 1;
    }

    return pointValue;
}
console.log(getGradeValue('A'));
console.log(getGradeValue('B'));
console.log(getGradeValue('C'));
console.log(getGradeValue('D'));


function getGradeValue(letterGrade) {
    let pointValue = letterGrade

    if (letterGrade === 'A') {
        pointValue = 4;
    }
    else if (letterGrade === 'B') {
        pointValue = 3;
    }
    else if (letterGrade === 'C') {
        pointValue = 2;
    }
    else if (letterGrade === 'D') {
        pointValue = 1;
    }

    return pointValue;
};

function calculateGPA(courses) {

    let reportCard = {
        art: courses.art,
        math: courses.math,
        science: courses.science,
        honorsCourses: courses.honorsCourses,
        numberTimesAbsent: courses.numberTimesAbsent
    };

    let artValue = getGradeValue( reportCard.art);
    let mathValue = getGradeValue( reportCard.math);
    let scienceValue = getGradeValue( reportCard.science);

    let honorsWeight = 0.2;
    let gpa = (artValue + mathValue + scienceValue) / 3;

    if (reportCard.honorsCourses === true) {
        gpa = gpa + honorsWeight;
    };

    return gpa;
};

console.log(calculateGPA({art: 'B', math: 'A', science: 'C', honorsCourses: true, numberTimesAbsent: 0}));
*/