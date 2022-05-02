import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    width: 100%;
    margin-top: 32px;
    background: ${({ theme }) => theme.colors.grey};
    height: 2px;
    border: none;
  }
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

export const HomeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 52px;
  width: 100%;

  span {
    font-size: 24px;
    font-weight: bold;
  }

  /* Novo contato */
  a {
    padding: 8px 16px;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.purple};
    font-size: 18px;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.purple};
    border-radius: 8px;
  }
`;

export const ListContacts = styled.div`
  margin-top: 32px;
  width: 100%;
  max-width: 500px;
`;

export const Card = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.styles.boxShadow};

  display: flex;
  align-items: center;
  justify-content: space-between;

  .contact-info {
    p {
      font-size: 18px;
      font-weight: bold;
    }

    span {
      display: block;
      margin-top: 8px;
      color: ${({ theme }) => theme.colors.purple};
      font-weight: bold;
    }
  }

  .actions * {
    margin-left: 4px;
  }
`;
