import { render } from "@testing-library/react";
import Button from ".";

console.error = jest.fn();
console.warn = jest.fn();

describe("Button", () => {
  it("renders", () => {
    render(<Button />)
    expect(console.warn).not.toBeCalled();
    expect(console.error).not.toBeCalled();
  });
});