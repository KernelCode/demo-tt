import "./InputWIthButton.scss";
function InputWIthButton(props) {
  return (
    <div className="input-button-cont">
      <input type="text" placeholder={props.placeHolder} />
      <button>{props.button}</button>
    </div>
  );
}

export default InputWIthButton;
