import { Container, CssBaseline, Grid, ThemeProvider } from '@material-ui/core'
import theme from './theme'
import React from 'react'
import Form from './components/Form'
import TopBar from './components/TopBar'
import About from './components/About'
import Info from './components/Info'
import wesele from './images/wesele.jpg'
import event from './images/event.jpg'
import plener from './images/plener.jpg'
import osiemnastka from './images/osiemnastka.jpg'
import jubileusz from './images/jubileusz.jpg'


function App() {
    
    return (
        <ThemeProvider theme={theme}>

            <CssBaseline />
                <TopBar />
                <Container maxWidth='lg'>
                    <Grid container spacing={8}>
                        <Grid item xs={12}>
                            <About />
                        </Grid>
                        <Grid item xs={12}>
                            <Info 
                                title={'OSIEMNASTKI'}
                                image={osiemnastka}
                            />
                            <Info 
                                title={'WESELA'}
                                image={wesele}
                            />
                            <Info 
                                title={'JUBILEUSZE'}
                                image={jubileusz}
                            />
                                <Info 
                                    title={'EVENTY'}
                                    image={event}/>
                            <Info 
                                title={'PLENERY'}
                                image={plener}
                                />
                        </Grid>
                        <Grid item>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
        </ThemeProvider>

    )
}

export default App
