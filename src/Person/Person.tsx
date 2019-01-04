import React from 'react'

const person = (props: {name: string, age: string}) => {
    return <p>I'm {props.name} and I am {props.age} years old!</p>
}

export default person
