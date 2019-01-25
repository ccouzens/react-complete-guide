import React, { ChangeEvent } from 'react';
import Person from './Person/Person';
import { PersonType, IdType } from './Person/Person.d';

const persons = (props: {
  persons: PersonType[];
  clicked: (index: number) => void;
  changed: (id: IdType, event: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <>
    {props.persons.map((person, index) => (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={event => props.changed(person.id, event)}
        key={person.id}
      />
    ))}
  </>
);

export default persons;
