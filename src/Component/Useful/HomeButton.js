import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';

function HomeButton () {
    return (
            <Link to='/'><Icon.HouseFill color='#ffffff' size={40} /></Link>
    )
}

export default HomeButton