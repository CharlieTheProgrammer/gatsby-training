import React from 'react'
import { Link } from "gatsby"

// Ultra hipster ES6
const Menu = () => (
    <div style={{
        background: '#f4f4f4',
        paddingTop: '10px',
    }}>
        <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
        </ul>
    </div>
)

// ES6, less hipster
const Menu2 = () => {
    return (
        <div style={{
            background: '#f4f4f4',
            paddingTop: '10px',
        }}>
            <ul style={{
                display: 'flex',
                flexDirection: 'flex-row',
                listStyle: 'none',
                justifyContent: 'space-evenly'
            }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    )
}


// Both of these are functional components, so there is no need to
// add a render()
export default Menu2