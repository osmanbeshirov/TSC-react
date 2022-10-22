import React from 'react';

interface IProps {
    name: string;
    label: number;
    description?: string;
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
    return (
        <div>
            <h1>Hello component {name}</h1>
            <h2>My label is: {label}</h2>
        </div>
    )
}

export default Hello;