import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Route/Main";
import "./Login/Login.css";
import Dashboard from "./Route/Dashboard";
import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Forgetpass from "./Login/Forgetpass";
import Abouts from "./Route/Abouts";

function App(props) {
  const [side, setSide] = useState(false);
  const [login, setLogin] = useState(false);
  const [theme, setTheme] = useState(false);
  const [pro, setPro] = useState(false);

  const settheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", JSON.stringify(theme))
  };

  const showPro = () => {
    setPro(!pro);
  };

  const setside = () => {
    setSide(!side);
    localStorage.setItem("lside", JSON.stringify(side));
  };

  const setlogin = () => {
    setLogin(!login);
    localStorage.setItem("llogin", JSON.stringify(login));
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                side={JSON.parse(localStorage.getItem("lside"))}
                log={JSON.parse(localStorage.getItem("llogin"))}
                setside={setside}
                setlogin={setlogin}
                settheme={settheme}
                showPro={showPro}
                pro={pro}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                side={JSON.parse(localStorage.getItem("lside"))}
                log={JSON.parse(localStorage.getItem("llogin"))}
                setside={setside}
                setlogin={setlogin}
                settheme={settheme}
                showPro={showPro}
                pro={pro}
              />
            }
          />
          <Route
            exact
            path="/Login"
            element={<Login setside={setside} setlogin={setlogin} />}
          />
          <Route exact path="/Register" element={<Register />} />
          <Route
            exact
            path="/About"
            element={
              <Abouts
                settheme={settheme}
                setside={setside}
                setlogin={setlogin}
                showPro={showPro}
                pro={pro}
              />
            }
          />
          <Route exact path="/Forgetpass" element={<Forgetpass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
