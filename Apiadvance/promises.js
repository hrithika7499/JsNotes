const promiseOne=new Promise(function(resolve,reject){
        //Do and async task
        //db calls ,crypotography and network calls
        setTimeout(function(){
            console.log("Asyn request is completed");
            resolve();
        },1000)
})

promiseOne.then(function(){
    console.log("Promise has been fulfilled");
})

//Shorter version or more advanced of available one

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Aur ek request bhi completed")
        resolve()
    },1000)
}).then(function(){
    console.log("Yeh bhi completed");
})

//if we are passing any data in reolve()

const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"MSD",
            tagline:"Thaala!!!"
        })
    },1000)
})

promiseTwo.then(function(user){
    console.log(user);
})


//using the resolve chaining and reject

const promiseThree=new Promise(function(resolve,reject){
    let error=false;
    if(!error){
        resolve({
            username:"Virat",
            tagline:"king"
        })
    }
    else{
        reject("eRROR ! sOMETHING WENT WRONG")
    }
})

promiseThree.then(function(user){
    console.log(user)
    return user.username//bydoing this in next chaining we get the username 
}).then((username)=>console.log(username))
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Something got resolved or rejected");
})


const promiseFoor=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({
                username:'mahi',
                password:'trophycollector'
            })
 
        }
        else{
            reject("No Other captain found");
        }
    },1000)
})


//Using async and await

async function consumePromisefour(){
    try{
    const response=await promiseFoor
    console.log(response);
    }
    catch(error){
        console.log(error)
    }
}

consumePromisefour();


async function getallUsers(){
    try{
    const response=await fetch('https://dummyjson.com/products')
    const data= await response.json()//convert into json formate
    console.log(data)
    }catch(error){
        console.log("e:",error);
    }
}
getallUsers();