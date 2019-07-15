import React from "react";
import Grid from "./Grid";
import Cell from "./Cell";
import { shallow } from "enzyme";

describe("When a grid is rendered", () => {
    
    let renderedDom;

    beforeEach(() => {
        const rows = [
            [ { id:1, isAlive: true  }, { id:2, isAlive: false } ],
            [ { id:3, isAlive: false }, { id:4, isAlive: true  } ]
        ];
        renderedDom = renderGrid(rows);
    });

    it("Then it displays each cell", () => {
        const cells = renderedDom.find(Cell);
        expect(cells.length).toBe(4);
        expect(cells.at(0).prop("isAlive")).toBe(true);
        expect(cells.at(1).prop("isAlive")).toBe(false);
        expect(cells.at(2).prop("isAlive")).toBe(false);
        expect(cells.at(3).prop("isAlive")).toBe(true);
    })
})

function renderGrid(rows) {
    return shallow(<Grid rows={rows} />);
}