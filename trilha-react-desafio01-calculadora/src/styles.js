import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1e1e1e;  
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Content = styled.div`
    background-color: #2d2d2d;
    width: 350px;               
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.5);
`;

export const Row = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
    justify-content: center;
`;

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const Button = styled.button`
    flex: 1;
    padding: 20px;
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    background: #f0f0f0;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background: #ddd;
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const Input = styled.div`
    background: #222;
    color: #0f0;
    font-size: 2rem;
    text-align: right;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 15px;
    font-family: monospace;
    min-height: 60px;
`;