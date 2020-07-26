import React from 'react';
import '../../App.css';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <main className="about-main">
                <h1 className="me">About Me</h1>
                <article className="mine">
                    <p>Hello,</p>
                    
                    <p>I am a Product Designer and a UX Researcher. I have got great skills as a UX Researcher to conuct both quantitative and qualitative Research. I am always keen about understand users, why and how they do what they do, how much time they do so an uncover insights that will help both the business and customers achieve their goals.</p>
                    
                    <p>As a Prouct Designer, I am great at building the best experience and interface for users, ensuring I solve their painpoints and help them achieve their goals. As a designer, I am focused on solving complex problems through data-driven processes that translate business objectives into solutions, with empathy for the user.</p>
                    
                    <p>I am always fully involved in each phase of the design process from discovery, user researchrequirements analysis, visual design strategy & ideation, feature specification, process flow, user flows, wire-flows, prototyping to user testing and scaling.</p>
                    
                    <p>I currently live and work in Lagos, Nigeria where I work with people and businesses all over the world.</p>
                    
                    <p>I work with Interswitch Group - a payment gateway company in Africa, where I lead the UX Research Team and give support to the Product Design Team.</p>
                    
                    <p>I also work with Facebook on contract basis for UX research projects in Nigeria.</p>
                    
                    <p>I own a podcast - 10 Minutes of UX where I talk about User Exeperience Design and Research.</p>
                </article>

                <section>
                    <div className="contact">
                        <h3>Find me anywhere on the internet</h3>

                        <div className="contact-links">
                            <div className="socials">
                                <a href="https://www.linkedin.com/in/praizux/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
        
                                <a href="twitter.com/PraizUx" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
        
                                <a href="https://medium.com/@praizux" rel="noopener noreferrer" target="_blank"><i className="fab fa-medium-m"></i></a>
                            </div>

                            <p>Check out my resume <a href="https://drive.google.com/drive/folders/170rnoNsYtoHyBpuDRa63TMidzKu9azna?usp=sharing" rel="noopener noreferrer" target="_blank">here</a></p>

                            <p>Interested in specific research projects I have done, look at my research portfolio <a href="www.praixux.com" rel="noopener noreferrer" target="_blank">here</a></p>

                            <p>Interested in the prohects I have done for Facebook? Take a look <a href="https://drive.google.com/drive/folders/1D-78zC0uT9YvFlOTH1X7YXSp2dkK4lPa?usp=sharing" rel="noopener noreferrer" target="_blank">here</a></p>

                            <p>Listen to my interesting podcast series <a href="https://anchor.fm/praizux" rel="noopener noreferrer" target="_blank">here</a></p>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default About;