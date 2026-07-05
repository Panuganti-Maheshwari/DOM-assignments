const userForm = document.getElementById('user-form');  

userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username-input');
    const username = usernameInput.value;

    const displayName = document.getElementById('display-name');
    displayName.textContent = username;
});

const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(function(button) {
    button.addEventListener('click', function(){
        const listItem = button.parentElement;
        listItem.remove();
    });
});

const containerBox = document.getElementById('container-box');
console.log('Number of children in container-box:', containerBox.children.length);  

const colorParentBtn = document.getElementById('color-parent-btn');
colorParentBtn.addEventListener('click', function() {

    const parentElement = colorParentBtn.parentElement;
    parentElement.style.backgroundColor = 'lightblue';
});