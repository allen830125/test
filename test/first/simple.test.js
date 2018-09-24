import {shallow} from 'vue-test-utils'
import simple from '../../public/js/Vue/simple';
import flushPromises from 'flush-promises';

jest.mock('axios');

describe('simple', () => {
    let wrapper, vm;
    beforeEach(() => {
        wrapper = shallow(simple);
        vm = wrapper.vm;
    });

    test("methods sum", (done) => {
        wrapper.setData({
            one: 2,
            two: 4
        });
        vm.submit();
        wrapper.vm.$nextTick(() => {
            expect(vm.sum).toEqual(6);
            done()
        })

    });
});