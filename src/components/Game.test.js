import React from "react";
import Game from "./Game";
import Grid from "./Grid";
import { mount } from "enzyme";

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

function renderGame() {
    return mount(<Game />);
}