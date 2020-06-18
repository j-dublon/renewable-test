const { expect } = require("chai");
const { filter } = require("../utils/utils");

describe("filter", () => {
  it("should return an empty array when passed an empty array", () => {
    expect(filter([])).to.deep.equal([]);
  });
  it("should return a new array", () => {
    const state = [];
    expect(filter(state)).not.to.equal(state);
  });
  it("when passed a single letter should return only items that contain that letter", () => {
    const state = [{ name: "Jodi" }, { name: "Simon" }, { name: "Jack" }];
    expect(filter(state, "s")).to.deep.equal([{ name: "Simon" }]);
  });
});
