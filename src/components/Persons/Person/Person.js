import React, { Component } from 'react';
import Styles from './Person.css';

class Person extends Component {
    render() {
        return (
            <div className={Styles.Person}>
                <p onClick={this.props.click}>I am {this.props.name} and i am {this.props.age} years old.</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} /> 
            </div> 
         )
    }
}

export default Person;