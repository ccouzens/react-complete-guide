import React, { ReactNode, ChangeEvent, Component } from 'react';

import classes from './Person.module.css';

type Props = {
  name: string;
  age: number;
  children?: ReactNode;
  click: () => void;
  changed: (event: ChangeEvent<HTMLInputElement>) => void;
};

class Person extends Component<Props> {
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
