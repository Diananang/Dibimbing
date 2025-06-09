function greet (name, age, callback){
    console.log("Hello i am ", name);
    age();
    callback();
    
}
function callBackFunction(){
    console.log("I am callback function");
}

function age(){
    console.log("I am 23 years old");
}

greet('Diana',age, callBackFunction);