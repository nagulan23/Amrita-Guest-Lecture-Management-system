import Header from "./header.js";
import React from "react";
import { Enzyme, EnzymeAdapter, shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("Checking roll number getdata", async () => {
    const wrapper = shallow(<Header.WrappedComponent />);
    const instance = wrapper.instance();
    var orgdata = wrapper.state().roll_no;
    expect(orgdata).toBe("Loading...");
    localStorage.setItem("userID", "jFRWF4kP5HfyPNgDyJUiG83Oc8k1");
    await instance.getdata();
    var orgdata = wrapper.state().roll_no;
    expect(orgdata).toBe("cb.en.u4cse18135");
    localStorage.clear();
  });
});

describe("<Header />", () => {
  it("Checking roll number getdata", async () => {
    const wrapper = shallow(<Header.WrappedComponent />);
    const instance = wrapper.instance();
    var orgdata = wrapper.state().roll_no;
    expect(orgdata).toBe("Loading...");
    localStorage.setItem("userID", "Aaaoa9S8vLOR1DzkpanCcNaMH3G3");
    await instance.getdata();
    var orgdata = wrapper.state().roll_no;
    expect(orgdata).toBe("Guest User");
    localStorage.clear();
  });
});

describe("<Header />", () => {
  it("Checking roll number getdata", async () => {
    const wrapper = shallow(<Header.WrappedComponent />);
    const instance = wrapper.instance();
    var orgdata = wrapper.state().roll_no;
    expect(orgdata).toBe("Loading...");
    localStorage.setItem("userID", "UwkudJJO1HO7Z50pOGgI7ODcPhw1");
    await instance.getdata();
    var orgdata = wrapper.state().roll_no;
    expect(orgdata).toBe("ADMIN");
    localStorage.clear();
  });
});
