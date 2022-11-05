function tennisRanklist(input) {
    let tournament = Number(input[0]);
    let startPoint = Number(input[1]);

    let points = startPoint;
    let wins = 0;

    for (let index = 2; index < input.length; index++) {

        let stage = input[index];

        switch (stage) {
            case "W":
                points += 2000;
                wins++;
                break;
            case "F": points += 1200; break;
            case "SF": points += 720; break;
        }
    }
    let avgPoints = (points - startPoint) / tournament;
    let percentWins = (wins / tournament) * 100;

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${percentWins.toFixed(2)}%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);