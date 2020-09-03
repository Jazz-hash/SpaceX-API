import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import About from ".";

describe("Render About component", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => (container = shallow(<About />)));

  it("should render a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
  it("should render a h1, h4 with information of SpaceX", () => {
    expect(container.find("h1").length).toEqual(1);
    expect(container.find("h1").text()).toBe("About");
    expect(container.find("h4").length).toEqual(1);
  });
});
