import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class lifeCycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Name: "Striker"
        }
        console.log('Lifecycle A Constructor Called');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A Derived State Called');
        return null
    }
    componentDidMount() {
        console.log('Lifecycle A Component Did Mount');

    }

    shouldComponentUpdate() {
        console.log('Lifecycle A Component Should Upate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle A SnapShot Before Upate');
        return null;
    }
    componentDidUpdate() {
        console.log('Lifecycle A Did Upate');
    }

    changeState = () => {
        this.setState({
            name: "Learning React"
        })
    }
    render() {
        console.log('Lifecycle A Render Called');
        return (
            <div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
            </div>)
    }
}

export default lifeCycleA;