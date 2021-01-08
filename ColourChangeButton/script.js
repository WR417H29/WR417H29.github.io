function genNum() {
    return Math.floor((Math.random() * 255));
}

function change() {
    let colours = [genNum(), genNum(), genNum()];
    let bg = `rgb(${colours[0]}, ${colours[1]}, ${colours[2]})`;
    document.querySelector(".btn").innerHTML = ("Colour: " + colours);
    document.body.style.backgroundColor = (bg);
}