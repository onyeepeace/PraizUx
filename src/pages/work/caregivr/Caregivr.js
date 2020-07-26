import React, { Component } from 'react';

import '../caregivr/Caregivr.css';

import CaregivrsHeroImg from './images/Caregv1.png';
import FullCaregivr from './images/Full-caregvr.png';

class Caregivr extends Component {
    render() {
        return (
            <main>
            <div className="hero">
                <h3><span>Caregivr -</span> always a helping hand</h3>
                <p className="care">Finding the right caregiver can depend a lot on making the right connections. With caregivers, the aim was to create a platform where users can access a large network of housekeeping, child care, pet care, senior care, or tutoring jobs, right in your local area.</p>

                <p>Using Caregiver, helpers can showcase their skills, experiences, availability etc to stand out and find the job that benefits both the careneeders and caregivers.</p>
            </div>

            <div className="width">
                <div className="discover">
                    <h3>Discover</h3>
                    <p className="needers">Care needers are provided with tools to help them discover caregivers based on their interests (ex: nanny, teacher, tutor, maid, help, etc). But this process of viewing and selecting a caregiver is really just based on the care needers which isn’t really limited depending on the need. By introducing profession-based discovery/search, users can use their search results or focus on reviews from what people are saying/sharing about past experiences, events, results, personal engagement, subjects, and activities and make better decisions in selecting the best caregiver. On the other hand.</p>

                    <p>Caregiver is a social media platform geared to professionals in the field of caregiving. It enables users to network with professional caregivers who ‘advertise’ their work and careneeders who are looking for potential candidates.</p>
                </div>

                <div className="goals">
                    <h3>Goals</h3>
                    <ul>
                        <li>1. Users should be able to set up a working/social profile.</li>
                        <li>2. Users can create and manage their networks.</li>
                        <li>3. Users should be able to learn, find and connect with professional caregivr.</li>
                        <li>4. Users should be able to react to profiles, posts by commenting, liking, sharing their thoughts, and insights.</li>
                        <li>5. Users can also switch accounts from careneeders to caregivers and vice versa depending on opportunities available on the platform.</li>
                    </ul>
                </div>

                <img src={CaregivrsHeroImg} alt="caregivrs" />
            </div>

            <div className="user-research">
                <div className="process">
                    <h3>User Research Process</h3>
                    <p>During the research process, three major websites/platforms were studied, Facebook, Linkedin, and Instagram. These three platforms heavily guided the design interaction flow, user interface design, micro-interactions, atomic design flow, etc. Researching these three existing platforms helped me get a sense of current design trends while maintaining universal principles of user experience designs like Hierarchy, Consistency, Confirmation, User Control, and Accessibility.</p>
                </div>

                <div className="learnings">
                    <h3>What I learnt working on this project</h3>
                    <p>I owned the product as a result of being the sole researcher, designer, tester on the project, it helped me widen my system-level product thinking. I was also able to foster strong understanding and use for micro-interactions which is to guide, reassure, inform, and delight a user during or at the other end of an experience.</p>
                </div>
            </div>

            <div className="template">
                <img src={FullCaregivr} alt="screen" />
            </div>
        </main>
        );
    }
}

export default Caregivr;