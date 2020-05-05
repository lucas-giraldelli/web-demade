import React from 'react';
import { FiSearch, FiAlertTriangle, FiCheck } from 'react-icons/fi';

import Nav from '../../components/Nav';
import Input from '../../components/Input';
import { Container, TrackEventSection } from './styles';

import itinearioIMG from '../../assets/itinerario.png';

const Dashboard: React.FC = () => (
  <Container>
    <Nav />
    <h1>Acompanhar entregas do evento #MegaHack 2.0</h1>
    <TrackEventSection>
      <aside>
        <header>
          <p>Mega Hack 2.0</p>
          <p>
            <span>4987</span>participantes
          </p>
        </header>
        <section>
          <div>
            <img src={itinearioIMG} alt="Itinerário" width={436} height={143} />
          </div>
          <p>
            <span>3008</span>entregues
          </p>
          <ul>
            <span>Informações do pacote</span>
            <li>1x Diamante de 5 Quilates</li>
            <li>5x Breja bem gelada</li>
            <li>1x Headphones Boss</li>
          </ul>
        </section>
      </aside>
      <div>
        <h2>Status de entregas</h2>
        <Input
          type="text"
          name="search"
          icon={FiSearch}
          placeholder="Pesquisar entrega"
        />
        <ul>
          <li>
            <FiAlertTriangle />
            <span>Lucas Giraldelli</span>
          </li>
          <li>
            <FiCheck />
            <span>Mikael Atala</span>
          </li>
          <li>
            <FiAlertTriangle />
            <span>Thaisa Galvao</span>
          </li>
          <li>
            <FiCheck />
            <span>Nicolau Atala</span>
          </li>
          <li>
            <FiAlertTriangle />
            <span>Matheus Jerico</span>
          </li>
          <li>
            <FiCheck />
            <span>Gabriel Giraldelli</span>
          </li>
          <li>
            <FiAlertTriangle />
            <span>Hugo Pelluzi</span>
          </li>
        </ul>
        <nav>1 - 2 - 3 -4...65</nav>
      </div>
    </TrackEventSection>
  </Container>
);

export default Dashboard;
