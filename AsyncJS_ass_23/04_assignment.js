
setTimeout(() => {
    console.log("hello");

}, 2000);
//2sec= 2000Mseconds


function sum(a, b) {
    console.log(a+b);
    
}
function calculator(a, b, callback) {
    callback(a, b);
}

calculator(1, 2, sum)









