/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { Spinner, Check } from 'phosphor-react';
import FormGroup from '../FormGroup';
import { Input } from '../Input';
import { Button } from '../Button';
import { Container } from './styles';

import useErrors from '../../hooks/useErrors';

import delay from '../../utils/delay';
import formatPhone from '../../utils/formatPhone';

export default function ContactForm({ onSubmit, contactToEdit, buttonText }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isButtonChecked, setIsButtonChecked] = useState(false);

  useEffect(() => {
    setName(contactToEdit?.name || '');
    setPhone(formatPhone(contactToEdit?.phone || ''));
  }, [contactToEdit]);

  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = errors.length === 0 && name && phone;

  function refreshPage() {
    window.location = '/';
  }

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

  async function handleSubmit(event) {
    event.preventDefault();
    setIsButtonLoading(true);
    await delay(500);
    onSubmit({ name, phone });
    setIsButtonLoading(false);
    setIsButtonChecked(true);
    await delay(200);
    refreshPage();
  }

  return (
    <Container isButtonSpinning={isButtonLoading} isButtonChecked={isButtonChecked}>
      <form onSubmit={handleSubmit}>
        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input
            error={getErrorMessageByFieldName('name')}
            value={name}
            onChange={(event) => handleNameInputChange(event)}
            placeholder="Nome*"
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('phone')}>
          <Input
            type="tel"
            maxLength={15}
            error={getErrorMessageByFieldName('phone')}
            value={phone}
            onChange={(event) => handlePhoneInputChange(event)}
            placeholder="Telefone*"
          />
        </FormGroup>

        <Button disabled={!isFormValid}>
          {isButtonChecked ? (
            <Check />
          ) : isButtonLoading ? (
            <Spinner />
          ) : buttonText}
        </Button>
      </form>
    </Container>
  );
}

ContactForm.propTypes = {
  contactToEdit: PropTypes.shape(),
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ContactForm.defaultProps = {
  contactToEdit: null,
};
