function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let examTime = examHour * 60 + examMin;
    let arrivalTime = arriveHour * 60 + arriveMin;

    let timeDifference = Math.abs(arrivalTime - examTime);
    let h = Math.floor(timeDifference / 60);
    let min = timeDifference % 60;

    if (examTime < arrivalTime) {
        console.log("Late");
        if (timeDifference >= 60) {
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
        } else {
            console.log(`${timeDifference} minutes after the start`);
        }
    } else if (examTime - arrivalTime <= 30) {
        console.log("On time");
        if (timeDifference !== 0) {
            console.log(`${timeDifference} minutes before the start`);
        }
    } else {
        console.log("Early");
        if (timeDifference >= 60) {
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${timeDifference} minutes before the start`);
        }
    }
}
onTimeForTheExam(["11", "30", "10", "55"]);