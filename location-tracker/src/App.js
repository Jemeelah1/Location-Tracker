import "./App.css";
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Fullscreen from "./FullScreen";
import MapComponent from "./Components/MapComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Fullscreen />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/map' element={<MapComponent />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;