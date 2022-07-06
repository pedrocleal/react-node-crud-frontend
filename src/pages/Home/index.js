import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  HomeHeader, ListContacts, Card, NotFoundContact, NewContactContainer,
} from './styles';

import delay from '../../utils/delay';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import noContactFound from '../../assets/images/magnifier-question.svg';
import emptyBox from '../../assets/images/empty-box.svg';

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
    (contact) => contact.name.toUpperCase().startsWith(searchTerm.toUpperCase()),
  );

  // Effect function to run on first render and when the contacts list change

  useEffect(() => {
    async function getContacts() {
      const contactsList = await listContacts();
      await delay(500);
      setContacts(contactsList);
      setIsLoading(false);
    }

    getContacts();
  }, [contacts]);

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

      {/* If does not have any contact */}

      {(contacts.length === 0 && !isLoading) ? (
        <NewContactContainer>
          <Link to="/new">Novo contato</Link>
          <hr />
          <img src={emptyBox} alt="Caixa vazia" />
          <p>
            Você ainda não tem nenhum contato cadastrado!
            {' '}
            <br />
            Clique no botão
            {' '}
            <strong>”Novo contato”</strong>
            {' '}
            acima para cadastrar o seu primeiro!
          </p>
        </NewContactContainer>
      ) : (
        <>
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
          {(filteredContacts.length === 0 && !isLoading) ? (
            <NotFoundContact>
              <img src={noContactFound} alt="No contact found" />
              <p>
                Nenhum resultado encontrado para
                {' '}
                <strong>
                  {searchTerm}
                </strong>
                .
              </p>
            </NotFoundContact>
          ) : (
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
          )}
        </>
      )}
    </Container>
  );
}
