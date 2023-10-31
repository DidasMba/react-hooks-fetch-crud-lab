import React, { useState } from "react";

function QuestionForm({ addQuestion }) {
  const [formData, setFormData] = useState({
    prompt: "",
    answers: ["", "", "", ""],
    correctIndex: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "correctIndex") {
      setFormData({ ...formData, [name]: parseInt(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newQuestion = {
      prompt: formData.prompt,
      answers: formData.answers.filter((answer) => answer.trim() !== ""), // Remove empty answers
      correctIndex: formData.correctIndex,
    };

    // Add the new question
    addQuestion(newQuestion);

    // Clear the form
    setFormData({
      prompt: "",
      answers: ["", "", "", ""],
      correctIndex: 0,
    });
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        {/* Form inputs for prompt and answers */}
        {/* ... (Your existing form inputs) */}
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
