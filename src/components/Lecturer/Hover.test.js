import React from 'react';
import Enzyme , {shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hover from './Hover';

var details={"data":{"url":"http://hello.com","title":"machine learning","date":"24-3-2021","des":"this lecture is about machine learning"}}

var empty_details={"data":{"url":"","title":"","date":"","des":""}}

Enzyme.configure({adapter : new Adapter() });
describe('MyComponent',() =>{
    it('Passing date value to ui component',()=>{
        const wrapper = shallow(<Hover data={details.data}/>);
        const text = wrapper.find('.HOVcontent-title');
        expect(text.text()).toBe(details.data.date);
    });

    it('Passing des value to ui component',()=>{
        const wrapper = shallow(<Hover data={details.data}/>);
        const text = wrapper.find('.HOVcontent-text');
        expect(text.text()).toBe(details.data.des);
    });

    it('Passing  title value to ui component',()=>{
        const wrapper = shallow(<Hover data={details.data}/>);
        const text = wrapper.find('.lectitle');
        expect(text.text()).toBe(details.data.title);
    });
    it('Passing empty date value to ui component',()=>{
        const wrapper = shallow(<Hover data={empty_details.data}/>);
        const text = wrapper.find('.HOVcontent-title');
        expect(text.text().length).toBe(0);
    });

    it('Passing empty des value to ui component',()=>{
        const wrapper = shallow(<Hover data={empty_details.data}/>);
        const text = wrapper.find('.HOVcontent-text');
        expect(text.text().length).toBe(0);
    });

    it('Passing empty title value to ui component',()=>{
        const wrapper = shallow(<Hover data={empty_details.data}/>);
        const text = wrapper.find('.lectitle');
        expect(text.text().length).toBe(0);
    });
});