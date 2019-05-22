import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header/header';
import AboutMe from './about-me/about-me';

function App() {
  return (
    <div className="container">
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
