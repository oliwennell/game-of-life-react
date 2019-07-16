import React from "react";
import PropTypes from 'prop-types';
import Grid from "./Grid";
import simulate from "./../game-of-life/simulation";

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.startTimerFn = props.startTimerFn;

        this.state = {
            rows: Game._initialGridRows()
        }

        this._stepForward = this._stepForward.bind(this);
        this._onStepForwardClicked = this._onStepForwardClicked.bind(this);
        this._onStartAutoStepClicked = this._onStartAutoStepClicked.bind(this);
    }

    render() {
        return (
            <div>
                <Grid rows={this.state.rows} />
                <button id="step-forward"
                        onClick={this._onStepForwardClicked}>
                    Step
                </button>
                <button id="auto-step"
                        onClick={this._onStartAutoStepClicked}>
                    GO
                </button>
            </div>
        );
    }

    _onStepForwardClicked() {
        this._stepForward();
    }

    _onStartAutoStepClicked() {
        this.startTimerFn(this._stepForward);
    }

    _stepForward() {
        const toModel = rows => rows.map(row => row.map(cell => cell.isAlive));

        const toViewModel = rows => rows.map((row, rowIndex) =>
            row.map((cellIsAlive, columnIndex) => ({ 
                isAlive: cellIsAlive,
                id: (rowIndex * 100) + columnIndex
            })));

        const model = toModel(this.state.rows);
        const newModel = simulate(model);
        const newViewModel = toViewModel(newModel);

        this.setState({ rows: newViewModel });
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

Game.propTypes = {
    startTimerFn: PropTypes.func
}

export default Game;