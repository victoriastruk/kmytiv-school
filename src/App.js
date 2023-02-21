import React from 'react';
import Header from './components/Header';
import MainScreen from './components/MainScreen';
import About from './components/About';
import History from './components/History';
import Directions from './components/Directions';
import Activities from './components/Activities';

import './App.css';
import Collective from './components/Collective';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

const App = () => (
   
   <>
      <Header />
      <MainScreen />
      <About />
      <History />
      <Directions />
      <Collective />
      <Activities />  
      <Contacts />
      <Footer />
   </>

);

export default App;
