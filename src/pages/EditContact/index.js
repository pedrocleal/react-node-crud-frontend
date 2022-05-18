import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

import Loader from '../../components/Loader';
import delay from '../../utils/delay';

export default function EditContact() {
  const [contactToEdit, setContactToEdit] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  // find contact by Id
  useEffect(() => {
    fetch(`http://localhost:3030/contacts/${id}`)
      .then(async (res) => {
        const contact = await res.json();
        await delay(500);
        setContactToEdit(contact);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <PageHeader text={`Editando ${contactToEdit.name}...`} />
      <ContactForm
        buttonText="Atualizar dados"
        type="EDIT"
        contactToEdit={contactToEdit}
      />
    </>
  );
}
