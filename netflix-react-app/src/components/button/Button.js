const Button = (props) => {
  return (
    <button
      className="btn px-3 fw-bold btn-sm"
      style={{ backgroundColor: "red", color: "white", fontSize: "18px" }}
    >
      {props.title}
    </button>
  );
};

export default Button;
