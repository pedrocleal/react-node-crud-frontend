import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  HomeHeader, ListContacts, Card,
} from './styles';

import delay from '../../utils/delay';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';

import { Input } from '../../components/Input';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import { listContacts } from '../../services/api/listContacts';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const filteredContacts = contacts.filter(
    (contact) => contact.name.toUpperCase().includes(searchTerm.toUpperCase()),
  );

  useEffect(() => {
    async function getContacts() {
      const contactsList = await listContacts();
      await delay(500);
      setContacts(contactsList);
      setIsLoading(false);
    }

    getContacts();
  }, []);

  function handleOpenModal() {
    setIsModalOpen((prevState) => !prevState);
  }

  function HandleDeleteButtonClick(clickedId) {
    setIsModalOpen((prevState) => !prevState);
    const contact = contacts.find((item) => item.id === clickedId);
    setContactToDelete(contact);
  }

  return (
    <Container>

      {isLoading ? <Loader /> : null}

      {isModalOpen ? (
        <Modal
          isModalDanger
          contact={contactToDelete}
          onCloseModal={handleOpenModal}
        />
      ) : null}

      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pesquisar um contato..."
      />

      <HomeHeader>
        <span>
          {filteredContacts.length}
          {' '}
          {filteredContacts.length !== 1 ? 'contatos' : 'contato'}
        </span>
        <Link to="/new">Novo contato</Link>
      </HomeHeader>

      <hr />

      <ListContacts>
        {filteredContacts.map((contact) => (
          <Card key={contact.id}>
            <div className="contact-info">
              <p>{contact.name}</p>
              <span>{contact.phone}</span>
            </div>
            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="Edit button" />
              </Link>
              <button onClick={() => HandleDeleteButtonClick(contact.id)} type="button">
                <img src={trash} alt="Delete button" />
              </button>
            </div>
          </Card>
        ))}
      </ListContacts>

    </Container>
  );
}
