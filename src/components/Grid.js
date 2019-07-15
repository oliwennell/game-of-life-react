import React from "react";
import PropTypes from 'prop-types';
import Cell from "./Cell";

const Grid = props => {
    return ( props.rows.map(renderRow) );
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

Grid.propTypes = {
    rows: PropTypes.array
};

export default Grid;