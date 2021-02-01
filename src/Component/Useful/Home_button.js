import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';

function Home_button () {
    return (
            <Link to='/'><Icon.HouseFill color='#ffffff' size={40} /></Link>
    )
}

export default Home_button