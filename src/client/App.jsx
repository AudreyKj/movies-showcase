import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './main.scss';

const App = () => (
  <>
    <Header />
    <section className="page-content">
      <Outlet />
    </section>
  </>
);

export default App;
