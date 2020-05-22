import { shallowMount } from '@vue/test-utils';
import prng from './../src/prng.js';

describe('PRNG', () => {
    it('randomIndex', () => {  
        expect(prng.int('some', 0, 5)).toBe(2); 
    });
});
