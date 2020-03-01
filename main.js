// ---------------------------------------------------------------------------
// LOGIC
// ---------------------------------------------------------------------------
const arr = [];
for (let i = 0; i < 100000; i++) arr.push(i);

function performanceTest(callback) {
    const a1 = performance.now();
    callback();
    const a2 = performance.now();
    return a2 - a1;
}

let case01wins = 0;
let case02wins = 0;
const NUM_OF_TESTS = 100;
for (let i = 0; i < NUM_OF_TESTS; i++) {
    const testA = performanceTest(case01);
    const testB = performanceTest(case02);

    let winner = "";
    if (testA > testB) {
        winner = "FIRST";
        case01wins++;
    } else {
        winner = "SECOND";
        case02wins++;
    }
    const winnerBy = Math.abs(testA - testB);
    const str = `${winner} wins by ${winnerBy} ms`;
    console.log(str);
}
console.log("----------------------------");
console.log("CASE_01 wins ->", case01wins, "out of", NUM_OF_TESTS);
console.log("CASE_02 wins ->", case02wins, "out of", NUM_OF_TESTS);

// ---------------------------------------------------------------------------
// TESTS
// ---------------------------------------------------------------------------
function case01() {
    const res1 = arr.filter(t => !(t % 2));
}

function case02() {
    const res2 = [];
    arr.forEach(t => (!(t % 2) ? res2.push(t) : null));
}
