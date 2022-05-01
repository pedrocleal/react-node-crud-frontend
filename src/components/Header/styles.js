import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 72px;
  text-align: center;

  h1 {
    font-weight: 900;
  }
  
  .purple {
    color: ${({ theme }) => theme.colors.purple}
  }
`;
