import React from "react";
import PropTypes from 'prop-types';

const Cell = props => {
    return <div className="column">
               {props.isAlive ? '👾' : '💀'}
           </div>;
}

Cell.propTypes = {
    isAlive: PropTypes.bool
}

export default Cell;