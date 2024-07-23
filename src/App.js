import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { useState } from "react";
import React, { useState} from 'react'


// import About from "./components/About";

function App() {

  const [mode,setMode] = useState('light');

const  toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#052c65';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'light';

    }
  }

  return (
    <>
      <Navbar title="Text Analyser" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse"  />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
