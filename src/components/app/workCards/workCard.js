import * as React from "react";
import Heading from "../../UI/typography/heading";
import Text from "../../UI/typography/text";
import { Link } from "react-router-dom";

const workSection = [
  {
    id: 1,
    workTitle: "",
    workDetails: "",
    workLink: "",
    workImage: "",
    workImageAlt: "",
  },
  {
    id: 2,
    workTitle: "VerveLife App",
    workDetails: `A fitness and motivation app designed with workout routines, personal
          trainer, meal planner & payments tool. An app that combines health &
          fitness with payments.`,
    workLink: "/",
    workImage: ``,
    workImageAlt: "",
  },
  {
    id: 3,
    workTitle: "",
    workDetails: "",
    workLink: "",
    workImage: "",
    workImageAlt: "",
  },
];

export default function WorkCards() {
  return (
    <div>
      {workSection.map((work) => {
        const {
          workTitle,
          workDetails,
          workImage,
          workImageAlt,
          workLink,
        } = work;
        return (
          <FlexContainer>
            <div>
              <Heading level="three">{workTitle}</Heading>
              <Text>{workDetails}</Text>
              <div className="work-link">
                <Link to={workLink} target="_blank" className="view">
                  View Case Study
                </Link>
                <i className="far fa-arrow-alt-circle-right"></i>
              </div>
            </div>

            <div>
              <img src={workImage} alt={workImageAlt} />
            </div>
          </FlexContainer>
        );
      })}
    </div>
  );
}
