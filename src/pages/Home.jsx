import React from "react";
import FontGrace from "../component/Font/FontGrace";
import girlImage from "../assets/Images/girlImage.svg";
import rocket from "../assets/Images/rocket.svg";
import Carousal from "../component/Carousal/Carousal";
import { CarousalData } from "../data/carousal";
import arrowNorthEast from "../assets/Images/arrowNorthEast.png";
import FAQ from "../component/FAQ/FAQ";
import { FAQData } from "../data/FAQ";
const Home = () => {
  return (
    <div className="home_page">
      <FontGrace tag="h1">Success story</FontGrace>
      <h1 className="home_page_text2">
        Every success journey
        <br />
        we’ve encountered.
      </h1>
      <div className="success_story_container">
        <div className="home_Story_left">
          <div
            className="HLBGI bg_img"
            style={{
              backgroundImage: `url(${girlImage})`,
            }}
          >
            <div className="box box_1">
              <h1>40 %</h1>
              <p>
                Achieved reduction in project execution time by optimising team
                availability
              </p>
            </div>
            <div className="box box_2">
              <h1>
                $ 0.5%{" "}
                <small
                  style={{
                    color: "#A6A3A0",
                  }}
                >
                  {" "}
                  Million
                </small>
              </h1>
              <p>
                Reduced client expenses by saving on hiring and employee costs.
              </p>
            </div>
            <div className="box box_3">
              <div className="image_container">
                <img src={rocket} alt="" />
              </div>
              <div className="box_inside">
                <span
                  style={{
                    fontSize: "1.3vw",
                  }}
                >
                  10 DAYS
                </span>
                <span
                  style={{
                    color: "#828282",
                  }}
                >
                  Staff Deployment
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home_story_right">
          <div className="home_carousal_cont">
            <Carousal data={CarousalData} />
          </div>
        </div>
      </div>
      <div className="Faq_container">
        <div className="left_In_Faq_home">
          <FontGrace color="#9E9D9D" tag="h1">
            What’s on your mind
          </FontGrace>
          <div>Ask Questions</div>
          <img src={arrowNorthEast} alt="image" />
        </div>
        <div className="right_In_Faq_home">
          {FAQData?.map((item, index) => {
            return <FAQ key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
