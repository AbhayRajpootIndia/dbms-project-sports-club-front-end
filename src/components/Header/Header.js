import '../../styles/header.css'

import useWindowDimensions from '../../customHooks/useWindowDimensions'

import NavBar from "./NavBar"
import Logo from "./Logo"

export default function Header(props) {

    const { height, width } = useWindowDimensions();
    
    return (
        <>
            <div className='headerContainer'  style={{width: width}}>
                <Logo />
                <NavBar />
            </div>
        </>
    )
}