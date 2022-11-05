function coffeeMachine(input) {
    let drinks = input[0];
    let type = input[1];
    let drinkCount = Number(input[2]);

    let price = 0;
    // let totalPrice = 0;
    // let discount = 0;

    switch (drinks) {
        case "Espresso":
            if (type === "Without") {
                price += drinkCount * 0.90;
                price -= price * 0.35;
            } else if (type === "Normal") {
                price += drinkCount * 1;
            } else if (type === "Extra") {
                price += drinkCount * 1.20;
            }
            break;
        case "Cappuccino":
            if (type === "Without") {
                price += drinkCount * 1;
            } else if (type === "Normal") {
                price += drinkCount * 1.20;
            } else if (type === "Extra") {
                price += drinkCount * 1.60;
            }
            break;
        case "Tea":
            if (type === "Without") {
                price += drinkCount * 0.50;
            } else if (type === "Normal") {
                price += drinkCount * 0.60;
            } else if (type === "Extra") {
                price += drinkCount * 0.70;
            }
            break;
    }
    // let totalSum = drinkCount * price;
    // let sum = 0;

    if (drinks === "Espresso" && drinkCount >= 5) {
        price = price * 0.75;
        // if (drinks === "Espresso" && drinkCount >= 5) {
        //     sum *= 0.75;
        // }
    } 
    if (price > 15) {
        price *= 0.80;
    }
    console.log(`You bought ${drinkCount} cups of ${drinks} for ${price.toFixed(2)} lv.`);

}
coffeeMachine(["Espresso", "Without", "10"]);


// (["Cappuccino", "Normal", "13"])
// (["Espresso", "Without", "10"])
// (["Tea", "Extra", "3"])