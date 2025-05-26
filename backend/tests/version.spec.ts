import { getVersion } from "../utils";

describe("Version", () => {
  it("should return the correct application version", () => {
    expect(getVersion()).toBeTruthy();
  });
});
