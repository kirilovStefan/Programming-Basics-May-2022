function traveling(input) {
    let index = 0;
    let command = input[index];
    index++;

    while (command !== "End") {
        let destination = command;
        let budget = Number(input[index]);
        index++;
        let moneyToSave = 0;
        
        while (moneyToSave < budget) {
            let money = Number(input[index]);
            index++;

            moneyToSave += money;
        }
        console.log(`Going to ${destination}!`);
        command = input[index];
        index++;
    }
}
traveling(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"]);