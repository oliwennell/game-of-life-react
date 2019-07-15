import React, { useState } from "react";

function Cell(props) {
    return <div>{props.isAlive ? '👾' : '💀'}</div>
}

export default Cell;