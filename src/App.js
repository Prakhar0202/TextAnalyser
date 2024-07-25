import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#052c65";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Analyser - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ddd6e7";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Analyser - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text Analyser" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
             exact path="/"
              element={
                <TextForm
                  heading="Enter the text to Analyse"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
