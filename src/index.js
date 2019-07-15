import React from 'react';
import { render } from 'react-dom';
import Grid from "./components/Grid";

const gridSize = 10;

const generateRow = rowIndex =>
    new Array(gridSize)
        .fill({ isAlive: false })
        .map((cell, cellIndex) => ({
            isAlive: cell.isAlive,
            id: (rowIndex * 100) + cellIndex 
        }));

const rows = Array.from(new Array(gridSize), (_, i) => generateRow(i));

render(<Grid rows={rows} />, document.getElementById('root'));
