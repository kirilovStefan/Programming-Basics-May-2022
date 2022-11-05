function suitcasesLoad(input) {
    let capacity = Number(input[0]);
    let index = 1;
    let volumSuitcase = input[index];

    let baggageCounter = 0;
    let freeSpace = 0;

    while (volumSuitcase !== "End") {
        let baggage = Number(input[index]);
        capacity -= baggage;
        baggageCounter++;

        if (baggageCounter % 3 === 0) {
            baggage = Number(input[index + 1]) * 1.10;
            capacity -= baggage
            console.log("Congratulations! All suitcases are loaded!");

        }
        if (capacity < freeSpace) {
            console.log("No more space!");
        }
        // freeSpace = capacity - baggage;
        // console.log(freeSpace);

        index++;
        volumSuitcase = input[index];
    }

    console.log(`"Statistic: ${baggageCounter} suitcases loaded.`);


}
suitcasesLoad(["700.5",
    "180",
    "340.6",
    "126",
    "220"]);