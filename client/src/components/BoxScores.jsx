import React, { Component } from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'

class BoxScores extends Component {
    state = { open: false }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        const { open } = this.state

        return (
            <Modal
                open={open}
                onOpen={this.open}
                onClose={this.close}
                size='small'
                trigger={
                    <Button primary icon>
                        Edit Box Score <Icon name='right chevron' />
                    </Button>
                }
            >
                <Modal.Header>Modal #2</Modal.Header>
                <Modal.Content>
                    <p>That's everything!</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button icon='check' content='All Done' onClick={this.close} />
                </Modal.Actions>
            </Modal>
        )
    }
}

export default BoxScores