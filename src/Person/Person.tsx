import React, {ReactNode, ChangeEvent} from 'react'
import './Person.css'

const person = (props: {name: string, age: number, children?: ReactNode, click?: () => void, changed?: (event: ChangeEvent<HTMLInputElement>) => void}) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person
