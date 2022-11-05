function pcStore(input) {
    let priceDollarProcessor = Number(input[0]);
    let priceDollarVideo = Number(input[1]);
    let priceDollarRam = Number(input[2]);
    let ramCount = Number(input[3]);
    let discountProcent = Number(input[4]);
    let dollarsToBgn = 1.57;

    let priceBgnProcesor = priceDollarProcessor * dollarsToBgn;
    let priceBgnVideo = priceDollarVideo * dollarsToBgn;
    
    let priceBgnRam = priceDollarRam * dollarsToBgn;
    let totalSumRam = priceBgnRam * ramCount;
    
    let discountProcesor = priceBgnProcesor - (priceBgnProcesor * discountProcent);
    // let priceDiscoutProcesor = priceBgnProcesor - discountProcesor;
    
    let sumAfterDiscount = priceBgnVideo - (priceBgnVideo * discountProcent);
    // let priceDiscountVideo = priceBgnVideo - sumAfterDiscount;
    
    let totalSum = discountProcesor + Math.abs(sumAfterDiscount) + totalSumRam;

    console.log(`Money needed - ${totalSum.toFixed(2)} leva.`);
}
pcStore(["200",
"100",
"80",
"1",
"0.01"]);