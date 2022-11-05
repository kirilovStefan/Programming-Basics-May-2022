function combinations(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let magicNum = Number(input[2]);

    let combCounter = 0;
    let hasCombination = false;

    for (let i = num1; i <= num2; i++) {
        for (let y = num1; y <= num2; y++) {

            combCounter += 1;

            if (i + y === magicNum) {
                console.log(`Combination N:${combCounter} (${i} + ${y} = ${magicNum})`);
                hasCombination = true;
                break;
            }
        }

        if (hasCombination) {
            break;
        }
    }

    if (!hasCombination) {
        console.log(`${combCounter} combinations - neither equals ${magicNum}`);
    }

    // if (hasCombination) {
    //     console.log(`Combination N:${combCounter} (${i} + ${y} = ${magicNum})`);
    // } else {
    //     console.log(`${combCounter} combinations - neither equals ${magicNum}`);
    // }

}
combinations(["23",

    "24",

    "20"]);