import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import swDev from './swDev'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root"));

swDev();
