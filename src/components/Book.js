import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
// import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
    });
    dispatch(removeBook(id));
  };
  const displayed = [];
  const percentage = 70;
  return (
    <>
      {
        books.map((book) => (!displayed.includes(book.item_id)
          ? (
            <div key={book.item_id} className="book-lists">
              <div key={book.item_id} className="book-item">
                <div className="left-info">
                  <span className="category">{book.category}</span>
                  <h4 className="title">{book.title}</h4>
                  <p className="author">{book.author}</p>
                  <div className="action-buttons">
                    <button type="button" className="buttons">Comments</button>
                    <button type="button" className="buttons" onClick={() => removeFromStore(book.item_id)}>Remove</button>
                    <button type="button" className="buttons">Edit</button>
                  </div>
                </div>
                <div className="second-info">
                  <div className="center-info">
                    <div style={{ width: 70, height: 70 }}>
                      <CircularProgressbar value={percentage} />
                    </div>
                    <div className="progress-data">
                      <h4 className="percentage">64%</h4>
                      <span className="fade">Completed</span>
                    </div>
                  </div>
                  <div className="vertical-border" />
                  <div className="right-info">
                    <span className="fade">CURRENT CHAPTER</span>
                    <h5 className="high-five">Chapter 15</h5>
                    <button className="update-btn" type="button">UPDATE PROGRESS</button>
                  </div>
                </div>
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
