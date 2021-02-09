let idx = 0;
let data = {};


function item() {
    data[`item${idx}`] = [{"index": idx, "editable": true, "fin": false}];

    let item = document.createElement("div"); // create div element
    item.setAttribute("class", "text-input"); // give it a class
    item.setAttribute("id", `div${idx}`); // give it a unique id

    let inp = document.createElement("input"); // create input element
    inp.setAttribute("type", "text"); // give it a type
    inp.setAttribute("class", "inp"); // give it a class
    inp.setAttribute("id", `inp${idx}`) // give it a unique id
    inp.setAttribute("placeholder", "Todo - Item"); // give it a placeholder
    inp.setAttribute("onchange", `update(${idx})`); // give it an onchange function
    inp.style.display = "block";
    
    let radioSwap = document.createElement("input");
    radioSwap.setAttribute("type", "radio");
    radioSwap.setAttribute("id", `rs${idx}`);
    radioSwap.setAttribute("onClick", `update(${idx})`)
    radioSwap.style.display = "none";

    let textDisp = document.createElement("p");
    textDisp.setAttribute("id", `p${idx}`);
    textDisp.style.display = "none";

    item.appendChild(inp); // appending that element onto the div
    item.appendChild(radioSwap);
    item.appendChild(textDisp);

    document.querySelector(".cont").appendChild(item); // appending the div element onto the main div of the website
    update(idx);
    idx++; // incrementing the idx to ensure unique IDs
};

function update(index) {
    let inputElem = document.getElementById(`inp${index}`);
    let outputElem = document.getElementById(`p${index}`);
    let radioElem = document.getElementById(`rs${index}`);

    if (data[`item${index}`]['editable'] == true) {
        data[`item${index}`]['editable'] = false;
        inputElem.style.display = "none";
        outputElem.style.display = "block";
        radioElem.style.display = "block";

        radioElem.value = false;
        outputElem.innerText = inputElem.value;
        inputElem.setAttribute("value", "");
    } else {
        data[`item${index}`]['editable'] = true;
        inputElem.style.display = "block";
        outputElem.style.display = "none";
        radioElem.style.display = "none";
    };
};