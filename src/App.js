
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { Fragment, useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const[textChange , setTextChange] = useState('Enable Dark Mode');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      setTextChange("Enable Light Mode");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      setTextChange("Enable Dark Mode");
    }
  }
  return (
    <>
      <Router>
      
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} textChange={textChange} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}>
              
            </Route>
            <Route  path="/about" element={<About mode={mode} />}>
              
            </Route>
          </Routes>
        </div>
        
      </Router>
    </>
  );
}

export default App;
