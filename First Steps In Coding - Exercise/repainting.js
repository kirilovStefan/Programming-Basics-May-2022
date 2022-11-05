function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thin = Number(input[2]);
    let workerHour = Number(input[3]);

    let priceNylon = (nylon + 2) * 1.50;
    let pricePaint = ((paint *  0.10) + paint) * 14.50;
    let priceThin = thin * 5;
    
    let priceForAll = priceNylon + pricePaint + priceThin + 0.40;
    let PriceWorker = priceForAll * 0.30 * workerHour;
    
    let moneyForAll = priceForAll + PriceWorker;
    console.log(moneyForAll);
}
repainting(["10 ","11 ","4 ","8 "]);