const BaseButton = (props) => {
  return (
    <button
      key={props.value}
      onClick={(e) => props.clickHandler(e, props.numbersArray)}
      className={props.type}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
};

export default BaseButton;
