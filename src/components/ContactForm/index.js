import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import FormGroup from '../FormGroup';
import { Input } from '../Input';
import { Button } from '../Button';
import { Container } from './styles';

import useErrors from '../../hooks/useErrors';

import formatPhone from '../../utils/formatPhone';
import { addNewContact } from '../../services/api/newContact';

export default function ContactForm({ type, contactToEdit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setName(contactToEdit?.name || '');
    setPhone(formatPhone(contactToEdit?.phone || ''));
  }, [contactToEdit]);

  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = errors.length === 0 && name && phone;

  function handleNameInputChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório!' });
    } else {
      removeError('name');
    }
  }

  function handlePhoneInputChange(event) {
    setPhone(formatPhone(event.target.value));

    if (!event.target.value) {
      setError({ field: 'phone', message: 'Telefone é obrigatório!' });
    } else {
      removeError('phone');
    }
  }

  async function handleCreateNewContact() {
    const response = await addNewContact({ name, phone });
    console.log(response);
  }

  function handleUpdateContact() {
    console.log('update contact');
  }

  return (
    <Container>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          value={name}
          onChange={(event) => handleNameInputChange(event)}
          placeholder="Nome"
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('phone')}>
        <Input
          type="tel"
          maxLength={15}
          error={getErrorMessageByFieldName('phone')}
          value={phone}
          onChange={(event) => handlePhoneInputChange(event)}
          placeholder="Telefone"
        />
      </FormGroup>

      {type === 'CREATE' ? (
        <Button
          onClick={handleCreateNewContact}
          type="button"
          disabled={!isFormValid}
        >
          Cadastrar

        </Button>
      ) : (
        <Button
          onClick={handleUpdateContact}
          type="button"
          disabled={!isFormValid}
        >
          Atualizar dados

        </Button>
      )}
    </Container>
  );
}

ContactForm.propTypes = {
  type: PropTypes.string.isRequired,
  contactToEdit: PropTypes.shape({ name: PropTypes.string, phone: PropTypes.string }),
};

ContactForm.defaultProps = {
  contactToEdit: null,
};
