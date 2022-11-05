function familyTrip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let priceForNights = Number(input[2]);
    let percentageCosts = Number(input[3]);
    
    let costs = budget * percentageCosts / 100;

    if (nights > 7) {
        priceForNights *= 0.95;
        nights *= priceForNights;
        nights += costs;
        console.log(`Ivanovi will be left with ${(budget - nights).toFixed(2)} leva after vacation.`);
    } else if (nights <= 7) {
        nights *= priceForNights;
        nights += costs;
        console.log(`${(nights - budget).toFixed(2)} leva needed. `);
    }

    
}
familyTrip(["500", "7", "66", "15"]);


// (["500", "7", "66", "15"]);
// (["800.50", "8", "100", "2"])