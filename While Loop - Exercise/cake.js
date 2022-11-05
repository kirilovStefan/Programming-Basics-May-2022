function cake(input) {
    let widthPiece = Number(input[0]);
    let lendthPiece = Number(input[1]);

    let sizeCake = widthPiece * lendthPiece;

    let pieceCounter = 0;
    let index = 2;
    let command = input[index];

    while (command !== "STOP") {
        let sumPiece = Number(command);
        pieceCounter += sumPiece;

        if (sizeCake <= pieceCounter) {
            console.log(`No more cake left! You need ${pieceCounter - sizeCake} pieces more.`);
            break;
        }
        index++;
        command = input[index];
    }
    
    if (command === "STOP") {
        console.log(`${sizeCake - pieceCounter} pieces are left.`);
    }
}
cake(["10",

    "10",

    "20",

    "20", "20", "20", "21"]);