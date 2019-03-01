import React, { ReactNode, ChangeEvent } from 'react';
import AuthContext from '../../../context/auth-context';

import classes from './Person.module.css';

const person = (props: {
  name: string;
  age: number;
  children?: ReactNode;
  click: () => void;
  changed: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={classes.Person}>
      <AuthContext.Consumer>
        {context =>
          context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>
        }
      </AuthContext.Consumer>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
