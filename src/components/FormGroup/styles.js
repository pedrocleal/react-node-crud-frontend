import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  span {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.red};
  }
`;
