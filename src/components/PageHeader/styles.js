import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    
    span {
      margin-left: 4px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.purple};
    }
  }

  p {
    font-size: 24px;
    font-weight: bold;
    margin-top: 8px;
  }
`;
