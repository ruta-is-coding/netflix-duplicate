import "./Section1.css";
import InputGroup from "../InputGroup/InputGroup";

const Section1 = () => {
  return (
    <section className="container section1">
      <h2>Unlimited movies, TV shows, and more</h2>
      <p>Watch anywhere. Cancel anytime.</p>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <InputGroup placeholder="Email address" />
    </section>
  );
};

export default Section1;
