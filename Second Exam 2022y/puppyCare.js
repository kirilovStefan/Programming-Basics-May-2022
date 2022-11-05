function puppyCare(input) {
    let puppyFood = Number(input[0]);
    let index = 1;
    let command = input[index];

    let foodInGram = puppyFood * 1000;
    let totalFood = 0;
    let gramTotal = 0;
    
    while (command !== "Adopted") {
        totalFood = Number(input[index]);
        gramTotal += totalFood;
        index++;
        command = input[index];
        
    }
    if (foodInGram >= gramTotal) {
        console.log(`Food is enough! Leftovers: ${foodInGram - gramTotal} grams.`);
    }else  if (gramTotal <= foodInGram) {
        console.log(`Food is enough! Leftovers: ${Math.abs(gramTotal - foodInGram)} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(foodInGram - gramTotal)} grams more.`);
    }
}
puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"]);