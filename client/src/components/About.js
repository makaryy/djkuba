import React from 'react'

import { Paper, Typography, useMediaQuery } from '@material-ui/core'

import theme from '../theme'
import useStyles from './styles'

function About() {

    const classes = useStyles()

    const overSm = useMediaQuery(theme.breakpoints.up('sm'))
    const textSize = overSm ? 'h4' : 'h6'

    return (
            <Paper className={classes.About && classes.Paper}>
                <Typography variant={textSize} align='center'>
                    Cześć, ja jestem DJ KUBA!
                </Typography>
                <Typography variant={textSize} align='center'>
                    Pochodzę z Milicza. Imprezy gram na terenie województwa Dolnośląskiego oraz Wielkopolskiego. Rodzaj imprezy nie ma znaczenia - zagram na każdej imprezie.
                </Typography>
            </Paper>
    )
}

export default About
