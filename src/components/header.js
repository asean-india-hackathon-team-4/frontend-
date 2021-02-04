import React, { useContext } from 'react'
import { HeaderContext } from '../context/headerContext'
import Logo from '../assets/fish-n-chips-logo.png'

const Header = () => {

    const [ header, setHeader ] = useContext(HeaderContext)
    
    return (
        <div className='header'>
            <img src={Logo} className='logo'></img>
            <div className='header-title'>{header}</div>
        </div>
    )
}

export default Header