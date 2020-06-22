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
function prepareCoffee(callback){
    setTimeout(()=>{
        console.log("Prepare Coffee");
        callback("Coffee is Ready");
    });
}
prepareFood(function(value){
    console.log("Food Callback: ",value);
    prepareFrenchToast(function(value){
        console.log("French-Toast Callback:",value);
        prepareCoffee(function(value){
            console.log("Coffee Callback:",value);
        });
    });
});

console.log("after Prepare Food");
