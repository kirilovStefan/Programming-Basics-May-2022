function giftsFromSanta(input) {
    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);
    let space = ``;


    for (let i = M; i > N; i--) {
        if (i === S && S !== 15) {
            break;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            space += `${i} `;
            // if (i === S) {
            //     break;
            // }
        }
        
    }
    
    console.log(space);

}
giftsFromSanta(["1", "36", "12"]);


// (["1", "30", "15"]);
// (["1", "36", "12"]);