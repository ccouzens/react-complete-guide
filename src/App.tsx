import React, { Component, ChangeEvent } from 'react';
import './App.css';
import Person from './Person/Person';

type IdType = string;

class App extends Component {
  state: {
    persons: {
      id: IdType;
      name: string;
      age: number;
    }[];
    showPersons: boolean;
  } = {
    persons: [
      { id: 'asdf', name: 'Max', age: 28 },
      { id: 'qwer', name: 'Manu', age: 29 },
      { id: 'zxcv', name: 'Stepahnie', age: 26 }
    ],
    showPersons: false
  };

  nameChangedHandler = (id: IdType, event: ChangeEvent<HTMLInputElement>) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex],
      name: event.target.value
    };

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (personsIndex: number) => {
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

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
          {this.state.persons.map((person, index) => (
            <Person
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={this.nameChangedHandler.bind(this, person.id)}
            />
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
