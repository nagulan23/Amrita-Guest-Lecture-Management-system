import  Lecture_add  from './lecture_add.js';
import React from 'react';
import { Enzyme, EnzymeAdapter, shallow,mount} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });

describe('<Lecture_add />', () => {
  it('Checking whether list of lecturers are displayed',async () => {
    const wrapper = shallow(<Lecture_add/>);
    await new Promise((r) => setTimeout(r, 3000));
    var options=wrapper.state().options;
    expect(wrapper.find(`[id='instructorList']`).length).toBe(options.length);
  });

  it('Checking text in form',async () => {
    const wrapper = shallow(<Lecture_add/>);
    wrapper.find(`[id='title']`).simulate('change', { target: { value: 'xyz' } })
    expect(wrapper.state().title).toBe('xyz');
    wrapper.find(`[id='organizer']`).simulate('change', { target: { value: 'xyz' } })
    expect(wrapper.state().organizer).toBe('xyz');
  });

  it('Checking list in form',async () => {
    const wrapper = shallow(<Lecture_add/>);
    wrapper.find(`[id='syllabus']`).simulate('change', { target: { value: 'x,y,z' } })
    expect(wrapper.state().syllabus.length).toBe(3);
    wrapper.find(`[id='departments']`).simulate('change', { target: { value: 'x,y,z' } })
    expect(wrapper.state().requirements[0]).toBe('x,y,z');
  });

  it('Checking requirements',async () => {
    const wrapper = shallow(<Lecture_add/>);
    wrapper.find(`[id='departments']`).simulate('change', { target: { value: 'x,y,z' } })
    expect(wrapper.state().requirements[0]).toBe('x,y,z');
    wrapper.find(`[id='year']`).simulate('change', { target: { value: 'x,y,z' } })
    expect(wrapper.state().requirements[1]).toBe('x,y,z');
    wrapper.find(`[id='topic']`).simulate('change', { target: { value: 'x,y,z' } })
    expect(wrapper.state().requirements[2]).toBe('x,y,z');
  });

  /*it('Checking date',async () => {
    const wrapper = shallow(<Lecture_add/>);
    wrapper.find(`[id='date']`).simulate('change', { target: { value: '2021-11-21' } })
    console.log(wrapper.state())
  });*/

});