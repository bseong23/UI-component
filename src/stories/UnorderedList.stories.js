import React from 'react';
import { UnorderedList } from './UnorderedList';

export default {
    title: 'Component/UnorderedList',
    component: UnorderedList,
    tags: ['autodocs'],
};

const Template = (args) => <UnorderedList {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    listStyle: "basic",
    items: [
        { id: 1, label: 'item1' },
        { id: 2, label: 'item2' },
        { id: 3, label: 'item3' },
    ],
};

export const Line = Template.bind({});
Line.args = {
    listStyle: "line",
    items: [
        { id: 1, label: 'item1' },
        { id: 2, label: 'item2' },
        { id: 3, label: 'item3' },
    ],
};

export const None = Template.bind({});
None.args = {
    listStyle: "none",
    items: [
        { id: 1, label: 'item1' },
        { id: 2, label: 'item2' },
        { id: 3, label: 'item3' },
    ],
};