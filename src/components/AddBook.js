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
      category: 'Business',
      author: 'Lewis Hamilton',
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
      <div key={0} className="add-form horizontal-line-70">
        <h2 key={1} className="title-form">ADD NEW BOOK</h2>
        <input key={2} className="input-one" type="text" placeholder="Add Book" onChange={(e) => setTitle(e.target.value)} />
        <select key={3} name="cars" id="cars">
          <option key={4} value="Under Construction">Categories</option>
        </select>
        <input key={5} className="inout-two" type="submit" value="ADD BOOK" />
      </div>
    </form>
  );
}
