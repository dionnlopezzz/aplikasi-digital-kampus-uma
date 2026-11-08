const test = require("node:test");
const assert = require("node:assert");
const { hitungTagihan } = require("./script");

test("tanpa beasiswa, tagihan sama dengan UKT", () => {
  assert.strictEqual(hitungTagihan(5000000), 5000000);
});

test("beasiswa 0%, tagihan sama dengan UKT", () => {
  assert.strictEqual(hitungTagihan(5000000, 0), 5000000);
});

test("beasiswa 50% memotong tagihan separuh", () => {
  assert.strictEqual(hitungTagihan(5000000, 50), 2500000);
});

test("beasiswa 90% dari 30 juta menjadi 3 juta", () => {
  assert.strictEqual(hitungTagihan(30000000, 90), 3000000);
});