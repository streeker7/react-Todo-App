import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    statechaneMsg() {
        this.setState((prevstate, props) => ({
            count: prevstate.count + 1
        }), () => {
            console.log(this.state.count);

        })

    }
    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.statechaneMsg}> Click here</button>
            </div>
        )

    }
}

export default Counter;