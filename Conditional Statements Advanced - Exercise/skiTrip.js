function skiTrip(input) {
    let dayStay = Number(input[0]);
    let typeRoom = input[1];
    let evaluation = input[2];

    let night = dayStay - 1;
    let totalSum = 0;

    switch (typeRoom) {
        case "room for one person":
            totalSum = night * 18;break;
        case "apartment":
            totalSum = night * 25;
            if (night < 10) {
                totalSum = totalSum * 0.70;
            }else if (night <= 15) {
                totalSum = totalSum * 0.65;
            }else if (night > 15) {
                totalSum = totalSum * 0.5;
            }
            break;
        case "president apartment":
            totalSum = night * 35;
            if (night < 10) {
                totalSum = totalSum * 0.90;
            }else if (night <= 15) {
                totalSum = totalSum * 0.85;
            }else if (night > 15) {
                totalSum = totalSum * 0.80;
            }
            break;
    }
    if (evaluation === "positive") {
        totalSum = totalSum * 1.25;
    }else if(evaluation === "negative") {
        totalSum = totalSum * 0.90;
    }
    console.log(totalSum.toFixed(2));
}
skiTrip(["30",

"president apartment",

"negative"]);
