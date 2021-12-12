import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import BaseButton from "../../components/baseButton/BaseButton";

const LoginPage = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

  const loginBtnStyle = "login-button";

  // Sending name and last name to app component when changed
  useEffect(() => {
    props.onSaveFullName(nameInput, lastNameInput);
  }, [nameInput, lastNameInput]);

  const userNameHandler = (e) => {
    setNameInput(e.target.value);
  };

  const userLastNameHandler = (e) => {
    setLastNameInput(e.target.value);
  };

  return (
    <section className="login-section">
      <h1 className="label-form">Login stranica</h1>
      <form className="login-form">
        <div>
          <span className="name-section">
            <label>Ime:</label>
            <input
              type="text"
              onChange={userNameHandler}
              value={nameInput}
            ></input>
          </span>
          <span className="lastName-section">
            <label>Prezime:</label>
            <input
              type="text"
              onChange={userLastNameHandler}
              value={lastNameInput}
            ></input>
          </span>
        </div>
        <span className="button-section">
          <Link to="/main-page">
            <BaseButton
              isDisabled={!props.isLoggedIn}
              type={loginBtnStyle}
              clickHandler={() =>
                props.onSaveFullName(nameInput, lastNameInput)
              }
            >
              <FontAwesomeIcon icon={faSignInAlt} />
              Login
            </BaseButton>
          </Link>
        </span>
      </form>
    </section>
  );
};

export default LoginPage;
