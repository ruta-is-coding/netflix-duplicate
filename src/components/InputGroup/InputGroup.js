import "./InputGroup.css";
import Button from "../button/Button";

const InputGroup = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="d-flex gap-2 w-50">
        <input
          type="text"
          className="form-control py-3"
          placeholder={props.placeholder}
        />
        <Button
          title="Get Started"
          style={{
            width: "200px",
            backgroundColor: "red",
            color: "white",
            fontSize: "18px",
          }}
        />
      </div>
    </div>
  );
};

export default InputGroup;
