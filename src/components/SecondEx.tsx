import React from 'react'

interface IProps {
    name: string;
    surname: string;
    age?: number;
    isWorker: boolean;
    getTest: (tested: boolean) => void;
}



const SecondEx: React.FunctionComponent<IProps> = ({ name, surname, age = 24, isWorker, getTest }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <h1>{name}</h1>
            <h1>{surname}</h1>
            <h1>{age}</h1>
            <h1>{isWorker ? 'Work' : "Don't work"}</h1>

            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default SecondEx;