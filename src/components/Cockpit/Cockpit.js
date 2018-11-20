import React from 'react';
import Styles from './Cockpit.css'

const cockpit = (props) => {

    const classes = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = Styles.Red;
    }

    if (props.persons.length <= 2) {
        classes.push(Styles.red);
    } 
    if (props.persons.length <= 1) {
        classes.push(Styles.bold);
    }

    return (
        <div className={Styles.Cockpit}>
            <h1>react builder</h1>
            <p className={classes.join(' ')}>loader</p>
            <button 
                className={btnClass}
                onClick={props.togglePersonHandler}>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;