import React, {useEffect, useState, useRef} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Webcam from "react-webcam";
import '../Stylesheets/questionAsk.css';
import {Link} from 'react-router-dom';

export const CivilEngineering = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [videoFinished, setVideoFinished] = useState(false);
    const [askedQuestions, setAskedQuestions] = useState([]);
    const [capturedImages, setCapturedImages] = useState([]);
    const [confidenceLevels, setConfidenceLevels] = useState([]);
    const [interviewFinished, setInterviewFinished] = useState(false);
    const [transcribedText, setTranscribedText] = useState('');
    const [recording, setRecording] = useState(false);
    const [fillerPercentage, setFillerPercentage] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [overallFillerCount, setOverallFillerCount] = useState(0);
    const [fillerPercentages, setFillerPercentages] = useState([]); // State variable for filler word percentages
    const {industry} = useParams();
    const history = useNavigate();
    const maxQuestions = 10;
    const webRef = useRef(null);
    const recognitionRef = useRef(null);

    useEffect(() => {
        const fetchInterviewData = async () => {
            try {
                // Fetch questions
                const questionsResponse = await fetch(`https://interviewperfect-error-x.koyeb.app/modelvideos/humanresources`);
                if (!questionsResponse.ok) {
                    throw new Error('Failed to fetch questions');
                }
                const questionsData = await questionsResponse.json();
                const allQuestions = questionsData.modelVideos;

                const situationalQuestions = allQuestions.filter(question => question.question_type === "Situational").slice(0, 4);
                const technicalQuestions = allQuestions.filter(question => question.question_type === "Technical").slice(0, 6);

                let concatenatedQuestions = [...situationalQuestions, ...technicalQuestions];

                concatenatedQuestions = shuffleArray(concatenatedQuestions);

                setQuestions(concatenatedQuestions);

                // Fetch answers
                const answersResponse = await fetch('http://localhost:8000/answers'); // Replace with your API endpoint for answers
                if (!answersResponse.ok) {
                    throw new Error('Failed to fetch answers');
                }
                const answersData = await answersResponse.json();
                setAnswers(answersData.answers);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchInterviewData();
    }, []);

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window)) {
            console.error('Web Speech API not supported');
            return;
        }

        recognitionRef.current = new window.webkitSpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = event => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    setTranscribedText(event.results[i][0].transcript);
                    sendTranscribedText(event.results[i][0].transcript); // Sending transcribed text to backend
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            console.log('Interim:', interimTranscript);
        };

        recognitionRef.current.onerror = event => {
            console.error('Speech recognition error:', event.error);
        };

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    const startRecording = () => {
        if (recognitionRef.current && !recording) {
            recognitionRef.current.start();
            setRecording(true);
        }
    };

    const stopRecording = () => {
        if (recognitionRef.current && recording) {
            recognitionRef.current.stop();
            setRecording(false);
        }
    };

    const sendTranscribedText = async (text) => {
        try {
            const response = await fetch('http://localhost:8000/filler_percentage/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({text}),
            });
            if (!response.ok) {
                throw new Error('Failed to send transcribed text');
            }
            const data = await response.json();
            const fillerCount = data.filler_count;
            const fillerPercentage = data.filler_percentage;

            // Update filler percentages array
            setFillerPercentages(prevState => [...prevState, fillerPercentage]);
            setFillerPercentage(fillerPercentage); // Update overall filler percentage
            setOverallFillerCount(prevCount => prevCount + fillerCount);
            console.log('Transcribed text sent successfully');
        } catch (error) {
            console.error('Error sending transcribed text:', error);
        }
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        if (questions.length > 0) {
            const handleVideoEnded = () => {
                setVideoFinished(true);
            };

            const video = document.getElementById('video');
            video.load();
            video.play();

            video.addEventListener('ended', handleVideoEnded);

            return () => {
                video.removeEventListener('ended', handleVideoEnded);
            };
        }
    }, [currentQuestionIndex, questions]);

    useEffect(() => {
        if (videoFinished) {
            startRecording(); // Start recording when video finishes playing
        } else {
            stopRecording(); // Stop recording when video starts playing again
        }
    }, [videoFinished]);

    const handleContinue = () => {
        stopRecording(); // Stop recording before continuing
        setVideoFinished(false);
        const nextQuestion = questions[currentQuestionIndex];
        setAskedQuestions(prevState => [...prevState, nextQuestion.question]);

        if (currentQuestionIndex === maxQuestions - 1) {
            setInterviewFinished(true); // Set interview finished when all questions are asked
            handleFeedback();
        } else if (currentQuestionIndex === maxQuestions / 2 - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            setCurrentQuestionIndex((currentQuestionIndex + 1) % questions.length);
        }
    };

    const handleFeedback = () => {
        history('/feedback', {
            state: {
                askedQuestions: askedQuestions,
                fillerPercentages: fillerPercentages,
                capturedImages: capturedImages,
                confidenceLevels: confidenceLevels // Pass confidence levels data
            }
        });
    };

    const captureImage = () => {
        if (webRef.current) {
            const imgData = webRef.current.getScreenshot();
            const base64Image = imgData.split(',')[1];
            setCapturedImages(prevImages => [...prevImages, base64Image]);
            sendImagesForDetection(); // Call function to send image to backend
        }
    };

    useEffect(() => {
        // Update confidence levels when response is received from backend
        if (capturedImages.length > 0) {
            sendImagesForDetection();
        }
    }, [capturedImages]);

    const sendImagesForDetection = async () => {
        for (const image of capturedImages) {
            try {
                const response = await fetch('http://localhost:8000/detect_facial_confidence/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({image}),
                });
                if (!response.ok) {
                    throw new Error('Failed to detect facial confidence');
                }
                const data = await response.json();

                // Update confidence levels state with the received data
                setConfidenceLevels(prevState => [...prevState, data.confidence_levels]);

                // Now you can access the confidence levels in the state variable 'confidenceLevels'
                console.log('Received confidence levels:', data.confidence_levels);
            } catch (error) {
                console.error('Error detecting facial confidence:', error);
            }
        }
    };

    const AskedQuestions = ({askedQuestions}) => (
        <div className="container">
            <h2>Questions Asked During Interview:</h2>
            <ul>
                {askedQuestions.map((question, index) => (
                    <li key={index}>{question}</li>
                ))}
            </ul>
            <Link to="/">Back to Home</Link>
        </div>
    );

    return (
        <div>
            {questions.length > 0 && (
                <div className="container q-container d-flex justify-content-center align-items-center">
                    <div>
                        <p style={{
                            fontWeight: "300",
                            fontSize: 20,
                            fontFamily: "'Rubik', sans-serif",
                            color: "#494949"
                        }}>
                            Question {currentQuestionIndex + 1}</p>
                        <p style={{fontWeight: "300", fontSize: 30, fontFamily: "'Rubik', sans-serif"}}>
                            {questions[currentQuestionIndex].question}
                        </p>
                        {videoFinished ? (
                            <div className='answeringcontainer'>
                                <p>Answer the question:</p>
                                <Webcam ref={webRef}/>
                                <button onClick={() => {
                                    captureImage();
                                    handleContinue();
                                }} className="btn btn-primary">Continue
                                </button> 
                                {fillerPercentage !== null && (
                                    <p>Filler Words Percentage: {fillerPercentage.toFixed(2)}%</p>
                                )}
                            </div>
                        ) : (
                            <video id="video" autoPlay style={{width: "80%"}}>
                                <source src={questions[currentQuestionIndex].firebase_download_url} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                </div>
            )}
            {interviewFinished && (
                <div className="container">
                    <h2>Interview Summary</h2>
                    <p>Total Filler Words Count: {overallFillerCount}</p>
                    <div>
                        {fillerPercentages.map((percentage, index) => (
                            <p key={index}>Question {index + 1}: Filler Words Percentage: {percentage.toFixed(2)}%</p>
                        ))}
                    </div>
                    <AskedQuestions askedQuestions={askedQuestions}/>
                </div>
            )}
            {questions.length === 0 && <p>Loading...</p>}
        </div>
    );
};