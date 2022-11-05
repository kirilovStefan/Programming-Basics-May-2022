function fishTank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = lenght * width * height;
    let volumeLitres = volume * 0.001;
    let occupiedSpace = percentage / 100;
    let neededLitres = volumeLitres * (1 - occupiedSpace);
    
    console.log(neededLitres);
}
fishTank(["85 ",

"75 ",

"47 ",

"17 "]);