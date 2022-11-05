function footballTournament(input) {
    let nameTeam = input[0];
    let countMatch = Number(input[1]);
    let index = 2;
    let result = input[index];
    
    let counterW = 0;
    let counterD = 0;
    let counterL = 0;
    let points = 0;

    for (let i = 1; i <= countMatch; i++) {
        let totalResult = Number(result);
        index++;

        if (totalResult === counterW) {
            counterW++;
            points = points + 3;
        } else if (totalResult === counterD) {
            counterD++;
            points = points + 1;
        } else if (totalResult === counterL) {
            counterL++;
        }
    }
    let percentageWinGame = 1.0 * counterW / countMatch * 100;

    if (countMatch === 0) {
        console.log(`${nameTeam} hasn't played any games during this season.`);
    } else {
        console.log(`${nameTeam} has won ${(totalResult * points).toFixed(2)} points during this season`);
        console.log("Total stats:");
        console.log(`## W: ${(counterW * points).toFixed(2)}"`);
        console.log(`## D: ${(counterD * points).toFixed(2)}`);
        console.log(`## L: ${(counterL * points).toFixed(2)}`);
        console.log(`Win rate: ${percentageWinGame.toFixed(2)}%`);
    }
}
footballTournament(["Liverpool","10","W","D","D","W","L","W","D","D","W","W"]);


// (["Chelsea",
// "0"]);




// (["Liverpool","10","W","D","D","W","L","W","D","D","W","W"]);


// (["Barcelona",
// "7",
// "W",
// "D",
// "L",
// "L",
// "W",
// "W",
// "D"])