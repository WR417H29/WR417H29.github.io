let idx = 0;

function item() {
    let item = document.createElement("div"); // create div element
    item.setAttribute("class", "text-input"); // give it a class
    item.setAttribute("id", `div${idx}`); // give it a unique id

    let inp = document.createElement("input"); // create input element
    inp.setAttribute("type", "text"); // give it a type
    inp.setAttribute("class", "inp"); // give it a class
    inp.setAttribute("id", `inp${idx}`) // give it a unique id
    inp.setAttribute("placeholder", "Todo - Item"); // give it a placeholder
    inp.setAttribute("onchange", `replace(inp${idx})`); // give it an onchange function
    item.appendChild(inp); // appending that element onto the div

    document.querySelector(".cont").appendChild(item); // appending the div element onto the main div of the website
    idx++; // incrementing the idx to ensure unique IDs
};

function replace(elemID) {
    let par = elemID.parentElement;
    let val = elemID.value;
    let newElem = document.createElement("p");
    newElem.innerText = val;
    par.removeChild(elemID);
    par.appendChild(newElem);
};