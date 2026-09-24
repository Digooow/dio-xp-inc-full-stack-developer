import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #333;
`;

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #555;
    cursor: pointer;
  }
`;

export const ErrorText = styled.span`
  color: #d32f2f;
  font-size: 13px;
  margin-top: 2px;
`;