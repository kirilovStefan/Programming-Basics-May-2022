function poolDay(input) {
    let peopleCount = Number(input[0]);
    let entrancePrice = Number(input[1]);
    let priceForOneLounger = Number(input[2]);
    let priceUmbrella = Number(input[3]);

    let sumForEntrance = peopleCount * entrancePrice;

    let peopleNeedLounger = Math.ceil(peopleCount * 0.75);
    let priceForLounger = peopleNeedLounger * priceForOneLounger;

    let peopleNeedUmbrella = Math.ceil(peopleCount * 0.50);
    let priceForUmbrella = peopleNeedUmbrella * priceUmbrella;

    let totalPrice = sumForEntrance + priceForLounger + priceForUmbrella;
    console.log(`${totalPrice.toFixed(2)} lv.`);
}
poolDay(["21", "5.50", "4.40", "6.20"]);