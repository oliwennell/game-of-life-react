import numAliveNeighbours from "./neighbours";

function shouldCellLiveOn(cellWasAlive, { columnIndex, rowIndex }, allRows) {
    const neighbourCount = numAliveNeighbours(columnIndex, rowIndex, allRows);
    return cellWasAlive ? (neighbourCount === 2 || neighbourCount === 3)
                        : neighbourCount === 3;
}

function simulateRow(row, rowIndex, allRows) {
    return row.map((cellWasAlive, columnIndex) =>
        shouldCellLiveOn(cellWasAlive, { columnIndex, rowIndex }, allRows));
}

const simulate = rows => rows.map((row, rowIndex) =>
    simulateRow(row, rowIndex, rows));

export default simulate;