function setUsername (username){

    // complex database calls
    this.username = username;
    console.log("called")
}

function createUser (username,email,password){
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("Chai","chai@fb.com","123456");
console.log(chai);