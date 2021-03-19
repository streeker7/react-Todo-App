import React, { Component } from 'react';

class LifecycleB extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Name: "Striker"
        }
        console.log('Lifecycle B Constructor Called');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle B Derived State Called');
        return null
    }
    componentDidMount() {
        console.log('Lifecycle B Component Did Mount');

    }
    shouldComponentUpdate() {
        console.log('Lifecycle B Component Should Upate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Lifecycle B SnapShot Before Upate');
        return null;
    }
    componentDidUpdate() {
        console.log('Lifecycle B Did Upate');
    }
    render() {
        console.log('Lifecycle B Render Called');
        return <div>Check here</div>
    }
}

export default LifecycleB;