import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';

import { Container, MenuSection } from './styles';

import imgNewEvent from '../../assets/new-event.png';
import imgDelivery from '../../assets/delivery.png';

const Dashboard: React.FC = () => (
  <Container>
    <Nav />
    <h1>Escolha uma opção</h1>
    <MenuSection>
      <Link to="/newevent">
        <img src={imgNewEvent} alt="newEvent" width={146} />
        <p>Novo evento</p>
      </Link>
      <Link to="/trackevent">
        <img src={imgDelivery} alt="Delivery" width={146} />
        <p>Acompanhar entrega</p>
      </Link>
    </MenuSection>
  </Container>
);

export default Dashboard;
