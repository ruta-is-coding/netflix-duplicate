import "./InputGroup.css";
import Button from "../button/Button";

const InputGroup = (props) => {
  return (
    <div className="row justify-content-center">
      <div className="input-group w-50">
        <input
          type="text"
          className="form-control py-3"
          placeholder={props.placeholder}
        />
        <Button title="Get Started" />
      </div>
    </div>
  );
};

export default InputGroup;
