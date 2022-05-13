import ReactDom from 'react-dom';

import { Overlay, ModalFooter } from './styles';

import { Button } from '../Button';

export default function Modal() {
  return ReactDom.createPortal(
    <Overlay>
      <div className="container">
        <h1>Titulo do modal</h1>
        <p>Corpo do modal</p>
        <ModalFooter>
          <Button type="button">Cancelar</Button>
          <Button type="button">Confirmar</Button>
        </ModalFooter>
      </div>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
