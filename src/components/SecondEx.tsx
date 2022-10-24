import React from 'react'

interface IProps {
    name: string;
    surname: string;
    age?: number;
    isWorker: boolean;
}


const SecondEx: React.FunctionComponent<IProps> = ({ name, surname, age, isWorker }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{surname}</h1>
            <h1>{age}</h1>
            <h1>{isWorker ? 'Work' : "Don't work"}</h1>
        </div>
    )
}

export default SecondEx