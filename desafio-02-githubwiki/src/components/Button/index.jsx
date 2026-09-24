import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === 'secondary' ? 'var(--bg-tertiary)' : '#238636'};
  color: ${(props) =>
    props.variant === 'secondary' ? 'var(--text-primary)' : '#fff'};
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'secondary' ? 'var(--bg-secondary)' : '#2ea043'};
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;