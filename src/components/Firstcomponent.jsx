

import React, { Component } from "react"


export default class Firstcomponent extends Component {

    render() {
        return (
            <>
                <h3>Name: {this.props.name}</h3>
                <h3>Age: {this.props.age}</h3>
            </>
        )
    }
}
