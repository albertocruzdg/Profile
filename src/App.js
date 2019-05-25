import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header/header';
import AboutMe from './about-me/about-me';
import ToDoApp from './to-do/to-do';

function App() {
  return (
    <div className="container">
      <ToDoApp />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
