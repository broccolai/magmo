import { styled } from '@panda/jsx';
import { Signal } from 'solid-js';

const StyledInput = styled('input', {
  base: {
    border: '2px solid black',
    padding: '0.5rem',
    width: '100%',

    _focus: {
      outline: 'none',
      borderColor: 'purple',
    },
  },
});

interface InputProps {
  id: string;
  label: string;
  signal: Signal<string>;
  placeholder: string;
}

export const Input = (props: InputProps) => {
  const [value, setValue] = props.signal;

  return (
    <StyledInput
      id={props.id}
      type='text'
      value={value()}
      placeholder={props.placeholder}
      onChange={(event) => {
        setValue(event.target.value);
      }}
    />
  );
};
