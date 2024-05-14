import React, { useState } from "react"
export default function Firstcomponent(p) {

    return (
        <>
            <div style={{ width: 300, border: '2px solid black', margin: '20px', padding: '20px', display: "flex" }}>
                <h3>ID: {p.id}</h3>
                <h3>Name: {p.name}</h3>
                <h3>Age: {p.age}</h3>
                <p>Place:{p.place}</p>
            </div>
            <Ppa />
        </>
    )
}

const Ppa = () => {
    let [counter, updateCounter] = useState(0)
    console.log(counter)
    return (
        <>
            <h1>Counter Value: {counter}</h1>
            <button onClick={() => { updateCounter(++counter) }}>Increment</button>
            <button onClick={() => { updateCounter(--counter) }}>Decrement</button>
        </>
    )

}