function catLife(input) {
    let breed = input[0];
    let gender = input[1];
    let humanMonth = 0;
    let catMonth = 0;


    if (gender === "m") {
        switch (breed) {
            case "British Shorthair":
                humanMonth = 15 * 12;
                catMonth = humanMonth / 6;
                break;
            case "Siamese":
                humanMonth = 13 * 12;
                catMonth = humanMonth / 6;
                break;
            case "Persian":
                humanMonth = 14 * 12;
                catMonth = humanMonth / 6;
                break;
            case "Ragdoll":
                humanMonth = 12 * 12;
                catMonth = humanMonth / 6;
                break;
            case "American Shorthair":
                humanMonth = 13 * 12;
                catMonth = humanMonth / 6;
                break;
            case "Siberian":
                humanMonth = 11 * 12;
                catMonth = humanMonth / 6;
                break;
        }
    } else if (gender === "f") {
        switch (breed) {
            case "British Shorthair":
                humanMonth = 14 * 12;
                catMonth = humanMonth / 6;
                break;
            case "Siamese":
                humanMonth = 16 * 12;
                catMonth = humanMonth / 6;
                break;
            case "Persian":
                humanMonth = 15 * 12;
                catMonth = humanMonth / 6;
                break;
            case "Ragdoll":
                humanMonth = 17 * 12;
                catMonth = humanMonth / 6;
                break;
            case "American Shorthair":
                humanMonth = 13 * 12;
                catMonth = humanMonth / 6;
                break;
            case "Siberian":
                humanMonth = 12 * 12;
                catMonth = humanMonth / 6;
                break;
        }
    }
    if (breed === "Tom") {
        console.log(`${breed} is invalid cat!`);    
    } else {
        console.log(`${Math.floor(catMonth)} cat months`);
    }
}
catLife(["Ragdoll",
"f"]);