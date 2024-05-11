import React from 'react'

export default function Secondcomponent() {
    let raj = "it a new project"
    let menu = (<ul>
        <li className='test'>{raj}</li>
        <li id='test'>please think</li>
    </ul>)
    function Menu() {
        return <h1>hello world</h1>
    }
    return (menu, <Menu></Menu>
    )
}
