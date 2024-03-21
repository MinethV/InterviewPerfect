import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Main QuestionAsk component
export const QuestionAsk = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { industry } = useParams();

  useEffect(() => {
    const industry = "hr";
    fetch(`http://localhost:8000/questions/${industry}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Log the response data
        setQuestions(data.Questions);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [industry]);

  // Function to handle automatic navigation to the answer page after one minute
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentQuestionIndex < questions.length) {
        window.location.href = "/answer";
      }
    }, 3000); // 1 minute in milliseconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [currentQuestionIndex, questions.length]);

  // Function to handle navigation to the next question
  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length ? (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <div>
            <p style={{ fontWeight: "300", fontSize: 32, fontFamily: "'Rubik', sans-serif" }}>
              {questions[currentQuestionIndex].question}
            </p>
            {/* No button needed */}
          </div>
        </div>
      ) : (
        <p>No more questions</p>
      )}
    </div>
  );
};
