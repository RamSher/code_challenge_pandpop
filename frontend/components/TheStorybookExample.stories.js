import { storiesOf } from '@storybook/vue';
import TheStorybookExample from './TheStorybookExample';

/*
    Here is the place where you can add example props
    to the component to see/show it in different states
*/
storiesOf('TheStorybookExample', module)
    .add('Empty input', () => ({
        components: { TheStorybookExample },
        template: '<TheStorybookExample placeholder="placeholder test" />',
    }))
    .add('Prefilled value', () => ({
        components: { TheStorybookExample },
        template: '<TheStorybookExample value="Prefilled value" />',
    }));
