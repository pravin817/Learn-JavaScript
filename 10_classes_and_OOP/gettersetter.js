class User {
  constructor(email, password) {
    (this.email = email), (this.password = password);
  }

  get email(){
    return this._email.toUpperCase();
  }

  set email(email){
    this._email = email;
  }

  get password() {
    return `${this._password}jwfudsfbbw`;
  }

  set password(value) {
    this._password = value;
  }
}

const pravin = new User("p@gmail.com", "asdfghn@hbjkhdbkjeb2222");

console.log(pravin.password);
console.log(pravin.email);
