function multiplyby5(num){
return num*5 ;
}

multiplyby5.power = 2 ;

//   so we can say that in the  end every thing in the  javascript  is made of the object
// for example we use fucntion as a object so  the js has contained prototype beheviour

// fucntion -------> object --------> null
// array -----> object -------> null

// so 


// console.log(multiplyby5(5));
// console.log(multiplyby5.power);
// console.log(multiplyby5.prototype);

function createUser(userName , userId,salary){
    this.userName = userName ;
    this.userId = userId;
    this.salary = salary
}


createUser.prototype.increment = function (){
      this.salary = this.salary + 1000 ;
}

createUser.prototype.editUserName = function(){
   return  this.userName = `Mr. ${this.userName}`
}

const userOne = new createUser("abhi" , 123,20000)
// here new keyword update the prototype what you add extra the function 
 

console.log(userOne.editUserName());
userOne.increment()

console.log(userOne.salary);

