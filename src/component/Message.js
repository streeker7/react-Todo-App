import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome visitor"
        }
    }
    statechaneMsg() {
        this.setState({
            message: "Thanx for subscription"
        })

    }
    render() {
        return (
            <div>
                <h1 onClick={() => this.statechaneMsg()}> {this.state.message}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Message;