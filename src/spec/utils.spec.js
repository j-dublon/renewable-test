const { expect } = require("chai");
const { filter } = require("../utils/utils");

describe("filter", () => {
  it("should return an empty object when passed an empty object", () => {
    expect(filter({})).to.deep.equal({});
  });
});
