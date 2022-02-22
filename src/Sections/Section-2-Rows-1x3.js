import React from "react";
import Article from "../Components/Article/Article";
import Section from "../Components/Section/Section";
import Grid from "../Components/Grid/Grid";
import { articles } from "../data/articles";

function Hero(props) {
  return (
    <Section>
      <Article
        config={{
          imagePostion: "left",
          imageStyle: { width: "110%" },
          gridStyle: { alignItems: "center" },
        }}
        data={articles[0]}
      />
      <Grid style={{ marginTop: 20 }}>
        <Article
          data={{ ...articles[0], title: null }}
          config={{ imagePostion: "left" }}
        />
        <Article
          data={{ ...articles[0], title: null }}
          config={{ imagePostion: "left" }}
        />
        <Article
          data={{ ...articles[0], title: null }}
          config={{ imagePostion: "left" }}
        />
      </Grid>
    </Section>
  );
}

export default Hero;
