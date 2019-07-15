import simulate from "./simulation";

[0, 1].forEach(numLiveNeighbours => {
    it("Any live cell with fewer than two live neighbours dies", () => {
        const originalGrid = [
            [false, false, false],
            [false, true, false],
            [false, false, false]
        ];
        for (let i = 0; i < numLiveNeighbours; ++i) {
            originalGrid[0][i] = true;
        }

        const nextGrid = simulate(originalGrid);

        expect(nextGrid[1][1]).toBe(false);
    })
});

[2, 3].forEach(numLiveNeighbours =>
    it("Any live cell with two or three live neighbours lives on", () => {
        const originalGrid = [
            [false, false, false],
            [false, true, false],
            [false, false, false]
        ];
        for (let i = 0; i < numLiveNeighbours; ++i) {
            originalGrid[0][i] = true;
        }

        const nextGrid = simulate(originalGrid);

        expect(nextGrid[1][1]).toBe(true);
    })
);

it("Any live cell with more than three live neighbours dies", () => {
    const originalGrid = [
        [true, true, true],
        [false, true, false],
        [false, true, false]
    ];

    const nextGrid = simulate(originalGrid);

    expect(nextGrid[1][1]).toBe(false);
});

it("Any dead cell with three live neighbours becomes a live cell", () => {
    const originalGrid = [
        [true, true, true],
        [false, false, false],
        [false, false, false]
    ];

    const nextGrid = simulate(originalGrid);

    expect(nextGrid[1][1]).toBe(true);
});
