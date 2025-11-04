function userInfo(user,logIncount , logIn){
    this.user = user;
    this.logIncount = logIncount;
    this.logIn = logIn

    console.log(this);
    
    return this
    
} 

const user = userInfo("abhi", 12, true);
//if we create userTwo and insert the values with out using "NEW" key word and console "user" 
//in terminal you see "userTwo" values 


const  userTwo =  new userInfo("goud", 23, false)


console.log(user);
