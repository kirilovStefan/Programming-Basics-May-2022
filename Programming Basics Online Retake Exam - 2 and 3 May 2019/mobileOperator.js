function mobileOperator(input) {
    let termContract = input[0];
    let typeContract = input[1];
    let mobileNet = input[2];
    let countMonthForPayment = Number(input[3]);

    let priceTerm = 0;
    let totalPrice = 0;

    if (typeContract === "Small") {
        switch (termContract) {
            case "one": priceTerm = 9.98; break;
            case "two": priceTerm = 8.58; break;
        }
    } else if (typeContract === "Middle") {
        switch (termContract) {
            case "one": priceTerm = 18.99; break;
            case "two": priceTerm = 17.09; break;
        }
    } else if (typeContract === "Large") {
        switch (termContract) {
            case "one": priceTerm = 25.98; break;
            case "two": priceTerm = 23.59; break;
        }
    } else if (typeContract === "ExtraLarge") {
        switch (termContract) {
            case "one": priceTerm = 35.99; break;
            case "two": priceTerm = 31.79; break;
        }
    }

    if (mobileNet === "yes") {
        if (priceTerm <= 10) {
            priceTerm += 5.50;
        } else if (priceTerm <= 30) {
            priceTerm += 4.35;
        } else if (priceTerm > 30) {
            priceTerm += 3.85;
        }
    } else if (mobileNet === "no") {
        priceTerm = priceTerm;
    }
    totalPrice = priceTerm * countMonthForPayment

    if (termContract === "two") {
        totalPrice -= totalPrice * 3.75 / 100;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`);
}
mobileOperator(["one", "Small", "yes", "10"]);


// (["two", "Small", "yes", "20"]);
// (["two", "ExtraLarge", "yes", "20"]);
// (["two", "Large", "no", "10"]);
// (["one", "Small", "yes", "10"]);