import BaseButton from "../baseButton/BaseButton";
import clsx from "clsx";

const Buttons = (props) => {
  // Render buttons
  const renderButtons = () => {
    const number = [1, 2, 3, 4, 5];

    // When user clicked stop
    return number.map((number) => {
      const yellowBtnStyle = clsx("random-button", {
        first: props.showClickedButtons && props.theFirst === number,
        last: props.showClickedButtons && props.theLast === number,
        active: !props.showClickedButtons && props.activeButton === number,
      });
      return (
        <BaseButton
          number={number}
          clickHandler={props.onHandleClick}
          key={number}
          value={number}
          type={yellowBtnStyle}
          isDisabled={props.showClickedButtons}
        >
          {number}
        </BaseButton>
      );
    });
  };

  return <div className="random-buttons">{renderButtons()}</div>;
};

export default Buttons;
