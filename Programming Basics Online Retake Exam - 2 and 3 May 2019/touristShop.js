function touristShop(input) {
    let budget = Number(input[0]);
    let index = 1;
    let command = input[index];

    let sumForProducts = 0;
    let productCounter = 0;
    let hasEnoughtMoney = true;


    while (command !== "Stop") {
        productCounter++;
        if (productCounter % 3 === 0) {
            let discountPrice = Number(input[index + 1]) / 2;
            budget -= discountPrice;
            sumForProducts += discountPrice;
        } else {
            let price = Number(input[index + 1]);
            sumForProducts += price;
            budget -= price; 
            
        }

        if (budget < 0) {
            console.log("You don't have enough money!");
            console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);
            hasEnoughtMoney = false;
            break;
        }
        
        index+=2;
        command = input[index];

    }
    if (hasEnoughtMoney) {
        console.log(`You bought ${productCounter} products for ${sumForProducts.toFixed(2)} leva.`);
        
    } 

}
touristShop(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"]);