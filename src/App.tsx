import React from 'react';

/* import SignIn from './pages/SigIn'; */
/* import Dashboard from './pages/Dashboard'; */
/* import NewEvent from './pages/NewEvent'; */
import TrackEvent from './pages/TrackEvent';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <TrackEvent />
    <GlobalStyle />
  </>
);

export default App;
