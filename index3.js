console.log("before Prepare Food");
function prepareFood(data){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            if (data!=2){
                console.log("Prepare Food");
                resolve("Food is ready");   
            }
            else{
                reject("Something went wrong");
            }

        },20);
    });
    return promise;
}
function prepareFrenchToast(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Prepare French Toast");
            resolve("French Toast is Ready");
        });    
    });
    return promise;
}

function prepareCoffee(){
    let promise = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("Coffee is Ready");
        });    
    });
    return promise;
}

async function startProcess(){
    let foodvalue = await prepareFood();
    console.log("Food-Value",foodvalue);
    let frenchtoastvalue = await prepareFrenchToast();
    console.log("French Toast Value",frenchtoastvalue);
    let coffeevalue = await prepareCoffee();
    console.log("Coffee Value",coffeevalue);
}
startProcess();

/*
let promise = prepareFood(2)
//console.log("Promise:", promise);
promise.then(function (value){
    console.log("Food Callback: ",value);
    return prepareFrenchToast();
})
.then(function(value){
    console.log("French-Toast Callback:",value);
    return prepareCoffee();
})
.then(function(value){
    console.log("Coffee Callback:",value);
})
.catch(function(error){
    console.log("Food error Callback",error)
}); */
/*
prepareFood(function(value){
    
    prepareFrenchToast(function(value){
    
        prepareCoffee(function(value){
    
        });
    });
});
*/
console.log("after Prepare Food");
