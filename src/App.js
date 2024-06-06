import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
//import About from './component/About';
import TextForm from './component/TextForm';
import React, { useContext, useState } from 'react';

function App() {
  const [mode, setMode] = useState ('dark'); // whetther dark mode is enable or not

  const [alert, setAlert] = useState (null);
  const showAlert = (message, type) =>
    {
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }

  const toggleMode = () =>
    {
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#4e7689';
      showAlert("Dark mode has been enables", "success");
      document.title = 'TextUtil - Dark Mode';
    //  setInterval(() => {
    //    document.title = 'TextUtil - Amazing';
    //  }, 2000);
     // setInterval(() => {
     //   document.title = 'Install TextUtil Now';
     // }, 1500);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enables", "success");
      document.title = 'TextUtil - light Mode';
    }
  }

  return (
   <>
<Navbar title= "Textutile" mode = {mode} toggleMode={toggleMode} />
<Alert alert= {alert} />
<div className='container my-3'>
 <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode = {mode}/>
 {/*<About/>*/}

</div>
   </>
    
  );
}

export default App;
