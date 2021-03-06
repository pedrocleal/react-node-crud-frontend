import PropTypes, { arrayOf } from 'prop-types';
import ReactDom from 'react-dom';

import { Spinner } from 'phosphor-react';
import { useState } from 'react';
import { Overlay, ModalFooter, Container } from './styles';

import { Button } from '../Button';
import { deleteContact } from '../../services/api/deleteContact';

import delay from '../../utils/delay';

export default function Modal({
  isModalDanger,
  contact,
  onCloseModal,
}) {
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const { id } = contact;

  async function handleDeleteContact(contactId) {
    setIsButtonLoading(true);
    await deleteContact(contactId);
    await delay(500);
    setIsButtonLoading(false);
    onCloseModal();
  }

  return ReactDom.createPortal(
    <Overlay>
      <Container danger={isModalDanger}>

        {isModalDanger ? (
          <>
            <h1>
              Tem certeza que deseja remover o contato
              {' '}
              {contact.name}
              ?

            </h1>
            <p>Esta ação não pode ser desfeita!</p>

            <ModalFooter danger={isModalDanger}>
              <Button
                type="button"
                className="cancel-button"
                onClick={onCloseModal}
              >
                Cancelar

              </Button>
              <Button
                danger={isModalDanger}
                type="button"
                className="confirm-button"
                onClick={() => handleDeleteContact(id)}
              >
                {isButtonLoading ? (
                  <>
                    <Spinner size={32} className="spinner" />
                  </>
                ) : (
                  <>
                    {isModalDanger ? 'Deletar' : 'Confirmar'}
                  </>
                )}
              </Button>
            </ModalFooter>
          </>
        ) : (
          <>
            <h1>Titulo do modal</h1>
            <p>Corpo do modal</p>

            <ModalFooter danger={isModalDanger}>
              <Button
                type="button"
                className="cancel-button"
                onClick={onCloseModal}
              >
                Cancelar

              </Button>
              <Button>
                {isButtonLoading ? (
                  <>
                    <Spinner size={32} className="spinner" />
                  </>
                ) : (
                  <>
                    {isModalDanger ? 'Deletar' : 'Confirmar'}
                  </>
                )}
              </Button>
            </ModalFooter>
          </>
        )}

      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  isModalDanger: PropTypes.bool,
  contact: PropTypes.shape(arrayOf),
};

Modal.defaultProps = {
  isModalDanger: null,
  contact: null,
};
