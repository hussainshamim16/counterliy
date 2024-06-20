// var increment = document.getElementById("increment");
// var decrement = document.getElementById("decrement");
var display = document.getElementById("display");
var container = document.getElementById("container");
var couterNumber = document.getElementById("couterNumber");
var buttons = document.getElementById("buttons");

var num = 0;

function increment(elelment){
    num++
    couterNumber.innerHTML = num

};

function decrement(elelment){
    num--
    couterNumber.innerHTML = num 
    
};

