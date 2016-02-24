
//  STEP ONE: 
//  Attach a click event listener to the answer button that will
//  execute the checkAnswer function.

$(document).ready(function() {

  // attach your button click event listener here

});

function checkAnswer(){
  
  var answer =  $("input[name=question-one]:checked").val();
  //input[name='ans3']:checked
  console.log(answer);
  
  
  // STEP TWO:
  // with an if/else statement, check to see if the answer is correct      
  // if the answer is correct, use jQuery to add the class "question-correct" to the
  // div with the id of "question-one", otherwise, add the class "question-incorrect"
  
  
  
  
  // STEP THREE:
  // use a jQuery effect to slideDown the appropriate "remark-correct" or "remark-incorrect"
  
  
  
  
  // STEP FOUR (extra credit):
  // use jQuery to display the reset button once the user has made a selection (this code should be outside of the if/else statement)
  // create a function called resetQuiz that will remove any styles that we added
  // create an click event listener for the reset button and attach it to the resetQuiz function
  
}