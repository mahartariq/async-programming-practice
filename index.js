console.log("before Prepare Food");
function prepareFood(callback){
    setTimeout(()=>{
        console.log("Prepare Food");
        callback("Food is ready");
    },20);
}
function prepareFrenchToast(callback){
    setTimeout(()=>{
        console.log("Prepare French Toast");
        callback("French Toast is Ready");
    });
}
function mycallback(value){
    console.log("Food Callback: ",value);
    prepareFrenchToast(frenchToast);
}
function frenchToast(value){
    console.log("French-Toast Callback:",value);
    prepareCoffee(coffee);
}
function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("Prepare Coffee");
        callback("Coffee is Ready");
    });
}
function coffee(value){
    console.log("Coffee Callback:",value);
}
prepareFood(mycallback);
console.log("after Prepare Food");
