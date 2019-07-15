import React from "react";
import Cell from "./Cell";
import { shallow } from "enzyme";

describe("When a cell is alive", () => {
    
    let renderedDom;

    beforeEach(() => {
        renderedDom = renderCell(true);
    });

    it("Then it displays an 'alive' emoji", () => {
        const cellElements = renderedDom.find("div");
        expect(cellElements).to.have.lengthOf(1);
        expect(cellElements[0].text()).toBe('👾')
    })
})

function renderCell(isAlive) {
    return shallow(<Cell isAlive={isAlive} />);
}