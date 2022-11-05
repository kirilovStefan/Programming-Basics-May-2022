function cinema(input) {
    let type = input[0];
    let rowsCount = Number(input[1]);
    let columnsCount = Number(input[2]);

    let income = 0;

    switch (type) {
        case "Premiere":
            income = rowsCount * columnsCount * 12.0;break;
        case "Normal":
            income = rowsCount * columnsCount * 7.50;break;
        case "Discount":
            income = rowsCount * columnsCount * 5.00;break;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Discount", "12", "30"]);