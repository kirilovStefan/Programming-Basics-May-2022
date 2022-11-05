function renovation(input) {
    let higthWall = Number(input[0]);
    let heigthWall = Number(input[1]);
    let percentageWhithoutPaint = Number(input[2]);

    let totalSpace = higthWall * heigthWall * 4;
    let paintingWall = totalSpace * percentageWhithoutPaint / 100;
    totalSpace = totalSpace - paintingWall;

    let index = 3;
    let command = input[index];

    let paintCounter = 0;

    while (command !== "Tired") {
        paintCounter = Number(input[index]);
        // index++;
        totalSpace -= paintCounter;

        index++;
        command = input[index];
    }
}
renovation(["3",
"5",
"10",
"2",
"3",
"4",
"Tired!"]);