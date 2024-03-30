import React from 'react';
import home from '../images/home.jpeg';
import field from '../images/field.png';
import simulator from '../images/simulator.png';
import video from '../images/video.png';
import profile from '../images/profile.jpg';

import './Hiw.css';


function Howitworks () {
  return (
    <div>
      
      <section className="section-whit">
                <div className="container">
                        <div className="">

                            <div className="team-item">
                                <img src={home} className="team-img" alt="pic"/>
                                <h3 className="step1">Step 1</h3>
                                <div className="step-info-1">
                                    <p>
                                     "click get started button and create an account using your mail, <br/> after creating your account, you will redirect to the home page, <br/> click again get started button and you will redirect to the fields choosing page."
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={field} className="team-img" alt="pic"/>
                                <h3 className="step2">Step 2</h3>
                                <div className="step-info-2">
                                    <p>
                                     "when you enterd to the field chooseing page, you will see multiple fields, you can choose <br/> your preferred field and click it. when you click the relevant field, you will redirect to the <br/> interview simulaot page."
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={simulator} className="team-img" alt="pic"/>
                                <h3 className="step3">Step 3</h3>
                                <div className="step-info-3">
                                    <p>
                                     "After choosing preferred field you will conect to the interview simulator. when you start the <br/> simulator web browser asks the permission for the mic, you have to enable it and give <br/> permission. after giving permission you can start your interview! "
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={video} className="team-img" alt="pic"/>
                                <h3 className="step4"> Step 4</h3>
                                <div className="step-info-4">
                                    <p>
                                     "you can go to next question when you finished the current question. that wy you can answer to all 10 question like that."
                                    </p>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={profile} className="team-img" alt="pic"/>
                                <h3 className="step5">Step 5</h3>
                                <div className="step-info-5">
                                    <p>
                                     "When you finished the interview simulator process, you will redirect to the home page, <br/> when you click review button in the navbar it will redirect to the profile page, <br/> where you can see you result of confident level and filler words."
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    
                </div> 
            </section>

    </div>
  );
}

export default Howitworks;

