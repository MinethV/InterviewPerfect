import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './questionAsk.css';

export const SpeechToText = () => {
  const [transcribedText, setTranscribedText] = useState('');
  const [fillerPercentage, setFillerPercentage] = useState(null); // Initialize filler percentage state
  const navigate = useNavigate();

  // Function to send transcribed text to backend and get filler percentage
  const getFillerPercentage = async () => {
    try {
      const response = await fetch('http://localhost:8000/filler_percentage/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: transcribedText }), // Send the transcribed text to backend
      });

      if (!response.ok) {
        throw new Error('Failed to fetch filler percentage');
      }

      const data = await response.json();
      setFillerPercentage(data.filler_percentage); // Update filler percentage state
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleContinue = () => {
    // Call getFillerPercentage function when continuing to the next question
    getFillerPercentage();
    // Other logic to handle continuing to the next question...
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      {/* UI to display transcribed text */}
      <p>Transcribed Text: {transcribedText}</p>

      {/* UI to display filler percentage */}
      {fillerPercentage !== null && (
        <p>Filler Percentage: {fillerPercentage}</p>
      )}

      {/* Button to continue to the next question */}
      <button onClick={handleContinue} className="btn btn-primary">
        Continue
      </button>
    </div>
  );
};
