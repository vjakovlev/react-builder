import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Viktor', age: 28},
      {name: 'Igor', age: 22},
      {name: 'Petar', age: 43},
    ],
    counter: 5,
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        {name: 'Viktor', age: this.state.counter},
        {name: event.target.value, age: 22},
        {name: 'Simona', age: 43},
      ]
    })
  }

  deletePersonhandler  = (personIndex) => {
    //const persons = this.state.persons.slice();

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonhandler(index)}
              name={person.name} 
              age={person.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
    