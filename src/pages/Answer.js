import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Answer page component
export const Answer = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
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
    }, []);
  
    // Function to handle navigation back to the question page
    const handleBack = () => {
      window.location.href = "/askquestions";
    };
  
    // Function to handle navigation back to the question ask page
    const handleContinue = () => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      window.location.href = "/askquestions";
    };
  
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div>
          <p>This is the answer page</p>
          <button onClick={handleBack} className="btn btn-primary">Back</button>
          <button onClick={handleContinue} className="btn btn-primary">Continue</button>
        </div>
      </div>
    );
  };

  
