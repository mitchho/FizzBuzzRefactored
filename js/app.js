$(document).ready(function() {

	$("#fizzBuzzForm").submit(function(event) {
        //alert( "Handler for .submit() called." );
  		console.log('play button clicked');
  		console.log($(event.currentTarget).children('input').val());
  		// the code below logs the form text, not the input box text (see above for that)
  		// console.log($(event.currentTarget).text());

  		//  prevents the submit button from submitting the form. Apparently without
  		//  this statement the page refreshes and the append function below is
  		//  not called - will investigate this further - not sure about it.
  		event.preventDefault();

  		var numberForFizzBuzz = parseInt($(event.currentTarget).children('input').val());
  		console.log(numberForFizzBuzz);

      playFizzBuzz(numberForFizzBuzz);
 
	});

});

function playFizzBuzz(numberForFizzBuzz)
{
  for (var i = 1; i < (numberForFizzBuzz + 1); i++) {
        //console.log(i);

        var textGameResult;

        if (((i % 3) == 0) && ((i % 5) == 0))
          textGameResult = "Fizz Buzz";
        else if ((i % 3) == 0)
          textGameResult = "Fizz";
        else if ((i % 5) == 0)
          textGameResult = "Buzz";
        else 
          textGameResult = i;  //  implicit type conversion ?

        console.log(textGameResult);

      $("body").append("<p class = 'result'>" + textGameResult + "</p>");
    }

    $("body").append("<p class = 'result'>-------------</p>");
}