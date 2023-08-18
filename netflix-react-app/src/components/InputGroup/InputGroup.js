import Button from "../button/Button";

const InputGroup = (props) => {
  return (
    <div className="input-group w-50">
      <input
        type="text"
        className="form-control"
        placeholder={props.placeholder}
      />
      <Button title="Get Started" />
    </div>
  );
};

export default InputGroup;
