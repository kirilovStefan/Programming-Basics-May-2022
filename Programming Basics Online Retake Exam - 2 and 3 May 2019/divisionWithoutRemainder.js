/**
 * % 2
 * % 3
 * % 4
 */
function divisionWithoutRemainder(input) {
    let numbersCount = input[0];
    let currentIndex = 1;
    let currentElement = input[currentIndex];
    // p1 p2 
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    while (currentElement) {
        // do something with number
        if (currentElement % 2 === 0) {
            p1++;
        }
        if (currentElement % 3 === 0) {
            p2++;
        }
        if (currentElement % 4 === 0) {
            p3++;
        }
        currentIndex++;
        currentElement = input[currentIndex];
    }

    p1 = p1 / numbersCount * 100;
    p2 = p2 / numbersCount * 100;
    p3 = p3 / numbersCount * 100;

    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
}
divisionWithoutRemainder(["3",
"3",
"6",
"9"]);