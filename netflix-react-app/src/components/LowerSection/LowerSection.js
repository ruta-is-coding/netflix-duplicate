import "./LowerSection.css";

const LowerSection = (props) => {
  return (
    <section className="lowerSection py-5">
      <div className="container d-flex" style={props.style}>
        <div className="col-6">
          <h2>{props.headingText}</h2>
          <p>{props.pText}</p>
        </div>
        <div className="col-6">
          <img src={props.src} />
        </div>
      </div>
    </section>
  );
};

export default LowerSection;
