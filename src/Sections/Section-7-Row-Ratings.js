import React from "react";
import Article from "../Components/Article/Article";
import Section from "../Components/Section/Section";
import Grid from "../Components/Grid/Grid";
import { articles } from "../data/articles";

function Hero(props) {
  return (
    <Section style={{ padding: 20 }} bg>
      <Grid>
        <Article data={articles[7]} config={{ imagePostion: "top" }} />
        <Article data={articles[7]} config={{ imagePostion: "top" }} />
        <Article data={articles[7]} config={{ imagePostion: "top" }} />
        <Article data={articles[7]} config={{ imagePostion: "top" }} />
      </Grid>
    </Section>
  );
}

export default Hero;
