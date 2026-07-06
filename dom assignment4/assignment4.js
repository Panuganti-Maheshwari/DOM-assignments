const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const newMessage = document.createElement('li');
        newMessage.textContent = chatInput.value;
        chatMessages.appendChild(newMessage);
        chatInput.value = '';
    }
});


const alertBtn = document.getElementById('alert-btn');
const alertMsg = document.getElementById('alert-msg');

alertBtn.addEventListener('click', function() {
    alertMsg.style.display = 'block';
    setTimeout(function() {
        alertMsg.style.display = 'none';
    }, 3000);
});


const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const counterDisplay = document.getElementById('counter-display');



let counter = 0; 
let intervalId;


startBtn.addEventListener('click', function() {
    intervalId = setInterval(function() {
        counter++;
        counterDisplay.textContent = counter;
    }, 1000);
});


stopBtn.addEventListener('click', function() {
    clearInterval(intervalId);
}); 

const nameInput = document.getElementById('name-input');
const saveBtn = document.getElementById('save-btn');
const greetingName = document.getElementById('greeting-name');


window.addEventListener('load', function() {    
    const savedName = localStorage.getItem('savedName');
    if (savedName) {
        greetingName.textContent = savedName;
    }
}); 


saveBtn.addEventListener('click', function() {
    const name = nameInput.value;
    localStorage.setItem('savedName', name);
    greetingName.textContent = name;
});


const delegationList = document.getElementById('delegation-list');
delegationList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});