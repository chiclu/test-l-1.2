import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

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
    <form>
      <label>Login stranica</label>
      <p>
        Ime:{" "}
        <input type="text" onChange={userNameHandler} value={nameInput}></input>
      </p>
      <p>
        Prezime:{" "}
        <input
          type="text"
          onChange={userLastNameHandler}
          value={lastNameInput}
        ></input>
      </p>
      <Link to="/main-page">
        <button disabled={!props.isLoggedIn}>Login</button>
      </Link>
    </form>
  );
};

export default LoginPage;
