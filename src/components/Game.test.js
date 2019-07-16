import React from "react";
import Game from "./Game";
import Grid from "./Grid";
import { shallow } from "enzyme";

describe("When the Game is rendered", () => {
    let renderedDom;

    beforeEach(() =>  {
        renderedDom = renderGame();
    })

    it("Then it renders a grid", () => {
        const grid = renderedDom.find(Grid);
        expect(grid.length).toBe(1);
    })
});

describe("When the user steps forward the simulation", () => {
    let renderedDom;
    let initialGrid;

    beforeEach(() => {
        renderedDom = renderGame();
        initialGrid = renderedDom.find(Grid).props().rows;

        renderedDom.find("#step-forward").simulate("click");
    })

    it("Then the grid simulation steps forward", () => {
        expect(renderedDom.find(Grid).props().rows)
            .not.toBe(initialGrid);
    })
});

describe("When the user sets the simulation to automatically step", () => {
    let renderedDom;
    let mockTimerCallback;
    const createMockTimer = callback => mockTimerCallback = callback;

    beforeEach(() => {
        renderedDom = renderGame(createMockTimer);
        renderedDom.find("#auto-step").simulate("click");
    });

    it("Then the grid simulation steps forward every time the timer ticks", () => {
        let currentGrid;
        let previousGrid = renderedDom.find(Grid).props().rows;

        for (let step = 0; step < 5; ++step) {
            mockTimerCallback();

            currentGrid = renderedDom.find(Grid).props().rows
            expect(currentGrid)
                .not.toBe(previousGrid);

            previousGrid = currentGrid;
        }
    });
});

function renderGame(startTimerFn) {
    const dummyFunction = (() => {});
    return shallow(<Game startTimerFn={startTimerFn || dummyFunction} />);
}