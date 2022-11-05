function hotelRoom(input) {
    let month = input[0];
    let countNights = Number(input[1]);

    let apartmentPrice = 0;
    let studioPrice = 0;

    switch (month) {
        case "May":
            studioPrice = 50;
            apartmentPrice = 65;
            if (countNights > 14) {
                studioPrice = studioPrice * 0.70;
                apartmentPrice = apartmentPrice * 0.90;
            }else if (countNights > 7) {
                studioPrice = studioPrice * 0.95;
            }
            break;
        case "June":
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            if (countNights > 14) {
                studioPrice = studioPrice * 0.80;
                apartmentPrice = apartmentPrice * 0.90;
            }
            break;
        case "July":
            studioPrice = 76;
            apartmentPrice = 77;
            if (countNights > 14) {
                apartmentPrice = apartmentPrice * 0.90;
            }
            break;
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;
            if (countNights > 14) {
                apartmentPrice = apartmentPrice * 0.90;
            }
            break;
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            if (countNights > 14) {
                studioPrice = studioPrice * 0.80;
                apartmentPrice = apartmentPrice * 0.90;
            }
            break;
        case "October":
            studioPrice = 50;
            apartmentPrice = 65;
            if (countNights > 14) {
                studioPrice = studioPrice * 0.70;
                apartmentPrice = apartmentPrice * 0.90;
            }else if (countNights > 7) {
                studioPrice = studioPrice * 0.95;
            }
            break;
    }
    console.log(`Apartment: ${(apartmentPrice * countNights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice * countNights).toFixed(2)} lv.`);
}
hotelRoom(["May",

    "15"]);