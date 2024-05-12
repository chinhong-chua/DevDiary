import React, { useState } from 'react';

const CodingQuestions = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: "How to reverse a string in JavaScript?", answer: "You can use the split, reverse, and join methods." }
  ]);

  const addQuestion = (question, answer) => {
    const newQuestion = { id: questions.length + 1, question, answer };
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Coding Questions</h2>
      <div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
          Add Question
        </button>
        {questions.map(q => (
          <div key={q.id} className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-lg font-semibold">{q.question}</h3>
            <p className="text-gray-600">{q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingQuestions;
