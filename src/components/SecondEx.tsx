import React, { useState } from 'react'

interface IProps {
    name: string;
    surname: string;
    age?: number;
    isWorker: boolean;
    getTest: (tested: boolean) => void;
}


const SecondEx: React.FunctionComponent<IProps> = ({ name, surname, age = 24, isWorker, getTest }) => {

    const myStyle = {
        marginTop: '50px',
        width: '200px',
        height: '60px',
        backgroundColor: 'red',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 800
    }

    interface CountNode {
        age: number
    }

   // const [count, setCount] = useState<CountNode>({ age: 34 }) //type inference
    const [count, setCount] = useState<number>(35)



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log(event.target)
    }

    return (

        <div>
            <h1>{name}</h1>
            <h1>{surname}</h1>
            <h1>{age}</h1>
            <h1>{isWorker ? 'Work' : "Don't work"}</h1>

            <input type="text" onChange={handleChange} />

            <div style={myStyle} onClick={handleClick}>Click me... </div>
        </div >
    )
}

export default SecondEx;