import React, {ReactNode} from 'react'

const person = (props: {name: string, age: number, children?: ReactNode}) => {
    return (<div>
        <p>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
    </div>)
}

export default person
