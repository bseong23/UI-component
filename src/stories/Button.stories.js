import { Button } from './Button';


export default {
  title: 'Component/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};


export const On = {
  args: {
    disabled: true,
    label: 'Button',
  },
};

export const Off = {
  args: {
    disabled: false,
    label: 'Button',
  },
};


export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Rounded = {
    args: {
        label: 'Button',
        shape: 'rounded',
    }
}
