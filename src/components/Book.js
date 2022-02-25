import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
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
              <div key={0} className="book-item">
                <div key={1} className="left-info">
                  <span key={2} className="category">{book.category}</span>
                  <h4 key={3} className="title">{book.title}</h4>
                  <p key={4} className="author">{book.author}</p>
                  <div key={5} className="action-buttons">
                    <button key={6} type="button" className="buttons">Comments</button>
                    <button key={7} type="button" className="buttons" onClick={() => removeFromStore(book.item_id)}>Remove</button>
                    <button key={8} type="button" className="buttons">Edit</button>
                  </div>
                </div>
                <div key={9} className="second-info">
                  <div key={10} className="center-info">
                    <div key={11} style={{ width: 70, height: 70 }}>
                      <CircularProgressbar key={12} value={percentage} />
                    </div>
                    <div key={13} className="progress-data">
                      <h4 key={14} className="percentage">64%</h4>
                      <span key={15} className="fade">Completed</span>
                    </div>
                  </div>
                  <div key={16} className="vertical-border" />
                  <div key={17} className="right-info">
                    <span key={18} className="fade">CURRENT CHAPTER</span>
                    <h5 key={19} className="high-five">Chapter 15</h5>
                    <button key={20} className="update-btn" type="button">UPDATE PROGRESS</button>
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
