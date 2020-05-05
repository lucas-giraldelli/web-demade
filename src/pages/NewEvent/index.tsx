import React from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import {
  FiHash,
  FiPlay,
  FiGift,
  FiDollarSign,
  FiMaximize2,
} from 'react-icons/fi';
import Nav from '../../components/Nav';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, CreateEventSection } from './styles';

function handleSubmit(data: object): void {
  console.log(data);

  const url = window.location.href.split('/');

  url.pop();

  window.location.href = `${url.join('/')}/trackevent`;
}

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Nav />
      <h1>Novo evento</h1>
      <CreateEventSection>
        <Form id="createNewEvent" onSubmit={handleSubmit}>
          <div className="primaryDiv">
            <h1>
              Descreva sobre o seu evento online para você acompanhar as
              entregas.
            </h1>

            <Input
              type="text"
              name="eventName"
              icon={FiPlay}
              placeholder="Nome do evento"
            />

            <Input
              type="number"
              name="eventPeoples"
              icon={FiHash}
              placeholder="Quantidade de pessoas"
            />
          </div>
          <div className="secondDiv">
            <h1>
              Descreva sobre o seu evento online para você acompanhar as
              entregas.
            </h1>

            <Input
              type="text"
              name="eventGiftName"
              icon={FiGift}
              placeholder="Nome do presente"
            />

            <Input
              type="text"
              name="eventGiftDimensions"
              icon={FiMaximize2}
              placeholder="Dimensões do presente"
            />

            <Input
              type="number"
              name="eventGiftPrice"
              icon={FiDollarSign}
              placeholder="Preço do presente"
            />
          </div>
        </Form>
        <Button type="submit" form="createNewEvent">
          Finalizar
        </Button>
      </CreateEventSection>
    </Container>
  );
};

export default Dashboard;
