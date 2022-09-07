import { BUY_PEN, RETURN_PEN } from "./penType";

const initialState = {
  numberOfPen: 22,
};

const PENReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PEN:
      // console.log("BUY PEN REducer called");

      return {
        ...state,
        numberOfPen: state.numberOfPen - action.payload,
      };
    case RETURN_PEN:
      // console.log("returnPEN REducer called");
      return {
        ...state,
        numberOfPen: state.numberOfPen + action.payload,
      };

    default:
      return state;
  }
};
export default PENReducer;
