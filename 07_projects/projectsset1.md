
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
