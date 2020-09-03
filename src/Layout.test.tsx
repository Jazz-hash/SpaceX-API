import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";

describe("Render Layout on every page", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;

  beforeEach(() => (container = shallow(<Layout children={<div></div>} />)));

  it("should render a div", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
  it("should render Header", () => {
    expect(container.containsMatchingElement(<Header />)).toEqual(true);
  });
  it("should render Footer", () => {
    expect(container.containsMatchingElement(<Footer />)).toEqual(true);
  });
});
