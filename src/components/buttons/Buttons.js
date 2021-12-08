const Buttons = (props) => {
  // Render buttons
  const renderButtons = () => {
    const number = [1, 2, 3, 4, 5];
    if (props.showClickedButtons) {
      // When user clicked stop
      return number.map((number, i) => {
        let theFirst = props.theFirst === number && "first";
        let theLast = props.theLast === number && "last";
        return (
          <button
            key={i}
            onClick={(event) => props.onHandleClick(event, number)}
            className={`random-button ${theFirst} ${theLast}`}
            disabled={true}
          >
            {number}
          </button>
        );
      });
    }
    // When user are clicking
    return number.map((number, i) => {
      const classActiv = props.activeButton === number ? "active" : "";
      return (
        <button
          key={i}
          onClick={(event) => props.onHandleClick(event, number)}
          className={`random-button ${classActiv}`}
        >
          {number}
        </button>
      );
    });
  };

  return <div className="random-buttons">{renderButtons()}</div>;
};

export default Buttons;
