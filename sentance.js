
var userName = document.getElementById("userName");
var btn1 = document.getElementById("b1");
var btn2 = document.getElementById("b2");

var intro = [
    "Once upon a time, ",
    "And so it was, ",
    "In the beginning, "
];
var clause = [

    "was walking in the park, ",
    "was wandering in the mall, ",
    "was riding the Ferris Wheel, "
];
var conclusion = [
    "when a bird landed on his head.",
    "as Birnam wood came to Dunsinane.",
    "when the sun went down in the East."
]


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
    var i = 0;
    i = getRandomInt(0,3);    
    message += intro[i]+ " " + userName.value + " ";
    
    i = i = 0;
    i = getRandomInt(0,3); 
    message += clause[i] + " ";

    i = getRandomInt(0,3);
    message += conclusion[i] + " ";

    resultArea.innerHTML = "<ul><li>" + message + "</li></ul>";

});

btn2.addEventListener("click", function(){
        // userName.innerText did not work, but the below did.  Must relate
        // to the variable declaration above.
        userName.value = "";    
        // no varible declaration above, but accessed with below
        resultArea.innerHTML = "Gibberish soon to appear here.";

        // Now that resultArea has been hijacked, this won't work...
    
});