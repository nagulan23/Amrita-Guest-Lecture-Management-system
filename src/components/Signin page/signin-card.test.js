import React from 'react';
import { Enzyme, EnzymeAdapter, shallow} from 'enzyme';
import  Signin_Card from './signin-card';
import Adapter from 'enzyme-adapter-react-16';
import {configure} from 'enzyme';
import TestRenderer from 'react-test-renderer'; // ES6


configure({adapter: new Adapter() });

describe('signin-card', () => {
    const wrapper = shallow(<Signin_Card />);
    function Link(props) {
        return <a href={props.page}>{props.children}</a>;
      }
      
      const testRenderer = TestRenderer.create(
        <Link page="https://localhost:3000/">Login Page</Link>
        
      );
      
      console.log(testRenderer.toJSON());

      it('Renders correctly', () => {
        
        expect(TestRenderer).toMatchSnapshot();

    });

    it('Renders to home page', () => {
        const testRenderer = TestRenderer.create(
            <Link page="https://localhost:3000/home">Home Page</Link>
            
          );
          expect(TestRenderer).toMatchSnapshot();
      

    });

    it('Email and pwd box should be empty before entering the value', () => {
        expect(wrapper.state('email')).toEqual('');
        expect(wrapper.state('password')).toEqual('');

    });
    const signedIn=true;

    it('checking if the username and pwd is there', ()=> {
        //checking if the username and pwd box is there
        expect(wrapper.find('input#email_123'));
        expect(wrapper.find('input#pwd_123'));
    });

    it('should have a btn component for login', ()=> {
        
        const button=wrapper.find('button123');
        expect(('signedIn')).toBe("signedIn");

        (wrapper.find('button123'));
        expect(button.length).toBe(0);
    });


    it('Login pass ', ()=> {
        //wrapper2.find('button123').at(0).simulate('click');
        expect(signedIn).toBe(signedIn);

    });

    it('Sign Up successful', ()=> {
        const wrapper2 = shallow(<Signin_Card />);
        wrapper2.find('signtoggle-btn1');

    });


})