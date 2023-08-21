import "./App.css";
import TV from "./components/LowerSection/tv.png";
import DevicePile from "./components/LowerSection/device-pile.png";
import Mobile from "./components/LowerSection/mobile.jpg";
import Kids from "./components/LowerSection/kids.png";
import Header from "./components/header/Header";
import Section1 from "./components/section1/Section1";
import LowerSection from "./components/LowerSection/LowerSection";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="mainSection">
        <Header />
        <Section1 />
      </div>
      <LowerSection
        headingText="Enjoy on your TV"
        pText="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        src={TV}
      />
      <LowerSection
        headingText="Download your shows to watch offline"
        pText="Save your favorites easily and always have something to watch."
        src={Mobile}
        style={{
          flexDirection: "row-reverse",
        }}
      />
      <LowerSection
        headingText="Watch everywhere"
        pText="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        src={DevicePile}
      />
      <LowerSection
        headingText="Create profiles for kids"
        pText="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        src={Kids}
        style={{
          flexDirection: "row-reverse",
        }}
      />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
