
import './App.css';


import React from 'react';
import FirstComp from './components/FirstComp';
import SecoComp from './components/SecoComp';
import FunComp from './components/FunComp';
import ClassComp from './components/ClassComp';
import './components/CompCSS.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <div>
      <h1>This is a div.</h1>
    </div>
    <FirstComp/>
    <SecoComp/>

    <BrowserRouter>
    <Routes>
      <Route path='/c' element={<ClassComp/>}></Route>
      <Route path='/f' element={<FunComp/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
