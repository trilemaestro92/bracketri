import React from 'react';
import { Modal, Grid, Input, Header, Button, Icon, Select, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import TeamOver8Input from './TeamOver8Input.jsx'
import TeamOver4Input from './TeamOver4Input.jsx'
import TeamOver2Input from './TeamOver2Input.jsx'
import TeamOver1Input from './TeamOver1Input.jsx'
import '../App.css'


const sizeOptions = [
    { key: '2', text: '2', value: 2 },
    { key: '3', text: '3', value: 3 },
    { key: '4', text: '4', value: 4 },
    { key: '5', text: '5', value: 5 },
    { key: '6', text: '6', value: 6 },
    { key: '7', text: '7', value: 7 },
    { key: '8', text: '8', value: 8 },
    { key: '9', text: '9', value: 9 },
    { key: '10', text: '10', value: 10 },
    { key: '11', text: '11', value: 11 },
    { key: '12', text: '12', value: 12 },
    { key: '13', text: '13', value: 13 },
    { key: '14', text: '14', value: 14 },
    { key: '15', text: '15', value: 15 },
    { key: '16', text: '16', value: 16 }
]

const UserInputForm = ({
    onGenerate,
    onSubmitBracket,
    openModal,
    handleNameChange,
    handleSizeChange,
    handleTeamOver8,
    handleTeamOver4,
    handleTeamOver2,
    handleTeamOver1,
    inputName,
    inputSize,
    name,
    size,
    teams
}) => {


    return (
        <div>
            <Modal closeOnDimmerClick={false} trigger={<Button onClick={openModal} basic icon circular ><Icon color='pink' name='plus' ></Icon></Button>} closeIcon>
                <Header icon='setting' content='New Tournament Settings' />
                <div style={{ margin: '50px', overflow: '-webkit-paged-y' }}>
                    <Form onSubmit={onGenerate} size='small'>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column computer={4} mobile={6} tablet={9}>
                                    <Form.Group>
                                        <Form.Field
                                            control={Input}
                                            label='Tournament Name'
                                            placeholder='Spelling Bee Champ'
                                            value={inputName}
                                            onChange={handleNameChange}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Field
                                            value={inputSize}
                                            onChange={handleSizeChange}
                                            control={Select}
                                            options={sizeOptions}
                                            label={'Participants'}
                                            placeholder='Number of Participants'
                                            search
                                            searchInput={{ id: 'form-select-control-gender' }}
                                        />
                                    </Form.Group>
                                    {(inputName === '' || inputSize === 0 ?
                                        <Form.Button color='red' content='Please fill out' disabled /> :
                                        <Form.Button color='teal' content='Generate' />
                                    )}
                                </Grid.Column>
                                <Grid.Column computer={1} mobile={6} tablet={9}>
                                </Grid.Column>
                                <Grid.Column computer={8} mobile={6} tablet={9}>
                                    <div>
                                        <h1>{name}</h1>
                                        {size > 8 ?
                                            <TeamOver8Input
                                                size={size}
                                                col={"col1"}
                                                handleTeamOver8={handleTeamOver8}
                                            />
                                            : null}
                                        {size > 4 && size <= 8 ?
                                            <TeamOver4Input
                                                size={size}
                                                col={"col1"}
                                                handleTeamOver4={handleTeamOver4}
                                            />
                                            : null}
                                        {(size > 2 && size <= 4 ?
                                            <TeamOver2Input
                                                size={size}
                                                col={"col1"}
                                                handleTeamOver2={handleTeamOver2}
                                            />
                                            : null)}
                                        {(size > 1 && size <= 2 ?
                                            <TeamOver1Input
                                                col={'col1'}
                                                handleTeamOver1={handleTeamOver1} />
                                            : null)}
                                    </div>
                                </Grid.Column>
                                <Grid.Column computer={1} mobile={6} tablet={9}>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Form>
                </div>
                <Modal.Actions>
                    <Button color='green' onClick={onSubmitBracket}>
                        <Icon name='checkmark' /> Create</Button>
                </Modal.Actions>
            </Modal>
        </div>

    )
}


export default UserInputForm