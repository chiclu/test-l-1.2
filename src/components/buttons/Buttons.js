import BaseButton from "../baseButton/BaseButton";
import clsx from "clsx";

const Buttons = (props) => {
  // Render buttons
  const renderButtons = () => {
    const numbersArray = [1, 2, 3, 4, 5];

    // When user clicked stop
    return numbersArray.map((numbersArray) => {
      const yellowBtnStyle = clsx("random-button", {
        first: props.showClickedButtons && props.theFirst === numbersArray,
        last: props.showClickedButtons && props.theLast === numbersArray,
        active:
          !props.showClickedButtons && props.activeButton === numbersArray,
      });
      return (
        <BaseButton
          numbersArray={numbersArray}
          clickHandler={props.onHandleClick}
          key={numbersArray}
          value={numbersArray}
          type={yellowBtnStyle}
          isDisabled={props.showClickedButtons}
        >
          {numbersArray}
        </BaseButton>
      );
    });
  };

  return <div className="main__btn-section--btn-random">{renderButtons()}</div>;
};

export default Buttons;
