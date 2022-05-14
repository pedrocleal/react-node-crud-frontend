import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function NewContact() {
  return (
    <>
      <PageHeader text="Novo Contato" />
      <ContactForm
        type="CREATE"
      />
    </>
  );
}
