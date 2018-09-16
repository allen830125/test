import {shallow} from 'vue-test-utils'
import simple from '../../public/js/Vue/simple';
import flushPromises from 'flush-promises';

describe('simple', () => {
    let wrapper, vm;
    beforeEach(() => {
        wrapper = shallow(simple);
        vm = wrapper.vm;
        vm.post = function () {
            return new Promise(res => {
                res(data);
            });
        }
    });

    test("methods sum", () => {
        wrapper.setData({
            one: 1,
            two: 2
        });
        vm.submit();
        wrapper.vm.$nextTick(() => {
            expect(vm.sum).toEqual(3);
            done()
        })

    });
});