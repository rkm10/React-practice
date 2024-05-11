import React from 'react'

export default function Secondcomponent() {
    let raj = "it a new project"

    function Menu() {
        return <div>

            <ul>
                <li className='test'>{raj}</li>
                <li id='test'>please think</li>
            </ul>
        </div>
    }
    return <Menu></Menu>

}
