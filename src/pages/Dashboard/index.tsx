import React from 'react';

import Nav from '../../components/Nav';

import { Container, MenuSection } from './styles';

import imgNewEvent from '../../assets/new-event.png';
import imgDelivery from '../../assets/delivery.png';

const Dashboard: React.FC = () => (
  <Container>
    <Nav />
    <h1>Escolha uma opção</h1>
    <MenuSection>
      <a href="NewEvent">
        <img src={imgNewEvent} alt="newEvent" width={146} />
        <p>Novo evento</p>
      </a>
      <a href="delivery">
        <img src={imgDelivery} alt="Delivery" width={146} />
        <p>Novo evento</p>
      </a>
    </MenuSection>
  </Container>
);

export default Dashboard;
