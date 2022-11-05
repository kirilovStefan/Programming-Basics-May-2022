function moon(input) {
    let middleSpeed = Number(input[0]);
    let litresGasForkilometres = Number(input[1]);
    let totalGoAndBack = 384400 * 2;
    let timeToGoandBack = totalGoAndBack / middleSpeed;
    
    let totalTime = timeToGoandBack + 3;
    let totalGas = litresGasForkilometres * totalGoAndBack / 100;
    console.log(Math.ceil(totalTime));
    console.log(totalGas);

}
moon(["5000",
"7"]);