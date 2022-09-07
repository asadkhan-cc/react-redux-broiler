import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBook } from "../Redux";

function HookContainer() {
  const numberOfBooks = useSelector((state) => state.book.numberOfBooks);
  const dispatch = useDispatch();
  console.log(numberOfBooks);
  return (
    <div>
      HookContainer
      <h1>number of Books {numberOfBooks} </h1>
      <button
        onClick={() => {
          dispatch(buyBook(1));
        }}
      >
        BUY 1 BOOK
      </button>
    </div>
  );
}

export default HookContainer;
