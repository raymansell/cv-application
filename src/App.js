import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

const App = () => {
  return (
    <section className="container">
      <Sidebar />
      <Content />
    </section>
  );
};

export default App;
