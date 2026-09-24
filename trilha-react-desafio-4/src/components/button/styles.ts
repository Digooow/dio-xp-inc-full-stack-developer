import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;