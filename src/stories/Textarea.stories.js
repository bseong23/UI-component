import { Textarea } from './Textarea';


export default {
  title: 'Component/Textarea',
  component: Textarea,
  parameters: {layout: 'centered'},
  tags: ['autodocs'],
};


export const Basic = {
  args: {
    disabled: false,
  },
};

export const Disabled = {
    args: {
        disabled: true,
    }
}

export const Large = {
  args: {
    size: 'large',
  },
};