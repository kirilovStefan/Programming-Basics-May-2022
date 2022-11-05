function foodDelivery(input){
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let chikenPrice = chikenMenu * 10.35;
    let fishPrice = fishMenu * 12.40;
    let veganPrice = veganMenu * 8.15;
    let menusPrice = chikenPrice + fishPrice + veganPrice;

    let discountPrice = menusPrice * 0.20;
    let totalPrice = menusPrice + discountPrice + 2.50;
    console.log(totalPrice);
}
foodDelivery(["9 ","2 ","6 "]);