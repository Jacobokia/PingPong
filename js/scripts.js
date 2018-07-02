//business logic
var counter = function(userInput){
    var majorArray = [];

    for (var index = 1; index <= userInput; index++) {

      console.log(index);
      if (index % 15 ===0){
        majorArray.push("Ping-Pong")
      } else if (index % 5 ===0) {
        majorArray.push("pong")

      } else if (index % 3 ===0) {
        majorArray.push("ping")
      } else {
        majorArray.push(index);
      };
    }
     return majorArray;
};






//UI logic
$(document).ready(function(){
    $("#major").submit(function(event){
      event.preventDefault();

      var userInput = parseInt($("#userInput").val());
      $("#output").empty();
      var finalOutput = counter(userInput);



      finalOutput.forEach(function(output){
      $("#output").append("<li>" + output + "</li>");
    });
    $("#userInput").val("");
    });
})
