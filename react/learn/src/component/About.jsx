import React, { Component } from 'react'

export default class About extends Component {
    constructor(){
        super()
        this.state = {info: 'about us'}
        // this.ChangeState = this.ChangeState.bind(this) /
    }
    componentWillUnmount(){
        console.log('unmount')

    }
    ChangeState = () =>{
        const newState = this.state.info ==="about us" ? 'info': "about us"
        this.setState( {info: newState} )
    }
    render() {
        return (
            <div>
                <h5>{this.state.info}</h5>
                <button type="button" onClick={this.ChangeState}>Click</button>
            </div>
        )
    }
}
