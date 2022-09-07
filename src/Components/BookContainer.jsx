import React, { useState } from "react";
import { connect } from "react-redux";
import {buyBook} from "../Redux";
const BookContainer = (props) => {
  const [number, setNumber] = useState(0)
  return (
    <div>
      <div>Number of Books {props.numberOfBooks}</div>
      <div>
        <input type="number"  min="0" max="10" value={number} onChange={e => {setNumber(e.target.value) }} />
        <button onClick={() => { props.buyBook(number) }}>BUY {number} BOOKS</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  

  return {
    numberOfBooks: state.book.numberOfBooks,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    buyBook: function (number) {
      dispatch(buyBook(number));
    },
  };
};
export default connect(mapStateToProps, mapDispatchProps)(BookContainer);
