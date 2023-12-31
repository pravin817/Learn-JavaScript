// const multiplyByFive = (num) => {
//   return num * 5;
// };

// multiplyByFive5.power = 20;

// console.log(multiplyByFive(5));
// console.log(multiplyByFive.power);
// console.log(multiplyByFive5.prototype);
 

function createUser(username, score){
    this.username = username;
    this.score = score;

}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`)
}

const chai =new createUser("Chai", 100);
const tea = new createUser("Tea", 200);


chai.printMe();
