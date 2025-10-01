function checkAnswer() {
  // identify the correct answer
  const correctAnswer = "4";

  //retrieve the user's answer
  const userAnswer = document.querySelector("quiz").value;
  const feedback = document.getElementById("feedback");
  const submit = document.getElementById("submit-answer");

  //compare the user's answer with the correct answer
  if (userAnswer == correctAnswer) {
    console.log("Your answer is correct!");
    feedback.textContent = "Correct! Well done.";
  } else {
    console.log("Your answer is incorrect!");
    feedback.textContent = "That's incorrect. Try again!";
  }
}
//add eventListener to the submit button
submit.addEventListener(submit, checkAnswer);
