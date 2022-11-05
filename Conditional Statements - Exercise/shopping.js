function shopping(input) {

    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let proccessorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let priceVideoCard = videoCardCount * 250;
    let priceProccessor = (priceVideoCard * 0.35) * proccessorCount;
    let priceRam = (priceVideoCard * 0.10) * ramCount;

    let totalMoney = priceVideoCard + priceProccessor + priceRam;

    if(videoCardCount > proccessorCount) {
        totalMoney = (totalMoney * 0.85);
    }
    if (totalMoney <= budget) {
        console.log(`You have ${(budget - totalMoney).toFixed(2)} leva left!`);
    }else {
        console.log(`Not enough money! You need ${(totalMoney - budget).toFixed(2)} leva more!`);
    }
        
}
shopping(["920.45",

"3",

"1",

"1"]);