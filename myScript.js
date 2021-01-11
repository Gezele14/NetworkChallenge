let socket = io();

const box = document.getElementById("messageBox");
const messages = document.getElementById("messages");
const sendBtn = document.getElementById("sendBtn");
const sender = document.querySelector("#Sender");
const msg = document.querySelector("#Message");

const updateTable = () => {
  let senderTxt = sender.value;
  let msgTxt = msg.value;

  if (!senderTxt) {
    alert("Please give a name");
    return;
  }
  if (!msgTxt) {
    alert("Please give a message");
    return;
  }

  let msgToServer = `${senderTxt} says: ${msgTxt}`;
  socket.emit("Message", msgToServer);
  msg.value = "";
};

socket.on("Message", function (msgFromServer) {
  console.log(msgFromServer);
  let item = document.createElement("li");
  item.textContent = msgFromServer;
  messages.appendChild(item);
  msg.focus();
  box.scrollTop = box.scrollHeight;
});

sendBtn.addEventListener("click", updateTable);
msg.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    sendBtn.click();
  }
});

// for (let i = 0; i < 10; i++) {

// }
