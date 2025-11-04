// function setName(name){
//     this.name = name 
// }


// function createUser(name ,userRole,password){
//     this.userRole = userRole ;
//    this.userPass = password

//     setName(name);
// }




//  const userOne = new createUser("abhi","watch Man",123);
// console.log(userOne);


// output : createUser("abhi","watch Man",123));

// When setName() runs, it is added to the call stack and removed after it finishes execution.
// After that, only createUser remains in the stack, but since setName() was called without 
// context, its this didn’t point to createUser, so the name property was not added to the 
// new object.To fix this, we use the call keyword and pass this as the first argument, 
// so that setName runs in the current object’s context and updates the same memory location.

function setName(name){
    this.name = name 
}


function createUser(name ,userRole,password){
    this.userRole = userRole ;
   this.userPass = password

    setName.call(this,name);
}




 const userOne = new createUser("abhi","watch Man",123);
console.log(userOne);



