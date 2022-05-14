import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;

  top: 0;
  left: 0;
  background: rgba(33, 33, 33, 0.6);
  backdrop-filter: blur(7px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.grey};
  border-radius: 8px;

  h1 {
    font-size: 22px;
    color: ${({ danger, theme }) => (danger ? theme.colors.red : '#fff')}
  }
`;

export const ModalFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .confirm-button {
    background: ${({ danger, theme }) => (danger ? theme.colors.red : theme.colors.purple)};
  
    &:hover {
      background: ${({ theme }) => theme.colors.red};
    }
  }

  .cancel-button {
    background: transparent;
    border: none;
    margin-right: 8px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.lightGrey};
  
    &:hover {
      background: transparent;
    }
  } 
`;
