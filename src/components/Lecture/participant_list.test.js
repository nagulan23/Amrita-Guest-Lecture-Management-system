import  ParticipantList  from './participant_list.js';
import React from 'react';
import { Enzyme, EnzymeAdapter, shallow,mount} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });

describe('<ParticipantList />', () => {
  it('Checking "No participants to display"',async () => {
    const wrapper = shallow(<ParticipantList registered={[]}/>);
    expect(wrapper.containsMatchingElement(<img src={"https://img.freepik.com/free-vector/group-college-university-students-hanging-out_74855-5251.jpg?size=626&ext=jpg"} alt=""/>)).toEqual(true);
  });
  it('Checking "If image is not displayed when participants are there"',async () => {
    const wrapper = shallow(<ParticipantList registered={["jFRWF4kP5HfyPNgDyJUiG83Oc8k1"]}/>);
    expect(wrapper.containsMatchingElement(<img src={"https://img.freepik.com/free-vector/group-college-university-students-hanging-out_74855-5251.jpg?size=626&ext=jpg"} alt=""/>)).toEqual(false);
  });
  /*it('Checking If email state is set when participants are there',async () => {
    const wrapper = shallow(<ParticipantList registered={["jFRWF4kP5HfyPNgDyJUiG83Oc8k1"]} lecture_id={"1"}/>);
    //await wrapper.instance().componentDidMount();
    //var email=wrapper.state()["email"];
    await new Promise((r) => setTimeout(r, 2000));
    console.log(wrapper.state().email[0]["email"]);
    expect(wrapper.state().email[0]["email"]).toBe("cb.en.u4cse18135@cb.students.amrita.edu");
  });*/

});