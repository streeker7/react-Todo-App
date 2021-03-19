import React, { Component } from 'react';


class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "hello world!"
        }
        // this.clickhandler = this.clickhandler.bind(this); 3
    }
    // clickhandler() {
    //     this.setState({
    //         message: "goodbye"
    //     }, () => {
    //         console.log(this.state.message)

    //     })
    // }


    clickhandler = () => {
        this.setState({
            message: "goodbye"
        }, () => {
            console.log(this.state.message)

        })
    }

    render() {
        return (
            <div>
                {this.state.message}
                {/* <button onClick={this.clickhandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickhandler()}>Click</button> */}
                <button onClick={this.clickhandler}>Click</button>

            </div>
        )
    }
}

export default EventBind;