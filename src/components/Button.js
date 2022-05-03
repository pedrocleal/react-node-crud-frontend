import styled from 'styled-components';

export const Button = styled.button`
  padding: 16px;
  height: 52px; 
  width: 100%;
  margin-top: 32px;
  background: ${({ theme }) => theme.colors.purple};
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background: #8425FF;
  }

  &:disabled {
    background: #7C7C7C;
    color: #ddd;
    cursor: not-allowed;
  }
`;
