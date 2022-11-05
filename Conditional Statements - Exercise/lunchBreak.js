function lunchBreak(input) {
    
    let movieName = input[0];
    let duration = Number(input[1]);
    let restDuration = Number(input[2]);

    let timeForLunch = restDuration / 8;
    let timeForRelax = restDuration / 4;
    let timeLeft = restDuration - timeForLunch - timeForRelax;

    if (timeLeft >= duration) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(timeLeft - duration)} minutes free time.`);
    }else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(duration - timeLeft)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",

"48",

"60"]);