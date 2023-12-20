// Immediately Invoked Function Expression(IIFE)

/*
    Note : To avoid the pollution from the global scope we need to use the IIFE.
*/

// ()();

// This is the named IIFE

/*
    Note : While writing the two IIFE in single file focus on the semicolon. (;)
*/

(function chai() {
  console.log(`The DB connected`);
})();

((name) => {
  console.log(`The DB Connected 2 ${name}`);
})("Pravin");
