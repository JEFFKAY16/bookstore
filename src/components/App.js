import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Header from './Header';
import Book from './Book';
import Categories from './Categories';
// import AddBook from './AddBook';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Book />} />
          <Route path="/book" exact element={<Book />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        {/* <AddBook /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
