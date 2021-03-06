import React, { useState } from "react";
import Buttons from "../../components/buttons/Buttons";
import BaseButton from "../../components/baseButton/BaseButton";

const MainPage = (props) => {
  const [clickedButtons, setClickedButtons] = useState([]);
  const [showClickedButtons, setShowClickedButtons] = useState(false);
  const [activeButton, setActiveButton] = useState();
  const [theFirstClicked, setFirstClicked] = useState();
  const [theLastClicked, setLastClicked] = useState();

  // Make arrey of clicked buttons and set active button to state
  const handleClick = (event, num) => {
    setActiveButton(num);
    const alreadyClicked = [...clickedButtons];
    alreadyClicked.push(num);
    setClickedButtons(alreadyClicked);
  };

  //  When is stop button clicked
  const showClickedNumbers = () => {
    setShowClickedButtons(true);
    setFirstClicked(clickedButtons[0]);
    setLastClicked(clickedButtons[clickedButtons.length - 1]);
    setActiveButton();
  };

  // When is reset button clicked
  const resetArrey = () => {
    setClickedButtons([]);
    setShowClickedButtons(false);
  };

  return (
    <section className="main">
      <div className="main__header">
        {showClickedButtons ? (
          <h1 className="main__header--title">
            Well done {props.userName} {props.userLastName}
          </h1>
        ) : (
          <h1 className="main__header--title">
            Kandidat : {props.userName} {props.userLastName}
          </h1>
        )}
        {showClickedButtons && (
          <p className="main__header--result">
            {"Ukupan br. klikova : " + clickedButtons.length}
          </p>
        )}
      </div>
      <div className="main__btn-section">
        <Buttons
          onHandleClick={handleClick}
          activeButton={activeButton}
          showClickedButtons={showClickedButtons}
          theFirst={theFirstClicked}
          theLast={theLastClicked}
        />
        <div className="main__btn-section--stop">
          {showClickedButtons ? (
            <div>
              <p>{"Prvi klik : dugme br. " + clickedButtons[0]}</p>

              <p>
                {"Poslednji klik : dugme br. " +
                  clickedButtons[clickedButtons.length - 1]}
              </p>
            </div>
          ) : null}
          {!showClickedButtons ? (
            <BaseButton
              isDisabled={clickedButtons.length === 0}
              clickHandler={showClickedNumbers}
              type={"stop-button"}
              className={"stop-button"}
            >
              Stop
            </BaseButton>
          ) : (
            <BaseButton clickHandler={resetArrey} type={"reset-button"}>
              Reset
            </BaseButton>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
