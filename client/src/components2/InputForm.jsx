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
const SoloMatchup = (props) => (
    <div className='matchup' >
        <div className='team'>
            <span>
                {props.team}
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
                    row1: {
                        A: {
                            name: 'Team 1',
                            seed: 1
                        },
                        B: {
                            name: 'Team 16',
                            seed: 16
                        }
                    },
                    row2: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    },
                    row3: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    },
                    row4: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    },
                    row5: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    },
                    row6: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    },
                    row7: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    },
                    row8: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    }
                },
                col2: {
                    row1: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    },
                    row2: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    },
                    row3: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    },
                    row4: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    }
                },
                col3: {
                    row1: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    },
                    row2: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    }
                },
                col4: {
                    row1: {
                        A: {
                            name: '',
                            seed: 1
                        },
                        B: {
                            name: '',
                            seed: 1
                        }
                    }
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
                <MatchUp style={(size > 8 && size < 16 ? { display: 'none' } : null)} team={'Team 1'} team2={(size > 8 && size < 16 ? 'BYE' : 'Team 16')} />
                <MatchUp style={(size > 8 && size < 14 ? { display: 'none' } : null)} team={'Team 3'} team2={(size > 8 && size < 14 ? 'BYE' : 'Team 14')} />
                <MatchUp style={(size > 8 && size < 12 ? { display: 'none' } : null)} team={'Team 5'} team2={(size > 8 && size < 12 ? 'BYE' : 'Team 12')} />
                <MatchUp style={(size > 8 && size < 10 ? { display: 'none' } : null)} team={'Team 7'} team2={(size > 8 && size < 10 ? 'BYE' : 'Team 10')} />
                <MatchUp team={'Team 8'} team2={(size > 8 && size < 9 ? 'BYE' : 'Team 9')} />
                <MatchUp style={(size > 8 && size < 11 ? { display: 'none' } : null)} team={'Team 6'} team2={(size > 8 && size < 11 ? 'BYE' : 'Team 11')} />
                <MatchUp style={(size > 8 && size < 13 ? { display: 'none' } : null)} team={'Team 4'} team2={(size > 8 && size < 13 ? 'BYE' : 'Team 13')} />
                <MatchUp style={(size > 8 && size < 15 ? { display: 'none' } : null)} team={'Team 2'} team2={(size > 8 && size < 15 ? 'BYE' : 'Team 15')} />
            </div>
        )
        const overFour = () => (
            <div>
                <MatchUp style={(size < 8 && size > 4 ? { display: 'none' } : null)} team={(size < 16 ? 'Team 1' : null)} team2={(size === 8 ? 'Team 8' : null)} />
                <MatchUp team={(size > 4 && size < 13 ? 'Team 4' : null)} team2={(size > 4 && size < 12 ? 'Team 5' : null)} />
                <MatchUp style={(size < 7 && size > 4 ? { display: 'none' } : null)} team={(size > 4 && size < 15 ? 'Team 2' : null)} team2={(size > 6 && size < 10 ? 'Team 7' : null)} />
                <MatchUp style={(size < 6 && size > 4 ? { display: 'none' } : null)} team={(size > 4 && size < 14 ? 'Team 3' : null)} team2={(size > 5 && size < 11 ? 'Team 6' : null)} />
            </div>
        )
        const overTwo = () => (
            <div>
                <MatchUp style={(size < 4 ? { display: 'none' } : null)} team={(size < 8 && size > 4 || size < 5 && size > 2 ? 'Team 1' : null)} team2={(size === 4 && size < 5 ? 'Team 4' : null)} />
                <MatchUp team={(size < 7 && size > 4 || size < 5 && size > 2 ? 'Team 2' : null)} team2={(size < 6 && size > 4 || size < 5 && size > 2 ? 'Team 3' : null)} />
            </div>
        )
        const overOne = () => (
            <div>
                <MatchUp team={(size < 4 ? 'Team 1' : null)} team2={(size < 3 ? 'Team 2' : null)} />
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

