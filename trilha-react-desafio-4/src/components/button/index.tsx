import React from 'react';
import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <S.StyledButton {...rest}>{children}</S.StyledButton>; 
};

export default Button;