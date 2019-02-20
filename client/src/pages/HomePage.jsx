import React, { Component } from 'react';
import { Button, Container, Divider, Segment, Grid, Header, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../App.css'
import bracket from '../assets/Bracketri.JPG'

const style = {
    container1: {
        margin: '100px 0px 30px 0px'
    },
    h1: {
        fontSize: '40px',
        marginTop: '50px'
    },
    h3: {
        fontSize: '1.5em'
    },
    p: {
        fontSize: '1.2em'
    }
}


class HomePage extends Component {
    componentDidMount() {
        // update authenticated state on logout
        this.props.toggleAuthenticateStatus()
    }
    render() {
        return (
            <div>

                <div className='outer-container'>
                    <div className='content-container'>
                        <div style={style.container1}>
                            <Container textAlign='center'>
                                <b style={style.h1}>Create, Control, and Analyze your Tournaments</b>
                                <Divider />
                            </Container>
                            <Container textAlign='center'>
                                <Button size='huge' color='teal' animated='vertical' onClick={this.props.handleClickSample} >
                                    <Button.Content visible>Generate a Sample Bracket</Button.Content>
                                    <Button.Content hidden>Using Bracketri</Button.Content>
                                </Button>
                            </Container>
                        </div>
                    </div>
                </div>

                <div className='content-container'>
                    <Segment vertical>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row stretched>
                                <Grid.Column width={8}>
                                    <Header as='h3' style={style.h3}>
                                        Pit Teams Against One Another
                                </Header>
                                    <p style={style.p}>
                                        A fast &#38; simple way to create and manage your brackets.
                                        All you need is your imagination!
                                </p>
                                    <Header as='h3' style={style.h3}>
                                        Report and Analyze with the <b> Scoreboard </b> features.
                                </Header>
                                    <p style={style.p}>
                                        Yes that's right, with Bracketri you can create 3 different categories for every matchups to futher enhance your bracket experiences.
                                 </p>
                                </Grid.Column>
                                <Grid.Column floated='right' width={6}>
                                    <Image bordered rounded size='large' src={bracket} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </div>
            </div>

        )
    }
};


export default HomePage