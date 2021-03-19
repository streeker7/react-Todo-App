import React, { Component } from 'react';
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ParentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childvalue) {
        console.log(childvalue);
        alert(`ParentName:${this.state.ParentName}`);
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent;