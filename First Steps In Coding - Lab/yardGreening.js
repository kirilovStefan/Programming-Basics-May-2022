function yardGreening(input) {
    let yard = Number(input[0]);
    let price = yard * 7.61;
    let discount = 0.18;
    let discountPrice = discount * price;
    let allPrice = price - discountPrice;

    console.log(`The final price is: ${allPrice} lv.`)
    console.log(`The discount is: ${discountPrice} lv.`);
}
yardGreening(["150"]);