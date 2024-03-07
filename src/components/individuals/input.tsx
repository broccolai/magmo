import { createSignal, Setter, Signal } from 'solid-js';
import { styled } from '@panda/jsx';

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

const StyledLabel = styled('label', {
  base: {
    display: 'block',
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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {/*<StyledLabel for={props.id}>{props.label}</StyledLabel>*/}
      <StyledInput id={props.id} type='text' value={value()} onChange={handleChange} placeholder={props.placeholder} />
    </div>
  );
};
