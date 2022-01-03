const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
const redp = document.createElement('p');
redp.textContent = "Hey I'm red!";
redp.style.color = "red";
container.appendChild(redp);

// an <h3> with blue text that says “I’m a blue h3!”
const blueh3 = document.createElement('h3');
blueh3.textContent = "I’m a blue h3!";
blueh3.style.color = "Blue";
container.appendChild(blueh3);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
const subContainer = document.createElement('div');
subContainer.classList.add('subContainer');
subContainer.style.border = "solid 2px black";
subContainer.style.backgroundColor = "pink";
const subConh1 = document.createElement('h1');
subConh1.textContent = "I'm in a div";
subContainer.appendChild(subConh1);
const subConp = document.createElement('p');
subConp.textContent = "ME TOO!";
subContainer.appendChild(subConp);
container.appendChild(subContainer);

// Button
function alertFunction() {
    alert("YAY, YOU DID IT!");
};
const btn = document.querySelector('#btn');
// btn.onclick = alertFunction;
// btn.addEventListener('click', alertFunction);
// btn.addEventListener('click', function (e) {
//  console.log(e.target);
// });
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});