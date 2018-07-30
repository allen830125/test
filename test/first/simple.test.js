import {shallow} from 'vue-test-utils'
import simple from '../../public/js/Vue/simple';

describe('simple', () => {
    let wrapper, vm;
    beforeEach(() => {
        wrapper = shallow(simple);
        vm = wrapper.vm;
    });

    test("methods sum", () => {
        wrapper.setData({
            one: 1,
            two: 2
        });
        vm.submit();
        expect(vm.sum).toEqual(3);
    });
});