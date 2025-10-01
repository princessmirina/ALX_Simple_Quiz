function checkAnswer() {
  // identify the correct answer
  const correctAnswer = "4";

  //retrieve the user's answer
  const userAnswer = document.querySelector("input[name='quiz']:checked").value;
  const feedback = document.getElementById("feedback");
  const submit = document.getElementById("submit-answer");

  //compare the user's answer with the correct answer
  if (userAnswer === correctAnswer) {
    console.log("correct answer!");
    feedback.textContent = "Correct! Well done.";
  } else {
    console.log("incorrect answer!");
    feedback.textContent = "That's incorrect. Try again!";
  }
}
//add eventListener to the submit button
submit.addEventListener(submit, checkAnswer);
