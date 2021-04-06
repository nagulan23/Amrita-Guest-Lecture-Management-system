import Lecture_card from "./lecture_card.js";
import React from "react";
import { Enzyme, EnzymeAdapter, shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
window.scrollTo = jest.fn();
describe("<Lecture_card />", () => {
  it("Checking movement to next page", () => {
    const historyMock = { push: jest.fn() };
    const wrapper = shallow(
      <Lecture_card.WrappedComponent
        history={historyMock}
        setDataLecture={jest.fn()}
        details={{
          regcount: "100",
          poster:
            "https://i2.wp.com/psychlearningcurve.org/wp-content/uploads/2019/12/skills.png?fit=1000%2C563",
          organizer: "Amrita Vishwa Vidhyapeetam",
          title: "Introduction to Psychology",
          about:
            "What are people most afraid of? What do our dreams mean? Are we natural-born racists? What makes us happy? What are the causes and cures of mental illness? This course tries to answer these questions and many others, providing a comprehensive overview of the scientific study of thought and behavior. It explores topics such as perception, communication, learning, memory, decision-making, persuasion, emotions, and social behavior.  We will look at how these aspects of the mind develop in children, how they differ across people, how they are wired-up in the brain, and how they break down due to illness and injury.",
          syllabus: [
            "Welcome to Introduction to Psychology",
            "Foundations",
            "Development and Language",
            "Cognition",
            "Self and others",
          ],
          requirements: ["All", "Every year", "None"],
          fee: "300",
          instructor: {
            name: "Dr. Gitanjali Natarajan",
            img:
              "https://www.amrita.edu/sites/default/files/styles/260x160/adaptive-image/public/faculty_images/gitanjali-n.jpg?itok=e2mmhRHV",
            position: "Licensed Clinical Psychologist",
          },
          geoinfo: {
            stdate: "2021/04/03",
            eddate: "2021/04/05",
            sttime: "09:00",
            edtime: "11:00",
            venue: "AB-1,Lecture hall-3",
            certificate: "E-Certificate",
          },
          lecture_id: "5",
          registered: [
            "ujGl7FVouFh2r75cWeRvEqj6CQR2",
            "cO77kwy785eXoSeoVgXgr81T3cq1",
          ],
        }}
      />
    );
    const instance = wrapper.instance();
    expect(instance.openLecture()).toBe("success");
  });
});

describe("<Lecture_card />", () => {
  it("Checking movement to next page", () => {
    const historyMock = { push: jest.fn() };
    const wrapper = shallow(
      <Lecture_card.WrappedComponent
        history={historyMock}
        setDataLecture={jest.fn()}
        details={{
          poster:
            "https://t3.ftcdn.net/jpg/02/66/33/82/360_F_266338299_wTr8tcMGNmjFbEJVnrkKXrrsHABMlqXY.jpg",
          title: "No Lectures to display right now!",
          geoinfo: {
            stdate: "",
            eddate: "",
            sttime: "",
            edtime: "",
            venue: "",
          },
        }}
      />
    );
    const instance = wrapper.instance();
    expect(instance.openLecture()).toBe("failure");
  });
});

describe("<Lecture_card />", () => {
    it("Checking movement to next page", () => {
      const historyMock = { push: jest.fn() };
      const wrapper = shallow(
        <Lecture_card.WrappedComponent
          history={historyMock}
          setDataLecture={jest.fn()}
          details={{
            regcount: "100",
            poster:
              "https://i2.wp.com/psychlearningcurve.org/wp-content/uploads/2019/12/skills.png?fit=1000%2C563",
            organizer: "Amrita Vishwa Vidhyapeetam",
            title: "Introduction to Psychology",
            about:
              "What are people most afraid of? What do our dreams mean? Are we natural-born racists? What makes us happy? What are the causes and cures of mental illness? This course tries to answer these questions and many others, providing a comprehensive overview of the scientific study of thought and behavior. It explores topics such as perception, communication, learning, memory, decision-making, persuasion, emotions, and social behavior.  We will look at how these aspects of the mind develop in children, how they differ across people, how they are wired-up in the brain, and how they break down due to illness and injury.",
            syllabus: [
              "Welcome to Introduction to Psychology",
              "Foundations",
              "Development and Language",
              "Cognition",
              "Self and others",
            ],
            requirements: ["All", "Every year", "None"],
            fee: "300",
            instructor: {
              name: "Dr. Gitanjali Natarajan",
              img:
                "https://www.amrita.edu/sites/default/files/styles/260x160/adaptive-image/public/faculty_images/gitanjali-n.jpg?itok=e2mmhRHV",
              position: "Licensed Clinical Psychologist",
            },
            geoinfo: {
              stdate: "2021/04/03",
              eddate: "2021/04/05",
              sttime: "09:00",
              edtime: "11:00",
              venue: "AB-1,Lecture hall-3",
              certificate: "E-Certificate",
            },
            lecture_id: "5",
            registered: [
              "ujGl7FVouFh2r75cWeRvEqj6CQR2",
              "cO77kwy785eXoSeoVgXgr81T3cq1",
            ],
          }}
        />
      );
      const instance = wrapper.instance();
      instance.openLecture();
      expect(global.scrollTo).toHaveBeenCalledWith(0, 0);
    });
  });