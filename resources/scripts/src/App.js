import logo from './logo.svg';
import './App.css';
import Auth from './Auth/Auth';
import Calculator from './Calculator';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="bg-gray-800 h-screen">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Auth/>}></Route>
                <Route path='/calculator' element={<Calculator/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
