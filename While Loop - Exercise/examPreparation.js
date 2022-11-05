function examPreparation(input) {
    // ["3", "Money", "6", "Story", "4", "Spring", "Time", "5", "Bus", "6", "Enough"]
    // ["2","Income","3","Game Info","6","Best Player","4"]
    let inputBadGrades = Number(input[0]);

    let index = 1;
    let command = input[index];

    let lastProblem = '';
    let sumProblems = 0;
    let gradesValue = 0;
    let badGradesCounter = 0;
    let counterGrades = 0;

    while (command !== "Enough" && badGradesCounter < inputBadGrades) {
        lastProblem = command;
        gradesValue = Number(input[index + 1]);
        sumProblems += gradesValue;
        counterGrades += 1;

        if (gradesValue <= 4) {
            badGradesCounter += 1;
        }
        index += 2;
        command = input[index];
    }
    if (badGradesCounter >= inputBadGrades) {
        console.log(`You need a break, ${badGradesCounter} poor grades.`);
    } else {
        console.log(`Average score: ${(sumProblems / counterGrades).toFixed(2)}`);
        console.log(`Number of problems: ${counterGrades}`);
        console.log(`Last problem: ${lastProblem}`);
    }


}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
//examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);



























// let index = 1
// let command = input[index]

// let lastProblem = ''
// let countProblems = 0
// let sumGrades = 0
// let countBadGrades = 0

// while(command !== 'Enough' && countBadGrades < inputBadGrades){
//     lastProblem = command
//     let grade = Number(input[index + 1])

//     if(grade <= 4){
//         countBadGrades += 1
//     }

//     sumGrades += grade
//     countProblems += 1

//     index += 2
//     command = input[index]
// }

// if(countBadGrades >= inputBadGrades){
//     console.log(`You need a break, ${countBadGrades} poor grades.`)
// }else{
//     console.log(`Average score: ${(sumGrades/countProblems).toFixed(2)}`);
//     console.log(`Number of problems: ${countProblems}`);
//     console.log(`Last problem: ${lastProblem}`);
// }