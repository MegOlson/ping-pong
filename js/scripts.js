// Business End Logic

function errorCheck(number) {
  if (!number || number !== 0-9) {
    return "error: no input or NaN";
  }
}




// User Interface Logic
$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    var number = $("input#number-input").val();
    var numberOutput = errorCheck(number);
    console.log(numberOutput);
  });
});
