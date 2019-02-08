import React from 'react';
import { Modal, Input, Segment, Header, Button, Icon, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'


const RoundHead = (props) => (
    <div style={{ fontWeight: 'bold', textTransform: 'capitalize', display: 'grid', justifyContent: 'left', }} >
        {props.rounds}
    </div>
);

const MatchUp = (props) => (
    <div className='user-matchup' style={props.style} >
        <div className='user-team'>
            <span>
                <Button color='grey' size='small' attached='left' disabled>{props.seed}</Button>
                <Button basic size='small' attached='right'>{props.team}</Button>
            </span>
        </div>
        <div className='user-team'>
            <span>
                <Button color='grey' size='small' attached='left' disabled>{props.seed2}</Button>
                <Button basic size='small' attached='right'>{props.team2}</Button>
            </span>
        </div>
    </div>
)

const BraketModal = ({
    onGenerate,
    onSubmitBracket,
    openModal,
    handleNameChange,
    handleSizeChange,
    handleTeamChange,
    inputName,
    inputSize,
    name,
    size,
    teams,
    title,
    date,
    rounds,
    brackets
}) => {
    const roundAbove8 =
        rounds.sixteen.map((name, i) => {
            return (<RoundHead key={i} rounds={name} />)
        })
    const roundAbove4 =
        rounds.eight.map((name, i) => {
            return (<RoundHead key={i} rounds={name} />)
        })
    const roundAbove2 =
        rounds.two.map((name, i) => {
            return (<RoundHead key={i} rounds={name} />)
        })
    const overEight = () => (
        <div>
            <MatchUp style={(size > 8 && size < 16 ? { display: 'none' } : null)}
                team={brackets.team1.name}
                seed={brackets.team1.seed}
                team2={(size > 8 && size < 16 ? 'BYE' : brackets.team16.name)}
                seed2={(size > 8 && size < 16 ? 'BYE' : brackets.team16.seed)}
            />
            <MatchUp style={(size > 8 && size < 14 ? { display: 'none' } : null)}
                team={brackets.team3.name}
                seed={brackets.team3.seed}
                team2={(size > 8 && size < 14 ? 'BYE' : brackets.team14.name)} 
                seed2={(size > 8 && size < 14 ? 'BYE' : brackets.team14.seed)} />
            <MatchUp style={(size > 8 && size < 12 ? { display: 'none' } : null)}
                team={brackets.team5.name}
                seed={brackets.team5.seed}
                team2={(size > 8 && size < 12 ? 'BYE' : brackets.team12.name)}
                seed2={(size > 8 && size < 12 ? 'BYE' : brackets.team12.seed)} />
            <MatchUp style={(size > 8 && size < 10 ? { display: 'none' } : null)}
                team={brackets.team7.name}
                seed={brackets.team7.seed}
                team2={(size > 8 && size < 10 ? 'BYE' : brackets.team10.name)}
                seed2={(size > 8 && size < 10 ? 'BYE' : brackets.team10.seed)} />
            <MatchUp
                team={brackets.team8.name}
                seed={brackets.team8.seed}
                team2={(size > 8 && size < 9 ? 'BYE' : brackets.team9.name)}
                seed2={(size > 8 && size < 9 ? 'BYE' : brackets.team9.seed)}  />
            <MatchUp style={(size > 8 && size < 11 ? { display: 'none' } : null)}
                team={brackets.team6.name}
                seed={brackets.team6.seed}
                team2={(size > 8 && size < 11 ? 'BYE' : brackets.team11.name)}
                seed2={(size > 8 && size < 11 ? 'BYE' : brackets.team11.seed)}
                 />
            <MatchUp style={(size > 8 && size < 13 ? { display: 'none' } : null)}
                team={brackets.team4.name}
                seed={brackets.team4.seed}
                team2={(size > 8 && size < 13 ? 'BYE' : brackets.team13.name)}
                seed2={(size > 8 && size < 13 ? 'BYE' : brackets.team13.seed)} />
                
            <MatchUp style={(size > 8 && size < 15 ? { display: 'none' } : null)}
                team={brackets.team2.name}
                seed={brackets.team2.seed}
                team2={(size > 8 && size < 15 ? 'BYE' : brackets.team15.name)} 
                seed2={(size > 8 && size < 15 ? 'BYE' : brackets.team15.seed)} />
        </div>
    )
    const overFour = () => (
        <div>
            <MatchUp style={(size < 8 && size > 4 ? { display: 'none' } : null)}
                team={(size < 16 ? brackets.team1.name : null)}
                seed={(size < 16 ? brackets.team1.seed : null)}
                team2={(size === 8 ? brackets.team8.name : null)}
                seed2={(size === 8 ? brackets.team8.seed : brackets.team8.seed +' / '+ brackets.team9.seed )}
            />
            <MatchUp
                team={(size > 4 && size < 13 ? brackets.team4.name : null)}
                seed={(size > 4 && size < 13 ? brackets.team4.seed : brackets.team4.seed +' / '+ brackets.team13.seed)}
                team2={(size > 4 && size < 12 ? brackets.team5.name : null)}
                seed2={(size > 4 && size < 12 ? brackets.team5.seed : brackets.team5.seed +' / '+ brackets.team12.seed)}
            />
            <MatchUp style={(size < 7 && size > 4 ? { display: 'none' } : null)}
                team={(size > 4 && size < 15 ? brackets.team2.name : null)}
                seed={(size > 4 && size < 15 ? brackets.team2.seed : null)}
                team2={(size > 6 && size < 10 ? brackets.team7.name : null)}
                seed2={(size > 6 && size < 10 ? brackets.team7.seed : brackets.team7.seed +' / '+ brackets.team10.seed)}
            />
            <MatchUp style={(size < 6 && size > 4 ? { display: 'none' } : null)}
                team={(size > 4 && size < 14 ? brackets.team3.name : null)}
                seed={(size > 4 && size < 14 ? brackets.team3.seed : brackets.team3.seed +' / '+ brackets.team14.seed)}
                team2={(size > 5 && size < 11 ? brackets.team6.name : null)}
                seed2={(size > 5 && size < 11 ? brackets.team6.seed : brackets.team6.seed +' / '+ brackets.team11.seed)}
            />
        </div>
    )
    const overTwo = () => (
        <div>
            <MatchUp
                team={(size < 8 && size > 4 || size < 5 && size > 2 ? brackets.team1.name : null)}
                seed={(size < 8 && size > 4 || size < 5 && size > 2 ? brackets.team1.seed : null)}
                team2={(size === 4 && size < 5 ? brackets.team4.name : 'BYE')}
                seed2={(size === 4 && size < 5 ? brackets.team4.seed : null)}
            />
            <MatchUp
                team={(size < 7 && size > 4 || size < 5 && size > 2 ? brackets.team2.name : null)}
                seed={(size < 7 && size > 4 || size < 5 && size > 2 ? brackets.team2.seed : null)}
                team2={(size < 6 && size > 4 || size < 5 && size > 2 ? brackets.team3.name : null)}
                seed2={(size < 6 && size > 4 || size < 5 && size > 2 ? brackets.team3.seed : null)}
            />
        </div>
    )
    return (
        <div style={{ marginBottom: '10px' }}>
            <Segment>
                <Modal size='large' closeIcon trigger={
                    <Button
                        style={{ boxShadow: 'none', fontSize: '12px', fontWeight: 'bold' }} fluid basic>
                        <div style={{ marginBottom: '20px' }}><Icon size='large' name='trophy'></Icon></div>
                        <span style={{ fontSize: '26px', fontWeight: 'bolder' }}>
                            {title}</span> / {size} teams / {date}
                    </Button>}>
                    <Header content={title + ' Matchups'} />
                    <div className='user-outer-container' >
                        <Container textAlign='justified'>
                            <div className='user-round-container'>
                                {(size > 8 ? roundAbove8 : null)}
                                {(size > 4 && size <= 8 ? roundAbove4 : null)}
                                {(size > 2 && size <= 4 ? roundAbove2 : null)}
                                {(size > 1 && size <= 2 ? <RoundHead round={rounds.one} /> : null)}
                            </div>
                            <div className='user-team-container'>
                                <div className='column1' >
                                    {(size > 8 ? overEight() : null)}
                                    {(size > 4 && size <= 8 ? overFour() : null)}
                                    {(size > 2 && size <= 4 ? overTwo() : null)}
                                    {(size > 4 && size < 8 ? overTwo() : null)}
                                </div>
                                <div className='column2'>
                                    {(size > 8 ? overFour() : null)}
                                    {(size > 4 && size < 8 ? overTwo() : null)}
                                    {/* {(size > 2 && size <= 4 ? overOne() : null)} */}
                                    {/* {(size > 1 && size <= 2 ? <SoloMatchup /> : null)} */}
                                </div>
                            </div>
                        </Container>
                    </div>
                </Modal>
            </Segment>
        </div>
    )
}

export default BraketModal
