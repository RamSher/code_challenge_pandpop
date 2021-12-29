import { mount } from '@vue/test-utils';
import TheStorybookExample from '~/components/TheStorybookExample';

test('displays message', () => {
    const wrapper = mount(TheStorybookExample);
    expect(wrapper.text()).toContain('Example input');
});
