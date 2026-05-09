import Hero from "../components/Hero";
import Properties from "./Properties";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Properties />   {/* 👈 THIS */}
      <Testimonials/>
    </>
  );
};

export default Home;