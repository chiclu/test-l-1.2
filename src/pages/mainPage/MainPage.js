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
    <section className="mainPage-section">
      <div className="header">
        {showClickedButtons ? (
          <h1>
            Well done {props.userName} {props.userLastName}
          </h1>
        ) : (
          <h1>
            Kandidat : {props.userName} {props.userLastName}
          </h1>
        )}
        {showClickedButtons && (
          <p className="total-click-text">
            {"Ukupan br. klikova : " + clickedButtons.length}
          </p>
        )}
      </div>
      <div className="buttons-area">
        <Buttons
          onHandleClick={handleClick}
          activeButton={activeButton}
          showClickedButtons={showClickedButtons}
          theFirst={theFirstClicked}
          theLast={theLastClicked}
        />
        <div className="stopButton-area">
          {showClickedButtons ? (
            <div className="result">
              <p>{"Prvi klik : dugme br. " + clickedButtons[0]}</p>

              <p className="result">
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
