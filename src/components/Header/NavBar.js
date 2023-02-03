import { useState } from "react"
import { Link } from "react-router-dom"

import '../../styles/globalTexts.css'
import '../../styles/navbar.css'

function NavBarButton(props) {

    const isActive = props.currentPage === props.name;

    return (
        <Link to={props.path} onClick={() => props.setCurrentPage(props.name)}>
            <div className='nav-button'>
                <p className='text1' style={{textDecorationLine: 'no-underline', color: isActive ? 'red' : '#f36e26'}}>
                    {props.name.toUpperCase()}
                </p>
            </div>
        </Link>
    )
}


export default function NavBar(props) {

    const [currentPage, setCurrentPage] = useState('Home');

    return (
        <>
            <div className='nav-container'>
                {pages.map(page => <NavBarButton path={page.path} name={page.name} currentPage={currentPage} setCurrentPage={setCurrentPage} />)}
            </div>
        </>
    )
}

const pages = [
    {
        name: 'Home',
        path: '/sports-club/home'
    },
    {
        name: 'Coaches',
        path: '/sports-club/coaches'
    },
    {
        name: 'Players',
        path: '/sports-club/players'
    },
    {
        name: 'Teams',
        path: '/sports-club/teams'
    },
    {
        name: 'Courts',
        path: '/sports-club/courts'
    },
    {
        name: 'Tournaments',
        path: '/sports-club/tournaments'
    },
    {
        name: 'Equipments',
        path: '/sports-club/equipments'
    },
    {
        name: 'About',
        path: '/sports-club/about'
    },
]