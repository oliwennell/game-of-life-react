import React from 'react';
import { render } from 'react-dom';
import Game from "./components/Game";
import "./index.css"

const startTimer = callback => setInterval(callback, 250);

render(<Game startTimerFn={startTimer} />, document.getElementById("root"));