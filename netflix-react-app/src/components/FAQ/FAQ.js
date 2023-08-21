import Card from "../Card/Card.js";
import InputGroup from "../InputGroup/InputGroup.js";

const FAQ = () => {
  return (
    <section className="blackSection">
      <div className="container py-5 mb-5">
        <h1>Frequently Asked Questions</h1>
        <div className="my-4">
          <Card title="What is Netflix?" />
          <Card title="How much does Netflix cost?" />
          <Card title="Where can I watch?" />
          <Card title="How do I cancel?" />
          <Card title="What can I watch on Netflix?" />
          <Card title="Is Netflix good for kids?" />
          <Card title="Why am I seeing this language?" />
        </div>
        <h3 className="mb-3">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <InputGroup placeholder="Email address" />
      </div>
    </section>
  );
};

export default FAQ;
