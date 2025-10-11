// Function declaration
function checkAnswer() {
    const correctAnswer = "4"; // Correct answer

    // Retrieve user's answer (checked radio button)
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');

    if (!userAnswerElement) {
        // No option selected
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "#dc3545";
        return;
    }

    const userAnswer = userAnswerElement.value;

    // Compare user's answer with correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
