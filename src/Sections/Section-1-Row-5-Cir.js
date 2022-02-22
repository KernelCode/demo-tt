import React from "react";
import Person from "../Components/Person/Person";
import Section from "../Components/Section/Section";
import Grid from "../Components/Grid/Grid";
import { persons } from "../data/persons";

function Section1Rows(props) {
  return (
    <Section bg>
      <Grid style={{ justifyContent: "center" }}>
        {persons.map((person, i) => (
          <Person
            id={i + 1}
            data={person}
            config={{ centred: "centred", imagePostion: "top" }}
          />
        ))}
      </Grid>
    </Section>
  );
}
export default Section1Rows;
