import React, {Component} from 'react'


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    render () {
        const {firstName, lastName, age, hairColor} = this.props
            return <div>
            <p>{lastName}, {firstName}</p>
            <p>Age: {this.state.age} Hair Color: {hairColor}</p>
            <button onClick={()=>{this.setState({age:this.state.age+1})}}>Birthday</button>
            </div>
    }
}

export default PersonCard