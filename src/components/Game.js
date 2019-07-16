import React from "react";
import Grid from "./Grid";
import simulate from "./../game-of-life/simulation";

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rows: Game._initialGridRows()
        }

        this._onStepForwardClicked = this._onStepForwardClicked.bind(this);
    }

    render() {
        return (
            <div>
                <Grid rows={this.state.rows} />
                <button id="step-forward"
                        onClick={this._onStepForwardClicked}>
                    Step
                </button>
            </div>
        );
    }

    _onStepForwardClicked() {
        this.setState({ rows: this._stepForward() });
    }

    _stepForward() {
        // return simulate(this.state.rows.map((r, ri) => r.map((c, ci) => [ c.isAlive, ci ])))
        //     .map(r => r.map(c => ({isAlive: c})));

        const toModel = rows => rows.map(row => row.map(cell => cell.isAlive));

        const toViewModel = rows => rows.map((row, rowIndex) =>
            row.map((cellIsAlive, columnIndex) => ({ 
                isAlive: cellIsAlive,
                id: (rowIndex * 100) + columnIndex
            })));

        const from = toModel(this.state.rows);
        const to = simulate(from);
        return toViewModel(to);
    }

    static _initialGridRows() {
        const gridSize = 30;

        const generateRow = rowIndex =>
            new Array(gridSize)
                .fill({ isAlive: false })
                .map((cell, cellIndex) => ({
                    isAlive: cell.isAlive,
                    id: (rowIndex * 100) + cellIndex 
                }));

        const rows = Array.from(
            new Array(gridSize),
            (_, i) => generateRow(i));

        const startX = 10;
        const startY = 10;
        [
            [2, 0],
            [3, 0],
            [1, 1],
            [2, 1],
            [2, 2]
        ]
        .forEach(([x, y]) => rows[startX+y][startY+x].isAlive = true);

        return rows;
    }
}

export default Game;