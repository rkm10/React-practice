import { legacy_createStore } from "redux";
const initialState = {
      balance: 0,
      fullName: "",
      mobile: null
}
// -------------------if else -------------------//
// function accountReducer(state = initialState, action) {
//       if (action.type == "deposit") {
//             return { ...state, balance: state.balance + action.payload }
//       }
//       else if (action.type == "withdraw") {
//             return { ...state, balance: state.balance - action.payload }
//       }
//       else if (action.type == "mobileUpdate") {
//             return { ...state, mobile: action.payload }
//       }
//       else if (action.type == "nameUpdate") {
//             return { ...state, fullName: action.payload }
//       }
//       else
//             return state
// }
// -----------------switch case---------------------//

function accountReducer(state = initialState, action) {
      switch (action.type) {
            case "acc/deposit":
                  return { ...state, balance: state.balance + +action.payload }
            case "withdraw":
                  return { ...state, balance: state.balance - +action.payload }
            case "mobileUpdate":
                  return { ...state, mobile: action.payload }
            case "nameUpdate":
                  return { ...state, fullName: action.payload }
            default:
                  return state
      }
}
const store = legacy_createStore(accountReducer)
// console.log(store.getState());

export default store

//------------------actions--------------//
// store.dispatch({ type: "acc/deposit", payload: 2000 })
// store.dispatch({ type: "withdraw", payload: 100 })
// store.dispatch({ type: "mobileUpdate", payload: 9813284821 })
// store.dispatch({ type: "nameUpdate", payload: "rajkumar" })
// --------------------------------------//
// console.log(store.getState());