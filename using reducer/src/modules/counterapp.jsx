import { useReducer, useState } from 'react'


function counterReducer(state, value) {
      console.log(state, value);
      return state + value
}
function reducerCounter(state, action) {
      if (action.type == "INC") {
            return state + 1
      } else if (action.type == "DEC") {
            return state - action.playload
      } else if (action.type == "RESET") {
            return 0
      } else return state
}
function switchCounter(state, updater) {
      switch (updater.type) {
            case "INC": return state + 1;
            case "DEC": return state - 1;
            case "RESET": return 0;
      }
}

function CounterApp() {
      const [count, setCount] = useState(0)
      const [counter, dispatch] = useReducer(counterReducer, 0)
      const [ter, raj] = useReducer(reducerCounter, 0)
      const [one, update] = useReducer(switchCounter, 0)

      return (
            <div className='flex'>
                  <div className='box'>
                        <h2>reducer</h2>
                        <h1>count is = {counter}</h1>
                        <div className='btn'>
                              <button onClick={() => dispatch(+ 1)}>+</button>
                              <button onClick={() => dispatch(- 1)}> -</button>
                        </div></div>
                  <div className='box'>
                        <h2>reducer advanced</h2>
                        <h1>count is = {ter} </h1>
                        <div className='btn'>
                              <button onClick={() => raj({ type: "INC" })}>
                                    +
                              </button>
                              <button onClick={() => raj({ type: "DEC", playload: 4 })}>
                                    -
                              </button>
                              <button onClick={() => raj({ type: "RESET" })}>
                                    Reset
                              </button>
                        </div>
                  </div>
                  <div className='box'>
                        <h2>reducer switch</h2>
                        <h1>count is = {one} </h1>
                        <div className='btn'>
                              <button onClick={() => update({ type: "INC" })}>
                                    +
                              </button>
                              <button onClick={() => update({ type: "DEC", playload: 4 })}>
                                    -
                              </button>
                              <button onClick={() => update({ type: "RESET" })}>
                                    Reset
                              </button>
                        </div>
                  </div>
                  <div className='box'>
                        <h2>useState</h2>
                        <h1>count is = {count}</h1>
                        <div className='btn'>
                              <button onClick={() => setCount((count) => count + 1)}>
                                    +
                              </button>
                              <button onClick={() => setCount((count) => count - 1)}>
                                    -
                              </button>
                              <button onClick={() => setCount((count) => count = 0)}>
                                    Reset
                              </button>
                        </div>
                  </div>
            </div >
      )
}

export default CounterApp
