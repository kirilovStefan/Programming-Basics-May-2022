function vetParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let daysCounter = 1;
    let price = 0;
    
    while (daysCounter <= days) {
        let isDayEven = false;
        let priceForDay = 0;
        
        if (daysCounter % 2 === 0) {
            isDayEven = true;
        }

        let hoursCounter = 1;
        while (hoursCounter <= hours) {
            let isHourEven = hoursCounter % 2 === 0;

            if (isDayEven) {
                if (isHourEven) {
                    price += 1;
                    priceForDay += 1;
                } else {
                    price += 2.50;
                    priceForDay += 2.50
                }
            } else {
                if (isHourEven) {
                    price += 1.25;
                    priceForDay += 1.25;
                } else {
                    price += 1;
                    priceForDay += 1;
                }
            }

            hoursCounter++;
        }

        console.log(`Day: ${daysCounter} - ${priceForDay.toFixed(2)} leva`);
        daysCounter++;
    }

    console.log(`Total: ${price.toFixed(2)} leva`);

    // necheten den - necheten chas - 1 lev
    // necheten den - cheten chas - 1 lev i 25 st.
    // cheten den - necheten chas - 2 leva i 50 st.
    // cheten den - cheten chas - 1 lev

    /**
     * dni i chasove
     * vseki den ima chasove
     * 
     * 3 10
     * 
     * while(day)
     *      while(hour)
     * 
     * 
     */
}

vetParking(["5",
"2"]);