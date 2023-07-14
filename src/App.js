
import React from 'react';
import Career from "./page/Career";
// import { Link } from "react-router-dom";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from "./page/HomePage";
import ContactUs from "./page/Contact-us";

const loadCSS = (file) => {
  const link = document.createElement('link');
  link.href = file;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

function App() {

  React.useEffect(() => {
    // Load index.css dynamically
    // import('./index.css').then(() => {
    //   loadCSS('./index.css');
    // });

    // Load index1.css dynamically
    import('./index1.css').then(() => {
      loadCSS('./index1.css');
    });

  }, []);

  return (
    <div >

  <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage/>}/> 
            <Route exact path='/contact' element={<ContactUs/>}/>    
            <Route exact path='/career' element={<Career/>}/>   
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
