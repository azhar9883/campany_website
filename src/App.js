
import React, { useState, useEffect } from 'react';
import Career from "./page/Career";
// import { Link } from "react-router-dom";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from "./page/HomePage";
import ContactUs from "./page/Contact-us";
import ProjectEstimate from './page/ProjectEstimate';

import axios from 'axios';
import Loader from './components/loader/Loader';
import DevelopmentProcess from './page/DevelopmentProcess';
import CareerTwo from './page/CareerTwo';
import TermsAndConditions from './page/TermsAndconditions';


const loadCSS = (file) => {
  const link = document.createElement('link');
  link.href = file;
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

function App() {

  const [loading, setLoading] = useState(false);


  useEffect(() => {
     setLoading(true);
     async function fetchData() {
    await axios
      .get(
        "https://www.minivetsystem.com/madmin/api/settings"
      )
      .then((res) => {
        console.log(res.data.theme_color)
        
        if (res.data.theme_color === "red") {
          import('./index1.css').then(() => {
            loadCSS('./index1.css');
            setLoading(false);
          });
        } else {
          setLoading(false);
          import('./index.css').then(() => {
            loadCSS('./index.css');
            setLoading(false);
          });
        }
      })
      .catch((err) => {
        console.log("Error submitting contract", err);
        import('./index1.css').then(() => {
          loadCSS('./index1.css');
          setLoading(false);
        });
      });

    }
    fetchData();
  },[]);

  return (
    <>
      {loading ? (<div><Loader /></div>) :
        (<div >
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route exact path='/contact' element={<ContactUs />} />
              <Route exact path='/career' element={<Career />} />
              <Route exact path='/ProjectEstimate' element={<ProjectEstimate />} />
              <Route exact path='/developmentProcess' element={<DevelopmentProcess />} />
              <Route exact path='/careerTwo' element={<CareerTwo />} />
              <Route exact path='/termsAndConditions' element={<TermsAndConditions/>} />
            </Routes>
          </BrowserRouter>
        </div>)}
    </>

  );
}

export default App;
