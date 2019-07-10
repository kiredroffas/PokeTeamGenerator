import bug from './types/bug.gif'
import dark from './types/dark.gif'
import dragon from './types/dragon.gif'
import electric from './types/electric.gif'
import fairy from './types/fairy.gif'
import fighting from './types/fighting.gif'
import fire from './types/fire.gif'
import flying from './types/flying.gif'
import ghost from './types/ghost.gif'
import grass from './types/grass.gif'
import ground from './types/ground.gif'
import ice from './types/ice.gif'
import normal from './types/normal.gif'
import poison from './types/poison.gif'
import psychic from './types/psychic.gif'
import rock from './types/rock.gif'
import steel from './types/steel.gif'
import water from './types/water.gif'

export function getTypePic(type) {
    let img;
    switch(type) {
        case "bug":
            img = bug;
            break;
        case "dark":
            img = dark;
            break;
        case "dragon":
            img = dragon;
            break;
        case "electric":
            img = electric;
            break;
        case "fairy":
            img = fairy;
            break;
        case "fighting":
            img = fighting;
            break;
        case "fire":
            img = fire;
            break;
        case "flying":
            img = flying;
            break;
        case "ghost":
            img = ghost;
            break;
        case "grass":
            img = grass;
            break;
        case "ground":
            img = ground;
            break;
        case "ice":
            img = ice;
            break;
        case "normal":
            img = normal;
            break;
        case "poison":
            img = poison;
            break;
        case "psychic":
            img = psychic;
            break;
        case "rock":
            img = rock;
            break;
        case "steel":
            img = steel;
            break;
        case  "water":
            img = water;
            break;
    }
    return img;
}