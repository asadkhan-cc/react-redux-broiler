import React, { useState } from "react";
import { connect } from 'react-redux'
import {buyPEN,returnPEN} from "../Redux";

export const PenContainer = (props) => {
    const [numberPens, setNumberPens] = useState(0)   

  return (
    <div>PenContainer
         <div>Number of pens {props.numberOfPen}</div>
      <div>
        <input type="number"  min="0" max="10" value={numberPens} onChange={e => {setNumberPens(e.target.value) }} />
        <button onClick={() => { props.buyPEN(numberPens) }}>BUY {numberPens} pen</button>
        <button onClick={() => { props.returnPEN(1) }}>REturn pen</button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
        numberOfPen: state.pen.numberOfPen,
    };
  };


const mapDispatchToProps = (dispatch) => { 
    return {
        buyPEN: function (number) {
          dispatch(buyPEN(number));
        },
        returnPEN: function (number) {
            dispatch(returnPEN(number));
          },
      };
 }

export default connect(mapStateToProps, mapDispatchToProps)(PenContainer)