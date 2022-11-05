function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let pricePuzzle = puzzleCount * 2.60;
    let priceDoll = dollCount * 3;
    let priceBear = bearCount * 4.10;
    let priceMinions = minionsCount * 8.20;
    let priceTruck = truckCount * 2;

    let totalPrice = pricePuzzle + priceDoll + priceBear + priceMinions + priceTruck;
    let toysCount = puzzleCount + dollCount + bearCount + minionsCount + truckCount;

    if (toysCount >= 50) {
        totalPrice = totalPrice * 0.75;
    }
    let moneyAfterRent = totalPrice * 0.90;

    if (moneyAfterRent >= tripPrice) {
        console.log(`Yes! ${(moneyAfterRent - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - moneyAfterRent).toFixed(2)} lv needed.`);
    }

}
toyShop(["40.8", "20", "25", "30", "50", "10"]);