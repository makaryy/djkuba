import React from 'react'
import { Typography, Card, CardMedia, CardContent } from '@material-ui/core'
import useStyles from './styles'

function Info({ image, title }) {

    const classes = useStyles()
    
    return (

    // TODO: CHANGE CARD FOR SOMETBING ELSE CUZ OF DEFAULT CARD STYLING BEING CHANGED IN BUILD
        <Card className={classes.Card}>
            <CardContent className={classes.CardContent}>
                <Typography variant='h4' align='center' gutterBottom>{title}</Typography>
            </CardContent>
            <CardMedia image={image} component='img' className={classes.media}/>
            <CardContent className={classes.CardContent} />
        </Card>
        )

    
}

export default Info
