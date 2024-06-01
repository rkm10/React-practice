import React, { Component } from "react"

class Child extends Component {

      constructor(props) {
            super(props)
            this.state = {
                  count: this.props.data + 10,
                  product: "dummy"
            }
            console.log("constructor");

      }

      static getDerivedStateFromProps(props, state) {
            console.log("derived")
            return {
                  ...state, count: props.data * 2
            }
      }

      shouldComponentUpdate() {
            return true
      }


      componentDidMount() {
            fetch('https://fakestoreapi.com/products/1')
                  .then(res => res.json())
                  .then(json => {
                        console.log(json)
                        this.setState({ ...this.state, product: json.title })
                        console.log("did mount")
                  })
      }
      render() {
            console.log("render");
            return (
                  <>
                        <h1>This is child component</h1>
                        <h2>props:{this.props.data}</h2>
                        <h2>Count: {this.state.count}</h2>
                        <h2>Product:{this.state.product}</h2>
                  </>
            )
      }
      componentWillUnmount() {
            console.log("unmount");
      }

}

export default Child