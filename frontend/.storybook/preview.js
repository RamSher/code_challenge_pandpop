import { configure } from '@storybook/vue';
import '../assets/css/tailwind.css';

const loadStories = function () {
    const req = require.context('../components', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
