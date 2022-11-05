function pcGameShop(input) {
    let game = Number(input[0]);
    let counterHearthstone = 0;
    let counterFornite = 0;
    let counterOverwatch = 0;
    let counterOthers = 0;

    for (let i = 0; i < game; i++) {
        let nameGame = input[i];
        switch (nameGame) {
            case "Hearthstone":
                counterHearthstone++;
                break;
            case "Fornite":
                counterFornite++;
                break;
            case "Overwatch":
                counterOverwatch++;
                break;
            default:
                counterOthers++;
                break;
        }
    }
    console.log(`Hearthstone - ${((counterHearthstone / game) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((counterFornite / game) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((counterOverwatch / game) * 100).toFixed(2)}%`);
    console.log(`Others - ${((counterOthers / game) * 100).toFixed(2)}%`);

}
pcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"]);


// (["3",
// "Hearthstone",
// "Diablo 2",
// "Star Craft 2"]);