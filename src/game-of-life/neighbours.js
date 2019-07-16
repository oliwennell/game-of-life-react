
const isAlive = (columnIndex, rowIndex, rows) => !!(rows[rowIndex][columnIndex]);

const isWithinGrid = (columnIndex, rowIndex, rows) =>
    rowIndex >= 0 && rowIndex < rows.length &&
    columnIndex >= 0 && columnIndex < rows[0].length;

function numAliveNeighbours(columnIndex, rowIndex, rows) {
    const neighbourDeltas = [
        [ -1,  1 ],
        [  0,  1 ],
        [  1,  1 ],
        [ -1,  0 ],
        [  1,  0 ],
        [ -1, -1 ],
        [  0, -1 ],
        [  1, -1 ]
    ];
    return neighbourDeltas
        .map(([ deltaX, deltaY ]) => [ columnIndex + deltaX, rowIndex + deltaY ])
        .filter(([ neighbourX, neighbourY ]) => isWithinGrid(neighbourX, neighbourY, rows))
        .map(([ neighbourX, neighbourY ]) => isAlive(neighbourX, neighbourY, rows))
        .map(isNeighbourAlive => isNeighbourAlive ? 1 : 0)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
}

export default numAliveNeighbours;