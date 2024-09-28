console.log("Hello World!");
let text = "Hello Parth!";
let age = 18;
document.getElementById('head1').textContent = text;
let showAge = document.getElementById('showAge');
showAge.textContent = `Your age is: ${age}`;

// let collegeName = window.prompt("Enter college name: ");
// console.log(collegeName);


let displayUsername = document.getElementById("displayUsername");
let submitUsername = document.getElementById("submit");
submitUsername.onclick = function() {
    let inUsername = document.getElementById("inUsername").value;
    displayUsername.textContent = `Username is: ${inUsername}`;
}