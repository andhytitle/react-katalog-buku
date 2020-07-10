import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/book/:id" component={Book} />
    </BrowserRouter>
  );
}

export default App;
