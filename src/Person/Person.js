import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    render() {
        return (
            <div className="Person" onClick={this.props.deleteHandler}>
                <div>Name:{this.props.name}</div>
                <div>Age:{this.props.age}</div>
            </div>
        )
    }
}

export default Person;