import React from "react";
import {Route, Routes} from 'react-router-dom';
import HOME from "./routes/HOME";
import PLANS from './routes/PLANS';
import CONTACT from './routes/CONTACT';
import ABOUT from './routes/ABOUT';
import SERVICES from './routes/SERVICES';
import GALLERY from './routes/GALLERY';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HOME/>}/>
      <Route path="/ABOUT" element={<ABOUT/>}/>
      <Route path="/SERVICES" element={<SERVICES/>}/>
      <Route path="/PLANS" element={<PLANS/>}/>
      <Route path="/GALLERY" element={<GALLERY/>}/>
      <Route path="/CONTACT" element={<CONTACT/>}/>
    </Routes>
    </>
    
  );
}

export default App;
