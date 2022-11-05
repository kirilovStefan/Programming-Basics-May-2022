function goldMine(input) {
    let index = 0;
    let locations = Number(input[index++]);
    for (let l = 0; l < locations; l++) {
        let expectedAvrgYield = Number(input[index++]);
        let days = Number(input[index++]);
        let yield = 0;
        for (let d = 0; d < days; d++) {
            let currentYield = Number(input[index++]);
            yield += currentYield;
        }
        let avrgPerLocation = (yield / days);
        let diff = Math.abs(avrgPerLocation - expectedAvrgYield);
        if (avrgPerLocation < expectedAvrgYield) {
            console.log(`You need ${diff.toFixed(2)} gold.`);
        } else {
            console.log(`Good job! Average gold per day: ${avrgPerLocation.toFixed(2)}.`);
        }
    }

}
goldMine(["1",
"5",
"3",
"10",
"1",
"3"]);