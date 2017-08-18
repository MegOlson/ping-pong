// Business End Logic

function errorCheck(number) {
  if (!number || number === /[^0-9]+/g) {
    return "error: no input or NaN";
  }
}
function inputConversion(number) {
  var error = errorCheck(number);
  if (error) {
    return error;
  } else {
    var numberArray = [];
    for (var index = number; index > 0; index--) {
      numberArray.push(index);
    }
    return numberArray;
  }
}

// User Interface Logic
$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number-input").val());
    var numberOutput = inputConversion(number);
    console.log(numberOutput);
    // if (errorCheck === "error: no input or NaN") {
    //   $(".alert").show();
    // } else {
    //   $("#result").text(inputConversion(number));
    // }
  });
});
