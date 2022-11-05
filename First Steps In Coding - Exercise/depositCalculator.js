function depositCalculator(input){
    let deposit = Number(input[0]);
    let timeForDeposit = Number(input[1]);
    let interestYear = Number(input[2]);

    let sum = deposit * interestYear / 100;
    let interest = sum / 12;
    let allPrice = deposit + (timeForDeposit * interest);
    console.log(allPrice);
}
depositCalculator(["2350","6","7"]);