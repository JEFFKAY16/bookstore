// import React from 'react';
// import './App.css';

// function AddBook() {
//   return (
//     <div className="add-new-book" onSubmit={(e) => submitBookToStore(e)}>
//       <h2 className="title">ADD NEW BOOK</h2>
//       <input type="text" />
//       <select name="cars" id="cars">
//         <option value="Under Construction">Categories</option>
//       </select>
//       <input type="submit" value="ADD BOOK" />
//     </div>
//   );
// }

// export default AddBook;

// // End

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const submitBookToStore = (e) => {
    e.preventDefault();
    // const form = e.target.elements;

    const newBook = {
      id: uuidv4(),
      title,
      category: 'Random',
      author: 'Jeff',
    };
    dispatch(addBook(newBook));
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
