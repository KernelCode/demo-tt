import React from "react";

import Section from "../Components/Section/Section";
import Grid from "../Components/Grid/Grid";

import Article from "../Components/Article/Article";

import { articles } from "../data/articles";

function Section1Rows(props) {
  return (
    <Section>
      <Article data={articles[4]} config={{ imagePostion: "full" }} />
    </Section>
  );
}
export default Section1Rows;
