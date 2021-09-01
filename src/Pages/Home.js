//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import { lazy } from "react";
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
// import Testimonials from "../Sections/Testimonials/index";
// import Contact from "../Sections/Contact/index";
import styled from "styled-components";
import UpcomingEvents from "../Sections/UpcomingEvents/index";
import Ourteam from "../Sections/Ourteam/index";
import { NewsLetter } from "../components/Newsletter";
import Footer from "../components/Footer";
const Header = lazy(() => import("../components/Header/index"));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <HeroSection />
        <About />
        <Services />
        <UpcomingEvents />
        <Ourteam />
        <NewsLetter />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
