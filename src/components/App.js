import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Header';
import Book from './Book';
import Categories from './Categories';
import Endpoints from '../Endpoints';
import { addBook } from '../redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(Endpoints.baseUrl).then((res) => res.json()).then((data) => {
      const dataIds = Object.keys(data);
      dataIds.forEach((id) => {
        const book = {
          item_id: id,
          title: data[id][0].title,
          author: data[id][0].category,
          category: data[id][0].category,
        };
        dispatch(addBook(book));
      });
    });
  }, []);
  return (
    <BrowserRouter>
      <Header key={0} />
      <Routes>
        <Route path="/" exact element={<Book />} />
        <Route path="/book" exact element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      {/* <AddBook /> */}
    </BrowserRouter>
  );
}

export default App;
