function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let count = Number(input[2]);
    let result = 0;

    if (city === "Sofia") {
        switch (product) {
            case "coffee": result = count * 0.50; break;
            case "water": result = count * 0.80; break;
            case "beer": result = count * 1.20; break;
            case "sweets": result = count * 1.45; break;
            case "peanuts": result = count * 1.60; break;
        }
    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee": result = count * 0.40; break;
            case "water": result = count * 0.70; break;
            case "beer": result = count * 1.15; break;
            case "sweets": result = count * 1.30; break;
            case "peanuts": result = count * 1.50; break;
        }
    } else if (city === "Varna") {
        switch (product) {
            case "coffee": result = count * 0.45; break;
            case "water": result = count * 0.70; break;
            case "beer": result = count * 1.10; break;
            case "sweets": result = count * 1.35; break;
            case "peanuts": result = count * 1.55; break;
        }
    }

    console.log(result);
}
smallShop(["sweets", "Sofia", "2.23"]);