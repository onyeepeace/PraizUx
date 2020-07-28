import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Home.css";

import VervelifeImage from "./images/Group 717.png";
import QuicktellerImage from "./images/QT_App_still-removebg (2).png";
import CaregivrImage from "./images/Sign up.png";
import Text from "../../components/UI/typography/text";
import Heading from "../../components/UI/typography/heading";
import WorkCards from "../../components/app/workCards/workCard";

// function Home() {
//   return <div></div>;
// }

// const Home = () => {
//   return <div></div>;
// };

// const Home = () => (
//     <div></div>
// )
class Home extends React.Component {
  render() {
    return (
      <main className="main">
        {/* Welcome */}
        <div className="greet">
          <h1>
            Hey ya, welcome{" "}
            <span role="img" aria-label="hand">
              👋
            </span>
            .
          </h1>
          <Text>
            I am a <span>Product Designer</span> and <span>UX Researcher</span>{" "}
            based in Lagos, Nigeria. I have designed and delivered end-to-end
            UX/UI designs for mobile and web experiences within the Payment
            solutions, Fitness, Banking, Hospitality, Social and Insurance
            fields.{" "}
          </Text>
        </div>

        <div className="arrow">
          <i className="far fa-arrow-alt-circle-down"></i>
        </div>

        {/* Work */}
        <section id={"work"}>
          <WorkCards />
        </section>
      </main>
    );
  }
}

export default Home;
