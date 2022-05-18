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
import { addNewContact } from '../../services/api/newContact';

export default function ContactForm({ type, contactToEdit }) {
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

  async function handleCreateNewContact() {
    setIsButtonLoading(true);
    const response = await addNewContact({ name, phone });
    await delay(500);
    setIsButtonLoading(false);
    setIsButtonChecked(true);
    await delay(200);
    console.log(response);
    refreshPage();
  }

  function handleUpdateContact() {
    console.log('update contact');
  }

  return (
    <Container isButtonSpinning={isButtonLoading} isButtonChecked={isButtonChecked}>
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
          {/* {isButtonLoading ? <Spinner size={32} className="spinner" /> : 'Cadastrar'} */}
          {!isButtonChecked
            ? isButtonLoading ? <Spinner size={32} className="spinner" /> : 'Cadastrar'
            : <Check size={32} /> }
        </Button>
      ) : (
        <Button
          onClick={handleUpdateContact}
          type="button"
          disabled={!isFormValid}
        >
          {isButtonLoading ? <Spinner /> : 'Atualizar dados'}

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
