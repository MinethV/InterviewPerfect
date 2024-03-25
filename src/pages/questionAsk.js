import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './questionAsk.css';

export const HumanResources = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [videoFinished, setVideoFinished] = useState(false);
  const [askedQuestions, setAskedQuestions] = useState([]); // Array to store asked questions
  const { industry } = useParams();
  const videoRef = useRef(null);
  const cameraRef = useRef(null);
  const [confidence, setConfidence] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`https://interviewperfect-error-x.koyeb.app/modelvideos/humanresources`);
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        const allQuestions = data.modelVideos;

        // Filter situational questions
        const situationalQuestions = allQuestions.filter(question => question.question_type === "Situational").slice(0, 6);
        // Filter technical questions
        const technicalQuestions = allQuestions.filter(question => question.question_type === "Technical").slice(0, 4);

        // Concatenate the filtered arrays
        let concatenatedQuestions = [...situationalQuestions, ...technicalQuestions];

        // Shuffle the concatenated array
        concatenatedQuestions = shuffleArray(concatenatedQuestions);

        // Set the questions state
        setQuestions(concatenatedQuestions);
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

      const handleVideoEnded = () => {
        setVideoFinished(true); // Set videoFinished to true when the video ends
        predictConfidence(); // Predict confidence when the video ends
        startCamera(); // Start camera when the video ends
      };

      video.addEventListener('ended', handleVideoEnded);

      return () => {
        video.removeEventListener('ended', handleVideoEnded);
      };
    }
  }, [currentQuestionIndex, questions]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleContinue = () => {
    setVideoFinished(false); // Reset videoFinished when continue button is clicked
    const nextQuestion = questions[currentQuestionIndex];
    setAskedQuestions(prevState => [...prevState, nextQuestion.question]); // Add current question to askedQuestions array
    setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length); // Move to the next question

    // Check if the user has answered 10 questions
    if ((currentQuestionIndex + 1) === 10) {
      handleFeedback(); // Navigate to feedback page
    }
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    const video = cameraRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL('image/png'); // Base64 encoded image URL
    return imageUrl;
  };

  const predictConfidence = async () => {
    try {
      const response = await fetch(`http://localhost:8000/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: captureImage() }),
      });
      if (!response.ok) {
        throw new Error('Failed to predict confidence level');
      }
      const data = await response.json();
      setConfidence(data.confidence);
    } catch (error) {
      console.error('Error predicting confidence level:', error);
    }
  };

  const startCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: { width: { min: 1280 }, height: { min: 720 } } })
      .then((stream) => {
        cameraRef.current.srcObject = stream;
        cameraRef.current.play();
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  };

  const handleFeedback = () => {
    navigate('/feedback', { state: { questions } }); // Navigate to feedback page with questions data as state
  };

  return (
    <div>
      {questions.length > 0 && (
        <div className="container d-flex justify-content-center align-items-center">
          <div>
            <p style={{ fontWeight: "300", fontSize: 20, fontFamily: "'Rubik', sans-serif", color: "#494949" }}>
              Question {currentQuestionIndex + 1}
            </p>
            <p style={{ fontWeight: "300", fontSize: 30, fontFamily: "'Rubik', sans-serif" }}>
              {questions[currentQuestionIndex].question}
            </p>
            {videoFinished ? (
              <div>
                <p>Answer the question:</p>
                <video ref={cameraRef} autoPlay style={{ width: "80%" }}></video>
                <br />
                <button onClick={handleContinue} className="btn btn-primary">Continue</button>
                <button onClick={handleFeedback} className="btn btn-primary">Feedback</button> {/* Add Feedback button */}
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
