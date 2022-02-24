import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Endpoints from '../Endpoints';
import { addBook } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const [bookTitle, setTitle] = useState('');
  const submitBookToStore = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv4(),
      title: bookTitle,
      category: 'Random',
      author: 'Jeff',
    };
    // dispatch(addBook(newBook));
    fetch(Endpoints.baseUrl, {
      body: JSON.stringify(newBook),
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
    }).then((response) => response.text()).then((data) => {
      if (data === 'Created') {
        dispatch(addBook(newBook));
      }
    });
  };

  return (
    <form className="add-new-book" onSubmit={(e) => submitBookToStore(e)}>
      <h2 className="title">ADD NEW BOOK</h2>
      <input type="text" placeholder="Add Book" onChange={(e) => setTitle(e.target.value)} />
      <select name="cars" id="cars">
        <option value="Under Construction">Categories</option>
      </select>
      <input type="submit" value="ADD BOOK" />
    </form>
  );
}
