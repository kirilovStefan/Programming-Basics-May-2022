function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let priceForOneStatist = Number(input[2]);

    let decorMoney = budget * 0.10;
    let moneyOutfit = statistCount * priceForOneStatist;

    if (statistCount > 150) {
        moneyOutfit = moneyOutfit * 0.90;
    }
    let allMoneyForMovie = decorMoney + moneyOutfit;

    if (budget >= allMoneyForMovie) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - allMoneyForMovie).toFixed(2)} leva left.`);
    } else if (budget <= allMoneyForMovie) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(allMoneyForMovie - budget).toFixed(2)} leva more.`);
    }
}
godzillaVsKong(["9587.88",

"222",

"55.68"]);