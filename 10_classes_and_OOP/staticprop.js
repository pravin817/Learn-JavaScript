class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `1233`;
    }
}

const pravin = new User("Pravin");
// console.log(pravin.createId())

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iPhone = new Teacher("Iphone","i@phone.com");

console.log(iPhone);
// console.log(iPhone.createId());