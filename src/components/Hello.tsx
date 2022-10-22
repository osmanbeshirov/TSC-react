import React, { useState, useRef } from 'react';

interface IProps {
    name: string;
    label: number;
    description?: string;
    onSmtHappen: (name: string) => void;
}

type User = {
    age: number;
    work?: 'work' | "doesn't work";
}

//first method
// const Hello = ({ name, label, description }: IProps) => {
//     return (
//         <div>
//             <h1>Hello component {name}</h1>
//             <h2>My label is: {label}</h2>
//             <h3>My description is: {description}</h3>
//         </div>
//     )
// }

//second method
const Hello: React.FunctionComponent<IProps> = ({ name, label }) => {

    const [count, setCount] = useState<User>({ age: 43, work: 'work' })

    const handleChaing = (event: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(event.target.value)
    }

    const handleClick = () => {
        console.log('I have worked');
        setCount({ age: 50, work: 'doesn\'t work' });

    }

    return (
        <div>
            <h1>Hello component {name}</h1>
            <h2>My label is: {label}</h2>
            <input type="text" onChange={handleChaing} />
            <div onClick={handleClick} style={{ backgroundColor: 'purple', display: 'inline-block' }}>Click me please...</div>

        </div>
    )
}

export default Hello;