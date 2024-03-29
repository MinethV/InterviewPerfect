import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";

function Cameratest() {
  const webRef = useRef(null);
  const [capturing, setCapturing] = useState(true);
  const [capturedImages, setCapturedImages] = useState([]);
  const [continueClicked, setContinueClicked] = useState(false);

  useEffect(() => {
    if (capturing) {
      startCapturing();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [capturing]);

  const startCapturing = () => {
    const interval = setInterval(() => {
      const imgData = webRef.current.getScreenshot();
      if (imgData) {
        setCapturedImages(prevImages => [...prevImages, imgData]);
      }
      if (continueClicked) {
        clearInterval(interval);
      }
    }, 100); // Adjust interval as needed
  };

  const continueCapture = () => {
    setContinueClicked(true);
    setCapturing(false); // Stop capturing when "Continue" button is clicked
  };

  const stopCapture = () => {
    clearInterval();
    setCapturing(false);
  };

  const sendImages = async () => {
    // Send captured images to the server
    for (const imgData of capturedImages) {
      await sendImage(imgData);
    }
  };

  const sendImage = async (imgData) => {
    try {
      const response = await fetch('http://localhost:8000/detect_facial_confidence/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imgData }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // You can handle the response here
      } else {
        console.error('Failed to send image data');
      }
    } catch (error) {
      console.error('Error sending image data:', error);
    }
  };

  return (
    <div className="App">
   
      <Webcam ref={webRef} />
      {capturing && (
        <button onClick={sendImages} disabled={capturedImages.length === 0 || continueClicked} className="btn btn-primary">
          Continue
        </button>
      )}
    </div>
  );
}

export default Cameratest;
