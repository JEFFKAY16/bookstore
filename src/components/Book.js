import React from 'react';
import './App.css';

function Book() {
  return (
    <div className="book-space">
      <div className="book-item">
        <div className="left-info">
          <span>Category</span>
          <h4>Title of Book</h4>
          <p>Autor</p>
          <div className="action-buttons">
            <button type="button" className="buttons">Comments</button>
            <button type="button" className="buttons">Remove</button>
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
    </div>
  );
}

export default Book;
