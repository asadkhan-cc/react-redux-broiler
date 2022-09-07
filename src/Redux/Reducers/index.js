import { combineReducers } from "redux";
import bookReducer from "../Book/bookReducer";
import PENReducer from "../Pen/penReducer";
const reducers = combineReducers({
  book: bookReducer,
  pen: PENReducer,
});
export default reducers;
