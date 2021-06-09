import React from 'react';
import Enzyme , {shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MailLinkedin from './MailLinkedin';

Enzyme.configure({adapter : new Adapter() });
describe('MyComponent',() =>{
    it('Mail text component check',()=>{
        var space = "   ";
        var mail_id = "tesla@gmail.com";
        var out_mail_id = space.concat(mail_id);
        const wrapper = shallow(<MailLinkedin gmail="tesla@gmail.com" linkedin={mail_id}/>);
        const text = wrapper.find('.ltt_lect_info_mail_text');
        expect(text.text()).toBe(out_mail_id);
    });

    it('LinkedIn text component check',()=>{
        var linkedin_id = "elonmusk99";
        const wrapper = shallow(<MailLinkedin gmail="tesla@gmail.com" linkedin={linkedin_id}/>);
        const text = wrapper.find('.ltt_lect_info_linkedin_text');
        expect(text.text()).toBe(linkedin_id);
    });

    it('Empty Element check for LinkedIn component',()=>{
        var linkedin_id = "";
        const wrapper = shallow(<MailLinkedin gmail="tesla@gmail.com" linkedin={linkedin_id}/>);
        const text = wrapper.find('.ltt_lect_info_linkedin_text');
        expect(text.text()).toBe(linkedin_id);
    });

});