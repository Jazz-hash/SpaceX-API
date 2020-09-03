import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Header from "./index";

describe("Render About component", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => (container = shallow(<Header />)));

  it("should render a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
  it("should render a nav, ul for navigation", () => {
    expect(container.find("nav").length).toEqual(1);
    expect(container.find("ul").length).toEqual(2);
  });
});
