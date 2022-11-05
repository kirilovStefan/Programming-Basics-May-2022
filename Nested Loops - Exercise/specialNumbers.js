function specialNumbers(input) {
    let n = Number(input[0]);
    let result = "";

    let i = 1;
    let j = 1;
    let k = 1;
    let l = 1;

    while (i <= 9) {
        j = 1;
        while (j <= 9) {
            k = 1;
            while (k <= 9) {
                l = 1;
                while (l <= 9) {
                    if (n % i === 0 && n % j === 0 && n % k === 0 && n % l === 0) {
                        result += `${i}${j}${k}${l} `;
                    }
                    l++;
                }
                k++;
            }
            j++;
        }
        i++;
    }
    console.log(result);


    // for (let i = 1; i <= 9; i++) {
    //     for (let j = 1; j <= 9; j++) {
    //         for (let k = 1; k <= 9; k++) {
    //             for (let l = 1; l <= 9; l++) {

    //                 if (n % i === 0 && n % j === 0 && n % k === 0 && n % l === 0) {
    //                     result += `${i}${j}${k}${l} `;
    //                 }
    //             }
    //         }
    //     }
    // }
    // console.log(result);
}
specialNumbers(["3"]);