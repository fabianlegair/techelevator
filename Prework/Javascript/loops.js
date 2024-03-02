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
*/

function calculateCartTotal(cart) {
    let cartItems =[cart]
    let itemTotal = 0

    for (let i =0; i < cartItems.length; i++) {
        let itemCost = cartItems[1].price
        itemTotal = itemTotal + itemCost
    }
}

console.log(calculateCartTotal([{name: 'paper towels', price: 9.90},
                                {name: 'cereal', price: 4.25},
                                {name: 'milk', price: 3.29}]))

/*
let myArray = [ array elements here ];
for (let i = 0; i < myArray.length; i++) {
    let myElement = myArray[i];
    Do something with myElement
}
*/