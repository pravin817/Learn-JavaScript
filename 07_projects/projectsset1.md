
# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1


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
