import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="information-div">
      <div className="Home__left">
      <img className="yoga-img" alt="Yoga" src="/images/YogaBanner1.jpg"></img>
      </div>
      <div className=" Home__right">
          <div className="benefits">
            <h2>Physical Benefits</h2>
            <ul>
              <li>Improves flexibility and posture</li>
              <li>Strengthens muscles and increases muscle tone</li>
              <li>Enhances balance and stability</li>
              <li>Boosts metabolism and aids in weight loss</li>
            </ul>
          </div>

          <div className="benefits">
            <h2>Mental and Emotional Benefits</h2>
            <ul>
              <li>Reduces stress and anxiety</li>
              <li>Promotes relaxation and better sleep</li>
              <li>Increases self-awareness and mindfulness</li>
              <li>Improves mood and promotes overall well-being</li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Home;
