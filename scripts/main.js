var myImage = document.querySelector('img')//объявили переменную; 
myImage.onclick = function(){
var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/macos.jpg') {
      myImage.setAttribute ('src','images/macos3.jpg');
    } else {
      myImage.setAttribute ('src','images/macos.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to the party, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Вы че тут понавешали?????, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
