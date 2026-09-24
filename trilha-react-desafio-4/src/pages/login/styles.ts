import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 50px auto;
  padding: 32px 28px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', sans-serif;

  h2 {
    text-align: center;
    margin-bottom: 24px;
    color: #1a1a1a;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;

  a {
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
