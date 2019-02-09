import React, { Component } from 'react';
import { Container, Select, Input, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'


const RoundHead = (props) => (
    <div style={{ fontWeight: 'bold', textTransform: 'capitalize', display: 'grid', justifyContent: 'center', }} >
        {props.round}
    </div>
);

const MatchUp = (props) => (
    <div className='matchup' style={props.style} >
        <div className='team'>
            <span>
                {props.team}
            </span>
        </div>
        <div className='team'>
            <span>
                {props.team2}
            </span>
        </div>
    </div>
)


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

export default class BracketSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            size: 0,
            inputSize: 0,
            inputName: '',
            brackets: {
                col1: {
                    team1: 'Team 1',
                    team2: 'Team 2',
                    team3: 'Team 3',
                    team4: 'Team 4',
                    team5: 'Team 5',
                    team6: 'Team 6',
                    team7: 'Team 7',
                    team8: 'Team 8',
                    team9: 'Team 9',
                    team10: 'Team 10',
                    team11: 'Team 11',
                    team12: 'Team 12',
                    team13: 'Team 13',
                    team14: 'Team 14',
                    team15: 'Team 15',
                    team16: 'Team 16'
                },
                col2: {
                }
            },
            rounds: {
                one: ['Championship'],
                two: ['round 1', 'Championship'],
                eight: ['round 1', 'round 2', 'Championship'],
                sixteen: ['round 1', 'round 2', 'round 3', 'Championship']
            }
        }
    }
    handleNameChange = (e, { value }) => {
        this.setState({ inputName: value })
    }
    handleNumberChange = (e, { value }) => {
        this.setState({ inputSize: value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { inputSize, inputName } = this.state
        this.setState({ size: inputSize, name: inputName, inputSize: 0, inputName: '' })
    }

    render() {
        const { name, rounds, size, inputName, inputSize } = this.state
        const { col1 } = this.state.brackets
        const roundAbove8 =
            rounds.sixteen.map((name, i) => {
                return (<RoundHead key={i} round={name} />)
            })
        const roundAbove4 =
            rounds.eight.map((name, i) => {
                return (<RoundHead key={i} round={name} />)
            })
        const roundAbove2 =
            rounds.two.map((name, i) => {
                return (<RoundHead key={i} round={name} />)
            })
        const overEight = () => (
            <div>
                <MatchUp style={(size > 8 && size < 16 ? { display: 'none' } : null)} team={col1.team1} team2={(size > 8 && size < 16 ? 'BYE' : col1.team16)} />
                <MatchUp style={(size > 8 && size < 14 ? { display: 'none' } : null)} team={col1.team3} team2={(size > 8 && size < 14 ? 'BYE' : col1.team14)} />
                <MatchUp style={(size > 8 && size < 12 ? { display: 'none' } : null)} team={col1.team5} team2={(size > 8 && size < 12 ? 'BYE' : col1.team12)} />
                <MatchUp style={(size > 8 && size < 10 ? { display: 'none' } : null)} team={col1.team7} team2={(size > 8 && size < 10 ? 'BYE' : col1.team10)} />
                <MatchUp team={col1.team8} team2={(size > 8 && size < 9 ? 'BYE' : col1.team9)} />
                <MatchUp style={(size > 8 && size < 11 ? { display: 'none' } : null)} team={col1.team6} team2={(size > 8 && size < 11 ? 'BYE' : col1.team11)} />
                <MatchUp style={(size > 8 && size < 13 ? { display: 'none' } : null)} team={col1.team4} team2={(size > 8 && size < 13 ? 'BYE' : col1.team13)} />
                <MatchUp style={(size > 8 && size < 15 ? { display: 'none' } : null)} team={col1.team2} team2={(size > 8 && size < 15 ? 'BYE' : col1.team15)} />
            </div>
        )
        const overFour = () => (
            <div>
                <MatchUp style={(size < 8 && size > 4 ? { display: 'none' } : null)} team={(size < 16 ? col1.team1 : null)} team2={(size === 8 ? col1.team8 : null)} />
                <MatchUp team={(size > 4 && size < 13 ? col1.team4 : null)} team2={(size > 4 && size < 12 ? col1.team5 : null)} />
                <MatchUp style={(size < 7 && size > 4 ? { display: 'none' } : null)} team={(size > 4 && size < 15 ? col1.team2 : null)} team2={(size > 6 && size < 10 ? col1.team7 : null)} />
                <MatchUp style={(size < 6 && size > 4 ? { display: 'none' } : null)} team={(size > 4 && size < 14 ? col1.team3 : null)} team2={(size > 5 && size < 11 ? col1.team6 : null)} />
            </div>
        )
        const overTwo = () => (
            <div>
                <MatchUp style={(size < 4 ? { display: 'none' } : null)} team={(size < 8 && size > 4 || size < 5 && size > 2 ? col1.team1 : null)} team2={(size === 4 && size < 5 ? col1.team4 : null)} />
                <MatchUp team={(size < 7 && size > 4 || size < 5 && size > 2 ? col1.team2 : null)} team2={(size < 6 && size > 4 || size < 5 && size > 2 ? col1.team3 : null)} />
            </div>
        )
        const overOne = () => (
            <div>
                <MatchUp team={(size < 4 ? col1.team1 : null)} team2={(size < 3 ? col1.team2 : null)} />
            </div>
        )

        return (
            <div className='outer-container'>
                <div className='content-container' style={{ width: '600px' }}>
                    <div style={{ marginTop: '50px' }}>
                        <Form onSubmit={this.onSubmit} size='small'>
                            <Form.Group>
                                <Form.Field
                                    control={Input}
                                    label='Tournament Name'
                                    placeholder='Thumb War Championship'
                                    value={inputName}
                                    onChange={this.handleNameChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Field
                                    value={inputSize}
                                    onChange={this.handleNumberChange}
                                    control={Select}
                                    options={sizeOptions}
                                    label={'Participants'}
                                    placeholder='Number of Participants'
                                    search
                                    searchInput={{ id: 'form-select-control-gender' }}
                                />
                            </Form.Group>
                            <Form.Button color='teal' content='Generate' />
                        </Form>

                    </div>
                </div>
                {(size < 2 ? null :
                    <div className='outer-container' >
                        <div className='content-container'>
                            <Container textAlign='justified'>
                                <div className='bracket-title'>
                                    <span>{name}</span>
                                </div>
                                <div style={{ fontWeight: 'bold', margin: '5px' }}>BRACKET VIEW</div>
                                <div className='round-container'>
                                    {(size > 8 ? roundAbove8 : null)}
                                    {(size > 4 && size <= 8 ? roundAbove4 : null)}
                                    {(size > 2 && size <= 4 ? roundAbove2 : null)}
                                    {(size > 1 && size <= 2 ? <RoundHead round={rounds.one} /> : null)}
                                </div>
                                <div className='team-container'>
                                    <div className='column1' >
                                        {(size > 8 ? overEight() : null)}
                                        {(size > 4 && size <= 8 ? overFour() : null)}
                                        {(size > 2 && size <= 4 ? overTwo() : null)}
                                        {(size > 1 && size <= 2 ? overOne() : null)}
                                    </div>
                                    <div className='column2'>
                                        {(size > 8 ? overFour() : null)}
                                        {(size > 4 && size <= 8 ? overTwo() : null)}
                                        {(size > 2 && size <= 4 ? overOne() : null)}
                                        {/* {(size > 1 && size <= 2 ? <SoloMatchup /> : null)} */}
                                    </div>
                                    <div className='column3'>
                                        {(size > 8 ? overTwo() : null)}
                                        {(size > 4 && size <= 8 ? overOne() : null)}
                                        {/* {(size > 2 && size <= 4 ? <SoloMatchup /> : null)} */}
                                    </div>
                                    <div className='column4'>
                                        {(size > 8 ? overOne() : null)}
                                        {/* {(size > 4 && size <= 8 ? <SoloMatchup /> : null)} */}
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

