import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Book from './Book';
import Categories from './Categories';
import AddBook from './AddBook';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Book />} />
          <Route path="/book" exact element={<Book />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <AddBook />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
