import { shallow } from "enzyme"
import React from "react";
import { Dropdown } from "../Dropdown"

describe('Dropdown', () => {
    test('should render', ()=> {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />} />);
        expect(wrapper).toBeDefined();
        
        expect( wrapper.find('div.container').isEmptyRender()).toBeFalsy();
    })
})