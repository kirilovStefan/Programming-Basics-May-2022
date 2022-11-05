function tournamentOfChristmas(input) {
    let tournamentDays = Number(input[0]);
    let winEarnings = 0;
    let daysWinCounter = 0;
    let daysLoseCounter = 0;

    let index = 1;

    for (let i = 1; i <= tournamentDays; i++) {
        let wonGames = 0;
        let lostGames = 0;
        let dayEarnings = 0;

        let typeSport = input[index];
        let resultFromSport = input[index + 1];

        while (typeSport !== "Finish") {
            if (resultFromSport === "win") {
                wonGames++;
                dayEarnings += 20;
            } else {
                lostGames++;
            }
            index += 2;
            typeSport = input[index];
            resultFromSport = input[index + 1];

            if (typeSport === "Finish") {
                if (wonGames >= lostGames) {
                    winEarnings += dayEarnings * 1.10; 
                    daysWinCounter++;
                } else {
                    winEarnings += dayEarnings;
                    daysLoseCounter++;
                }

                index++;
            }
        }
    }
    if (daysWinCounter >= daysLoseCounter) {
        winEarnings *= 1.20;
        console.log(`You won the tournament! Total raised money: ${winEarnings.toFixed(2)}`);
    }else {
        console.log(`You lost the tournament! Total raised money: ${winEarnings.toFixed(2)}`);
    }
}
tournamentOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose","swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"]);


// (["2",
//     "volleyball",
//     "win",
//     "football",
//     "lose",
//     "basketball",
//     "win",
//     "Finish",
//     "golf",
//     "win",
//     "tennis",
//     "win",
//     "badminton",
//     "win",
//     "Finish"]);