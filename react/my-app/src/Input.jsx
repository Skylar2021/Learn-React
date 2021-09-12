import React from 'react'
// import MyApp from './MyApp'
import {useState} from 'react'

function Input({handleChangeName ,text}) {
    const [name, setName] = useState()
    
    return (
        <div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                placeholder={text}
                onChange={event => { setName(event.target.value) }} />
            <button
                type="button"
                onClick={() => {
                    handleChangeName(name)
                }}
            >Click</button>
        </div>
    )
}

/* class component

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Skylar'
        }        
    }
    render() {
        return (
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    value={this.state.name} 
                    onChange={(event)=>{
                        this.setState({name: event.target.value})}}
                    />
                <button 
                    type="button" 
                    onClick={()=>{
                        this.props.handleChangeName(this.state.name)}}
                    >Click</button>
            </div>
        )
    }
}
*/



export default Input