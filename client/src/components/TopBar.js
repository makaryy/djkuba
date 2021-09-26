import React from 'react'
import { AppBar, Link, Toolbar } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import logo from '../images/logo.png'

import useStyles from './styles'

function TopBar() {
    const classes = useStyles()
    return (
        <AppBar position='relative' className={classes.AppBar} color='transparent'>
            <Toolbar className={classes.Toolbar}>
                <img src={logo} alt='logo' className={classes.logo}></img>
                <div className={classes.links}>
                    <Link href='https://www.instagram.com/djkuba.official/' >
                        <InstagramIcon className={classes.Icon} />
                    </Link>
                    <Link href='https://www.facebook.com/djkubamusic' >
                        <FacebookIcon className={classes.Icon} />
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar
