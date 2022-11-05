function oscars(input) {
    let name = input[0];
    let academyPoints = Number(input[1]);

    for (let i = 3; i < input.length; i++) {

        if (i % 2 !== 0) {
            let points = i + 1;
            let total = input[i].length * Number(input[points]) / 2;
            academyPoints += total;
        }
        if (academyPoints > 1250.5) {
            break;
        }
    }
    if (academyPoints < 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
    }
}
oscars(["Zahari Baharov",

    "205",

    "4",

    "Johnny Depp",

    "45",

    "Will Smith",

    "29",

    "Jet Lee",

    "10",

    "Matthew Mcconaughey",

    "39"]);