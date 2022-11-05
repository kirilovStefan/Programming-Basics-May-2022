function walking(input) {
    let targetStep = 10000;
    let sum = 0;
    let index = 0;
    let command = input[index];

    while (command !== "Going home") {
        let steps = Number(command);
        sum += steps;

        if (sum >= targetStep) {
            console.log("Goal reached! Good job!");
            console.log(`${sum - targetStep} steps over the goal!`);
            break;
        }
        index++;
        command = input[index];
    }
    if (command === "Going home") {
        let stepsToHome = Number(input[index + 1]);
        sum += stepsToHome;

        if (sum >= targetStep) {
            console.log("Goal reached! Good job!");
            console.log(`${sum - targetStep} steps over the goal!`);
        } else {
            console.log(`${targetStep - sum} more steps to reach goal.`);
        }
    }
}
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);