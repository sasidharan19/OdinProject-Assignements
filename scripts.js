const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const paraContent = document.createElement('p');
paraContent.classList.add('para');
paraContent.textContent = "Hey I'm red!";
paraContent.style.color = 'red';
container.appendChild(paraContent);

const headingThree = document.createElement('h3');
headingThree.classList.add('headingInsideContainer');
headingThree.textContent = "I'm a blue h3!";
headingThree.style.color = 'blue';
container.appendChild(headingThree);

const divContent = document.createElement('div');
divContent.classList.add('secondContent');
divContent.setAttribute('style','border: thick solid black;background: pink');
container.appendChild(divContent);

const headingOne = document.createElement('h1');
headingOne.classList.add('headingInsideSecondContainer');
headingOne.textContent = "I'm in a div";
divContent.appendChild(headingOne);

const paraContentTwo = document.createElement('p');
paraContentTwo.classList.add('paraTwo');
paraContentTwo.textContent = "ME TOO!";
divContent.appendChild(paraContentTwo);