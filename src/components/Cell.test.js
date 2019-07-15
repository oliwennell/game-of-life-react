import React from "react";
import Cell from "./Cell";
import { mount } from "enzyme";

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

    describe("And it is clicked", () => {

        beforeEach(() => {
            renderedDom.find("div").simulate("click");
        });

        it("Then it becomes dead", () => {
            const cellElements = renderedDom.find("div");
            expect(cellElements.text()).toBe('💀');
        })
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

    describe("And it is clicked", () => {

        beforeEach(() => {
            renderedDom.find("div").simulate("click");
        });

        it("Then it becomes alive", () => {
            const cellElements = renderedDom.find("div");
            expect(cellElements.text()).toBe('👾');
        })
    })
})

function renderCell(isAlive) {
    return mount(<Cell isAlive={isAlive} />);
}