
var userName = document.getElementById("userName");
var btn1 = document.getElementById("b1");
var btn2 = document.getElementById("b2");

var intro = [
    "Once upon a time",
    "And so it was",
    "In the beginning"
];


function getRandomInt(min, max){
    // returns the smallest integer greater than or equal to 
    //  the given number
    min = Math.ceil(min);
    // returns the largest integer less than or equal to a 
    //   given number
    max = Math.floor(max);
    return Math.floor(Math.random()* (max - min) + min);

};


btn1.addEventListener("click", function(){
    var message = "";
    var i = getRandomInt(0,3);    console.log("bt1 has been clicked");
    message += intro[i]+ " " + userName.value;
    console.log(message);
    resultArea.innerText = message;

});

btn2.addEventListener("click", function(){
    
        console.log("bt2 has been clicked");
    
});