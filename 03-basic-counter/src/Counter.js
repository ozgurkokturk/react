import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Counter Number: {this.props.number} </h1>
            </div>
        )
    }
}
