import React, { Component, useState } from "react"
export default function Firstcomponent(p) {

      return (
            <>
                  <div style={{ alignItems: 'center', border: '2px solid black', margin: '20px', columnGap: '20px', padding: '20px', display: "flex" }}>
                        <h3>ID: {p.id}</h3>
                        <h3>Name: {p.name}</h3>
                        <h3>Age: {p.age}</h3>
                        <p>Place:{p.place}</p>
                  </div>

                  <div style={{ border: '2px solid black', margin: '20px', padding: '20px' }}>
                        <Ppa />
                        <Pap />
                  </div>
            </>
      )
}

const Ppa = () => {
      let [counter, updateCounter] = useState(0)
      console.log(counter)
      return (
            <>
                  <h1>useState Method</h1>
                  <h3>Counter Value: {counter}</h3>
                  <button onClick={() => { updateCounter(++counter) }}>Increment</button>
                  <button onClick={() => { updateCounter(--counter) }}>Decrement</button>
            </>
      )
}

class Pap extends React.Component {
      state = {
            counter: 0
      }
      render() {
            return (
                  <>
                        <h1>State Method</h1>
                        <h3>Counter Value: {this.state.counter}</h3>
                        <button onClick={() => {
                              this.setState({
                                    counter: ++this.state.counter
                              })
                        }}>Increment</button >
                        <button onClick={() => {
                              this.setState({
                                    counter: --this.state.counter
                              })
                        }}>Decrese</button>
                        <Lali />

                  </>
            )
      }
}

class Lali extends Component {

      constructor() {
            super()
            this.state = {
                  x: 10
            }
      }

      render() {
            return (
                  <>
                        <h1>This is class component</h1>
                        <p>{this.state.x}</p>
                        <button onClick={() => { this.setState({ x: this.state.x + 10 }) }}>increase</button >
                  </>
            )
      }
}