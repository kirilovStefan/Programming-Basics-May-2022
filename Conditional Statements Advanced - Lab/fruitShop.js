function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let count = Number(input[2]);
    let result = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {

        switch (product) {
            case "banana": result = count * 2.50; break;
            case "apple": result = count * 1.20; break;
            case "orange": result = count * 0.85; break;
            case "grapefruit": result = count * 1.45; break;
            case "kiwi": result = count * 2.70; break;
            case "pineapple": result = count * 5.50; break;
            case "grapes": result = count * 3.85; break;
        }
    } else if (day === "Saturday" || day === "Sunday") {

        switch (product) {
            case "banana": result = count * 2.70; break;
            case "apple": result = count * 1.25; break;
            case "orange": result = count * 0.90; break;
            case "grapefruit": result = count * 1.60; break;
            case "kiwi": result = count * 3.00; break;
            case "pineapple": result = count * 5.60; break;
            case "grapes": result = count * 4.20; break;
        }
    } if (result != 0) {
        console.log(result.toFixed(2))
    } else {
        console.log("error");
    }
}
fruitShop(["kiwi", "Monday", "2.5"]);