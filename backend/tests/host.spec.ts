import { getHostName } from "../utils";

describe("Host name", () => {
  it("should return the correct hostname", () => {
    expect(getHostName()).toBeTruthy();
  });
});
