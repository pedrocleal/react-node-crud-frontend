import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  margin-top: 32px;
  width: 100%;
  max-width: 500px;
  
  .spinner {
    animation: ${spin} 2s linear infinite;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({ isButtonSpinning, isButtonChecked }) => (isButtonChecked || isButtonSpinning ? 'not-allowed' : 'pointer')}
  }
`;
