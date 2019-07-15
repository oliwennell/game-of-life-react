import React, { useState } from "react";

function Cell(props) {
    const [isAlive, setIsAlive] = useState(props.isAlive);

    return <div onClick={() => setIsAlive(!isAlive)}>
               {isAlive ? '👾' : '💀'}
           </div>
}

export default Cell;