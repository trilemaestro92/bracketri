import React, { Component } from 'react';
import { Button, Container, Divider, Segment, Grid, Header, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../App.css'
import bracket from '../assets/Bracketri.JPG'

const style = {

    h3: {
        marginTop: '1em',
        padding: '1em 0em',
        color: 'dimgray',
        // fontWeight: '400'
    },
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
                        <div style={{ margin: '100px 0px 30px 0px' }}>
                            <Container textAlign='center'>
                                <b style={{ fontSize: '30px', marginTop: '50px' }}>Create, Control, and Analyze your Tournaments</b>
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
{/* 
                <Divider
                    as='h2'
                    horizontal
                    style={style.h3}
                >
                    Features
                </Divider> */}

                <div className='content-container'>
                    <Segment  vertical>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row stretched>
                                <Grid.Column width={8}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Pit Teams Against One Another
                                </Header>
                                    <p style={{ fontSize: '1.2em' }}>
                                        A simple way to create and manage your brackets.
                                        All you need is your imagination!
                                </p>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Report and Analyze with the <b> Scoreboard </b> features.
                                </Header>
                                    <p style={{ fontSize: '1.2em' }}>
                                        Yes that's right, with Bracketri you can create 3 different categories for every matchups to futher enhance tournaments experiences.
                                 </p>
                                </Grid.Column>
                                <Grid.Column floated='right' width={6}>
                                    <Image bordered rounded size='large' src={bracket}  />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>

                </div>


                {/* <Header
                        as='h3'
                        content='Bracketri Community'
                        style={style.h3}
                        textAlign='center'
                    />

                    <Grid columns={2} container divided stackable>
                        <Grid.Column>
                            <Grid.Column>
                                <Segment>Competive</Segment>
                            </Grid.Column>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Column>
                                <Segment>Casual</Segment>
                            </Grid.Column>
                        </Grid.Column>
                    </Grid> */}

            </div>

        )
    }
};


export default HomePage