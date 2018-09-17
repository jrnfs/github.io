function changeLogo() {
    var myImage = document.querySelector('img');
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please, enter your name.');
    localStorage.setItem('myName', myName);
    myHeading.textContent = 'Mozilla is cool!, ' + myName;
}

if (!localStorage.getItem('myName')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('myName');
    myHeading.textContent = 'Mozilla is cool!, ' + storedName;
}