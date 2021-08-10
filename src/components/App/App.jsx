import React from 'react';

import Header from '../Header';

import STYLES from './App.scss';
import Flights from '../Flights';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <Flights></Flights>
    </main>
  </div>
);

export default App;
