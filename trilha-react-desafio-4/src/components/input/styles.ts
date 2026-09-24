import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
`;

export const StyledInput = styled.input<{ hasError?: boolean }>`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }

  ${({ hasError }) =>
    hasError &&
    `
      border-color: #d32f2f;
      &:focus {
        border-color: #d32f2f;
        box-shadow: 0 0 0 2px rgba(211, 47, 47, 0.2);
      }
    `}
`;

export const ErrorMessage = styled.span`
  color: #d32f2f;
  font-size: 13px;
  margin-top: 4px;
`;