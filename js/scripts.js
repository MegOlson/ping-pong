// Business End Logic

function errorCheck(numberInput) {
  if (!numberInput || numberInput === /[^0-9]+/g) {
    return "error: no input or NaN";
  }
}
function inputConversion(numberInput) {
  var error = errorCheck(numberInput);
  if (error) {
    return error;
  } else {
    var numbers = [];
    for (var i = numberInput; i > 0; i--) {
      if (i%3 === 0) {
        numbers.push("ping");
      } else if (i%5 === 0) {
        numbers.push("pong");
      } else if (i%15 === 0) {
        numbers.push("ping-pong");
      } else {
        numbers.push(i);
      }
    }
    return numbers;
  }
}


// User Interface Logic
$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
     $(".alert").hide();
    var numberInput = parseInt($("input#number-input").val());
    var numberOutput = inputConversion(numberInput);
    if (errorCheck(numberInput) === "error: no input or NaN") {
      $(".alert").show();
    } else {
      $("#result").text(inputConversion(numberInput));
    }
  });
});
