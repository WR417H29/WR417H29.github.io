let userData = {
    "username": "",
    "messages": []
};

function username() {
    let username = document.getElementById('username-input');
    let usrDisp = document.getElementById('username-disp');
    userData.username = username.value;
    usrDisp.innerText = username.value;
    username.style.display = "none";
    usrDisp.style.display = "block";
}

function send() {
    let message = document.getElementById("input-box");
    let chatbox = document.getElementById("messages");

    let newMsg = document.createElement("p");
    newMsg.innerText = userData.username + ": " + message.value;
    userData.messages.push(message.value);
    message.value = "";


    chatbox.appendChild(newMsg);
}