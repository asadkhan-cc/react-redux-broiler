import { BUY_BOOK, RETURN_BOOK } from "./bookType";

const initialState = {
  numberOfBooks: 22,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      // console.log("BUY Book REducer called");

      return {
        ...state,
        numberOfBooks: state.numberOfBooks - action.payload,
      };
    case RETURN_BOOK:
      // console.log("returnBook REducer called");
      return {
        ...state,
        numberOfBooks: state.numberOfBooks + action.payload,
      };

    default:
      return state;
  }
};
export default bookReducer;
