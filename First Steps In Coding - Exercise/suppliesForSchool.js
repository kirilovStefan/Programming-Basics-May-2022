function suppliesForSchool(input){
    let pensNumber = Number(input[0]);
    let markerNumber = Number(input[1]);
    let thinnerLiters = Number(input[2]);
    let discount = Number(input[3]);

    let packPens = pensNumber * 5.80;
    let packMarker = markerNumber * 7.20;
    let thinPrice = thinnerLiters * 1.20;
    let priceForAll = packPens + packMarker + thinPrice;
    let priceDiscount = priceForAll - ((priceForAll * discount) / 100);
    
    console.log(priceDiscount);


}
suppliesForSchool(["4","2","5","13"]);