import React, { Component } from 'react';

import '../vervelife/Vervelife.css';

import VerveBackground from './images/verve-bg.png';
import Userflow from './images/UFpng.png';
import Phone from './images/G-png.png';
import VerveHand from './images/Vervehand1.png';
import VerveDash from './images/V.Dash.png';
import VervePost from './images/V.post.png';
import VerveOffers from './images/Verve Offers.png';
import VerveTask from './images/V.Task.png';
import VervePlay from './images/V.play.png';
import VerveDeals from './images/V.De.png';
import Meals from './images/Meals (1).png';
import Meals2 from './images/meals.png';
import MyRole from './images/My role.png';
import OnlineMsg from './images/undraw_online_message_xq4c 1.png';
import Group from './images/Group 733.png';
import Results from './images/Results.png';
import AppInfo from './images/Apps Inform.png'

class Vervelife extends Component {
    render() {
        return (
            <main>
                <div className="verve-hero">
                    <img src={VerveBackground} alt="hero" />
                </div>
                
                <div className="width">
                    <section id="text">
                        <p id="fit"><span>VerveLife App Redesign - </span>Your Fitness & Wellness Companion</p>

                        <p>The VerveLife App is a fitness and health app powered by the Verve Debit Card brand in  Nigeria. The app also had payment features for financila transactions, bill payment, ATM withdrawals, airtime purchase and in-app purchases. The app is a combination of health, fitness and payments.</p>

                        <p><span className="blue">Primary users:</span> Fitness enthusiasts who own a smartphone with an internet connection. Anyone looking to dedicate their time to personal fitness development. Team fitfam, looking forward to healthy meals and prepation tips.</p>
                            
                        <p><span>Secondary users:</span> Fitness enthusiasts who also own a smartphone with an internet connection and are not only dedicated to improving personal fitness but willing to teach, coach, or mentor others towards achieving personal fitness goals by uploading content.</p>
                    </section>

                    <section id="img">
                        <img src={Userflow} alt="user flow" />

                        <img src={Phone} alt="phone screen" />
                    </section>
                </div>

                <div className="redesign">
                    <h2>The Redesign Process</h2>

                    <div className="left">
                        <h3>The Problem</h3>

                        <ul>
                            <li>1. Difficult onboarding process.</li>
                            <li>2. Difficlt user flow for payments.</li>
                            <li>3. Users struggled to use the fitness feature on the app.</li>
                            <li>4. Give users value for using all the features on the app.</li>
                            <li>5. Design a seamless experience for users and all the features on the app</li>
                        </ul>
                    </div>

                    <div className="right">
                        <h3>Redesign Goal</h3>

                        <ul>
                            <li>1. Replace the e-Cash card with a fitness activity card.</li>

                            <li>2. Update icons on the tab bar to reflect a fitness and payment app.</li>

                            <li>3. Simplify navigation and transition by replacing the play button with a running man silhouette.</li>

                            <li>4. Bring content to the forefront and eliminate unnecessary steps.</li>

                            <li>5. Prioritize deal, verve offers, and in-app fitness post overview to enhance user engagement</li>

                            <li>6. Add visuals to build user trust and reduce cognitive overload.</li>

                            <li>7. Bring content to the forefront and eliminate unnecessary steps.</li>

                            <li>8. Prioritize deals and activity feature.</li>
                        </ul>
                    </div>
                </div>

                <div className="interface">
                    <section className="new">
                        <h1>The New Interface</h1>

                        <div className="ui">
                            <img src={VerveHand} alt="hand holding phone" />

                            <div className="ui-info">
                                <h3><span id="black">Behold a new UI:</span> new look and feel</h3>
                                <p>The new version of VerveLife now looks like a fitness app with redesigned and updated features from a fitness activity tracker to allow users to connect with other fitness enthusiasts, daily motivation, healthy eating tips, meal plans, offers/deals nearby, and most of all, be able to make quick & easy payments.</p>
                            </div>
                        </div>

                        <div className="home-screen">
                            <h1>Home Screen</h1>
                            <p>The user now sees a fitness activity tracker screen showing the active time, calories burnt, distance, and heartbeat rate. This lets the user monitors his or her progress. The focus was on performance and reliability, allowing users to truly engage with the app.</p>
                            <img src={VerveDash} alt="hand holding phone" />
                        </div>

                        <div className="posts">
                            <h1>Posts based on interest</h1>
                            <p>The user gets to see posts based on his or her interest depending on what the user selected as his/her interest at the time of setting up an account. I used a card sorting user interface in a carousel so the user can easily swipe through contents.</p>
                            <img src={VervePost} alt="hand holding phone" />
                        </div>

                        <div className="offers">
                            <h1>Verve offers</h1>
                            <p>Our goal was to create a page where users can use the payment solution via a feature called Verve Offers. Verve offers showcases special offers with discounts around you which you can find and take advantage of when paying with e-cash. e-cash is basically an e-wallet and users can enjoy discounts via offers and pay for these offers using their e-cash.</p>
                            <img src={VerveOffers} alt="hand holding phone" />
                        </div>

                        <div className="task">
                            <h1>Task bar</h1>
                            <p>The new taskbar now has ‘Launch activity’, ‘deals’, and ‘wallet’ added to it. Clicking on launch activity allows the user to set an activity. From walking, running, cycling, etc. Deals icon shows you current discounts and offers for food & drinks or travel, where you can find it, and how many days left on these deals. </p>
                            <img src={VerveTask} alt="hand holding phone" />
                        </div>

                        <div className="pause">
                            <h1>Pause, Stop, Play...</h1>
                            <p>The new update feature allows the user to pause, stop, or play (continue). The new feature makes it easy to experience all 3 actions in one view compared to the old flow which navigates the user into other pages. </p>
                            <img src={VervePlay} alt="phone" />
                        </div>

                        <div className="deals">
                            <h1>Deals near me</h1>
                            <p>The UI gives the user the ability to search and see deals from food, drinks, travel, and find where these deals can be redeemed. We automatically condense cards to scroll vertically so users can see how many deals there are on the app. There is also a floating button ‘deals near me’ so users can see on the map, deals not more than 300 yards away.</p>
                            <img src={VerveDeals} alt="phone" />
                        </div>
                    </section>
                </div>

                <div className="activity">
                    <h1>Activity and Meal plan setup</h1>
                    <p>The meal plan allows the user access to suggested meal plans, my plan, and plans shared by the public. Suggested plans you receive are plans shared by admin or food enthusiast. <br />
                    My plans are meal plans set up by the user while the public is for plans made by anyone on the app. This helps make one-on-one and group health nutrition easier to follow. It also helps you commit to a meal plan depending on the nutritional goal.</p>
                    <div className="meal">
                        <img src={Meals} alt="phone" />
                        <img src={Meals2} alt="phone" />
                    </div>
                </div>

                <div className="role-img">
                    <img src={MyRole} alt="man" />
                </div>

                <div className="role">

                    <div className="role-info">
                        <div className="role-text">
                            <ul>
                                <li><span>1. Sole designer:</span> I was the only designer on this project as a result of owning the entire design process and leading the team.</li>

                                <li><span>2. User research:</span> I conducted both usability test and competitor research sampling four major fitness apps like Nike run, Google fit, Samsung health app, My plate, and google maps for the purpose of understanding how the picture in picture feature works.</li>
                                    
                                <li><span>3. Usability testing:</span> This was done using the qualitative research mwthod. During the product review processes, I visited different gyms at various times where I tested out  the prototype and I observed different users of both genders, male and female studying the interaction, flow, pain points, and used that observation to update my design where needed.</li>
                                    
                                <li><span>4. Team lead:</span> I ‘assumed’ the role of product team lead since I was the only designer, I constantly met with the frontend and back end developers working as a team to ensure the UI design is followed diligently as I had given a great handoff.</li>
                            </ul>
                        </div>

                        <div className="role-girl">
                            <img src={OnlineMsg} alt="girl" />
                        </div>
                    </div>

                    <div className="role-design">
                        <img src={Group} alt="phone" />

                        <div className="role-design-text">
                            <h2>Design, Prototype and Testing</h2>
                            <p>Figma was used for the entire design, from the wireframing, interactive prototype, and testing making sure that the final design followed the current mobile design trends. An in-house test was done with users to see if there were any more opportunities for improvement. Sometimes the same users are used to test each the redesign/update process for feedbacks.</p>
                        </div>
                    </div>

                    <div className="role-result">
                        <img src={Results} alt="result" />

                        <div className="role-result-text">
                            <h2>Result</h2>
                            <p>The response we got from our users was that it now looks like a fitness/health app, easier and more intuitive to navigate, improved UI experience and no confusion/rivalry with the Verve World app. Users also welcomed the new deals/offer feature.</p>
                        </div>
                    </div>
                </div>

                <div className="app-inform">
                    <img src={AppInfo} alt="app info" />
                </div>

                <p className="verve-app">You can view the Vervelife app here - <a href="www.vervelifeapp.com" target="_blank">Vervelife App</a></p>
            </main>
        );
    }
}

export default Vervelife;