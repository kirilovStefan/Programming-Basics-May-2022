function petShop(input){
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let dogPrice = dogFood * 2.50;
    let catPrice = catFood * 4;
    let res = dogPrice + catPrice;
    console.log(res);
}
petShop(["13","9"]);