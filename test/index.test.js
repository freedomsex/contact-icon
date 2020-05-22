import { shallowMount } from '@vue/test-utils';
import Component from './../src/index.vue';

describe('Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Component, {
            propsData: {
                item: {
                    name: 'Sasha',
                    age: '23',
                    city: 'Moscow',
                },
            },
        }); 
    });

    it('Correct letter', () => { 
        let {randomIndex, colorIndex, color, source} = wrapper.vm;
        expect(wrapper.vm.letter).toBe('S');
        expect(wrapper.vm.colorIndex).toBe('deepPurple');
    });

    it('Correct default', () => {
        wrapper = shallowMount(Component, {
            propsData: {
                item: {},
            },
        }); 
        expect(wrapper.vm.colorIndex).toBe('deepOrange');
        wrapper = shallowMount(Component);
        expect(wrapper.vm.colorIndex).toBe('deepOrange');
    });
});
