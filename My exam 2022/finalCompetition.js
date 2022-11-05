function finalCompetition(input) {
    let dancerCount = Number(input[0]);
    let scoreCount = Number(input[1]);
    let season = input[2];
    let city = input[3];

    let finalPoints = 0;
    let charity = 0;
    let freeMoney = 0;
    let moneyPerDancer = 0;

    if (city === "Bulgaria") {
        finalPoints = dancerCount * scoreCount;
        if (season === "summer") {
            finalPoints = finalPoints - (finalPoints * 0.05);
        }else if (season === "winter") {
            finalPoints = finalPoints - (finalPoints * 0.08);
        }
     }else if (city === "Abroad") {
         finalPoints = (dancerCount * scoreCount) + (dancerCount * scoreCount * 0.5); 
         if (season === "summer") {
            finalPoints = finalPoints - (finalPoints * 0.1);
         }else if (season === "winter") {
            finalPoints = finalPoints - (finalPoints * 0.15);
         }
     }
     charity = finalPoints * 0.75;
     freeMoney = finalPoints - charity; 
     moneyPerDancer = freeMoney / dancerCount;

     console.log(`Charity - ${charity.toFixed(2)}`);
     console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
  
}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"]);
