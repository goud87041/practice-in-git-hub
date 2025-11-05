
class user{
    constructor(userName){
        this.userName = userName ;
    }

    logMe(){
         console.log(`USER NAME is ${this.userName}`);
         
    }
}

class Teacher extends user{
    constructor(userName , email,pass){
        super(userName)
        this.email = email ;
        this.pass = pass 

    }

    addCourse(){
        console.log(`course is add by ${this.userName}`);
        
    }
}

const userOne = new Teacher("abhi","abhi@gamil.com",123)

userOne.logMe()
