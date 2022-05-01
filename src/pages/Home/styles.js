import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputSearchContainer = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.grey};
  border: none;
  outline: none;
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  color: #fff;

  &::placeholder {
    color: #525252;
  }
`;
