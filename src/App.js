import "./App.scss";
import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/loginPage/LoginPage.js";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const [userName, updateUserName] = useState("");
  const [userLastName, updateUserLastName] = useState("");

  const loginHandler = (name, last) => {
    updateUserName(name);
    updateUserLastName(last);
    if (name.trim().split("").length > 2 && last.trim().split("").length > 2) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <LoginPage
                onSaveFullName={loginHandler}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/main-page"
            element={
              <MainPage userName={userName} userLastName={userLastName} />
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
