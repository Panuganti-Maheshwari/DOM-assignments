const mainHeading = document.getElementById('main-heading');
console.log(mainHeading.textContent);   


const subText = document.getElementById('sub-text');
console.log(subText.textContent);


const colorListItems = document.querySelectorAll('#color-list li');
console.log(colorListItems.length);


const messageParagraph = document.getElementById('message');
messageParagraph.textContent = "Hello from JavaScript!";


const infoParagraph = document.getElementById('info');
infoParagraph.textContent = "This information has been updated.";


const colorBoxHeading = document.getElementById('color-box');
colorBoxHeading.style.color = "blue";


const highlightParagraph = document.getElementById('highlight');
highlightParagraph.style.backgroundColor = "yellow";


const textSizeParagraph = document.getElementById('text-size');
textSizeParagraph.style.fontSize = "24px";
textSizeParagraph.style.color = "red";