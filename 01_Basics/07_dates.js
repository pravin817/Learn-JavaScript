const date = new Date();
// console.log(date)
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toJSON())
// console.log(date.toISOString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleDateString())
// console.log(date.toTimeString())

// console.log(typeof date)

// const newDate = new Date(2023,0,23,5,4);
// const newDate = new Date("2023-01-15");
// console.log(newDate.toLocaleString())

const currentDate = Date.now();
// console.log(currentDate.toString());
// console.log(newDate.getTime());

/*
    Note : Date.now()  return the value in the form of the milliseconds.
           we can convert it to seconds by divinding it by 1000
           then taking the floor value.
*/

// console.log(Math.floor(Date.now()/1000))

const newDate = new Date();
// console.log(newDate.getDate())
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())
// console.log(newDate.getHours())
// console.log(newDate.getTime())
// console.log(newDate.getSeconds())
// console.log(newDate.getMinutes())

console.log(newDate.toLocaleString('default',{
    "weekday":"long"
}));
