/*
function calculateScore(points) {
    let sum = points[0] + points[1] + points[2] + points[3] + points[4];
    return sum;
}
console.log(calculateScore( [15, 10, 15, 20, 20] ));
console.log(calculateScore( [20, 20, 20, 20, 20] ));


function replaceLastWithButter(groceryList) {
    groceryList.pop();
    groceryList.push('butter');
    return groceryList;
}
console.log(replaceLastWithButter( ['apples', 'banana', 'carrots', 'donuts'] ));
console.log(replaceLastWithButter( ['broccoli', 'bread'] ));
console.log(replaceLastWithButter( ['pizza'] ));


function addStaples(groceryList) {
    let eggs = { name: 'eggs', quantity: 12 };
    let milk = { name: 'milk', quantity: 1 };
    groceryList.push(eggs);
    groceryList.push(milk);
    return groceryList;
}

console.log(addStaples( [ { name: 'corn', quantity: 6 }, { name: 'cake', quantity: 1 } ] ));


function isSalesTrendUp(weeklySales) {
    let salesW1 = weeklySales[0];
    let salesW2 = weeklySales[1];
    let salesW3 = weeklySales[2];
    let salesW4 = weeklySales[3];

    let increaseCheck = salesW1 <= salesW2 && salesW2 <= salesW3 && salesW3 <= salesW4;
    return increaseCheck;
}
 console.log(isSalesTrendUp( [19000, 19000, 20000, 20000] ));
 console.log(isSalesTrendUp( [19000, 19500, 20000, 20500] ));
 console.log(isSalesTrendUp( [19000, 20000, 19000, 20000] ));


 function isOverMax (groupOne, groupTwo, groupThree) {
    let toppingMax = 5;

    let groupOneAmt = groupOne.length;
    let groupTwoAmt = groupTwo.length;
    let groupThreeAmt = groupThree.length;

    let maxTest = groupOneAmt + groupTwoAmt + groupThreeAmt > toppingMax;
    return maxTest;
    
 }

 console.log(isOverMax( ['onion'], ['artichoke', 'red pepper', 'goat cheese'], [] ));
 console.log(isOverMax( ['basil', 'onion', 'garlic'], [], ['pepperoni', 'sausage'] ));
 console.log(isOverMax( ['green pepper', 'onion', 'garlic', 'black olives'], [], ['ham', 'sausage'] ));
 

function isLastShiftOvertime(shifts) {
    let lastShift = shifts[shifts.length-1];
    let overtimeCheck = lastShift > 8;
    return overtimeCheck;
}
console.log(isLastShiftOvertime( [ ] ));
console.log(isLastShiftOvertime( [6, 8] ));
console.log(isLastShiftOvertime( [8, 6, 6, 10] ));


function isScheduled(employee, dayShift, nightShift) {
    let checkDayShift = dayShift.includes(employee);
    let dayCheck = checkDayShift === true;

    let checkNightShift = nightShift.includes(employee);
    let nightCheck = checkNightShift === true;

    let runCheck = dayCheck || nightCheck === true;
    return runCheck;
}
console.log(isScheduled('Li', ['Jalen', 'Desi'], ['Li', 'Ash', 'Jo'] ));
console.log(isScheduled('Desi', ['Jalen', 'Desi'], ['Li', 'Ash', 'Jo'] ));
console.log(isScheduled('Safa', ['Jalen', 'Desi'], ['Li', 'Ash', 'Jo'] ));


function removeSpecials(menu) {
    let removeAppetizers = menu.appetizers.pop();
    let removeDesserts = menu.desserts.pop();
    let removePizzas = menu.pizzas.pop();

    let removedValues = [removeAppetizers, removeDesserts, removePizzas];
    return removedValues; 
};

console.log(removeSpecials( { appetizers: ['Garlic bread', 'Breadsticks', 'Fries', 'Cheese curds' ],
                              desserts: ['Cannoli', 'Chocolate Cake', 'Raspberry Cheesecake'],
                              pizzas: ['Cheese', 'Pepperoni', 'Supreme', 'Veggie', 'Thai Curry'] } ));


function acceptDelivery(zipCode) {
    let zones = ['94035', '94043', '94085', '94086', '94087', '94089', '95051'];
    let zoneCheck = zones.indexOf(zipCode) >= 0;
    return zoneCheck;
}

console.log(acceptDelivery( '11111' ));
console.log(acceptDelivery( '94035' ));
console.log(acceptDelivery( '94085' ));


function getManagerPhone(info) {
    let managerPhone = info[0].phoneNumber;
    return managerPhone
}

console.log(getManagerPhone( [ {name: 'Desi Rodriguez', phoneNumber: '987-654-3211'},
                               {name: 'Li Meyers', phoneNumber: '987-654-1234'} ] ));
console.log(getManagerPhone( [ {name: 'Jo Aziz', phoneNumber: '987-654-1443'}, 
                               {name: 'Jalen Hsu', phoneNumber: '987-654-1002'} ] ) );



function findTopServers(employeeSales) {

    let topServers = {
        top: employeeSales[employeeSales.length-1].name,
        mid: employeeSales[employeeSales.length-2].name, 
        bot: employeeSales[employeeSales.length-3].name
    };

    let topIndex = topServers.top;
    let midIndex = topServers.mid;
    let botIndex = topServers.bot;

    let topServersName = [topIndex, midIndex, botIndex];
    return topServersName;
}

console.log(findTopServers( [ {name: 'Jo', count: 620}, {name: 'Desi', count: 765},
                              {name: 'Jalen', count: 768} ] ));
console.log(findTopServers( [ {name: 'Desi', count: 580}, {name: 'Ash', count: 618},
                              {name: 'Li', count: 765}, {name: 'Jo', count: 768} ] ));
*/
