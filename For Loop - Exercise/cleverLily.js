function cleverLily(input) {
    let ageLili = Number(input[0]);
    let washMachine = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCounter = 0;
    let savedMoney = 0;
    let brotherGipsy = 0;
    let moneyAdded = 10;

    for (let i = 1; i <= ageLili; i++) {
        if (i % 2 === 0) {
            savedMoney += moneyAdded;
            brotherGipsy++;
            moneyAdded += 10;
        } else {
            toyCounter++;
        }
    }
    let totalMoneyForToys = toyCounter * toyPrice;
    let totalSavedMoney = (savedMoney + totalMoneyForToys) - brotherGipsy;

    if (totalSavedMoney >= washMachine) {
        console.log(`Yes! ${(totalSavedMoney - washMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(washMachine - totalSavedMoney).toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"]);