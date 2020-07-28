import React, { Component } from "react";

import "../quickteller/Quickteller.css";
import quickStyles from "./quickTeller.module.css";

import QuicktellerHero from "./images/Quickteller 1.png";
import Message from "./images/undraw_online_message_xq4c 1.png";
import Board from "./images/undraw_scrum_board_cesn 1.png";
import UXMethods from "./images/UXR Methods.png";
import PieChart from "./images/image 47.png";
import Research from "./images/R.SYnthe.png";
import UserJourney from "./images/Keep3 1.png";
import UserPersona from "./images/U.Persona.png";
import Process from "./images/D.Process.png";
import UIPallete from "./images/UI Pallete.png";
import GroupPhone from "./images/Group 1213.png";
import Dashboard from "./images/Dashboard (2).png";
import Airtime from "./images/Group 1203.png";
import Transfer from "./images/transfer_money_account.png";
import Cover from "./images/quickteller_cover-removebg.png";

class Quickteller extends Component {
  render() {
    return (
      <main className={quickStyles.quick}>
        <div className="quickteller-hero">
          <img src={QuicktellerHero} alt="hero" />
        </div>

        <div className="width">
          <div className="quickteller-intro">
            <p className="intro-text">
              Quickteller is a leading innovative e-commerce platform that aims
              to make payment for services - airtime, bill payment, online
              shopping, transfers, remittances, loans, and recurring payments, a
              seamless everyday life experience.
            </p>

            <p>
              Data revealed that Quickteller Mobile App users were leaving in
              large numbers to complete transactions on the web. We also
              observed that people who initiated their sign up process on
              mobile, typically do not activate their accounts on mobile, they
              go all the way to the web for activation. Weird!
            </p>
          </div>

          <div className="quickteller-ux">
            <img src={Message} className="black" alt="girl" />

            <h2 className="job">My Role - UX Research & Product Design</h2>

            <div className="ux-role">
              <ul>
                <li>1. Owned research strategy.</li>
                <li>
                  2. Designed and facilitated the research process and methods.
                </li>
                <li>
                  3. Provided Design recommendation and actionable insights.
                </li>
                <li>4. Designed a new seamless experience for users.</li>
                <li>
                  5. Designed a new user interface and align with brand
                  guidelines.
                </li>
              </ul>
            </div>
          </div>

          <div className="resources">
            <div className="resource-list">
              <h2>Other Resources</h2>

              <ul>
                <li>1. Product Manager</li>
                <li>2. Project Manager</li>
                <li>3. UX/UI Designer</li>
                <li>4. Software Engineers</li>
                <li>5. QA Engineers</li>
              </ul>
            </div>

            <img src={Board} alt="board" />
          </div>

          <div className="research-goals">
            <h2>Research Goals</h2>

            <ul>
              <li>1. Test product with targeted users.</li>
              <li>2. Identify usability issues with the product.</li>
              <li>3. Reveal friction points and confusing experiences.</li>
              <li>4. Iterate current design from user's feedback.</li>
              <li>5. Check if product meet user's expectations.</li>
            </ul>
          </div>
        </div>

        <div className="research-methods">
          <img src={UXMethods} alt="research methods" />
        </div>

        <div className="focus">
          <div className="focus-groups">
            <h2>Focus Groups</h2>
            <div className="focus-groups-info">
              <p className="users">
                Participants were recruited from the Quickteller database.
                Active users were defined as users who have performed a
                transaction at least once a week for the past 3 months. 4 people
                were confirmed for the focus group on Wednesday 23rd October,
                but only 2 were present for the session.
              </p>

              <p>
                During the sessions, participants were asked questions about
                their experience using Quickteller, how they used it, what other
                financial services apps they used, and more. <br />
                At the end of each session, participants were sent gift cards
                valued at N5,000.
              </p>

              <div className="questions">
                <h3>Some questions asked;</h3>

                <ul>
                  <li>1. Why do you use Quickteller? On what platform?</li>
                  <li>2. What other financial apps do you use?</li>
                  <li>3. What would you change about Quickteller?</li>
                  <li>4. What do you find frustrating about Quickteller?</li>
                  <li>
                    5. How would you describe the look and feel of Quickteller?
                  </li>
                  <li>6. Do you have any other feedback?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="quantitative-research">
          <h2>Quantitative Research</h2>
          <img src={PieChart} alt="pie chart" />
          <p>
            We conducted user surveys. The data team provided the data based on
            the selected users for the survey test.
          </p>
        </div>

        <div className="qualitative-research">
          <h2>Qualitative Research</h2>

          <div className="qualitative-info">
            <p className="q-info">
              This was done in 5 days at different locations with 20
              participants cutting across our persona and market audience. Users
              were tested at locations where they would typically make use of
              the app for financial transactions.
            </p>

            <p>
              A total of 10 users where tested, they were required to undertake
              a set of transaction related tasks which enabled us observe their
              user experience and glean valuable user feedback from them.
            </p>

            <p id="q-goal">
              The goal of the research was to see;
              <ul>
                <li>1. Utility of the app.</li>
                <li>2. Accessibility and ease of use.</li>
                <li>3. Recall and recognition.</li>
                <li>4. Information architecture flow.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="synthesis">
          <img src={Research} alt="qualitative research synthesis" />
        </div>

        <div className="user-journey">
          <h2>User Journey</h2>
          <img src={UserJourney} alt="user journey" />
        </div>

        <div className="user-personas">
          <img src={UserPersona} alt="user personas" />
        </div>

        <div className="insights">
          <div className="research-insights">
            <h2>Research Insights</h2>
            <p>
              <span>Pain Points</span> — The interface looks boring, Information
              architecture is bad so users find it difficult to navigate through
              the app.
            </p>

            <p>
              <span>Users Expectation</span> — Users expect that the app should
              carry out core transactions like pay bills, transfer money, buy
              airtime, these are core to them and termi
            </p>
          </div>

          <div className="design-process">
            <img src={Process} alt="design process" />
          </div>

          <div className="ui-pallete">
            <h2>UI Pallete</h2>
            <img src={UIPallete} alt="UI pallete" />
          </div>

          <div className="old">
            <h2>Old vs New</h2>
            <img src={GroupPhone} alt="phone" />
          </div>
        </div>

        <div className="new-quickteller">
          <h2>The new Quickteller app</h2>

          <div className="new-images">
            <div className="dashboard">
              <img src={Dashboard} alt="dashboard" />
              <h1>New Dashboard</h1>
            </div>

            <div className="airtime">
              <h1>Airtime Recharge</h1>
              <img src={Airtime} alt="airtime" />
            </div>

            <div className="transfer">
              <img src={Transfer} alt="transfer" />
              <h1>Money Transfer</h1>
            </div>

            <div className="full">
              <img src={Cover} alt="quickteller cover" />
            </div>
          </div>
        </div>

        <p className="new">
          You can view the new quickteller app here -{" "}
          <a href="www.quickteller.com" target="_blank">
            Quickteller App
          </a>
        </p>
      </main>
    );
  }
}

export default Quickteller;
