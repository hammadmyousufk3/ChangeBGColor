function hex() {
    var hexarr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
    var hex1 = hexarr[Math.floor(Math.random() * hexarr.length)]
    return hex1
}

function changeBg() {
var hexcode = "#" + hex() + hex() + hex() + hex() + hex() + hex();
document.body.style.backgroundColor = hexcode
}