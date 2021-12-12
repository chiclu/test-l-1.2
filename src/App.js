import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/loginPage/LoginPage.js";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const [userName, updateUserName] = useState("");
  const [userLastName, updateUserLastName] = useState("");

  // Checking if user have typed valid name and last name and enable login button
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <LoginPage onSaveFullName={loginHandler} isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          exact
          path="/main-page"
          element={<MainPage userName={userName} userLastName={userLastName} />}
        />
        {/* {isLoggedIn && (
          <Route
            exact
            path="/main-page"
            element={
              <MainPage userName={userName} userLastName={userLastName} />
            }
          />
        )} */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
