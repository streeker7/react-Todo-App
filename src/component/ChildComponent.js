import React, { Component } from 'react';


class ChildComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            childName: "children"
        }
    }

    render() {
        return (
            <div>
                Hello child
                <button onClick={() => this.props.greetHandler(this.state.childName)}>Child Emit</button>
            </div>
        )
    }
}

export default ChildComponent;