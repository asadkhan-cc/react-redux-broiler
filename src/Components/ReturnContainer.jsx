import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  returnBook } from "../Redux";

function ReturnContainer() {
  const numberOfBooks = useSelector((state) => state.book.numberOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      ReturnContainer
      <h1>number of Books {numberOfBooks} </h1>
      <button
        onClick={() => {
          dispatch(returnBook(1));
        }}
      >
        RETURN BOOK
      </button>
    </div>
  );
}

export default ReturnContainer;
