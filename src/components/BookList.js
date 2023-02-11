import React from 'react';
import BookShow from './BookShow';

const BookList = ({ books }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div>{renderedBooks}</div>;
};

export default BookList;