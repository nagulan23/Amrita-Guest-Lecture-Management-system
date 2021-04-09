import React from 'react';
import { Enzyme, EnzymeAdapter, shallow} from 'enzyme';
import  Home from './home';
import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';

configure({adapter: new Adapter() });

describe('home', () => {
    const wrapper = shallow(<Home.WrappedComponent/>);

    it('checking type to be user', () => {
        expect(wrapper.state('type')).toBe('user');
    });

    it('checking section id', () => {
        expect(wrapper.state('section')).toBe(1);
    });


    

      it('Checking count getdata',async () => {
        const wrapper2 = shallow(<Home.WrappedComponent/>);
        const instance=wrapper2.instance();
        var orgdata=wrapper.state().count;
        
        localStorage.setItem('userID',"jFRWF4kP5HfyPNgDyJUiG83Oc8k1");
        await instance.getdata();
        var data=wrapper.state().count;
        var c=0;
        for(var key in data)
            c++;
        expect(c).toBe(0);
        localStorage.clear();
      });

      it('checking My registration page', () => {
        
        (wrapper.find('reg123'));
    });

    it('checking Navbar', () => {
        (wrapper.find('nav123'));
    });

    it('checking on Going lectures', () => {
        (wrapper.find('ong123'));
    });

    it('checking Upcoming lectures', () => {
        (wrapper.find('up123'));
    });

    it('checking Past lectures', () => {
        (wrapper.find('past123'));
    });
      
})