function trekkingMania(input) {
    let climbers = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let K2 = 0;
    let everest = 0;

    for (let index = 1; index <= climbers; index++) {
        let currentClimbers = Number(input[index]);
        if (currentClimbers <= 5) {
            musala += currentClimbers;
        } else if (currentClimbers <= 12) {
            monblan += currentClimbers;
        } else if (currentClimbers <= 25) {
            kilimandjaro += currentClimbers;
        } else if (currentClimbers <= 40) {
            K2 += currentClimbers;
        } else {
            everest += currentClimbers;
        }
    }
    let totalClimbers = musala + monblan + kilimandjaro + K2 + everest;
    
    console.log(`${(musala / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(K2 / totalClimbers * 100).toFixed(2)}%`);
    console.log(`${(everest / totalClimbers * 100).toFixed(2)}%`);

}
trekkingMania(["5", "25", "41", "31", "250", "6"]);