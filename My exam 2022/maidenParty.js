function maidenParty(input) {
    let priceMaidenParty = Number(input[0]);
    let loveCountText = Number(input[1]);
    let waxyRoses = Number(input[2]);
    let keychain = Number(input[3]);
    let cartoonsCount = Number(input[4]);
    let surpriseCount = Number(input[5]);

    let totalSum = (loveCountText * 0.60) + (waxyRoses * 7.20) + (keychain * 3.60) +
        (cartoonsCount * 18.20) + (surpriseCount * 22);

    let totalCount = loveCountText + waxyRoses + keychain + cartoonsCount + surpriseCount;
    let discount = 0;
    let hosting = 0;
    let profit = 0;

    if (totalCount >= 25) {
        discount = totalSum * 0.35;
        totalSum -= discount;
        hosting = totalSum * 0.10;
        profit = totalSum - hosting;
        if (profit >= priceMaidenParty) {
            console.log(`Yes! ${(profit - priceMaidenParty).toFixed(2)} lv left.`);
        } 

    }else {
        hosting = totalSum * 0.10;
        profit = totalSum - hosting;
        console.log(`Not enough money! ${(priceMaidenParty - profit).toFixed(2)} lv needed.`);
    }
}
maidenParty(["40.8",
"20",
"25",
"30",
"50",
"10"]);