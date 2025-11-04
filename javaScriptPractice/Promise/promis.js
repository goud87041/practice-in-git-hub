
const promiseOne = new Promise(function (resolve, reject) {
    console.log("i am in the promise one");
    resolve();
})

promiseOne.then(function () {
    console.log("here i come sucssesfully");
})

const promiseTwo = new Promise(function (resolve, reject) {
    console.log("yes i am in the promise two")
    resolve();
}).then(function () {
    console.log("here i am in the promiseTwo");

})



const promiseThree = new Promise(function (resolve, reject) {
    console.log("here i am in the promise Three");
    resolve({ name: "xyz", mail: "xyz@xyzg.com" })
}).then(function (user) {
    console.log(`here i am in the promise three and i am ${user.name}`);

})

const promiseThreeTwo = new Promise(function(resolve , reject){
    const error = false ;
    if(!error){
        resolve({
            name :"abhi",
            user_id :"1234"
        })
    }else{
        reject("i have an error in the promiseThreeTwo");
            
        }})
    

promiseThreeTwo
.then(function(user){
    console.log("user name is : ", user.name);
    
})
.catch(function(error){
    console.log(error);
    
})





const promiseFour =  new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({
                useName: "xyz",
                userMailId: "xyz@xyz.com"
            })
        } else {
            reject(function(){
                console.log("ERROR : some thing went wrong");
            })
        }
        // console.log("i'm inside the promiseFour");
    }, 1000)

})


async function promiseFourConsume(){
        console.log('hello i am in the async function');
        

        try{
    const response = await promiseFour ;
        console.log(response.userMailId);
        
    }
    catch(error){
        console.log('some things went wrong :' ,error);
        
    }
    finally{
            console.log('done async function excution ');
            
    }

}
 

promiseFourConsume()