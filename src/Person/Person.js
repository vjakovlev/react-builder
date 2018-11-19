import React from 'react';
import './Person.css'
import styles from './Person.css';

const Person = (props) => {
    return (
       <div className={styles.Persons}>
           <p onClick={props.click}>I am {props.name} and i am {props.age} years old.</p>
           <input type="text" onChange={props.changed} value={props.name} /> 
       </div> 
    )
};

export default Person;