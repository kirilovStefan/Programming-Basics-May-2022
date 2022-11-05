function spaceship(input) {
    let widthShip = Number(input[0]);
    let lengthShip = Number(input[1]);
    let heightShip = Number(input[2]);
    let astronautsMidLength = Number(input[3]);

    let volumeShipSize = widthShip * lengthShip * heightShip;
    let volumeRoom = (astronautsMidLength + 0.40) * 2 * 2;
    let countAstronauts = volumeShipSize / volumeRoom;

    if (countAstronauts >= 3 && countAstronauts <= 10) {
        console.log(`The spacecraft holds ${Math.floor(countAstronauts)} astronauts.`);
    } else if (countAstronauts < 3) {
        console.log("The spacecraft is too small.");
    } else {
        console.log("The spacecraft is too big.");
    }

}
spaceship(["3",
"3",
"4",
"1.68"]);