//business logic
var pingPong = function(number){

  var str1 = "ping"
  var str2 = "pong"
  if (number % 3===0){
    return str1;

  }
  else if (number % 5 ===0){
    return str2;
  }

  return false;
}


//code to try {
//code that i am going to try {
  /* for(var i = 1; i < 21; i++) {
    switch(true) {

        case( i % 5 === 0 && i % 3 === 0):
            console.log("FizzBuzz");
            break;

        case(i % 5 === 0):
            console.log("Buzz");
            break;

        case (i % 3 === 0):
            console.log("Fizz");
            break;
        default:
            console.log( i );*/
    




//UI logic
$(document).ready(function(){
    $("form#pingpong").submit(function(event){
      event.preventDefault();

      var userNumber = parseInt($("#userinput").val());

      var display = pingPong(userNumber);


      $("#result").text(display);
    })
})
