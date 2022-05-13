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

  .container {
    padding: 24px;
  }
`;

export const ModalFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
