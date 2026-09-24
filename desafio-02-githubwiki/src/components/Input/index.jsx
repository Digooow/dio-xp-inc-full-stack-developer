import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 10px 14px;
  color: var(--text-primary);
  font-size: 16px;
  width: 100%;
  max-width: 400px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: var(--link-color);
    box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.3);
  }

  &::placeholder {
    color: var(--text-muted);
  }
`;

function Input({ ...props }) {
  return <StyledInput {...props} />;
}

export default Input;