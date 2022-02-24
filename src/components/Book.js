import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import AddBook from './AddBook';
import Endpoints from '../Endpoints';

function Book() {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const removeFromStore = (id) => {
    fetch(`${Endpoints.baseUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
      }),
    }).then((res) => res.text()).then((data) => {
      console.log(data);
      dispatch(removeBook(id));
    }).catch((error) => console.log(error));
  };
  const displayed = [];

  return (
    <>
      {
        books.map((book) => (!displayed.includes(book.item_id)
          ? (
            <div key={book.item_id} className="book-item">
              <div className="left-info">
                <span>{book.category}</span>
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <div className="action-buttons">
                  <button type="button" className="buttons">Comments</button>
                  <button type="button" className="buttons" onClick={() => removeFromStore(book.item_id)}>Remove</button>
                  <button type="button" className="buttons">Edit</button>
                </div>
              </div>
              <div className="center-info">
                <div className="progres-icon">Progress Icon</div>
                <div className="progress-data">
                  <h4>64%</h4>
                  <span>Completed</span>
                </div>
              </div>
              <div className="right-info">
                <span>CURRENT CHAPTER</span>
                <h5>Chapter 15</h5>
                <button type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          )
          : displayed.push(book.item_id)))
      }
      <AddBook />
    </>
  );
}

export default Book;
