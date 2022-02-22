import React from 'react';
import './App.css';

function AddBook() {
  return (
    <div className="add-new-book">
      <h2 className="title">ADD NEW BOOK</h2>
      <input type="text" />
      <select name="cars" id="cars">
        <option value="Under Construction">Categories</option>
      </select>
      <input type="submit" value="ADD BOOK" />
    </div>
  );
}

export default AddBook;
