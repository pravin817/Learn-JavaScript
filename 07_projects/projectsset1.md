
# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 : Color Scheme Switcher


```

// get all button
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn)=>{
  console.log(btn)

  btn.addEventListener("click",(e)=>{
    const bgColor = e.target.id; 

    console.log(bgColor);

    if(bgColor === "grey"){
      body.style.backgroundColor = bgColor
    }else if(bgColor === "white"){
      body.style.backgroundColor = bgColor
    }else if(bgColor === "blue"){
      body.style.backgroundColor = bgColor
    }else if(bgColor === "yellow"){
      body.style.backgroundColor = bgColor
    }
  })

})
```

Project 2 : BMI Calculator

```
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  // validate the height and weight

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height, ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid height, ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `${bmi} UnderWeight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `${bmi} Normal`;
    } else if (bmi > 24.9) {
      result.innerHTML = `${bmi} Overweight`;
    }
  }
});

```


Project 3 : Digital Clock


```
const clock = document.querySelector('#clock');

const showTime = () => {
  setInterval(() => {
    const date = new Date().toLocaleTimeString();
    clock.innerHTML = date;
  }, 1000);
};

showTime();

```


Project 4 : Guess the random Number


```


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// validate the guess number
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter the valid number.');
  } else if (guess < 1) {
    alert('Please enter the number greater than 1');
  } else if (guess > 100) {
    alert('Please enter the number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. The Random number was : ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```


Project 5 : KeyBoard Check

```javascript


const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  
  <div class="color"> 
  
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  
  
  </div>`;
});


```


Project 6 : Unlimited Colors


```javascript

// generate the hex color

const generateHexColor = () => {
  const hex = '0123456789ABCEDF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// get the reference of start

let bgRef;
const body = document.querySelector('body');

const startChangingColor = function () {
  if (!bgRef) {
    bgRef = setInterval(changeBg, 1000);
  }

  function changeBg() {
    const bgColor = generateHexColor();
    body.style.backgroundColor = bgColor;
    console.log(bgColor);
  }
};

const stopChangingColor = function () {
  clearInterval(bgRef);
  bgRef = null;
};

// Start
document.querySelector('#start').addEventListener('click', startChangingColor);

// stop
document.querySelector('#stop').addEventListener('click', stopChangingColor);


```