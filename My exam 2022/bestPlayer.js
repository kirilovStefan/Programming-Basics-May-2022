function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "END") {
        let playerName = command;
        let countGoal = Number(input[index]);
        index++;

        if (countGoal >= 3) {
            console.log(`${playerName} is the best player!`);
            console.log(`He has scored ${countGoal} goals and made a hat-trick !!!`);
            // if (countGoal >= 10) {
            //     break;
            // }
        } else if (countGoal < 3) {
            console.log(`He has scored ${countGoal} goals.`);
        }
        

        command = input[index];
        index++;
    }
}
bestPlayer(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"]);