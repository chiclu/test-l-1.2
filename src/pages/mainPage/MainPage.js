import React, { useState } from "react";
import Button from "../../components/button/Button";

const MainPage = (props) => {
  const [clickedButtons, setClickedButtons] = useState([]);
  const [showClickedButtons, setShowClickedButtons] = useState(false);
  const [activeButton, setActiveButton] = useState();

  const renderButtons = () => {
    const number = [1, 2, 3, 4, 5];
    const listButtons = number.map((number) => (
      <button key={number} onClick={(event) => handleClick(event, number)}>
        {number}
      </button>
    ));
    return <div>{listButtons}</div>;
  };

  const handleClick = (event, n) => {
    console.log(event.target);
    event.target.style.backgroundColor = "red";
    const alreadyClicked = [...clickedButtons];
    alreadyClicked.push(n);
    setClickedButtons(alreadyClicked);
  };

  const showClickedNumbers = () => {
    setShowClickedButtons(true);
  };

  const resetArrey = () => {
    setClickedButtons([]);
    setShowClickedButtons(false);
  };

  return (
    <section>
      <div>
        {showClickedButtons ? (
          <h1>
            Well done {props.userName} {props.userLastName}
          </h1>
        ) : (
          <h1>
            Kandidat : {props.userName} {props.userLastName}
          </h1>
        )}

        {showClickedButtons ? (
          <p>{"Ukupan br. klikova : " + clickedButtons.length}</p>
        ) : null}
      </div>
      <div>
        {renderButtons()}
        <div>
          {showClickedButtons ? (
            <p>{"Prvi klik : dugme br. " + clickedButtons[0]}</p>
          ) : null}
          {showClickedButtons ? (
            <p>
              {"Poslednji klik : dugme br. " +
                clickedButtons[clickedButtons.length - 1]}
            </p>
          ) : null}
          {!showClickedButtons ? (
            <button
              disabled={clickedButtons.length === 0}
              onClick={showClickedNumbers}
            >
              Stop
            </button>
          ) : (
            <button onClick={resetArrey}>Reset</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
