import React from 'react';
import { FiBell, FiSearch, FiBox } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, NavigationBar } from './styles';

const Nav: React.FC = () => (
  <NavigationBar>
    <Container>
      <Link to="/dashboard">
        <FiBox size={22} />
      </Link>
      <button type="button">
        <FiBell size={22} />
      </button>
      <button type="button">
        <FiSearch size={22} />
      </button>
      <button type="button">
        <span>Lucas Giraldelli</span>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQE2xaMDdpb_iA/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=jrHqPBYhQNgX93dYnAhFK8waAOtLADsyE8CEaGBqQ-c"
          alt="PhotoProfile"
        />
      </button>
    </Container>
  </NavigationBar>
);

export default Nav;
