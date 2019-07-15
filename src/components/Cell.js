import React, { useState } from "react";
import PropTypes from 'prop-types';

const Cell = props => {
    const [isAlive, setIsAlive] = useState(props.isAlive);

    return <div className="column"
                onClick={() => setIsAlive(!isAlive)}>
               {isAlive ? '👾' : '💀'}
           </div>
}

Cell.propTypes = {
    isAlive: PropTypes.bool
}

export default Cell;