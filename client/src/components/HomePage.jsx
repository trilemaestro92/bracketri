import React, { Component } from 'react';
import { Button, Container, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../App.css'

class HomePage extends Component {
    componentDidMount() {
        // update authenticated state on logout
        this.props.toggleAuthenticateStatus()
    }
    render() {
        return (
            <div className='outer-container'>
                <div className='content-container'>
                    <div style={{ marginTop: '100px' }}>
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
        )
    }
};


export default HomePage