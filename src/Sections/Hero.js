import React from "react";
import Article from "../Components/Article/Article";
import Section from "../Components/Section/Section";
import Grid from "../Components/Grid/Grid";
import { articles } from "../data/articles";

function Hero(props) {
  return (
    <Section>
      <Grid>
        <Article
          style={{ width: "50%" }}
          data={articles[0]}
          config={{ centred: "centred", imagePostion: "bottom" }}
        />
        <Grid style={{ flexDirection: "row", width: "50%" }}>
          <Grid style={{ flexDirection: "column", width: "50%" }}>
            <Article data={articles[1]} />
            <Article data={articles[1]} />
            <Article data={articles[2]} config={{ imagePostion: "top" }} />
          </Grid>
          <Grid style={{ flexDirection: "column", width: "50%" }}>
            <Article data={articles[3]} config={{ imagePostion: "top" }} />
            <Article data={articles[1]} />
            <Article data={articles[1]} />
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Hero;
