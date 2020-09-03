import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Footer from "./index";

describe("Render About component", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => (container = shallow(<Footer />)));

  it("should render a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
  it("should render a h6, span for Footer text", () => {
    expect(container.find("h6").length).toEqual(1);
    expect(container.find("span").length).toEqual(1);
  });
});
