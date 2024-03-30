import React from 'react';
import {useLocation} from 'react-router-dom';
import '../Stylesheets/feedback.css';
import {Circle} from 'rc-progress';

export const Feedback = () => {
    const location = useLocation();
    const {askedQuestions, fillerPercentages, confidenceLevels} = location.state || {};

    // Calculate overall filler percentage
    const overallFillerPercentage = fillerPercentages.reduce((acc, curr) => acc + curr, 0) / fillerPercentages.length;

    // Convert confidence levels to percentages
    const confidenceLevelsPercentages = confidenceLevels.map(level => level * 100);

    // Calculate overall confidence level
    let overallConfidenceLevel = 0; // Initialize overall confidence level
    if (confidenceLevelsPercentages && confidenceLevelsPercentages.length > 0) {
        // Filter out NaN values before calculating the average
        const validConfidenceLevels = confidenceLevelsPercentages.filter(level => !isNaN(level));
        if (validConfidenceLevels.length > 0) {
            overallConfidenceLevel = validConfidenceLevels.reduce((acc, curr) => acc + curr, 0) / validConfidenceLevels.length;
        }
    }

    return (
        <div>
            <div className="congratulations">
                <h1>Congratulations on completing the interview simulator!</h1>
                <p>Your dedication and thoughtful responses showcase your skills and preparation. Well done! Best of
                    luck in all your future interviews. Remember, each experience is a stepping stone to success. Keep
                    up the excellent work!</p>
            </div>
            <hr/>

            {/* Display confidence level in the first column */}
            <div className='row m-5'>
                <div className='col bg-light mx-3 p-5 rounded'>
                    <h3>Facial Confidence Level</h3>
                    <br/>
                    <div style={{position: 'relative'}}>
                        <Circle percent={overallConfidenceLevel} strokeWidth={10} strokeColor="#3FC7FA" trailWidth={10}
                                trailColor='#D9D9D9'/>
                        <p className='text-center fs-2' style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            margin: 0
                        }}>{confidenceLevelsPercentages.length > 0 ? `${overallConfidenceLevel.toFixed(2)}%` : 'N/A'}</p>
                    </div>
                </div>

                {/* Display filler words in the remaining columns */}
                <div className='col bg-light mx-3 p-5 rounded'>
                    <h3>Filler Words</h3>
                    <br/>
                    <div style={{position: 'relative'}}>
                        <Circle percent={overallFillerPercentage} strokeWidth={10} strokeColor="#ff8788" trailWidth={10}
                                trailColor='#808080'/>
                        <p className='text-center fs-2' style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            margin: 0
                        }}>{overallFillerPercentage.toFixed(2)}%</p>
                    </div>
                </div>
            </div>

            <div className="question-box-container">
                {askedQuestions && askedQuestions.map((question, index) => (
                    <div key={index} className="question-box">
                        <p style={{color: '#494949', fontSize: '15px', fontWeight: '300'}}>
                            Question {index + 1} <br/>
                            <span style={{color: '#494949', fontSize: '24px', fontWeight: '300'}}></span>
                            <span style={{color: '#494949', fontSize: '24px', fontWeight: '300'}}>
                {question}
              </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};