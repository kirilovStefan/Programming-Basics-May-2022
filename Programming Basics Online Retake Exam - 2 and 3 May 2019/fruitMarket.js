function fruitMarket(priceStrawberry, bananasKg, orangesKg, raspberriesKg, strawberriesKg) {
    priceStrawberry = Number(priceStrawberry);
    bananasKg = Number(bananasKg);
    orangesKg = Number(orangesKg);
    raspberriesKg = Number(raspberriesKg);
    strawberriesKg = Number(strawberriesKg);

    let priceRaspberry = priceStrawberry / 2;
    let priceOrange = priceRaspberry - (priceRaspberry * 0.40);
    let priceBanana = priceRaspberry - (priceRaspberry * 0.80);
    let priceRaspberriesKg = raspberriesKg * priceRaspberry;
    let priceOrangeKg = orangesKg * priceOrange;
    let priceBananaKg = bananasKg * priceBanana;
    let priceStrawberryKg = strawberriesKg * priceStrawberry

    let totalPrice = priceRaspberriesKg + priceOrangeKg + priceBananaKg + priceStrawberryKg
    console.log((totalPrice).toFixed(2));

}
fruitMarket("48", "10", "3.3", "6.5", "1.7");