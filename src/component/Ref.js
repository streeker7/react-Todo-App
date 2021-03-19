import React, { Component } from 'react'

export class Ref extends Component {
    constructor() {
        super()
        this.inputRef = React.createRef()
        this.cbref = null
        this.setCbref = element => {
            console.log(element)
            this.cbref = element;
        }
    }
    componentDidMount() {
        // this.inputRef.current.focus()
        if (this.cbref != null) {
            this.cbref.focus()
        }
    }
    render() {
        return (
            <div>
                <input ref={this.setCbref} />
            </div>
        )
    }
}

export default Ref
