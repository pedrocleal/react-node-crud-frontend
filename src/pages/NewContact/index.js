import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import { addNewContact } from '../../services/api/newContact';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        phone: formData.phone,
      };

      const response = await addNewContact(contact);

      console.log(response);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <PageHeader text="Novo Contato" />
      <ContactForm
        onSubmit={handleSubmit}
        buttonText="Adicionar contato"
      />
    </>
  );
}
