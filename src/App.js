import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

//function based component approach in React  

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const removeModes = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) => {
    removeModes()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#102d56'
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    }
  }

  const togglePinkMode = () => {
    if(mode === 'light'){
      setMode('pink')
      document.body.style.backgroundColor = '#bd2d57'
      showAlert("Pink Mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => (
      setAlert(null)
    ), 1500);
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
      {/* <Navbar/>  */}
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          togglePinkMode={togglePinkMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
              />
              }
            ></Route>
          </Routes>
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;
