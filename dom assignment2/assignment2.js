const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
}); 


const hoverBox = document.getElementById('hover-box');

hoverBox.addEventListener('mouseenter', () => {
    hoverBox.classList.add('highlight');
});

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.classList.remove('highlight');
}); 


const swapBtn = document.getElementById('swap-btn');
const profilePic = document.getElementById('profile-pic');

swapBtn.addEventListener('click', () => {
    profilePic.src = "https://via.placeholder.com/150/0000FF/808080?Text=New+Image";
    profilePic.alt = "New Profile Image";
}); 


const disableBtn = document.getElementById('disable-btn');
disableBtn.addEventListener('click', () => {
    disableBtn.disabled = true;
});     


const itemList = document.getElementById('item-list');
const addItemBtn = document.getElementById('add-item-btn'); 


addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = "New dynamically added item";
    itemList.appendChild(newItem);
});     

