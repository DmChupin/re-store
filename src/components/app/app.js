import React from 'react';
import './app.css';
import {Route, Routes} from "react-router-dom";
import {CartPage, HomePage} from "../pages";

const App = () => {
    return (
        <Routes>
            <Route path='/'
                   element={<HomePage />}
            />
            <Route path='/cart'
                   element={<CartPage />}
            />
        </Routes>
    );
};

export default App;