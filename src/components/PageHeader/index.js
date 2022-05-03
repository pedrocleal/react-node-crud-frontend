import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import arrow from '../../assets/images/arrow.svg';

export default function PageHeader({ text }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="Voltar" />
        <span>Voltar</span>
      </Link>
      <p>{text}</p>
    </Container>
  );
}

PageHeader.propTypes = {
  text: PropTypes.string.isRequired,
};
