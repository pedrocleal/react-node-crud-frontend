import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  HomeHeader, ListContacts, Card,
} from './styles';

import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import { Input } from '../../components/Input';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [contacts, setContacts] = useState([]);

  const filteredContacts = contacts.filter(
    (contact) => contact.name.toUpperCase().includes(searchTerm.toUpperCase()),
  );

  useEffect(() => {
    fetch('http://localhost:3030/contacts')
      .then(async (response) => {
        const data = await response.json();
        setContacts(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>

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
              <Link to={`/delete/${contact.id}`}>
                <img src={trash} alt="Delete button" />
              </Link>
            </div>
          </Card>
        ))}
      </ListContacts>

    </Container>
  );
}
