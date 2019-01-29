import React, { ChangeEvent, Component } from 'react';
import Person from './Person/Person';
import { PersonType, IdType } from './Person/Person.d';

type Props = {
  persons: PersonType[];
  clicked: (index: number) => void;
  changed: (id: IdType, event: ChangeEvent<HTMLInputElement>) => void;
};

class Persons extends Component<Props> {
  render() {
    return (
      <>
        {this.props.persons.map((person, index) => (
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            changed={event => this.props.changed(person.id, event)}
            key={person.id}
          />
        ))}
      </>
    );
  }
}

export default Persons;
