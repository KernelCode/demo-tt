import React from "react";
import Article from "../Components/Article/Article";
import Section from "../Components/Section/Section";
import Grid from "../Components/Grid/Grid";
import { articles } from "../data/articles";

function Section3Rows(props) {
  return (
    <Section style={{ padding: 30 }}>
      <Grid>
        <Article
          data={{ ...articles[8], title: null }}
          config={{ imagePostion: "left" }}
        />
        <Article
          data={{ ...articles[8], title: null }}
          config={{ imagePostion: "left" }}
        />
        <Article
          data={{ ...articles[8], title: null }}
          config={{ imagePostion: "left" }}
        />
      </Grid>
      <Grid style={{ marginTop: 30 }}>
        <Article
          data={{ ...articles[8], title: null }}
          config={{ imagePostion: "left" }}
        />
        <Article
          data={{ ...articles[8], title: null }}
          config={{ imagePostion: "left" }}
        />
        <Article
          data={{ ...articles[8], title: null }}
          config={{ imagePostion: "left" }}
        />
      </Grid>
    </Section>
  );
}

export default Section3Rows;
