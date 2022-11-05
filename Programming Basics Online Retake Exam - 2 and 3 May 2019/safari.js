function safari(input) {
    let budget = Number(input[0]);
    let neededPetrol = Number(input[1]);
    let dayOfWeek = input[2];

    let priceForPetrol = neededPetrol * 2.10;
    let totalPrice = priceForPetrol + 100;

    if (dayOfWeek === "Sunday") {
        totalPrice = totalPrice * 0.80;
    } else if (dayOfWeek === "Saturday") {
        totalPrice = totalPrice * 0.90;
    }

    if (budget > totalPrice) {
        console.log(`Safari time! Money left: ${(budget - totalPrice).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(totalPrice - budget).toFixed(2)} lv.`);
    }
}
safari(["120",
"30",
"Saturday"]);