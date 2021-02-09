function count() {
    let text = document.querySelector(".input-area").value;
    let info = document.getElementById("results");

    let words, chars;
    
    words = text.split(" ").length;
    chars = text.length;

    info.innerText = (`Words: ${words} \n Chars: ${chars}`);

    console.log("Words: " + words);
    console.log("Chars: " + chars);
};