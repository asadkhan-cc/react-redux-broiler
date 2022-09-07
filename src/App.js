import React from "react";
import {Provider} from 'react-redux'
import BookContainer from "./Components/BookContainer";
import HookContainer from './Components/HookContainer'
import PenContainer from "./Components/PenContainer";
import ReturnContainer from './Components/ReturnContainer'
import store from "./Redux/store";
function App() {
  return (
    <div style={{textAlign:"center",marginTop:"2%",lineHeight:"2rem"}}>
      
      <Provider store={store}>
      <BookContainer/>
      <ReturnContainer/>
      <HookContainer/>
      <PenContainer/>
      </Provider>
    </div>
  );
}

export default App;
