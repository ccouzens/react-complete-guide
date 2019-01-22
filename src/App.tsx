import React, { Component, ChangeEvent } from 'react';
import classes from './App.module.css';
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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              changed={this.nameChangedHandler.bind(this, person.id)}
              key={person.id}
            />
          ))}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses: string[] = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
