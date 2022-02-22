import React from "react";
import Article from "../Components/Article/Article";
import Section from "../Components/Section/Section";
import Grid from "../Components/Grid/Grid";
import { articles } from "../data/articles";

function Hero(props) {
  return (
    <Section style={{ padding: 50 }} bg>
      <Grid style={{ gap: 0, alignItems: "center" }}>
        <Article
          data={{ ...articles[6], author: null }}
          config={{ imagePostion: "top" }}
        />
        <Article
          style={{ width: "100%" }}
          data={{
            ...articles[5],
            image: require("../assets/images/Rectangle 2344.png"),
          }}
          config={{
            imagePostion: "bottom",
            centred: "centred",
            blendImage: "blendImage",
          }}
        />
        <Article
          data={{ ...articles[6], author: null }}
          config={{
            imagePostion: "top",
            contentOpacity: 0.3,
            tagType: "outline",
          }}
        />
      </Grid>
    </Section>
  );
}

export default Hero;
