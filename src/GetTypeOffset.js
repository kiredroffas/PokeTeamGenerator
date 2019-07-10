export function getTypeOffset(teamLen) {
    if(teamLen === 1) {
        return 0;
    }
    else if(teamLen === 2) {
        return 2;
    }
    else if(teamLen === 3) {
        return 4;
    }
    else if(teamLen === 4) {
        return 6;
    }
    else if(teamLen === 5) {
        return 8;
    }
    else if(teamLen === 6) {
        return 10;
    }
}