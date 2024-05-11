import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
const root = ReactDOM.createRoot(document.getElementById('root'));
class Menu extends React.Component {
  render() {
    let menu = ['Raj', 'Lakshmi , ''Devi'
    ]
    return (
      <header>
        <ul>
          <li>{menu[0]}</li>
          <li>{menu[1]}</li>
          <li>{menu[2]}</li>
        </ul>
      </header>
    )
  }
  root.render(<Menu/>)};


