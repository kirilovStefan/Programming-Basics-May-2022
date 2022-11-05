function club(input) {
    let target = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;

    let priceCoctail = input.length;
    let sum = 0;

    while (command !== "Party") {
        let name = command;
        sum = priceCoctail * input[index + 1];
        
        if (sum % 2 === 1) {
            sum = sum - (sum * 0.75);
            
        }
        index++;
        command = input[index + 2];
    }
    
    
}
club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White",
"Russian",
"10"]);




// (["100",
// "Sidecar",
// "7",
// "Mojito",
// "5",
// "White",
// "Russian",
// "10"])

// (["500", 
// "Bellini", 
// "6", 
// "Bamboo", 
// "7", 
// "Party!"]);