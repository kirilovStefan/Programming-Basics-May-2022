function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let maxNumbers = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let num = Number(command);

        if (maxNumbers < num) {
            maxNumbers = num;
        }

        command = input[index];
        index++;
    }
    console.log(maxNumbers);
}
maxNumber(["100",

    "99",

    "80",

    "70",

    "Stop"]);