export function getTypesCheckbox() {
    let selectedTypes = [];

    if(document.getElementById("bug").checked === true) {
        console.log("bug checked");
        selectedTypes.push(["bug",7]);
    }
    if(document.getElementById("dark").checked === true) {
        console.log("dark checked");
        selectedTypes.push(["dark",17]);
    }
    if(document.getElementById("dragon").checked === true) {
        console.log("dragon checked");
        selectedTypes.push(["dragon",16]);
    }
    if(document.getElementById("electric").checked === true) {
        console.log("electric checked");
        selectedTypes.push(["electric",13]);
    }
    if(document.getElementById("fairy").checked === true) {
        console.log("fairy checked");
        selectedTypes.push(["fairy",18]);
    }
    if(document.getElementById("fighting").checked === true) {
        console.log("fighting checked");
        selectedTypes.push(["fighting",2]);
    }
    if(document.getElementById("fire").checked === true) {
        console.log("fire checked");
        selectedTypes.push(["fire",10]);
    }
    if(document.getElementById("flying").checked === true) {
        console.log("flying checked");
        selectedTypes.push(["flying",3]);
    }
    if(document.getElementById("ghost").checked === true) {
        console.log("ghost checked");
        selectedTypes.push(["ghost",8]);
    }
    if(document.getElementById("grass").checked === true) {
        console.log("grass checked");
        selectedTypes.push(["grass",12]);
    }
    if(document.getElementById("ground").checked === true) {
        console.log("ground checked");
        selectedTypes.push(["ground",5]);
    }
    if(document.getElementById("ice").checked === true) {
        console.log("ice checked");
        selectedTypes.push(["ice",15]);
    }
    if(document.getElementById("normal").checked === true) {
        console.log("normal checked");
        selectedTypes.push(["normal",1]);
    }
    if(document.getElementById("poison").checked === true) {
        console.log("poison checked");
        selectedTypes.push(["poison",4]);
    }
    if(document.getElementById("psychic").checked === true) {
        console.log("psychic checked");
        selectedTypes.push(["psychic",14]);
    }
    if(document.getElementById("rock").checked === true) {
        console.log("rock checked");
        selectedTypes.push(["rock",6]);
    }
    if(document.getElementById("steel").checked === true) {
        console.log("steel checked");
        selectedTypes.push(["steel",9]);
    }
    if(document.getElementById("water").checked === true) {
        console.log("water checked");
        selectedTypes.push(["water",11]);
    }
    
    return selectedTypes;
}