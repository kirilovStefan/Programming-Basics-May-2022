function demo(input) {
    let shouldBreak = false
    for (let h = 0; h <= 23; h++) {
        for (let m = 0; m <= 59; m++) {
            console.log(`${h}:${m}`);
            if (h === 14 && m === 46) {
                shouldBreak = true
                break;
            } 
        }

        if(shouldBreak){
            break;
        }
    }

}
demo(["14" , "46"]);