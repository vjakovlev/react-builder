import React, { Component } from 'react';
import Styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props)
  }


  state = {
    persons: [
      {id: '1', name: 'Viktor', age: 28},
      {id: '2', name: 'Igor', age: 22},
      {id: '3', name: 'Petar', age: 43},
    ],
    counter: 5,
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonhandler  = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          clicked={this.deletePersonhandler}
          changed={this.nameChangedHandler}/>
    }

    return (
      <div className={Styles.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          togglePersonHandler={this.togglePersonHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
    
