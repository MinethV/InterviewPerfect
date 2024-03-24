import React from "react";
import NavBar from '../components/NavBar';
import './feedback.css';
import Confidence_level from "../components/Confidence_level";
import Filler_words from "../components/Filler_words";
import Time_spent from "../components/Time_spent";

const Feedback = (askedQuestions) => {
    return (
        <>
            <NavBar/>
            <div className="container-fluid">
                <div className="congratulations">
                    <h1>Congratulations on completing the interview simulator!</h1>
                    <p>Your dedication and thoughtful responses showcase your skills and preparation.</p>
                    <p>Well done! Best of luck in all your future interviews. Remember, each experience is a stepping stone to success. Keep up the excellent work!</p>
                </div>

                <div className='cards'>
                    <Confidence_level 
                        title='Facial Confident Level'/>

                    <Filler_words
                        title='Filler Words'/>

                    <Time_spent 
                        title='Overall Answer Time'/>
                </div>

                <div className="asked-questions">
                    <h2>Asked Questions</h2>
                    <ul>
                        {askedQuestions.map((question, index) => (
                            <li key={index}>{question}</li>
                        ))}
                    </ul>
                </div>

            </div>
            
        </>
    )
} 