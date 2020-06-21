load("test-common.js");

try {
    assert(isNaN(Math.log1p(-2)));
    assert(Math.log1p(-1) === -Infinity);
    assert(Math.log1p(0) === 0);
    assert(isClose(Math.log1p(1), 0.693147));


    console.log("PASS");
} catch (e) {
    console.log("FAIL: " + e);
}
