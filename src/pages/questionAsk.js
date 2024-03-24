import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './questionAsk.css';

// Main QuestionAsk component
export const QuestionAsk = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [videoFinished, setVideoFinished] = useState(false);
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

// enter code here




};