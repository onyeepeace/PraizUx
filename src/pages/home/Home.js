import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Home.css';

import VervelifeImage from './images/Group 717.png';
import QuicktellerImage from './images/QT_App_still-removebg (2).png';
import CaregivrImage from './images/Sign up.png';

class Home extends React.Component {
    render() {
        return (
            <Router>
                <main className="main">
                    {/* Welcome */}
                    <div className="greet">
                        <h1>Hey ya, welcome <span role="img" aria-label="hand">👋</span>.</h1>
                        <p>I am a <span>Product Designer</span> and <span>UX Researcher</span> based in Lagos, Nigeria. I have designed and delivered end-to-end UX/UI designs for mobile and web experiences within the Payment solutions, Fitness, Banking, Hospitality, Social and Insurance fields. </p>
                    </div>

                    <div className="arrow">
                        <i className="far fa-arrow-alt-circle-down"></i>
                    </div>

                    {/* Work */}
                    <section id={"work"}>
                        <div className="verve">
                            <div className="verve-left">
                                <h3>VerveLife App</h3>
                                <p>A fitness and motivation app designed with workout routines, personal trainer, meal planner & payments tool. An app that combines health & fitness with payments.</p>
                                <div className="work-link">
                                    <Link to='/vervelife' target="_blank" className="view">View Case Study</Link>
                                    <i className="far fa-arrow-alt-circle-right"></i>
                                </div>
                            </div>

                            <div className="verve-right">
                                <img src={VervelifeImage} id="phone" alt="verve girl" />
                            </div>
                        </div>

                        <div className="quickteller">
                            <div className="quickteller-left">
                                <img src={QuicktellerImage} alt="quickteller" />
                            </div>

                            <div className="quickteller-right">
                                <h3>Quickteller App</h3>
                                <p>Quickteller is a leading innovative payment platform that aims to make payment for services - airtime, bill payment, online shopping, transfers, remittances, loans, and recurring payments, a seamless everyday life experience.</p>
                                <div className="work-link">
                                    <i className="far fa-arrow-alt-circle-left"></i>
                                    <Link to='/quickteller' target="_blank" className="view">View Case Study</Link>
                                </div>
                            </div>
                        </div>

                        <div className="caregivrs">
                            <div className="caregivrs-left">
                                <h3>Caregivrs App</h3>
                                <p>Finding the right caregiver can depend a lot on making the right connections. With caregivers, the aim was to create a platform where users can access a large network for housekeeping, child care, pet care, senior care, or tutoring jobs, right in your local area. </p>
                                <div className="work-link">
                                    <Link to='/caregivr' target="_blank" className="view">View Case Study</Link>
                                    <i className="far fa-arrow-alt-circle-right"></i>
                                </div>
                            </div>

                            <div className="caregivrs-right">
                                <img src={CaregivrImage} id="sign" alt="sign up" />
                            </div>
                        </div>
                    </section>
                </main>
            </Router>
        );
    }
}

export default Home;