import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import Header from './components/Header';
import MainScreen from './components/MainScreen';
import About from './components/About';
import History from './components/History';
import Directions from './components/Directions';
import Activities from './components/Activities';
import Collective from './components/Collective';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';

import './App.css';

const App = () => (
   < ThemeProvider
   breakpoints = { [ 'xxxl' ,  'xxl' ,  'xl' ,  'lg' ,  'md' ,  'sm' ,  'xs' ,  'xxs' ] }
   minBreakpoint = " xxs "
 > 
  <>
      <Header />
      <MainScreen />
      <About />
      <History />
      <Directions />
      <Collective />
      <Activities />  
      <Contacts />
      <ScrollButton />
      <Footer />
   </>
</ ThemeProvider > 
);

export default App;
