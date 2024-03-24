import React from 'react'
import login from '../images/sasiru.png';
import shenal from '../images/shenal1.png';
import oneli from '../images/oneli.png';
import mineth from '../images/mineth.jpeg';
import git from '../images/git.png';
import linked from '../images/linkedin.webp';
import sithuli from '../images/sithuli.jpeg';



export default function Aboutus () {
    let message = 'Improve yourself with the interview perfect interview simulator!'
    return (
        <div>
            <section className="section-whit">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 text-center">
                            <h2 className="section-title">
                                The team behind the INTERVIEW PERFECT.
                            </h2>
                            <p className="section-subtitle">{message}
                            </p>
                        </div>
                        <div className="">
                            <div className="team-item">
                                <img src={mineth} className="team-img" alt="pic"/>
                                <h3>Mineth Vismitha.</h3>
                                <div className="team-info">
                                    <p>
                                     Team leader of group cs-21 <br/> BSc (HONS) computer science.(undergraduate).
                                    </p>
                                    <ul className="team-icon">
                                        <li><a href="https://www.linkedin.com/in/mineth-vismitha-9b5534260?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bll9ch8%2BkTxmV8mL5iVm1Cg%3D%3D" className="linkedin">
                                              <img src={linked} className="linkicon" alt="pic"/>
                                            </a></li>

                                        <li><a href="https://github.com/MinethV" className="github">
                                             <img src={git} className="giticon" alt="pic"/>
                                            </a></li>

                                         
 
                                              
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={login} className="team-img" alt="pic"/>
                                <h3>Sasiru <br/>Jayawaradana.</h3>
                                <div className="team-info">
                                    <p>
                                     Memeber of group cs-21 <br/> BSc (HONS) computer science.(undergraduate).
                                    </p>
                                    <ul className="team-icon">
                                        <li><a href="https://www.linkedin.com/in/sasiru-jayawardana?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bkuyznl3uRAmwYV0sV71QUA%3D%3D" className="linkedin">
                                        <img src={linked} className="linkicon" alt="pic"/>
                                            </a></li>

                                        <li><a href="https://github.com/Sasiru-Jayawardhana" className="github">
                                        <img src={git} className="giticon" alt="pic"/>
                                            </a></li>

                                    

                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={shenal} className="team-img" alt="pic"/>
                                <h3>Shenal Perera.</h3>
                                <div className="team-info">
                                    <p>
                                     Member of group cs-21 <br/> BSc (HONS) computer science.(undergraduate).
                                    </p>
                                    <ul className="team-icon">
                                        <li><a href="https://www.linkedin.com/in/mirihanage-perera-a824b0208?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BO5fWCAraRpKQxn96s%2FEbnA%3D%3D" className="linkedin">
                                        <img src={linked} className="linkicon" alt="pic"/>
                                            </a></li>

                                        <li><a href="https://github.com/shenal27" className="github">
                                        <img src={git} className="giticon" alt="pic"/>
                                            </a></li>

                                        

                                              
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={oneli} className="team-img" alt="pic"/>
                                <h3>Oneli Karunaratne.</h3>
                                <div className="team-info">
                                    <p>
                                     Member of group cs-21 <br/> BSc (HONS) computer science.(undergraduate).
                                    </p>
                                    <ul className="team-icon">
                                        <li><a href="https://www.linkedin.com/in/oneli-karunaratne-59951b282?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFeWWmEwWQNmu8nyJFm2p2Q%3D%3D" className="linkedin">
                                        <img src={linked} className="linkicon" alt="pic"/>
                                            </a></li>

                                        <li><a href="https://github.com/oneli2002" className="github">
                                        <img src={git} className="giticon" alt="pic"/>
                                            </a></li>

                                        

                                               
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src={sithuli} className="team-img" alt="pic"/>
                                <h3>Sithuli Malwana.</h3>
                                <div className="team-info">
                                    <p>
                                     Member of group cs-21 <br/> BSc (HONS) computer science.(undergraduate).
                                    </p>
                                    <ul className="team-icon">
                                        <li><a href="https://www.linkedin.com/in/sithuli-malwana-660554244?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bn%2Bc1shQaTeiqlNOCXadC0Q%3D%3D" className="linkedin">
                                        <img src={linked} className="linkicon" alt="pic"/>
                                            </a></li>

                                        <li><a href="https://github.com/siths24" className="github">
                                        <img src={git} className="giticon" alt="pic"/>
                                            </a></li>

                                        

                                               
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
        </div>
    )
}
