import "./App.css";
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Fullscreen from "./FullScreen";
import MapComponent from "./Components/MapComponent";
import Setting from "./Components/Setting";
import SettingScreen from "./SettingScreen";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Account from "./Components/Account";
import Signout from "./Components/Signout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Fullscreen />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/map' element={<MapComponent />} />
        </Route>
        <Route element={<SettingScreen />}>
          <Route path='/settings' element={<Setting />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/account' element={<Account />} />
          <Route path='/signout' element={<Signout/>} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;