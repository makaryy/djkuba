import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    Paper: {
        padding: '30px',
        marginBottom: '50px',
        backgroundColor: 'rgba(0,0,0,.65)',
    },
    AppBar: {
        marginBottom: '50px',
        backgroundColor: 'black',
    },
    Toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    links: {
        textAlign: 'center',
    },
    logo: {
        width: '250px'
    },
    Card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '40px',
        backgroundColor: 'rgba(0,0,0,.7)',
        // overflow: 'visible',
    },
    CardContent: {
        width: '100%',
    },
    media: {
        width: '100%',
        // transform: 'translateX(-2.5%)',
        // borderRadius: '4px',
    },
    About: {
        marginTop: '100px',
        backgroundColor: 'rgba(0,0,0,.7)',
        backgroundPosition: 'center 100vh',
        backgroundSize: 'cover',
        width: '100%',
    },
    Icon: {
        fontSize: '5.5rem',
        color: 'white'
    }
}))