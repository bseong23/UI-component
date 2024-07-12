import { Input } from './InputElem';


export default {
  title: 'Component/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
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

export const Rounded = {
    args: {
        shape: 'rounded',
    }
}
