import React from 'react';
import { Controller } from 'react-hook-form';
import { InputContainer, InputText, IconContainer } from './styles';

const Input = ({ leftIcon, name, control, ...rest }) => {
  
  if (control) {
    return (
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
    );
  }

 
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText {...rest} />
    </InputContainer>
  );
};

export { Input };