import numAliveNeighbours from "./neighbours";

describe("counting the number of alive neighbours a cell has", () => {

    describe("when no neighbours are alive", () => {
        const rows = [
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ];

        it("then the count is 0", () => {
            expect(numAliveNeighbours(1, 1, rows)).toBe(0);
        });
    });

    describe("when all neighbours are alive", () => {
        const rows = [
            [true, true, true],
            [true, false, true],
            [true, true, true]
        ];

        it("then the count is 8", () => {
            expect(numAliveNeighbours(1, 1, rows)).toBe(8);
        });
    });

    describe("when vertical neighbours are alive", () => {
        const rows = [
            [true,  true,  true],
            [false, false, false],
            [false, false, false]
        ];

        it("then the count only includes those alive neighbours", () => {
            expect(numAliveNeighbours(1, 1, rows)).toBe(3);
        });
    });

    describe("when horizontal neighbours are alive", () => {
        const rows = [
            [true, false, false],
            [true, false, false],
            [true, false, false]
        ];

        it("then the count only includes those alive neighbours", () => {
            expect(numAliveNeighbours(1, 1, rows)).toBe(3);
        });
    });

    describe("when diagonal neighbours are alive", () => {
        const rows = [
            [false, true],
            [false, false],
        ];

        it("then the count only includes those alive neighbours", () => {
            expect(numAliveNeighbours(0, 1, rows)).toBe(1);
        });
    });

    [
        [ 0, 0 ],
        [ 1, 0 ],
        [ 2, 0 ],
        [ 0, 1 ],
        [ 2, 1 ],
        [ 0, 2 ],
        [ 1, 2 ],
        [ 2, 2 ]
    ]
    .forEach(([ columnIndex, rowIndex ]) => {
        it("neighbours from all directions are counted", () => {
            const rows = [
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ];
            rows[rowIndex][columnIndex] = true;

            const result = numAliveNeighbours(1, 1, rows);

            expect(result).toBe(1);
        });
    });

    [
        [ 0, 0 ],
        [ 1, 0 ],
        [ 2, 0 ],
        [ 0, 1 ],
        [ 2, 1 ],
        [ 0, 2 ],
        [ 1, 2 ],
        [ 2, 2 ]
    ]
    .forEach(([ columnIndex, rowIndex ]) => {
        it("neighbours still counted when cell is on the edge of the grid", () => {
            const rows = [
                [false, false, false],
                [false, true, false],
                [false, false, false]
            ];

            const result = numAliveNeighbours(columnIndex, rowIndex, rows);

            expect(result).toBe(1);
        });
    });
});