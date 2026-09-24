import React from 'react';
import * as S from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <S.Wrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.StyledInput {...rest} hasError={!!error} />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Wrapper>
  );
};

export default Input;