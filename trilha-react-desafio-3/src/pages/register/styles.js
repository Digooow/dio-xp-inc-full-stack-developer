import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: var(--bg-primary);
`;

export const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 32px;
  background-color: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 8px;
  font-size: 24px;
  color: var(--text-primary);
`;

export const Subtitle = styled.p`
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 24px;
  font-size: 14px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ErrorMessage = styled.p`
  color: var(--danger);
  font-size: 14px;
  margin-top: -8px;
`;

export const SuccessMessage = styled.p`
  color: var(--success);
  text-align: center;
  font-size: 14px;
  margin-top: -8px;
`;

export const LinkLogin = styled.p`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
  color: var(--text-secondary);

  span {
    color: var(--link-color);
    cursor: pointer;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;