import React, { PureComponent, Component } from 'react'

function MemoFunction(props) {
    console.log(props)
    return (<div>{props.value}</div>)
}

export class PureComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "srini"
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ name: "srini1" })
        }, 2000)
    }
    render() {
        console.log(this.state.name)
        return (
            <div>
                {this.state.name}
                <MemoFunction value={this.state.name} />
            </div>
        )
    }
}

export default PureComponents
