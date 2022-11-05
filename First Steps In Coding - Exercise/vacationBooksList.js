function vacationBooksList(input){
    let pageNum = Number(input[0]);
    let pagePerHour = Number(input[1]);
    let daysNum = Number(input[2]);

    let bookTime = pageNum / pagePerHour;
    let hourPerDay = bookTime / daysNum;
    
    console.log(hourPerDay)
}
vacationBooksList(["432","15","4"]);