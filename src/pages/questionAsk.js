import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './questionAsk.css';

// Main QuestionAsk component
export const QuestionAsk = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [videoFinished, setVideoFinished] = useState(false);
  const [askedQuestions, setAskedQuestions] = useState([]); // for saving asked questions
  const { industry } = useParams();
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`https://interviewperfect-error-x.koyeb.app/modelvideos`);
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        setQuestions(data.modelVideos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      const video = videoRef.current;
      video.load(); // Reset the video element
      video.play(); // Start playing the video

      // Add event listener for video ended event
      const handleVideoEnded = () => {
        setVideoFinished(true); // Set videoFinished to true when the video ends
      };

      video.addEventListener('ended', handleVideoEnded);

      // Cleanup: remove event listener
      return () => {
        video.removeEventListener('ended', handleVideoEnded);
      };
    }
  }, [currentQuestionIndex, questions]);

  const handleContinue = () => {
    setVideoFinished(false); // Reset videoFinished when continue button is clicked
    const nextQuestion = questions[currentQuestionIndex];
    setAskedQuestions(prevState => [...prevState, nextQuestion]); // Add current question to askedQuestions array
    setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length); // Move to the next question
  };

  return (
    <div>
      {questions.length > 0 && (
        <div className="container d-flex justify-content-center align-items-center">
          <div>
            <p style={{ fontWeight: "300", fontSize: 20, fontFamily: "'Rubik', sans-serif", color: "#494949"}}>
              Question {currentQuestionIndex + 1}
            </p>
            <p style={{ fontWeight: "300", fontSize: 30, fontFamily: "'Rubik', sans-serif" }}>
              {questions[currentQuestionIndex].question}
            </p>
            {videoFinished ? (
              <div>
                <p>Answer the question:</p>
                {/* Add input field for user's answer */}
                <button onClick={handleContinue} className="btn btn-primary">Continue</button>
              </div>
            ) : (
              <video ref={videoRef} autoPlay style={{ width: "100%" }}>
                <source src={questions[currentQuestionIndex].firebase_download_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
      {questions.length === 0 && <p>Loading...</p>}
    </div>
  );
};