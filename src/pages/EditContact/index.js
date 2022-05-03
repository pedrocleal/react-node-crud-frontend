import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function EditContact() {
  const [contactToEdit, setContactToEdit] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3030/contacts/${id}`)
      .then(async (res) => {
        const contact = await res.json();
        setContactToEdit(contact);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <PageHeader text={`Editando ${contactToEdit.name}...`} />
      <ContactForm buttonText="Atualizar dados" contactToEdit={contactToEdit} />
    </>
  );
}
