import React from "react";
import Grid from "../Components/Grid/Grid";
import "./footer.scss";
import InputWIthButton from "../Components/InputWIthButton/InputWIthButton";
function Section1Rows(props) {
  return (
    <>
      <Grid className="footer">
        <div className="list">
          <div className="head">NEWS</div>
          <div className="item">Featured News</div>
          <div className="item">Latest News</div>
        </div>
        <div className="list">
          <div className="head">Life</div>
          <div className="item">Latest News</div>
          <div className="item">Fashion</div>
          <div className="item">Dining</div>
          <div className="item">Recipes</div>
          <div className="item">Art & Culture</div>
          <div className="item">Travel</div>
          <div className="item">Motoring</div>
        </div>
        <div className="list">
          <div className="head">business</div>
          <div className="item">Open House</div>
          <div className="item">What does that even mean?</div>
          <div className="item">Homegrown</div>
          <div className="item">How do I...</div>
          <div className="item">Bag off</div>
          <div className="item">Where to spend it</div>
        </div>

        <div></div>
        <div className="list">
          <div className="head">Subscribe</div>
          <div className="item bold">
            Get fresh updates about the fashion, beauty, trends
          </div>
          <InputWIthButton
            placeHolder="Enter your email below"
            button="Submit"
          />
        </div>
      </Grid>
      <Grid className="footer" style={{ padding: 30, fontSize: 12 }}>
        <div>Magazine</div>
        <div>Contact</div>
        <div>About</div>
        <div>Press</div>
        <div>sitemap</div>
        <div>TS + CS</div>
      </Grid>
    </>
  );
}
export default Section1Rows;
