import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { Link,Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  const [mymode, setmymode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }
  const toggleMode = () => {
    if (mymode === "light") {
      setmymode("dark");
      setalert("Dark mode enabled")
      document.body.style.backgroundColor = '#0c2852';
      showalert("Dark mode enabled", "success")
    }
    else {
      setmymode("light");
      document.body.style.backgroundColor = 'white';
      setalert("Light mode enabled")
      showalert("Light mode enabled", "success")
    }
  }
  return (
    <BrowserRouter>
      <Navbar title="TextEase" mode={mymode} togglemode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
         <Route path="/" element={<Textform heading="TextEase" mode={mymode} showAlert={showalert} />} />
         <Route path="about" element={<About mode= {mymode}/>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
