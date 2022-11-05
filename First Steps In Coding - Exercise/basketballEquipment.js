function basketballEquipment(input){
    let taxForYear = Number(input[0]);
    let shoes = taxForYear * 0.60;
    let outfit = shoes * 0.80;
    let ball = outfit / 4;
    let accessories = ball / 5;
 
    let totalPrice = taxForYear + shoes + outfit + ball + accessories;
    console.log(totalPrice);
}
basketballEquipment(["550 "]);