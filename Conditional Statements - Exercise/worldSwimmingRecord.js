function worldSwimmingRecord(input) {

    let worldRecord = Number(input[0]);
    let distanceInMeter = Number(input[1]);
    let timeInSecForOneMeter = Number(input[2]);

    let totalSec = distanceInMeter * timeInSecForOneMeter;
    let delay = Math.floor(distanceInMeter / 15) * 12.5;

    let finalTime = totalSec + delay;

    if (finalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(finalTime - worldRecord).toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",

"3017",

"5.03"]);