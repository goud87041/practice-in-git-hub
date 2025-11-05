
class user{
    constructor (userName, email , pass){
        this.email = email 
    }
    logMe(){
        console.log(`${this.userName} has log in `);
    }
    

  static  createId(){
        return `123`;
    }
}

const userTwo =  user.createId();
console.log(userTwo);



const userOne = new user("abhi","abhi@gamil.cpm",123)

// const createID =userOne.createId()
 
// console.log(createID);

console.log(user.createId());
class Teacher extends user {

}


// so you can not get static method or any static variable without calling is with class name 
// if you make an object of that class and use static method then you will see an error
// also you can not use static method inside the child class of that class 
