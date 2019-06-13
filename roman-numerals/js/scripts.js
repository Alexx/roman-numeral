$(document).ready(function(){
  console.log("Jquery says hi!");

var inputNumber = "";
var outputNumerals = "";
var outputArray = [];
var valuesArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
var numeralsArray = ['M' ,'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  function valueGrabber() {
    outputArray = [];
    outputNumerals = "";
    inputNumber = parseInt($("#input-number").val());
  }

  function numeralOutputter(){

    for (i = 0; i < outputArray.length; i++){
      for(x = 0; x < valuesArray.length; x++) {
        if (outputArray[i] === valuesArray[x]) {
          outputNumerals += numeralsArray[x];
          console.log(outputNumerals);
        }
      }
    }


    $("#numeral-output").text(outputNumerals);
    // $("#numeral-output").append(outputNumber);
  }

  function howMany (x){
    // this function finds out how many of a number, eg 1000, are in our number, it checks 900s and 400s as well because we're considering (IX) its own number
    var howMany = Math.floor(inputNumber/x);
    inputNumber -= (x*howMany);
    // this pushes "1000" etc to the array however many times
    for (i = 0; i < howMany; i++){
      outputArray.push(x);
    }


  }

  function romanNumeralMath() {
    valuesArray.forEach(function(number) {
      howMany(number);
    });
    console.log(outputArray);
  }

  function numberChecker() {
    // this turns away numbers outside of bounds, or inputs that are not numbers
    if (inputNumber > 3999 || inputNumber < 1) {
      console.log("Number is too high!");
       return $("#numeral-output").text("Sorry! Romans can't count that high!!");
    }else if (isNaN(inputNumber)) {
      return $("#numeral-output").text("Sorry! Please input a number!");
    }else{
      romanNumeralMath();
      numeralOutputter();
    }
  }








  function romanNumeralConverter(){
    valueGrabber();
    numberChecker();




  }


  $(".roman-numeral-form").submit(function(event){
    event.preventDefault();
    romanNumeralConverter();
    console.log(inputNumber);

  });


});
