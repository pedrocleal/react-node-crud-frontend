import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.grey};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};

  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  outline: none;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s ease;
  appearance: none;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.purple}
  }

  ${({ error }) => error && css`
    color: ${({ theme }) => theme.colors.red};
    border-color: ${({ theme }) => theme.colors.red} !important;
  `}
`;
