import React from "react";
import Grid from "./Grid";

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rows: Game._initialGridRows()
        }

        this.stepCount = 0;
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
        const newRows = this.state.rows.map(r => r.slice());
        newRows[0][0].isAlive = !newRows[0][0].isAlive;
        newRows[0][0].id = this.stepCount * 1000000;
        this.stepCount++;
        return newRows;
    }

    static _initialGridRows() {
        const gridSize = 10;

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

        return rows;
    }
}

export default Game;