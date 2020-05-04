import React from 'react';

import Nav from '../../components/Nav';
import { Container, TrackEventSection } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <Nav />
    <h1>Acompanhar entregas do evento #MegaHack 2.0</h1>
    <TrackEventSection />
  </Container>
);

export default Dashboard;
