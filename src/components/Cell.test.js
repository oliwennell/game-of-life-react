import React from "react";
import Cell from "./Cell";
import { shallow } from "enzyme";

describe("When an alive cell is rendered", () => {
    
    let renderedDom;

    beforeEach(() => {
        renderedDom = renderCell(true);
    });

    it("Then it displays an 'alive' emoji", () => {
        const cellElements = renderedDom.find("div");
        expect(cellElements.length).toBe(1);
        expect(cellElements.text()).toBe('👾')
    })
})

describe("When a dead cell is rendered", () => {

    let renderedDom;

    beforeEach(() => {
        renderedDom = renderCell(false);
    })

    it("Then it displays a 'dead' emoji", () => {
        const cellElements = renderedDom.find("div");
        expect(cellElements.length).toBe(1);
        expect(cellElements.text()).toBe('💀');
    })
})

function renderCell(isAlive) {
    return shallow(<Cell isAlive={isAlive} />);
}