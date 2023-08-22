const Button = (props) => {
  return (
    <button className="btn px-3 fw-bold btn-sm" style={props.style}>
      {props.title}
    </button>
  );
};

export default Button;
