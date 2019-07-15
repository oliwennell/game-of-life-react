
function numAliveNeighbours(columnIndex, rowIndex, rows) {
    const deltas = [
        [ -1,  1 ],
        [  0,  1 ],
        [  1,  1 ],
        [ -1,  0 ],
        [  1,  0 ],
        [ -1, -1 ],
        [  0, -1 ],
        [  1, -1 ]
    ];
    return deltas
        .map(([ deltaX, deltaY ]) => [ columnIndex + deltaX, rowIndex + deltaY ])
        .map(([ neighbourX, neighbourY ]) => isAlive(neighbourX, neighbourY, rows))
        .map(isNeighbourAlive => isNeighbourAlive ? 1 : 0)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
}

function isAlive(columnIndex, rowIndex, rows) {
    const neighbour = rows[rowIndex][columnIndex];
    return !!neighbour;
}

export default numAliveNeighbours;