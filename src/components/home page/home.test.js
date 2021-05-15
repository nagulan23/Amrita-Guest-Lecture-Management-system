import React from 'react';
import { Enzyme, EnzymeAdapter, shallow} from 'enzyme';
import  Home from './home';
import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';

configure({adapter: new Adapter() });

describe('home', () => {
    const wrapper = shallow(<Home.WrappedComponent />);

    it('checking section id', () => {
        expect(wrapper.state('section')).toBe(1);
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