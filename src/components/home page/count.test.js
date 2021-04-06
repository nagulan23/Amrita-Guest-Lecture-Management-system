//import { render, screen } from '@testing-library/react';
//import CountBox from 'src/components/home pages/count'
//const App = require('./App.js')
import  CountBox  from './count.js';
import React from 'react';
import { Enzyme, EnzymeAdapter, shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });

describe('<CountBox />', () => {
  it('Checking count getdata',async () => {
    const wrapper = shallow(<CountBox />);
    const instance=wrapper.instance();
    var orgdata=wrapper.state().count;
    var c=0;
    for(var key in orgdata)
        if(orgdata[key]===0)
            c++;
    expect(c).toBe(3);
    localStorage.setItem('userID',"jFRWF4kP5HfyPNgDyJUiG83Oc8k1");
    await instance.getdata();
    var data=wrapper.state().count;
    var c=0;
    for(var key in data)
        c++;
    expect(c).toBe(3);
    localStorage.clear();
  });
});
