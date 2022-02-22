import Layout from "./Layout/Layout";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";

import Line from "./Components/Line/Line";

import Hero from "./Sections/Hero";
import Section1Rows from "./Sections/Section-1-Row-5-Cir";
import Section2Rows from "./Sections/Section-2-Rows-1x3";
import Section3Rows2 from "./Sections/Section-3-Row-5";
import Section4Rows2 from "./Sections/Section-4-full";
import Section5Rows2 from "./Sections/Section-5-1-Row-2x1";
import Section6Story from "./Sections/Section-6-Story";
import Section7Ratings from "./Sections/Section-7-Row-Ratings";
import Section8Ratings from "./Sections/Section-8-Rows-3x3";
import Section9Videos from "./Sections/Section-9vides";
import Footer from "./Sections/Footer";

function App() {
  useEffect(() => {}, []);
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <Layout theme={theme}>
      {/* <========== header ==========>*/}
      <Header toggleTheme={toggleTheme} theme={theme}></Header>
      <Line />

      {/* <========== Hero  ==========>  */}
      <Hero />
      <Line />

      {/* <========== secction 1 ==========>   */}
      <Section1Rows />
      <Line />
      {/* <========== secction 2 ==========>   */}
      <Section2Rows />
      <Line />
      {/* <========== secction 3 ==========>   */}
      <Section3Rows2 />
      <Line />
      {/* <========== secction 4 ==========>   */}
      <Section4Rows2 />
      <Line />
      {/* <========== secction 5 ==========>   */}
      <Section5Rows2 />
      <Line />
      {/* <========== secction 6 ==========>   */}
      <Section6Story />
      <Line />
      {/* <========== secction 7 ==========>   */}
      <Section7Ratings />
      <Line />
      {/* <========== secction 8 ==========>   */}
      <Section8Ratings />

      <Line />
      {/* <========== secction 9 Videos ==========>   */}
      <Section9Videos />

      <Line />
      {/* <========== footer  ==========>   */}
      <Footer />
      <Line style={{ paddingBottom: 30 }} />
    </Layout>
  );
}

export default App;
