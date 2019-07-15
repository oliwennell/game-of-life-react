import React from "react";
import Cell from "./Cell";

function Grid(props) {
    return (
        <div>
            { props.rows.map(renderRow) }
        </div>
    );
}

function renderRow(row, rowIndex) {
    return (
        <div className="row" key={rowIndex}>
        {
            row.map(cell => 
                <Cell id={cell.id}
                      key={cell.id}
                      isAlive={cell.isAlive}
                       />)
        }
        </div>
    )
}

export default Grid;