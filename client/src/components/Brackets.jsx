import React from 'react';
import { Modal, Menu, Dropdown, Segment, Header, Button, Input, Grid, Table, Popup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'
import { options, options2, options3, options4 } from './Options'

const style = {
    roundHeader: {
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    divContainer: {
        marginBottom: '10px'
    },
    triggerButton: {
        boxShadow: 'none',
        fontSize: '12px',
        fontWeight: 'bold'
    },
    marinBottom: {
        marginBottom: '20px'
    },
    span: {
        fontSize: '26px',
        fontWeight: 'bolder'
    },
    table: {
        width: '100%'
    },
    segment: {
        height: '60px'
    },
    grid: {
        display: 'grid'
    },
    popup: {
        height: 'auto'
    },
    modal: {
        display: 'grid'
    },
    cellHeader: {
        fontSize: '12.5px'
    }
}


const RoundHead = (props) => (
    <Table.HeaderCell style={style.roundHeader}>
        {props.format}
    </Table.HeaderCell>
);
const PopupBoxScore = (props) => (
    <Popup
        style={{ height: 'auto' }}
        trigger={<a>box score</a>}
        content={props.content}
        on='click'
    />
)
const MatchUp = (props) => (
    <div className='user-matchup' style={props.style} >
        <div className='user-team'>
            <span>
                <Button color='grey' size='small' attached='left' disabled>{props.seed}</Button>
                <Button
                    disabled={props.disabled1}
                    inverted
                    color='twitter'
                    size='small'
                    attached='right'>
                    {props.team}
                </Button>
            </span>
        </div>
        <div className='user-team'>
            <span>
                <Button color='grey' size='small' attached='left' disabled>{props.seed2}</Button>
                <Button
                    disabled={props.disabled2}
                    inverted
                    color='twitter'
                    size='small'
                    attached='right'>
                    {props.team2}
                </Button>
            </span>
        </div>
        {props.popup}
    </div>
)

const SingleMatchUp = (props) => (
    <div className='user-matchup' style={props.style} >
        <div className='user-team'>
            <span>
                <Button color='grey' size='small' attached='left' disabled>{props.seed}</Button>
                <Button
                    disabled={props.disabled1}
                    inverted
                    color='twitter'
                    size='small'
                    attached='right'>
                    {props.team}
                </Button>
            </span>
        </div>
    </div>
)
const DropdownMatchup = (props) => (
    <Menu size='small' compact>
        <Dropdown
            size={props.size}
            rownum={props.rownum}
            letter={props.letter}
            onChange={props.onChange}
            options={props.options}
            placeholder='Select Winner'
            item
        />
    </Menu>
)
const InputStats = (props) => (
    <Input
        type='number'
        size='small'
        onChange={props.onChange}
        category={props.category}
        num={props.num}
    />
)
const InputMatchupStats = (props) => (
    <Table size='small' compact celled definition>
        <Table.Header style={style.cellHeader}>
            <Table.Row >
                <Table.HeaderCell />
                <Table.HeaderCell>{props.title1}</Table.HeaderCell>
                <Table.HeaderCell>{props.title2}</Table.HeaderCell>
                <Table.HeaderCell>{props.title3}</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell style={style.cellHeader} collapsing>
                    {props.teamA}
                </Table.Cell>
                <Table.Cell>{props.teamAStatOne}</Table.Cell>
                <Table.Cell>{props.teamAStatTwo}</Table.Cell>
                <Table.Cell>{props.teamAStatThree}</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell style={style.cellHeader} collapsing>
                    {props.teamB}
                </Table.Cell>
                <Table.Cell>{props.teamBStatOne}</Table.Cell>
                <Table.Cell>{props.teamBStatTwo}</Table.Cell>
                <Table.Cell>{props.teamBStatThree}</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)

const ActivateModal = (props) => (
    <Modal size='small' trigger={<Button onClick={props.openModal} size='tiny' color='twitter' content={props.winner} />}>
        <Modal.Header>Select a Winner</Modal.Header>
        <Modal.Content>
            <Grid divided columns='equal'>
                <Grid.Row>
                    {props.pickTeam}
                </Grid.Row>
                <Grid.Row>
                    {props.inputMatchupStats}
                </Grid.Row>
            </Grid>
        </Modal.Content>
        <Modal.Actions style={style.modal}>
            <Button
                id={props.id}
                teamsize={props.teamsize}
                size='small'
                color='green'
                floated='right'
                bracket={props.bracket}
                team1category={props.team1category}
                team2category={props.team2category}
                onClick={props.onClick}>
                update
                </Button>
            {props.button}
        </Modal.Actions>
    </Modal>
)



const Brackets = ({
    onSubmitChangeMatchup,
    onSubmitChangeRound1,
    onSubmitChangeRound2,
    onSubmitChangeRound3,
    onSubmitChangeRound4,
    handleChangeMatchup,
    handleDeleteBracket,
    handleInputChange1,
    handleInputChange2,
    size,
    title,
    format,
    brackets,
    brackets2,
    brackets3,
    brackets4,
    brackets5,
    bracketID,
    round,
    category,
    openActivateModal

}) => {

    const round2 = format.one.map((name, i) => {
        return (<RoundHead key={i} format={name} />)
    })
    const roundAbove2 = format.two.map((name, i) => {
        return (<RoundHead key={i} format={name} />)
    })
    const roundAbove4 = format.eight.map((name, i) => {
        return (<RoundHead key={i} format={name} />)
    })
    const roundAbove8 = format.sixteen.map((name, i) => {
        return (<RoundHead key={i} format={name} />)
    })
    const overEight = () => (
        <div style={style.grid}>
            <MatchUp
                popup={(size === 16 && round >= 1 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets.row1.a.name}
                            teamB={(size === 16 ? brackets.row1.b.name : null)}
                            teamAStatOne={brackets.row1.a.stats.one}
                            teamAStatTwo={brackets.row1.a.stats.two}
                            teamAStatThree={brackets.row1.a.stats.three}
                            teamBStatOne={(size === 16 ? brackets.row1.b.stats.one : null)}
                            teamBStatTwo={(size === 16 ? brackets.row1.b.stats.two : null)}
                            teamBStatThree={(size === 16 ? brackets.row1.b.stats.three : null)}
                        />}
                    />
                    : null)}
                style={(size > 8 && size <= 15 ? { display: 'none' } : null)}
                team={brackets.row1.a.name}
                seed={brackets.row1.a.seed}
                team2={(size > 8 && size <= 15 ? 'BYE' : brackets.row1.b.name)}
                seed2={(size > 8 && size <= 15 ? 'BYE' : brackets.row1.b.seed)}
            />
            <MatchUp
                popup={(size <= 16 && size >= 9 && round >= 1 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={(size <= 16 && size >= 9 ? brackets.row2.a.name : null)}
                            teamB={(size <= 16 && size >= 9 ? brackets.row2.b.name : null)}
                            teamAStatOne={(size <= 16 && size >= 9 ? brackets.row2.a.stats.one : null)}
                            teamAStatTwo={(size <= 16 && size >= 9 ? brackets.row2.a.stats.two : null)}
                            teamAStatThree={(size <= 16 && size >= 9 ? brackets.row2.a.stats.three : null)}
                            teamBStatOne={(size <= 16 && size >= 9 ? brackets.row2.b.stats.one : null)}
                            teamBStatTwo={(size <= 16 && size >= 9 ? brackets.row2.b.stats.two : null)}
                            teamBStatThree={(size <= 16 && size >= 9 ? brackets.row2.b.stats.three : null)}
                        />}
                    />
                    : null)}
                team={brackets.row2.a.name}
                seed={brackets.row2.a.seed}
                team2={brackets.row2.b.name}
                seed2={brackets.row2.b.seed}
            />
            <MatchUp style={(size > 8 && size <= 12 ? { display: 'none' } : null)}
                popup={(size <= 16 && size >= 13 && round >= 1 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets.row3.a.name}
                            teamB={(size <= 16 && size >= 13 ? brackets.row3.b.name : null)}
                            teamAStatOne={brackets.row3.a.stats.one}
                            teamAStatTwo={brackets.row3.a.stats.two}
                            teamAStatThree={brackets.row3.a.stats.three}
                            teamBStatOne={(size <= 16 && size >= 13 ? brackets.row3.b.stats.one : null)}
                            teamBStatTwo={(size <= 16 && size >= 13 ? brackets.row3.b.stats.two : null)}
                            teamBStatThree={(size <= 16 && size >= 13 ? brackets.row3.b.stats.three : null)}
                        />}
                    />
                    : null)}
                team={brackets.row3.a.name}
                seed={brackets.row3.a.seed}
                team2={(size > 8 && size <= 12 ? 'BYE' : brackets.row3.b.name)}
                seed2={(size > 8 && size <= 12 ? 'BYE' : brackets.row3.b.seed)} />
            <MatchUp style={(size > 8 && size <= 11 ? { display: 'none' } : null)}
                popup={(size <= 16 && size >= 12 && round >= 1 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets.row4.a.name}
                            teamB={(size <= 16 && size >= 12 ? brackets.row4.b.name : null)}
                            teamAStatOne={brackets.row4.a.stats.one}
                            teamAStatTwo={brackets.row4.a.stats.two}
                            teamAStatThree={brackets.row4.a.stats.three}
                            teamBStatOne={(size <= 16 && size >= 12 ? brackets.row4.b.stats.one : null)}
                            teamBStatTwo={(size <= 16 && size >= 12 ? brackets.row4.b.stats.two : null)}
                            teamBStatThree={(size <= 16 && size >= 12 ? brackets.row4.b.stats.three : null)}
                        />}
                    />
                    : null)}
                team={brackets.row4.a.name}
                seed={brackets.row4.a.seed}
                team2={(size > 8 && size <= 11 ? 'BYE' : brackets.row4.b.name)}
                seed2={(size > 8 && size <= 11 ? 'BYE' : brackets.row4.b.seed)} />
            <MatchUp
                popup={(size <= 16 && size >= 15 && round >= 1 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets.row5.a.name}
                            teamB={(size <= 16 && size >= 15 ? brackets.row5.b.name : null)}
                            teamAStatOne={brackets.row5.a.stats.one}
                            teamAStatTwo={brackets.row5.a.stats.two}
                            teamAStatThree={brackets.row5.a.stats.three}
                            teamBStatOne={(size <= 16 && size >= 15 ? brackets.row5.b.stats.one : null)}
                            teamBStatTwo={(size <= 16 && size >= 15 ? brackets.row5.b.stats.two : null)}
                            teamBStatThree={(size <= 16 && size >= 15 ? brackets.row5.b.stats.three : null)}
                        />}
                    />
                    : null)}
                style={(size > 8 && size <= 14 ? { display: 'none' } : null)}
                team={brackets.row5.a.name}
                seed={brackets.row5.a.seed}
                team2={(size > 8 && size <= 14 ? 'BYE' : brackets.row5.b.name)}
                seed2={(size > 8 && size <= 14 ? 'BYE' : brackets.row5.b.seed)} />
            <MatchUp style={(size > 8 && size <= 9 ? { display: 'none' } : null)}
                popup={(size <= 16 && size >= 10 && round >= 1 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets.row6.a.name}
                            teamB={(size >= 10 ? brackets.row6.b.name : null)}
                            teamAStatOne={brackets.row6.a.stats.one}
                            teamAStatTwo={brackets.row6.a.stats.two}
                            teamAStatThree={brackets.row6.a.stats.three}
                            teamBStatOne={(size >= 10 ? brackets.row6.b.stats.one : null)}
                            teamBStatTwo={(size >= 10 ? brackets.row6.b.stats.two : null)}
                            teamBStatThree={(size >= 10 ? brackets.row6.b.stats.three : null)}
                        />}
                    />
                    : null)}
                team={brackets.row6.a.name}
                seed={brackets.row6.a.seed}
                team2={(size > 8 && size <= 9 ? 'BYE' : brackets.row6.b.name)}
                seed2={(size > 8 && size <= 9 ? 'BYE' : brackets.row6.b.seed)}
            />
            <MatchUp style={(size > 8 && size <= 13 ? { display: 'none' } : null)}
                popup={(size <= 16 && size >= 14 && round >= 1 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets.row7.a.name}
                            teamB={(size <= 16 && size >= 14 ? brackets.row7.b.name : null)}
                            teamAStatOne={brackets.row7.a.stats.one}
                            teamAStatTwo={brackets.row7.a.stats.two}
                            teamAStatThree={brackets.row7.a.stats.three}
                            teamBStatOne={(size <= 16 && size >= 14 ? brackets.row7.b.stats.one : null)}
                            teamBStatTwo={(size <= 16 && size >= 14 ? brackets.row7.b.stats.two : null)}
                            teamBStatThree={(size <= 16 && size >= 14 ? brackets.row7.b.stats.three : null)}
                        />}
                    />
                    : null)}
                team={brackets.row7.a.name}
                seed={brackets.row7.a.seed}
                team2={(size > 8 && size <= 13 ? 'BYE' : brackets.row7.b.name)}
                seed2={(size > 8 && size <= 13 ? 'BYE' : brackets.row7.b.seed)} />

            <MatchUp style={(size > 8 && size <= 10 ? { display: 'none' } : null)}
                popup={(size <= 16 && size >= 11 && round >= 1 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets.row8.a.name}
                            teamB={(size <= 16 && size >= 11 ? brackets.row8.b.name : null)}
                            teamAStatOne={brackets.row8.a.stats.one}
                            teamAStatTwo={brackets.row8.a.stats.two}
                            teamAStatThree={brackets.row8.a.stats.three}
                            teamBStatOne={(size <= 16 && size >= 11 ? brackets.row8.b.stats.one : null)}
                            teamBStatTwo={(size <= 16 && size >= 11 ? brackets.row8.b.stats.two : null)}
                            teamBStatThree={(size <= 16 && size >= 11 ? brackets.row8.b.stats.three : null)}
                        />}
                    />
                    : null)}
                team={brackets.row8.a.name}
                seed={brackets.row8.a.seed}
                team2={(size > 8 && size <= 10 ? 'BYE' : brackets.row8.b.name)}
                seed2={(size > 8 && size <= 10 ? 'BYE' : brackets.row8.b.seed)} />
        </div>
    )
    const overFour = () => (
        <div style={style.grid}>
            <MatchUp
                popup={(size === 8 && round >= 1 || size >= 9 && size <= 15 && round >= 2 ?
                    < PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={(size >= 8 && size <= 15 ? brackets.row1.a.name : null)}
                            teamB={(size === 8 ? brackets.row1.b.name : size >= 9 && size <= 15 ? brackets2.row1.b.name : null)}
                            teamAStatOne={(size >= 8 && size <= 15 ? brackets.row1.a.stats.one : null)}
                            teamAStatTwo={(size >= 8 && size <= 15 ? brackets.row1.a.stats.two : null)}
                            teamAStatThree={(size >= 8 && size <= 15 ? brackets.row1.a.stats.three : null)}
                            teamBStatOne={(size === 8 ? brackets.row1.b.stats.one : size >= 9 && size <= 15 ? brackets2.row1.b.stats.one : null)}
                            teamBStatTwo={(size === 8 ? brackets.row1.b.stats.two : size >= 9 && size <= 15 ? brackets2.row1.b.stats.two : null)}
                            teamBStatThree={(size === 8 ? brackets.row1.b.stats.three : size >= 9 && size <= 15 ? brackets2.row1.b.stats.three : null)}
                        />}
                    />
                    : null)}
                style={(size <= 7 && size >= 5 ? { display: 'none' } : null)}
                team={(size < 16 ? brackets.row1.a.name : 'TBD')}
                seed={(size < 16 ? brackets.row1.a.seed : null)}
                team2={(size >= 5 && size <= 8 ? brackets.row1.b.name
                    : size >= 9 && round < 1 ?
                        <ActivateModal
                            openModal={openActivateModal}
                            winner={(brackets2 === undefined || brackets2.row1 === undefined || brackets2.row1.b === undefined ? 'activate' : brackets2.row1.b.name)}
                            pickTeam={
                                <Menu size='small' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row1'
                                        letter='b'
                                        onChange={handleChangeMatchup}
                                        options={options({ brackets, rowNum: 'row2' })}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>}
                            inputMatchupStats={
                                < InputMatchupStats
                                    title1={category.title1}
                                    title2={category.title2}
                                    title3={category.title3}
                                    teamA={brackets.row2.a.name}
                                    teamB={brackets.row2.b.name}
                                    teamAStatOne={< InputStats
                                        onChange={handleInputChange1}
                                        num={'one'}
                                    />}
                                    teamAStatTwo={< InputStats
                                        onChange={handleInputChange1}
                                        num={'two'}
                                    />}
                                    teamAStatThree={< InputStats
                                        onChange={handleInputChange1}
                                        num={'three'}
                                    />}
                                    teamBStatOne={< InputStats
                                        onChange={handleInputChange2}
                                        num={'one'}
                                    />}
                                    teamBStatTwo={< InputStats
                                        onChange={handleInputChange2}
                                        num={'two'}
                                    />}
                                    teamBStatThree={< InputStats
                                        onChange={handleInputChange2}
                                        num={'three'}
                                    />}
                                />}
                            id={bracketID}
                            teamsize={size}
                            onClick={onSubmitChangeMatchup}
                            team1category={'brackets.col1.row2.a.stats'}
                            team2category={'brackets.col1.row2.b.stats'}
                            bracket={'brackets.col2.row1.b'}
                        />
                        : brackets2.row1.b.name)}
                seed2={(size <= 8 ? brackets.row1.b.seed
                    : size >= 9 && round < 1 ? brackets.row2.a.seed + ' | ' + brackets.row2.b.seed
                        : brackets2.row1.b.seed)}
            />
            <MatchUp
                popup={(size <= 8 && size >= 5 && round >= 1 || size >= 9 && size <= 15 && round >= 2 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={(size <= 8 && size >= 5 ? brackets.row2.a.name : size >= 9 && size <= 12 ? brackets.row3.a.name : size >= 13 && size <= 15 ? brackets2.row3.a.name : null)}
                            teamB={(size <= 8 && size >= 5 ? brackets.row2.b.name : size >= 9 && size <= 11 ? brackets.row4.a.name : size >= 12 && size <= 15 ? brackets2.row4.a.name : null)}
                            teamAStatOne={(size >= 5 && size <= 8 ? brackets.row2.a.stats.one : size >= 9 && size <= 12 ? brackets.row3.a.stats.one : size >= 13 && size <= 15 ? brackets2.row3.a.stats.one : null)}
                            teamAStatTwo={(size >= 5 && size <= 8 ? brackets.row2.a.stats.two : size >= 9 && size <= 12 ? brackets.row3.a.stats.two : size >= 13 && size <= 15 ? brackets2.row3.a.stats.two : null)}
                            teamAStatThree={(size >= 5 && size <= 8 ? brackets.row2.a.stats.three : size >= 9 && size <= 12 ? brackets.row3.a.stats.three : size >= 13 && size <= 15 ? brackets2.row3.a.stats.three : null)}
                            teamBStatOne={(size >= 5 && size <= 8 ? brackets.row2.b.stats.one : size >= 9 && size <= 11 ? brackets.row4.a.stats.one : size >= 12 && size <= 15 ? brackets2.row4.a.stats.one : null)}
                            teamBStatTwo={(size >= 5 && size <= 8 ? brackets.row2.b.stats.two : size >= 9 && size <= 11 ? brackets.row4.a.stats.two : size >= 12 && size <= 15 ? brackets2.row4.a.stats.two : null)}
                            teamBStatThree={(size >= 5 && size <= 8 ? brackets.row2.b.stats.three : size >= 9 && size <= 11 ? brackets.row4.a.stats.three : size >= 12 && size <= 15 ? brackets2.row4.a.stats.three : null)}
                        />}
                    />
                    : null)}
                team={(size >= 5 && size <= 8 ? brackets.row2.a.name
                    : size >= 9 && size <= 12 ? brackets.row3.a.name
                        : size >= 13 && size <= 15 && round < 1 ?
                            <ActivateModal
                                openModal={openActivateModal}
                                winner={(brackets2 === undefined || brackets2.row3 === undefined || brackets2.row3.a === undefined ? 'activate' : brackets2.row3.a.name)}
                                pickTeam={
                                    <Menu size='small' compact>
                                        <Dropdown
                                            size={size}
                                            rownum='row3'
                                            letter='a'
                                            onChange={handleChangeMatchup}
                                            options={options({ brackets, rowNum: 'row3' })}
                                            placeholder='Select Winner'
                                            item
                                        />
                                    </Menu>}
                                inputMatchupStats={
                                    < InputMatchupStats
                                        title1={category.title1}
                                        title2={category.title2}
                                        title3={category.title3}
                                        teamA={brackets.row3.a.name}
                                        teamB={brackets.row3.b.name}
                                        teamAStatOne={< InputStats
                                            onChange={handleInputChange1}
                                            num={'one'}
                                        />}
                                        teamAStatTwo={< InputStats
                                            onChange={handleInputChange1}
                                            num={'two'}
                                        />}
                                        teamAStatThree={< InputStats
                                            onChange={handleInputChange1}
                                            num={'three'}
                                        />}
                                        teamBStatOne={< InputStats
                                            onChange={handleInputChange2}
                                            num={'one'}
                                        />}
                                        teamBStatTwo={< InputStats
                                            onChange={handleInputChange2}
                                            num={'two'}
                                        />}
                                        teamBStatThree={< InputStats
                                            onChange={handleInputChange2}
                                            num={'three'}
                                        />}
                                    />}
                                id={bracketID}
                                teamsize={size}
                                onClick={onSubmitChangeMatchup}
                                team1category={'brackets.col1.row3.a.stats'}
                                team2category={'brackets.col1.row3.b.stats'}
                                bracket={'brackets.col2.row3.a'}
                            />
                            : brackets2.row3.a.name)}
                seed={(size >= 5 && size <= 8 ? brackets.row2.a.seed
                    : size >= 9 && size <= 12 ? brackets.row3.a.seed
                        : size >= 13 && size <= 15 && round < 1 ? brackets.row3.a.seed + ' | ' + brackets.row3.b.seed
                            : brackets2.row3.a.seed)}
                team2={(size >= 5 && size <= 8 ? brackets.row2.b.name
                    : size >= 9 && size <= 11 ? brackets.row4.a.name
                        : size >= 12 && size <= 15 && round < 1 ?
                            <ActivateModal
                                openModal={openActivateModal}
                                winner={(brackets2 === undefined || brackets2.row4 === undefined || brackets2.row4.a === undefined ? 'activate' : brackets2.row4.a.name)}
                                pickTeam={
                                    <Menu size='small' compact>
                                        <Dropdown
                                            size={size}
                                            rownum='row4'
                                            letter='a'
                                            onChange={handleChangeMatchup}
                                            options={options({ brackets, rowNum: 'row4' })}
                                            placeholder='Select Winner'
                                            item
                                        />
                                    </Menu>}
                                inputMatchupStats={
                                    < InputMatchupStats
                                        title1={category.title1}
                                        title2={category.title2}
                                        title3={category.title3}
                                        teamA={brackets.row4.a.name}
                                        teamB={brackets.row4.b.name}
                                        teamAStatOne={< InputStats
                                            onChange={handleInputChange1}
                                            num={'one'}
                                        />}
                                        teamAStatTwo={< InputStats
                                            onChange={handleInputChange1}
                                            num={'two'}
                                        />}
                                        teamAStatThree={< InputStats
                                            onChange={handleInputChange1}
                                            num={'three'}
                                        />}
                                        teamBStatOne={< InputStats
                                            onChange={handleInputChange2}
                                            num={'one'}
                                        />}
                                        teamBStatTwo={< InputStats
                                            onChange={handleInputChange2}
                                            num={'two'}
                                        />}
                                        teamBStatThree={< InputStats
                                            onChange={handleInputChange2}
                                            num={'three'}
                                        />}
                                    />}
                                id={bracketID}
                                teamsize={size}
                                onClick={onSubmitChangeMatchup}
                                team1category={'brackets.col1.row4.a.stats'}
                                team2category={'brackets.col1.row4.b.stats'}
                                bracket={'brackets.col2.row4.a'}
                            />
                            :
                            brackets2.row4.a.name)}
                seed2={(size >= 5 && size <= 8 ? brackets.row2.b.seed
                    : size >= 9 && size <= 11 ? brackets.row4.a.seed
                        : size >= 12 && size <= 15 && round < 1 ? brackets.row4.a.seed + ' | ' + brackets.row4.b.seed
                            : brackets2.row4.a.seed)}
            />
            <MatchUp style={(size >= 5 && size <= 6 ? { display: 'none' } : null)}
                popup={(size <= 8 && size >= 5 && round >= 1 || size >= 9 && size <= 15 && round >= 2 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={(size >= 7 && size <= 8 ? brackets.row3.a.name : size >= 9 && size <= 14 ? brackets.row5.a.name : size === 15 ? brackets2.row5.a.name : null)}
                            teamB={(size >= 7 && size <= 8 ? brackets.row3.b.name : size === 9 ? brackets.row6.a.name : size >= 10 && size <= 15 ? brackets2.row6.a.name : null)}
                            teamAStatOne={(size >= 7 && size <= 8 ? brackets.row3.a.stats.one : size >= 9 && size <= 14 ? brackets.row5.a.stats.one : size === 15 ? brackets2.row5.a.stats.one : null)}
                            teamAStatTwo={(size >= 7 && size <= 8 ? brackets.row3.a.stats.two : size >= 9 && size <= 14 ? brackets.row5.a.stats.two : size === 15 ? brackets2.row5.a.stats.two : null)}
                            teamAStatThree={(size >= 7 && size <= 8 ? brackets.row3.a.stats.three : size >= 9 && size <= 14 ? brackets.row5.a.stats.three : size === 15 ? brackets2.row5.a.stats.three : null)}
                            teamBStatOne={(size >= 7 && size <= 8 ? brackets.row3.b.stats.one : size === 9 ? brackets.row6.a.stats.one : size >= 10 && size <= 15 ? brackets2.row6.a.stats.one : null)}
                            teamBStatTwo={(size >= 7 && size <= 8 ? brackets.row3.b.stats.two : size === 9 ? brackets.row6.a.stats.two : size >= 10 && size <= 15 ? brackets2.row6.a.stats.two : null)}
                            teamBStatThree={(size >= 7 && size <= 8 ? brackets.row3.b.stats.three : size === 9 ? brackets.row6.a.stats.three : size >= 10 && size <= 15 ? brackets2.row6.a.stats.three : null)}
                        />}
                    />
                    : null)}
                team={(size >= 5 && size <= 8 ? brackets.row3.a.name
                    : size >= 9 && size <= 14 ? brackets.row5.a.name
                        : size === 15 && round < 1 ?
                            <ActivateModal
                                openModal={openActivateModal}
                                winner={(brackets2 === undefined || brackets2.row5 === undefined || brackets2.row5.a === undefined ? 'activate' : brackets2.row5.a.name)}
                                pickTeam={
                                    <Menu size='small' compact>
                                        <Dropdown
                                            size={size}
                                            rownum='row5'
                                            letter='a'
                                            onChange={handleChangeMatchup}
                                            options={options({ brackets, rowNum: 'row5' })}
                                            placeholder='Select Winner'
                                            item
                                        />
                                    </Menu>}
                                inputMatchupStats={
                                    < InputMatchupStats
                                        title1={category.title1}
                                        title2={category.title2}
                                        title3={category.title3}
                                        teamA={brackets.row5.a.name}
                                        teamB={brackets.row5.b.name}
                                        teamAStatOne={< InputStats
                                            onChange={handleInputChange1}
                                            num={'one'}
                                        />}
                                        teamAStatTwo={< InputStats
                                            onChange={handleInputChange1}
                                            num={'two'}
                                        />}
                                        teamAStatThree={< InputStats
                                            onChange={handleInputChange1}
                                            num={'three'}
                                        />}
                                        teamBStatOne={< InputStats
                                            onChange={handleInputChange2}
                                            num={'one'}
                                        />}
                                        teamBStatTwo={< InputStats
                                            onChange={handleInputChange2}
                                            num={'two'}
                                        />}
                                        teamBStatThree={< InputStats
                                            onChange={handleInputChange2}
                                            num={'three'}
                                        />}
                                    />}
                                id={bracketID}
                                teamsize={size}
                                onClick={onSubmitChangeMatchup}
                                team1category={'brackets.col1.row5.a.stats'}
                                team2category={'brackets.col1.row5.b.stats'}
                                bracket={'brackets.col2.row5.a'}
                            />
                            : brackets2.row5.a.name)}
                seed={(size >= 5 && size <= 8 ? brackets.row3.a.seed
                    : size >= 9 && size <= 14 ? brackets.row5.a.seed
                        : size === 15 && round < 1 ? brackets.row5.a.seed + ' | ' + brackets.row5.b.seed
                            : brackets2.row5.a.seed)}
                team2={(size >= 5 && size <= 8 ? brackets.row3.b.name
                    : size >= 10 && size <= 15 && round < 1 ?
                        <ActivateModal
                            openModal={openActivateModal}
                            winner={(brackets2 === undefined || brackets2.row6 === undefined || brackets2.row6.a === undefined ? 'activate' : brackets2.row6.a.name)}
                            pickTeam={
                                <Menu size='small' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row6'
                                        letter='a'
                                        onChange={handleChangeMatchup}
                                        options={options({ brackets, rowNum: 'row6' })}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>}
                            inputMatchupStats={
                                < InputMatchupStats
                                    title1={category.title1}
                                    title2={category.title2}
                                    title3={category.title3}
                                    teamA={brackets.row6.a.name}
                                    teamB={brackets.row6.b.name}
                                    teamAStatOne={< InputStats
                                        onChange={handleInputChange1}
                                        num={'one'}
                                    />}
                                    teamAStatTwo={< InputStats
                                        onChange={handleInputChange1}
                                        num={'two'}
                                    />}
                                    teamAStatThree={< InputStats
                                        onChange={handleInputChange1}
                                        num={'three'}
                                    />}
                                    teamBStatOne={< InputStats
                                        onChange={handleInputChange2}
                                        num={'one'}
                                    />}
                                    teamBStatTwo={< InputStats
                                        onChange={handleInputChange2}
                                        num={'two'}
                                    />}
                                    teamBStatThree={< InputStats
                                        onChange={handleInputChange2}
                                        num={'three'}
                                    />}
                                />}
                            id={bracketID}
                            teamsize={size}
                            onClick={onSubmitChangeMatchup}
                            team1category={'brackets.col1.row6.a.stats'}
                            team2category={'brackets.col1.row6.b.stats'}
                            bracket={'brackets.col2.row6.a'}
                        />
                        :
                        size === 9 ? brackets.row6.a.name : brackets2.row6.a.name)}
                seed2={(size >= 5 && size <= 8 ? brackets.row3.b.seed
                    : size === 9 ? brackets.row6.a.seed
                        : size >= 10 && size <= 15 && round < 1 ? brackets.row6.a.seed + ' | ' + brackets.row6.b.seed
                            : brackets2.row6.a.seed)}
            />
            <MatchUp style={(size === 5 ? { display: 'none' } : null)}
                popup={(size <= 8 && size >= 5 && round >= 1 || size >= 9 && size <= 15 && round >= 2 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={(size >= 6 && size <= 8 ? brackets.row4.a.name : size >= 9 && size <= 13 ? brackets.row7.a.name : size >= 14 && size <= 15 ? brackets2.row7.a.name : null)}
                            teamB={(size >= 6 && size <= 8 ? brackets.row4.b.name : size >= 9 && size <= 10 ? brackets.row8.a.name : size >= 11 && size <= 15 ? brackets2.row8.a.name : null)}
                            teamAStatOne={(size >= 6 && size <= 8 ? brackets.row4.a.stats.one : size >= 9 && size <= 13 ? brackets.row7.a.stats.one : size >= 14 && size <= 15 ? brackets2.row7.a.stats.one : null)}
                            teamAStatTwo={(size >= 6 && size <= 8 ? brackets.row4.a.stats.two : size >= 9 && size <= 13 ? brackets.row7.a.stats.two : size >= 14 && size <= 15 ? brackets2.row7.a.stats.two : null)}
                            teamAStatThree={(size >= 6 && size <= 8 ? brackets.row4.a.stats.three : size >= 9 && size <= 13 ? brackets.row7.a.stats.three : size >= 14 && size <= 15 ? brackets2.row7.a.stats.three : null)}
                            teamBStatOne={(size >= 6 && size <= 8 ? brackets.row4.b.stats.one : size >= 9 && size <= 10 ? brackets.row8.a.stats.one : size >= 11 && size <= 15 ? brackets2.row8.a.stats.one : null)}
                            teamBStatTwo={(size >= 6 && size <= 8 ? brackets.row4.b.stats.two : size >= 9 && size <= 10 ? brackets.row8.a.stats.two : size >= 11 && size <= 15 ? brackets2.row8.a.stats.two : null)}
                            teamBStatThree={(size >= 6 && size <= 8 ? brackets.row4.b.stats.three : size >= 9 && size <= 10 ? brackets.row8.a.stats.three : size >= 11 && size <= 15 ? brackets2.row8.a.stats.three : null)}
                        />}
                    />
                    : null)}
                team={(size >= 5 && size <= 8 ? brackets.row4.a.name
                    : size >= 9 && size <= 13 ? brackets.row7.a.name
                        : size >= 14 && size <= 15 && round < 1 ?
                            <ActivateModal
                                openModal={openActivateModal}
                                winner={(brackets2 === undefined || brackets2.row7 === undefined || brackets2.row7.a === undefined ? 'activate' : brackets2.row7.a.name)}
                                pickTeam={
                                    <Menu size='small' compact>
                                        <Dropdown
                                            size={size}
                                            rownum='row7'
                                            letter='a'
                                            onChange={handleChangeMatchup}
                                            options={options({ brackets, rowNum: 'row7' })}
                                            placeholder='Select Winner'
                                            item
                                        />
                                    </Menu>}
                                inputMatchupStats={
                                    < InputMatchupStats
                                        title1={category.title1}
                                        title2={category.title2}
                                        title3={category.title3}
                                        teamA={brackets.row7.a.name}
                                        teamB={brackets.row7.b.name}
                                        teamAStatOne={< InputStats
                                            onChange={handleInputChange1}
                                            num={'one'}
                                        />}
                                        teamAStatTwo={< InputStats
                                            onChange={handleInputChange1}
                                            num={'two'}
                                        />}
                                        teamAStatThree={< InputStats
                                            onChange={handleInputChange1}
                                            num={'three'}
                                        />}
                                        teamBStatOne={< InputStats
                                            onChange={handleInputChange2}
                                            num={'one'}
                                        />}
                                        teamBStatTwo={< InputStats
                                            onChange={handleInputChange2}
                                            num={'two'}
                                        />}
                                        teamBStatThree={< InputStats
                                            onChange={handleInputChange2}
                                            num={'three'}
                                        />}
                                    />}
                                id={bracketID}
                                teamsize={size}
                                onClick={onSubmitChangeMatchup}
                                team1category={'brackets.col1.row7.a.stats'}
                                team2category={'brackets.col1.row7.b.stats'}
                                bracket={'brackets.col2.row7.a'}
                            />
                            : brackets2.row7.a.name)}
                seed={(size >= 5 && size <= 8 ? brackets.row4.a.seed
                    : size >= 9 && size <= 13 ? brackets.row7.a.seed
                        : size >= 14 && size <= 15 && round < 1 ? brackets.row7.a.seed + ' | ' + brackets.row7.b.seed
                            : brackets2.row7.a.seed)}
                team2={(size >= 5 && size <= 8 ? brackets.row4.b.name : size >= 11 && size <= 15 && round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row8 === undefined || brackets2.row8.a === undefined ? 'activate' : brackets2.row8.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row8'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row8' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row8.a.name}
                                teamB={brackets.row8.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row8.a.stats'}
                        team2category={'brackets.col1.row8.b.stats'}
                        bracket={'brackets.col2.row8.a'}
                    />
                    : size >= 5 && size <= 10 ? brackets.row8.a.name
                        : brackets2.row8.a.name)}
                seed2={(size >= 5 && size <= 8 ? brackets.row4.b.seed
                    : size >= 5 && size <= 10 ? brackets.row8.a.seed
                        : size >= 11 && size <= 15 && round < 1 ? brackets.row8.a.seed + ' | ' + brackets.row8.b.seed
                            : brackets2.row8.a.seed
                )}
            />
        </div>
    )
    const overTwo = () => (
        <div style={style.grid}>
            <MatchUp
                popup={(size <= 4 && size >= 3 && round >= 1 || size >= 5 && size <= 8 && round >= 2 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={(size >= 4 && size <= 7 ? brackets.row1.a.name : size === 3 ? brackets.row2.a.name : null)}
                            teamB={(size === 4 ? brackets.row1.b.name : size === 3 ? brackets.row2.b.name : size >= 5 && size <= 7 ? brackets2.row1.b.name : null)}
                            teamAStatOne={(size >= 4 && size <= 7 ? brackets.row1.a.stats.one : size === 3 ? brackets.row2.a.stats.one : null)}
                            teamAStatTwo={(size >= 4 && size <= 7 ? brackets.row1.a.stats.two : size === 3 ? brackets.row2.a.stats.two : null)}
                            teamAStatThree={(size >= 4 && size <= 7 ? brackets.row1.a.stats.three : size === 3 ? brackets.row2.a.stats.three : null)}
                            teamBStatOne={(size === 4 ? brackets.row1.b.stats.one : size === 3 ? brackets.row2.b.stats.one : size >= 5 && size <= 7 ? brackets2.row1.b.stats.one : null)}
                            teamBStatTwo={(size === 4 ? brackets.row1.b.stats.two : size === 3 ? brackets.row2.b.stats.two : size >= 5 && size <= 7 ? brackets2.row1.b.stats.two : null)}
                            teamBStatThree={(size === 4 ? brackets.row1.b.stats.three : size === 3 ? brackets.row2.b.stats.three : size >= 5 && size <= 7 ? brackets2.row1.b.stats.three : null)}
                        />}
                    />
                    : null)}
                style={(size < 4 ? { display: 'none' } : null)}
                team={(size <= 4 && size >= 3 ? brackets.row1.a.name
                    : size <= 16 && size >= 9 && round === 1 ?
                        <Menu size='mini' compact>
                            <Dropdown
                                size={size}
                                rownum='row1'
                                letter='b'
                                onChange={handleChangeMatchup}
                                options={options({ brackets: brackets2, rowNum: 'row1' })}
                                placeholder='Select Winner'
                                item
                            />
                        </Menu>
                        : brackets.row1.a.name)}
                seed={(size <= 4 && size >= 3 ? brackets.row1.a.seed
                    : size <= 16 && size >= 9 && round === 1 ? brackets2.row1.a.seed + ' | ' + brackets2.row1.b.seed
                        : brackets.row1.a.seed)}
                team2={(size === 4 ? brackets.row1.b.name : size === 3 ? null
                    : size <= 7 && size >= 5 && round < 1 ?
                        <ActivateModal
                            openModal={openActivateModal}
                            winner={(brackets2 === undefined || brackets2.row1 === undefined || brackets2.row1.b === undefined ? 'activate' : brackets2.row1.b.name)}
                            pickTeam={
                                <Menu size='small' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row1'
                                        letter='b'
                                        onChange={handleChangeMatchup}
                                        options={options({ brackets: brackets, rowNum: 'row2' })}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>}
                            inputMatchupStats={
                                < InputMatchupStats
                                    title1={category.title1}
                                    title2={category.title2}
                                    title3={category.title3}
                                    teamA={brackets.row2.a.name}
                                    teamB={brackets.row2.b.name}
                                    teamAStatOne={< InputStats
                                        onChange={handleInputChange1}
                                        num={'one'}
                                    />}
                                    teamAStatTwo={< InputStats
                                        onChange={handleInputChange1}
                                        num={'two'}
                                    />}
                                    teamAStatThree={< InputStats
                                        onChange={handleInputChange1}
                                        num={'three'}
                                    />}
                                    teamBStatOne={< InputStats
                                        onChange={handleInputChange2}
                                        num={'one'}
                                    />}
                                    teamBStatTwo={< InputStats
                                        onChange={handleInputChange2}
                                        num={'two'}
                                    />}
                                    teamBStatThree={< InputStats
                                        onChange={handleInputChange2}
                                        num={'three'}
                                    />}
                                />}
                            id={bracketID}
                            teamsize={size}
                            onClick={onSubmitChangeMatchup}
                            team1category={'brackets.col1.row2.a.stats'}
                            team2category={'brackets.col1.row2.b.stats'}
                            bracket={'brackets.col2.row1.b'}
                        />
                        : size <= 16 && size >= 9 && round >= 1 ?
                            <Menu size='mini' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row1'
                                    letter='b'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets: brackets2, rowNum: 'row2' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>
                            : size <= 7 && size >= 5 && round > 0 ? brackets2.row1.b.name
                                : brackets2.row1.b.name)}
                seed2={(size === 4 ? brackets.row1.b.seed : size === 3 ? null
                    : size <= 7 && size >= 5 && round < 1 ? brackets.row2.a.seed + ' | ' + brackets.row2.b.seed
                        : size <= 7 && size >= 5 && round >= 1 && brackets2.row1.b.name === brackets.row2.a.name ? brackets.row2.a.seed
                            : size <= 16 && size >= 9 && round === 1 ? brackets2.row2.a.seed + ' | ' + brackets2.row2.b.seed
                                : brackets.row2.b.seed)}
            />
            <MatchUp
                popup={(size <= 4 && size >= 3 && round >= 1 || size >= 5 && size <= 8 && round >= 2 ?
                    <PopupBoxScore
                        content={
                            <InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={(size <= 4 && size >= 3 ? brackets.row2.a.name : size >= 5 && size <= 6 ? brackets.row3.a.name : size === 7 ? brackets2.row3.a.name : null)}
                                teamB={(size <= 4 && size >= 3 ? brackets.row2.b.name : size === 5 ? brackets.row4.a.name : size >= 6 && size <= 7 ? brackets2.row4.a.name : null)}
                                teamAStatOne={(size <= 4 && size >= 3 ? brackets.row2.a.stats.one : size >= 5 && size <= 6 ? brackets.row3.a.stats.one : size === 7 ? brackets2.row3.a.stats.one : null)}
                                teamAStatTwo={(size <= 4 && size >= 3 ? brackets.row2.a.stats.two : size >= 5 && size <= 6 ? brackets.row3.a.stats.two : size === 7 ? brackets2.row3.a.stats.two : null)}
                                teamAStatThree={(size <= 4 && size >= 3 ? brackets.row2.a.stats.three : size >= 5 && size <= 6 ? brackets.row3.a.stats.three : size === 7 ? brackets2.row3.a.stats.three : null)}
                                teamBStatOne={(size <= 4 && size >= 3 ? brackets.row2.b.stats.one : size === 5 ? brackets.row4.a.stats.one : size >= 6 && size <= 7 ? brackets2.row4.a.stats.one : null)}
                                teamBStatTwo={(size <= 4 && size >= 3 ? brackets.row2.b.stats.two : size === 5 ? brackets.row4.a.stats.two : size >= 6 && size <= 7 ? brackets2.row4.a.stats.two : null)}
                                teamBStatThree={(size <= 4 && size >= 3 ? brackets.row2.b.stats.three : size === 5 ? brackets.row4.a.stats.three : size >= 6 && size <= 7 ? brackets2.row4.a.stats.three : null)}
                            />
                        }
                    />
                    : null)}
                team={(size <= 4 && size >= 3 ? brackets.row2.a.name
                    : size <= 6 && size >= 4 ? brackets.row3.a.name
                        : size === 7 && round < 1 ?
                            <ActivateModal
                                openModal={openActivateModal}
                                winner={(brackets2 === undefined || brackets2.row3 === undefined || brackets2.row3.a === undefined ? 'activate' : brackets2.row3.a.name)}
                                pickTeam={
                                    <Menu size='small' compact>
                                        <Dropdown
                                            size={size}
                                            rownum='row3'
                                            letter='a'
                                            onChange={handleChangeMatchup}
                                            options={options({ brackets, rowNum: 'row3' })}
                                            placeholder='Select Winner'
                                            item
                                        />
                                    </Menu>}
                                inputMatchupStats={
                                    < InputMatchupStats
                                        title1={category.title1}
                                        title2={category.title2}
                                        title3={category.title3}
                                        teamA={brackets.row3.a.name}
                                        teamB={brackets.row3.b.name}
                                        teamAStatOne={< InputStats
                                            onChange={handleInputChange1}
                                            num={'one'}
                                        />}
                                        teamAStatTwo={< InputStats
                                            onChange={handleInputChange1}
                                            num={'two'}
                                        />}
                                        teamAStatThree={< InputStats
                                            onChange={handleInputChange1}
                                            num={'three'}
                                        />}
                                        teamBStatOne={< InputStats
                                            onChange={handleInputChange2}
                                            num={'one'}
                                        />}
                                        teamBStatTwo={< InputStats
                                            onChange={handleInputChange2}
                                            num={'two'}
                                        />}
                                        teamBStatThree={< InputStats
                                            onChange={handleInputChange2}
                                            num={'three'}
                                        />}
                                    />}
                                id={bracketID}
                                teamsize={size}
                                onClick={onSubmitChangeMatchup}
                                team1category={'brackets.col1.row3.a.stats'}
                                team2category={'brackets.col1.row3.b.stats'}
                                bracket={'brackets.col2.row3.a'}
                            />
                            : size <= 16 && size >= 9 && round === 1 ?
                                <Menu size='mini' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row1'
                                        letter='b'
                                        onChange={handleChangeMatchup}
                                        options={options({ brackets: brackets2, rowNum: 'row3' })}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>
                                : size <= 7 && size >= 5 && round >= 1 ? brackets2.row3.a.name
                                    : brackets2.row2.a.name)}
                seed={(size <= 4 && size >= 3 ? brackets.row2.a.seed
                    : size === 7 && round < 1 ? brackets.row3.a.seed + ' | ' + brackets.row3.b.seed
                        : size <= 6 && size >= 5 && round < 1 ? brackets.row3.a.seed
                            : size <= 16 && size >= 9 && round === 1 ? brackets2.row3.a.seed + ' | ' + brackets2.row3.b.seed
                                : size === 7 && round >= 1 ? brackets2.row3.a.seed
                                    : size === 6 && round >= 1 ? brackets.row3.a.seed
                                        : size === 5 && round >= 1 ? brackets.row3.a.seed
                                            : null)}
                team2={(size <= 4 && size >= 3 ? brackets.row2.b.name
                    : size <= 5 && size >= 4 && round < 1 ? brackets.row4.a.name
                        : size <= 7 && size >= 6 && round < 1 ?
                            <ActivateModal
                                openModal={openActivateModal}
                                winner={(brackets2 === undefined || brackets2.row4 === undefined || brackets2.row4 === undefined ? 'activate' : brackets2.row4.a.name)}
                                pickTeam={
                                    <Menu size='small' compact>
                                        <Dropdown
                                            size={size}
                                            rownum={'row4'}
                                            letter={'a'}
                                            onChange={handleChangeMatchup}
                                            options={options({ brackets, rowNum: 'row4' })}
                                            placeholder='Select Winner'
                                            item
                                        />
                                    </Menu>}
                                inputMatchupStats={
                                    < InputMatchupStats
                                        title1={category.title1}
                                        title2={category.title2}
                                        title3={category.title3}
                                        teamA={brackets.row4.a.name}
                                        teamB={brackets.row4.b.name}
                                        teamAStatOne={< InputStats
                                            onChange={handleInputChange1}
                                            num={'one'}
                                        />}
                                        teamAStatTwo={< InputStats
                                            onChange={handleInputChange1}
                                            num={'two'}
                                        />}
                                        teamAStatThree={< InputStats
                                            onChange={handleInputChange1}
                                            num={'three'}
                                        />}
                                        teamBStatOne={< InputStats
                                            onChange={handleInputChange2}
                                            num={'one'}
                                        />}
                                        teamBStatTwo={< InputStats
                                            onChange={handleInputChange2}
                                            num={'two'}
                                        />}
                                        teamBStatThree={< InputStats
                                            onChange={handleInputChange2}
                                            num={'three'}
                                        />}
                                    />}
                                id={bracketID}
                                teamsize={size}
                                onClick={onSubmitChangeMatchup}
                                team1category={'brackets.col1.row4.a.stats'}
                                team2category={'brackets.col1.row4.b.stats'}
                                bracket={'brackets.col2.row4.a'}
                            />
                            : size === 7 && round >= 1 ? brackets2.row4.a.name
                                : size === 6 && round >= 1 ? brackets2.row4.a.name
                                    : size === 5 && round >= 1 ? brackets.row4.a.name
                                        : null)}
                seed2={(
                    size <= 4 && size >= 3 ? brackets.row2.b.seed
                        : size <= 7 && size >= 6 && round < 1 ? brackets.row4.a.seed + ' | ' + brackets.row4.b.seed
                            : size === 5 && round < 1 ? brackets.row4.a.seed
                                : size === 7 && round >= 1 ? brackets2.row4.a.seed
                                    : size === 6 && round >= 1 ? brackets2.row4.a.seed
                                        : size === 5 && round >= 1 ? brackets.row4.a.seed
                                            : null)}
            />
        </div>
    )
    const overOne = () => (
        <div style={style.grid}>
            <MatchUp
                popup={(size === 2 && round >= 1 || size === 3 && round >= 2 || size >= 5 && size <= 8 && round >= 3 ?
                    < PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={(size === 2 && round >= 1 ? brackets.row1.a.name : size === 3 && round >= 2 ? brackets.row1.a.name : size >= 5 && size <= 8 ? brackets3.row1.a.name : null)}
                            teamB={(size === 2 && round >= 1 ? brackets.row1.b.name : size === 3 && round >= 2 ? brackets2.row1.b.name : size >= 5 && size <= 8 ? brackets3.row1.b.name : null)}
                            teamAStatOne={(size === 2 && round >= 1 ? brackets.row1.a.stats.one : size === 3 && round >= 2 ? brackets.row1.a.stats.one : size >= 5 && size <= 8 ? brackets3.row1.a.stats.one : null)}
                            teamAStatTwo={(size === 2 && round >= 1 ? brackets.row1.a.stats.two : size === 3 && round >= 2 ? brackets.row1.a.stats.two : size >= 5 && size <= 8 ? brackets3.row1.a.stats.two : null)}
                            teamAStatThree={(size === 2 && round >= 1 ? brackets.row1.a.stats.three : size === 3 && round >= 2 ? brackets.row1.a.stats.three : size >= 5 && size <= 8 ? brackets3.row1.a.stats.three : null)}
                            teamBStatOne={(size === 2 && round >= 1 ? brackets.row1.b.stats.one : size === 3 && round >= 2 ? brackets2.row1.b.stats.one : size >= 5 && size <= 8 ? brackets3.row1.b.stats.one : null)}
                            teamBStatTwo={(size === 2 && round >= 1 ? brackets.row1.b.stats.two : size === 3 && round >= 2 ? brackets2.row1.b.stats.two : size >= 5 && size <= 8 ? brackets3.row1.b.stats.two : null)}
                            teamBStatThree={(size === 2 && round >= 1 ? brackets.row1.b.stats.three : size === 3 && round >= 2 ? brackets2.row1.b.stats.three : size >= 5 && size <= 8 ? brackets3.row1.b.stats.three : null)}
                        />}
                    />
                    : null)}
                team={(size === 2 || size === 3 ? brackets.row1.a.name
                    : size >= 5 && size <= 7 && round === 1 ?
                        <ActivateModal
                            openModal={openActivateModal}
                            winner={(brackets3 === undefined || brackets3.row1 === undefined || brackets3.row1.a === undefined ? 'activate' : brackets3.row1.a.name)}
                            pickTeam={
                                <Menu size='small' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row1'
                                        letter='a'
                                        onChange={handleChangeMatchup}
                                        options={options2({ brackets: brackets, brackets2: brackets2, rowNum: 'row1' })}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>}
                            inputMatchupStats={
                                < InputMatchupStats
                                    title1={category.title1}
                                    title2={category.title2}
                                    title3={category.title3}
                                    teamA={brackets.row1.a.name}
                                    teamB={brackets2.row1.b.name}
                                    teamAStatOne={< InputStats
                                        onChange={handleInputChange1}
                                        num={'one'}
                                    />}
                                    teamAStatTwo={< InputStats
                                        onChange={handleInputChange1}
                                        num={'two'}
                                    />}
                                    teamAStatThree={< InputStats
                                        onChange={handleInputChange1}
                                        num={'three'}
                                    />}
                                    teamBStatOne={< InputStats
                                        onChange={handleInputChange2}
                                        num={'one'}
                                    />}
                                    teamBStatTwo={< InputStats
                                        onChange={handleInputChange2}
                                        num={'two'}
                                    />}
                                    teamBStatThree={< InputStats
                                        onChange={handleInputChange2}
                                        num={'three'}
                                    />}
                                />}
                            id={bracketID}
                            teamsize={size}
                            onClick={onSubmitChangeMatchup}
                            team1category={'brackets.col1.row1.a.stats'}
                            team2category={'brackets.col2.row1.b.stats'}
                            bracket={'brackets.col3.row1.a'}
                        />
                        : size === 8 && round === 1 ?
                            <ActivateModal
                                openModal={openActivateModal}
                                winner={(brackets3 === undefined || brackets3.row1 === undefined || brackets3.row1.a === undefined ? 'activate' : brackets3.row1.a.name)}
                                pickTeam={
                                    <Menu size='small' compact>
                                        <Dropdown
                                            size={size}
                                            rownum='row1'
                                            letter='a'
                                            onChange={handleChangeMatchup}
                                            options={options({ brackets: brackets2, rowNum: 'row1' })}
                                            placeholder='Select Winner'
                                            item
                                        />
                                    </Menu>}
                                inputMatchupStats={
                                    < InputMatchupStats
                                        title1={category.title1}
                                        title2={category.title2}
                                        title3={category.title3}
                                        teamA={brackets2.row1.a.name}
                                        teamB={brackets2.row1.b.name}
                                        teamAStatOne={< InputStats
                                            onChange={handleInputChange1}
                                            num={'one'}
                                        />}
                                        teamAStatTwo={< InputStats
                                            onChange={handleInputChange1}
                                            num={'two'}
                                        />}
                                        teamAStatThree={< InputStats
                                            onChange={handleInputChange1}
                                            num={'three'}
                                        />}
                                        teamBStatOne={< InputStats
                                            onChange={handleInputChange2}
                                            num={'one'}
                                        />}
                                        teamBStatTwo={< InputStats
                                            onChange={handleInputChange2}
                                            num={'two'}
                                        />}
                                        teamBStatThree={< InputStats
                                            onChange={handleInputChange2}
                                            num={'three'}
                                        />}
                                    />}
                                id={bracketID}
                                teamsize={size}
                                onClick={onSubmitChangeMatchup}
                                team1category={'brackets.col2.row1.a.stats'}
                                team2category={'brackets.col2.row1.b.stats'}
                                bracket={'brackets.col3.row1.a'}
                            />
                            : size >= 5 && size <= 8 && round >= 2 ? brackets3.row1.a.name
                                : null)}
                seed={(size === 2 ? brackets.row1.a.seed
                    : size >= 5 && size <= 7 && round === 1 ? brackets.row1.a.seed + ' | ' + brackets2.row1.b.seed
                        : size === 8 && round === 1 ? brackets2.row1.a.seed + ' | ' + brackets2.row1.b.seed
                            : size >= 5 && size <= 8 && round >= 2 ? brackets3.row1.a.seed
                                : brackets.row1.a.seed)}
                team2={(size === 2 ? brackets.row1.b.name
                    : size === 8 && round === 1 ?
                        <ActivateModal
                            openModal={openActivateModal}
                            winner={(brackets3 === undefined || brackets3.row1 === undefined || brackets3.row1.b === undefined ? 'activate' : brackets3.row1.b.name)}
                            pickTeam={
                                <Menu size='small' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row1'
                                        letter='b'
                                        onChange={handleChangeMatchup}
                                        options={options({ brackets: brackets2, rowNum: 'row2' })}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>}
                            inputMatchupStats={
                                < InputMatchupStats
                                    title1={category.title1}
                                    title2={category.title2}
                                    title3={category.title3}
                                    teamA={brackets2.row2.a.name}
                                    teamB={brackets2.row2.b.name}
                                    teamAStatOne={< InputStats
                                        onChange={handleInputChange1}
                                        num={'one'}
                                    />}
                                    teamAStatTwo={< InputStats
                                        onChange={handleInputChange1}
                                        num={'two'}
                                    />}
                                    teamAStatThree={< InputStats
                                        onChange={handleInputChange1}
                                        num={'three'}
                                    />}
                                    teamBStatOne={< InputStats
                                        onChange={handleInputChange2}
                                        num={'one'}
                                    />}
                                    teamBStatTwo={< InputStats
                                        onChange={handleInputChange2}
                                        num={'two'}
                                    />}
                                    teamBStatThree={< InputStats
                                        onChange={handleInputChange2}
                                        num={'three'}
                                    />}
                                />}
                            id={bracketID}
                            teamsize={size}
                            onClick={onSubmitChangeMatchup}
                            team1category={'brackets.col2.row2.a.stats'}
                            team2category={'brackets.col2.row2.b.stats'}
                            bracket={'brackets.col3.row1.b'}
                        />
                        : size === 7 && round === 1 ?
                            <ActivateModal
                                openModal={openActivateModal}
                                winner={(brackets3 === undefined || brackets3.row1 === undefined || brackets3.row1.b === undefined ? 'activate' : brackets3.row1.b.name)}
                                pickTeam={
                                    <Menu size='small' compact>
                                        <Dropdown
                                            size={size}
                                            rownum='row1'
                                            letter='b'
                                            onChange={handleChangeMatchup}
                                            options={options3({ brackets: brackets2, rowNum: 'row3', rowNum2: 'row4' })}
                                            placeholder='Select Winner'
                                            item
                                        />
                                    </Menu>}
                                inputMatchupStats={
                                    < InputMatchupStats
                                        title1={category.title1}
                                        title2={category.title2}
                                        title3={category.title3}
                                        teamA={brackets2.row3.a.name}
                                        teamB={brackets2.row4.a.name}
                                        teamAStatOne={< InputStats
                                            onChange={handleInputChange1}
                                            num={'one'}
                                        />}
                                        teamAStatTwo={< InputStats
                                            onChange={handleInputChange1}
                                            num={'two'}
                                        />}
                                        teamAStatThree={< InputStats
                                            onChange={handleInputChange1}
                                            num={'three'}
                                        />}
                                        teamBStatOne={< InputStats
                                            onChange={handleInputChange2}
                                            num={'one'}
                                        />}
                                        teamBStatTwo={< InputStats
                                            onChange={handleInputChange2}
                                            num={'two'}
                                        />}
                                        teamBStatThree={< InputStats
                                            onChange={handleInputChange2}
                                            num={'three'}
                                        />}
                                    />}
                                id={bracketID}
                                teamsize={size}
                                onClick={onSubmitChangeMatchup}
                                team1category={'brackets.col2.row3.a.stats'}
                                team2category={'brackets.col2.row4.a.stats'}
                                bracket={'brackets.col3.row1.b'}
                            />
                            : size === 6 && round === 1 ?
                                <ActivateModal
                                    openModal={openActivateModal}
                                    winner={(brackets3 === undefined || brackets3.row1 === undefined || brackets3.row1.b === undefined ? 'activate' : brackets3.row1.b.name)}
                                    pickTeam={
                                        <Menu size='small' compact>
                                            <Dropdown
                                                size={size}
                                                rownum='row1'
                                                letter='b'
                                                onChange={handleChangeMatchup}
                                                options={options4({ brackets: brackets, brackets2: brackets2, rowNum: 'row3', rowNum2: 'row4' })}
                                                placeholder='Select Winner'
                                                item
                                            />
                                        </Menu>}
                                    inputMatchupStats={
                                        < InputMatchupStats
                                            title1={category.title1}
                                            title2={category.title2}
                                            title3={category.title3}
                                            teamA={brackets.row3.a.name}
                                            teamB={brackets2.row4.a.name}
                                            teamAStatOne={< InputStats
                                                onChange={handleInputChange1}
                                                num={'one'}
                                            />}
                                            teamAStatTwo={< InputStats
                                                onChange={handleInputChange1}
                                                num={'two'}
                                            />}
                                            teamAStatThree={< InputStats
                                                onChange={handleInputChange1}
                                                num={'three'}
                                            />}
                                            teamBStatOne={< InputStats
                                                onChange={handleInputChange2}
                                                num={'one'}
                                            />}
                                            teamBStatTwo={< InputStats
                                                onChange={handleInputChange2}
                                                num={'two'}
                                            />}
                                            teamBStatThree={< InputStats
                                                onChange={handleInputChange2}
                                                num={'three'}
                                            />}
                                        />}
                                    id={bracketID}
                                    teamsize={size}
                                    onClick={onSubmitChangeMatchup}
                                    team1category={'brackets.col1.row3.a.stats'}
                                    team2category={'brackets.col2.row4.a.stats'}
                                    bracket={'brackets.col3.row1.b'}
                                />
                                : size === 5 && round === 1 ?
                                    <ActivateModal
                                        openModal={openActivateModal}
                                        winner={(brackets3 === undefined || brackets3.row1 === undefined || brackets3.row1.b === undefined ? 'activate' : brackets3.row1.b.name)}
                                        pickTeam={
                                            <Menu size='small' compact>
                                                <Dropdown
                                                    size={size}
                                                    rownum='row1'
                                                    letter='b'
                                                    onChange={handleChangeMatchup}
                                                    options={options3({ brackets: brackets, rowNum: 'row3', rowNum2: 'row4' })}
                                                    placeholder='Select Winner'
                                                    item
                                                />
                                            </Menu>}
                                        inputMatchupStats={
                                            < InputMatchupStats
                                                title1={category.title1}
                                                title2={category.title2}
                                                title3={category.title3}
                                                teamA={brackets.row3.a.name}
                                                teamB={brackets.row4.a.name}
                                                teamAStatOne={< InputStats
                                                    onChange={handleInputChange1}
                                                    num={'one'}
                                                />}
                                                teamAStatTwo={< InputStats
                                                    onChange={handleInputChange1}
                                                    num={'two'}
                                                />}
                                                teamAStatThree={< InputStats
                                                    onChange={handleInputChange1}
                                                    num={'three'}
                                                />}
                                                teamBStatOne={< InputStats
                                                    onChange={handleInputChange2}
                                                    num={'one'}
                                                />}
                                                teamBStatTwo={< InputStats
                                                    onChange={handleInputChange2}
                                                    num={'two'}
                                                />}
                                                teamBStatThree={< InputStats
                                                    onChange={handleInputChange2}
                                                    num={'three'}
                                                />}
                                            />}
                                        id={bracketID}
                                        teamsize={size}
                                        onClick={onSubmitChangeMatchup}
                                        team1category={'brackets.col1.row3.a.stats'}
                                        team2category={'brackets.col1.row4.a.stats'}
                                        bracket={'brackets.col3.row1.b'}
                                    />
                                    : size === 3 && round < 1 ?
                                        <ActivateModal
                                            openModal={openActivateModal}
                                            winner={(brackets2 === undefined || brackets2.row1 === undefined || brackets2.row1.b === undefined ? 'activate' : brackets2.row1.b.name)}
                                            pickTeam={
                                                <Menu size='small' compact>
                                                    <Dropdown
                                                        size={size}
                                                        rownum='row1'
                                                        letter='b'
                                                        onChange={handleChangeMatchup}
                                                        options={options({ brackets, rowNum: 'row2' })}
                                                        placeholder='Select Winner'
                                                        item
                                                    />
                                                </Menu>}
                                            inputMatchupStats={
                                                <InputMatchupStats
                                                    title1={category.title1}
                                                    title2={category.title2}
                                                    title3={category.title3}
                                                    teamA={brackets.row2.a.name}
                                                    teamB={brackets.row2.b.name}
                                                    teamAStatOne={<InputStats
                                                        onChange={handleInputChange1}
                                                        num={'one'}
                                                    />}
                                                    teamAStatTwo={<InputStats
                                                        onChange={handleInputChange1}
                                                        num={'two'}
                                                    />}
                                                    teamAStatThree={<InputStats
                                                        onChange={handleInputChange1}
                                                        num={'three'}
                                                    />}
                                                    teamBStatOne={<InputStats
                                                        onChange={handleInputChange2}
                                                        num={'one'}
                                                    />}
                                                    teamBStatTwo={<InputStats
                                                        onChange={handleInputChange2}
                                                        num={'two'}
                                                    />}
                                                    teamBStatThree={<InputStats
                                                        onChange={handleInputChange2}
                                                        num={'three'}
                                                    />}
                                                />}
                                            id={bracketID}
                                            teamsize={size}
                                            onClick={onSubmitChangeMatchup}
                                            team1category={'brackets.col1.row2.a.stats'}
                                            team2category={'brackets.col1.row2.b.stats'}
                                            bracket={'brackets.col2.row1.b'}
                                        />
                                        : size >= 5 && size <= 8 && round >= 2 ? brackets3.row1.b.name
                                            : size === 3 && round > 0 ? brackets2.row1.b.name
                                                : brackets3.row1.b.name)}
                seed2={(size === 2 ? brackets.row1.b.seed
                    : size === 3 && round < 1 ? brackets.row2.a.seed + ' | ' + brackets.row2.b.seed
                        : size === 7 && round === 1 ? brackets2.row3.a.seed + ' | ' + brackets2.row4.a.seed
                            : size === 6 && round === 1 ? brackets.row3.a.seed + ' | ' + brackets2.row4.a.seed
                                : size === 5 && round === 1 ? brackets.row3.a.seed + ' | ' + brackets.row4.a.seed
                                    : size === 8 && round === 1 ? brackets2.row2.a.seed + ' | ' + brackets2.row2.b.seed
                                        : size === 3 && round > 0 && brackets2.row1.b.name === brackets.row2.a.name ? brackets.row2.a.seed
                                            : size >= 5 && size <= 8 && round >= 2 ? brackets3.row1.b.seed
                                                : brackets.row2.b.seed
                )}
            />
        </div>
    )
    const oneTeam = () => (
        <div style={style.grid}>
            <SingleMatchUp
                team={(size === 2 && round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row1 === undefined || brackets2.row1.a === undefined ? 'activate' : brackets2.row1.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row1'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row1' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row1.a.name}
                                teamB={brackets.row1.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row1.a.stats'}
                        team2category={'brackets.col1.row1.b.stats'}
                        bracket={'brackets.col2.row1.a'}
                    />
                    : size >= 5 && size <= 8 && round === 2 ?
                        <ActivateModal
                            openModal={openActivateModal}
                            winner={(brackets4 === undefined || brackets4.row1 === undefined || brackets4.row1.a === undefined ? 'activate' : brackets4.row1.a.name)}
                            pickTeam={
                                <Menu size='small' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row1'
                                        letter='a'
                                        onChange={handleChangeMatchup}
                                        options={options({ brackets: brackets3, rowNum: 'row1' })}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>}
                            inputMatchupStats={
                                < InputMatchupStats
                                    title1={category.title1}
                                    title2={category.title2}
                                    title3={category.title3}
                                    teamA={brackets3.row1.a.name}
                                    teamB={brackets3.row1.b.name}
                                    teamAStatOne={< InputStats
                                        onChange={handleInputChange1}
                                        num={'one'}
                                    />}
                                    teamAStatTwo={< InputStats
                                        onChange={handleInputChange1}
                                        num={'two'}
                                    />}
                                    teamAStatThree={< InputStats
                                        onChange={handleInputChange1}
                                        num={'three'}
                                    />}
                                    teamBStatOne={< InputStats
                                        onChange={handleInputChange2}
                                        num={'one'}
                                    />}
                                    teamBStatTwo={< InputStats
                                        onChange={handleInputChange2}
                                        num={'two'}
                                    />}
                                    teamBStatThree={< InputStats
                                        onChange={handleInputChange2}
                                        num={'three'}
                                    />}
                                />}
                            id={bracketID}
                            teamsize={size}
                            onClick={onSubmitChangeMatchup}
                            team1category={'brackets.col3.row1.a.stats'}
                            team2category={'brackets.col3.row1.b.stats'}
                            bracket={'brackets.col4.row1.a'}
                        />
                        : size >= 5 && size <= 8 && round === 3 ? brackets4.row1.a.name
                            : brackets2.row1.a.name
                )}
                seed={(size === 2 && round < 1 ? brackets.row1.a.seed + ' | ' + brackets.row1.b.seed
                    : size === 2 && round >= 1 ? brackets2.row1.a.seed
                        : size >= 5 && size <= 8 && round === 2 ? brackets3.row1.a.seed + ' | ' + brackets3.row1.b.seed
                            : size >= 5 && size <= 8 && round === 3 ? brackets4.row1.a.seed
                                : brackets.row1.b.seed)}
            />
        </div>
    )
    const sixteenRound2 = () => (
        <div style={style.grid}>
            <MatchUp
                popup={(round >= 2 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets2.row1.a.name}
                            teamB={brackets2.row1.b.name}
                            teamAStatOne={brackets2.row1.a.stats.one}
                            teamAStatTwo={brackets2.row1.a.stats.two}
                            teamAStatThree={brackets2.row1.a.stats.three}
                            teamBStatOne={brackets2.row1.b.stats.one}
                            teamBStatTwo={brackets2.row1.b.stats.two}
                            teamBStatThree={brackets2.row1.b.stats.three}
                        />}
                    />
                    : null)}
                team={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row1 === undefined || brackets2.row1.a === undefined ? 'activate' : brackets2.row1.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row1'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row1' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row1.a.name}
                                teamB={brackets.row1.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row1.a.stats'}
                        team2category={'brackets.col1.row1.b.stats'}
                        bracket={'brackets.col2.row1.a'}
                    />
                    : brackets2.row1.a.name
                )}
                seed={(round < 1 ? brackets.row1.a.seed + ' | ' + brackets.row1.b.seed
                    : brackets2.row1.a.seed)}
                team2={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row1 === undefined || brackets2.row1.b === undefined ? 'activate' : brackets2.row1.b.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row1'
                                    letter='b'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row2' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row2.a.name}
                                teamB={brackets.row2.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row2.a.stats'}
                        team2category={'brackets.col1.row2.b.stats'}
                        bracket={'brackets.col2.row1.b'}
                    />
                    :
                    brackets2.row1.b.name
                )}
                seed2={(round < 1 ? brackets.row2.a.seed + ' | ' + brackets.row2.b.seed
                    : brackets2.row1.b.seed)}

            />
            <MatchUp
                popup={(round >= 2 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets2.row3.a.name}
                            teamB={brackets2.row4.a.name}
                            teamAStatOne={brackets2.row3.a.stats.one}
                            teamAStatTwo={brackets2.row3.a.stats.two}
                            teamAStatThree={brackets2.row3.a.stats.three}
                            teamBStatOne={brackets2.row4.a.stats.one}
                            teamBStatTwo={brackets2.row4.a.stats.two}
                            teamBStatThree={brackets2.row4.a.stats.three}
                        />}
                    />
                    : null)}
                team={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row3 === undefined || brackets2.row3.a === undefined ? 'activate' : brackets2.row3.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row3'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row3' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row3.a.name}
                                teamB={brackets.row3.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row3.a.stats'}
                        team2category={'brackets.col1.row3.b.stats'}
                        bracket={'brackets.col2.row3.a'}
                    />
                    : brackets2.row3.a.name
                )}
                seed={(round < 1 ? brackets.row3.a.seed + ' | ' + brackets.row3.b.seed
                    : brackets2.row3.a.seed)}
                team2={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row4 === undefined || brackets2.row4.a === undefined ? 'activate' : brackets2.row4.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row4'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row4' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row4.a.name}
                                teamB={brackets.row4.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row4.a.stats'}
                        team2category={'brackets.col1.row4.b.stats'}
                        bracket={'brackets.col2.row4.a'}
                    />
                    :
                    brackets2.row4.a.name
                )}
                seed2={(round < 1 ? brackets.row4.a.seed + ' | ' + brackets.row4.b.seed
                    : brackets2.row4.a.seed)}
            />
            <MatchUp
                popup={(round >= 2 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets2.row5.a.name}
                            teamB={brackets2.row6.a.name}
                            teamAStatOne={brackets2.row5.a.stats.one}
                            teamAStatTwo={brackets2.row5.a.stats.two}
                            teamAStatThree={brackets2.row5.a.stats.three}
                            teamBStatOne={brackets2.row6.a.stats.one}
                            teamBStatTwo={brackets2.row6.a.stats.two}
                            teamBStatThree={brackets2.row6.a.stats.three}
                        />}
                    />
                    : null)}
                team={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row5 === undefined || brackets2.row5.a === undefined ? 'activate' : brackets2.row5.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row5'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row5' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row5.a.name}
                                teamB={brackets.row5.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row5.a.stats'}
                        team2category={'brackets.col1.row5.b.stats'}
                        bracket={'brackets.col2.row5.a'}
                    />
                    : brackets2.row5.a.name
                )}
                seed={(round < 1 ? brackets.row5.a.seed + ' | ' + brackets.row5.b.seed
                    : brackets2.row5.a.seed)}
                team2={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row6 === undefined || brackets2.row6.a === undefined ? 'activate' : brackets2.row6.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row6'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row6' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row6.a.name}
                                teamB={brackets.row6.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row6.a.stats'}
                        team2category={'brackets.col1.row6.b.stats'}
                        bracket={'brackets.col2.row6.a'}
                    />
                    :
                    brackets2.row6.a.name
                )}
                seed2={(round < 1 ? brackets.row6.a.seed + ' | ' + brackets.row6.b.seed
                    : brackets2.row6.a.seed)}
            />
            <MatchUp
                popup={(round >= 2 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets2.row7.a.name}
                            teamB={brackets2.row8.a.name}
                            teamAStatOne={brackets2.row7.a.stats.one}
                            teamAStatTwo={brackets2.row7.a.stats.two}
                            teamAStatThree={brackets2.row7.a.stats.three}
                            teamBStatOne={brackets2.row8.a.stats.one}
                            teamBStatTwo={brackets2.row8.a.stats.two}
                            teamBStatThree={brackets2.row8.a.stats.three}
                        />}
                    />
                    : null)}
                team={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row7 === undefined || brackets2.row7.a === undefined ? 'activate' : brackets2.row7.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row7'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row7' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row7.a.name}
                                teamB={brackets.row7.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row7.a.stats'}
                        team2category={'brackets.col1.row7.b.stats'}
                        bracket={'brackets.col2.row7.a'}
                    />
                    : brackets2.row7.a.name
                )}
                seed={(round < 1 ? brackets.row7.a.seed + ' | ' + brackets.row7.b.seed
                    : brackets2.row7.a.seed)}
                team2={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row8 === undefined || brackets2.row8.a === undefined ? 'activate' : brackets2.row8.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row8'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row8' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row8.a.name}
                                teamB={brackets.row8.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row8.a.stats'}
                        team2category={'brackets.col1.row8.b.stats'}
                        bracket={'brackets.col2.row8.a'}
                    />
                    :
                    brackets2.row8.a.name
                )}
                seed2={(round < 1 ? brackets.row8.a.seed + ' | ' + brackets.row8.b.seed
                    : brackets2.row8.a.seed)}
            />
        </div>
    )
    const eightRound2 = () => (
        <div style={style.grid}>
            <MatchUp
                popup={(size === 8 && round >= 2 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={(size === 8 ? brackets2.row1.a.name : null)}
                            teamB={(size === 8 ? brackets2.row1.b.name : null)}
                            teamAStatOne={(size === 8 ? brackets2.row1.a.stats.one : null)}
                            teamAStatTwo={(size === 8 ? brackets2.row1.a.stats.two : null)}
                            teamAStatThree={(size === 8 ? brackets2.row1.a.stats.three : null)}
                            teamBStatOne={(size === 8 ? brackets2.row1.b.stats.one : null)}
                            teamBStatTwo={(size === 8 ? brackets2.row1.b.stats.two : null)}
                            teamBStatThree={(size === 8 ? brackets2.row1.b.stats.three : null)}
                        />}
                    />
                    : null)}
                team={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row1 === undefined || brackets2.row1.a === undefined ? 'activate' : brackets2.row1.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    fluid
                                    size={size}
                                    rownum='row1'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row1' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row1.a.name}
                                teamB={brackets.row1.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row1.a.stats'}
                        team2category={'brackets.col1.row1.b.stats'}
                        bracket={'brackets.col2.row1.a'}
                    />
                    : brackets2.row1.a.name
                )}
                seed={(round < 1 ? brackets.row1.a.seed + ' | ' + brackets.row1.b.seed
                    : brackets2.row1.a.name === brackets.row1.a.name ? brackets.row1.a.seed : brackets.row1.b.seed)}
                team2={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row1 === undefined || brackets2.row1.b === undefined ? 'activate' : brackets2.row1.b.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row1'
                                    letter='b'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row2' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row2.a.name}
                                teamB={brackets.row2.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row2.a.stats'}
                        team2category={'brackets.col1.row2.b.stats'}
                        bracket={'brackets.col2.row1.b'}
                    />
                    :
                    brackets2.row1.b.name
                )}
                seed2={(round < 1 ? brackets.row2.a.seed + ' | ' + brackets.row2.b.seed
                    : brackets2.row1.b.name === brackets.row2.a.name ? brackets.row2.a.seed : brackets.row2.b.seed)}

            />
            <MatchUp
                popup={(size === 8 && round >= 2 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={(size === 8 ? brackets2.row2.a.name : null)}
                            teamB={(size === 8 ? brackets2.row2.b.name : null)}
                            teamAStatOne={(size === 8 ? brackets2.row2.a.stats.one : null)}
                            teamAStatTwo={(size === 8 ? brackets2.row2.a.stats.two : null)}
                            teamAStatThree={(size === 8 ? brackets2.row2.a.stats.three : null)}
                            teamBStatOne={(size === 8 ? brackets2.row2.b.stats.one : null)}
                            teamBStatTwo={(size === 8 ? brackets2.row2.b.stats.two : null)}
                            teamBStatThree={(size === 8 ? brackets2.row2.b.stats.three : null)}
                        />}
                    />
                    : null)}
                team={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row2 === undefined || brackets2.row2.a === undefined ? 'activate' : brackets2.row2.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row2'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row3' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row3.a.name}
                                teamB={brackets.row3.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row3.a.stats'}
                        team2category={'brackets.col1.row3.b.stats'}
                        bracket={'brackets.col2.row2.a'}
                    />
                    : brackets2.row2.a.name
                )}
                seed={(round < 1 ? brackets.row3.a.seed + ' | ' + brackets.row3.b.seed
                    : brackets2.row2.a.name === brackets.row3.a.name ? brackets.row3.a.seed : brackets.row3.b.seed)}
                team2={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row2 === undefined || brackets2.row2.b === undefined ? 'activate' : brackets2.row2.b.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row2'
                                    letter='b'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row4' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row4.a.name}
                                teamB={brackets.row4.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row4.a.stats'}
                        team2category={'brackets.col1.row4.b.stats'}
                        bracket={'brackets.col2.row2.b'}
                    />
                    :
                    brackets2.row2.b.name
                )}
                seed2={(round < 1 ? brackets.row4.a.seed + ' | ' + brackets.row4.b.seed
                    : brackets2.row2.b.name === brackets.row4.a.name ? brackets.row4.a.seed : brackets.row4.b.seed)}
            />
        </div>
    )
    const fourRound2 = () => (
        <div style={style.grid}>
            <MatchUp
                popup={(round >= 2 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets2.row1.a.name}
                            teamB={brackets2.row1.b.name}
                            teamAStatOne={brackets2.row1.a.stats.one}
                            teamAStatTwo={brackets2.row1.a.stats.two}
                            teamAStatThree={brackets2.row1.a.stats.three}
                            teamBStatOne={brackets2.row1.b.stats.one}
                            teamBStatTwo={brackets2.row1.b.stats.two}
                            teamBStatThree={brackets2.row1.b.stats.three}
                        />}
                    />
                    : null)}
                team={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row1 === undefined || brackets2.row1.a === undefined ? 'activate' : brackets2.row1.a.name)}
                        pickTeam={
                            <DropdownMatchup
                                size={size}
                                rownum='row1'
                                letter='a'
                                onChange={handleChangeMatchup}
                                options={options({ brackets, rowNum: 'row1' })}
                            />}
                        inputMatchupStats={
                            <InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row1.a.name}
                                teamB={brackets.row1.b.name}
                                teamAStatOne={<InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={<InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={<InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={<InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={<InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={<InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row1.a.stats'}
                        team2category={'brackets.col1.row1.b.stats'}
                        bracket={'brackets.col2.row1.a'}
                    />
                    : brackets2.row1.a.name
                )}
                seed={(round < 1 ? brackets.row1.a.seed + ' | ' + brackets.row1.b.seed
                    : brackets2.row1.a.seed)}
                team2={(round < 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets2 === undefined || brackets2.row1 === undefined || brackets2.row1.b === undefined ? 'activate' : brackets2.row1.b.name)}
                        pickTeam={
                            <DropdownMatchup
                                size={size}
                                rownum='row1'
                                letter='b'
                                onChange={handleChangeMatchup}
                                options={options({ brackets, rowNum: 'row2' })}
                            />}
                        inputMatchupStats={
                            <InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row2.a.name}
                                teamB={brackets.row2.b.name}
                                teamAStatOne={<InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={<InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={<InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={<InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={<InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={<InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row2.a.stats'}
                        team2category={'brackets.col1.row2.b.stats'}
                        bracket={'brackets.col2.row1.b'}
                    />
                    :
                    brackets2.row1.b.name
                )}
                seed2={(round < 1 ? brackets.row2.a.seed + ' | ' + brackets.row2.b.seed
                    : brackets2.row1.b.seed)}
            />
        </div>
    )
    const fourRound3 = () => (
        <div style={style.grid}>
            <MatchUp
                popup={(size >= 9 && size <= 16 && round >= 3 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets3.row1.a.name}
                            teamB={brackets3.row1.b.name}
                            teamAStatOne={brackets3.row1.a.stats.one}
                            teamAStatTwo={brackets3.row1.a.stats.two}
                            teamAStatThree={brackets3.row1.a.stats.three}
                            teamBStatOne={brackets3.row1.b.stats.one}
                            teamBStatTwo={brackets3.row1.b.stats.two}
                            teamBStatThree={brackets3.row1.b.stats.three}
                        />}
                    />
                    : null)}
                team={(
                    round === 1 ?
                        <ActivateModal
                            openModal={openActivateModal}
                            winner={(brackets3 === undefined || brackets3.row1 === undefined || brackets3.row1.a === undefined ? 'activate' : brackets3.row1.a.name)}
                            pickTeam={
                                <Menu size='small' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row1'
                                        letter='a'
                                        onChange={handleChangeMatchup}
                                        options={(size >= 9 && size <= 15 ? options2({ brackets: brackets, brackets2: brackets2, rowNum: 'row1' })
                                            : size === 16 ? options({ brackets: brackets2, rowNum: 'row1' })
                                                : null)}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>}
                            inputMatchupStats={
                                < InputMatchupStats
                                    title1={category.title1}
                                    title2={category.title2}
                                    title3={category.title3}
                                    teamA={(size >= 9 && size <= 15 ? brackets.row1.a.name : size === 16 ? brackets2.row1.a.name : null)}
                                    teamB={(size >= 9 && size <= 15 ? brackets2.row1.b.name : size === 16 ? brackets2.row1.b.name : null)}
                                    teamAStatOne={< InputStats
                                        onChange={handleInputChange1}
                                        num={'one'}
                                    />}
                                    teamAStatTwo={< InputStats
                                        onChange={handleInputChange1}
                                        num={'two'}
                                    />}
                                    teamAStatThree={< InputStats
                                        onChange={handleInputChange1}
                                        num={'three'}
                                    />}
                                    teamBStatOne={< InputStats
                                        onChange={handleInputChange2}
                                        num={'one'}
                                    />}
                                    teamBStatTwo={< InputStats
                                        onChange={handleInputChange2}
                                        num={'two'}
                                    />}
                                    teamBStatThree={< InputStats
                                        onChange={handleInputChange2}
                                        num={'three'}
                                    />}
                                />}
                            id={bracketID}
                            teamsize={size}
                            onClick={onSubmitChangeMatchup}
                            team1category={(size >= 9 && size <= 15 ? 'brackets.col1.row1.a.stats' : size === 16 ? 'brackets.col2.row1.a.stats' : null)}
                            team2category={(size >= 9 && size <= 15 ? 'brackets.col2.row1.b.stats' : size === 16 ? 'brackets.col2.row1.b.stats' : null)}
                            bracket={'brackets.col3.row1.a'}
                        />
                        : brackets3.row1.a.name
                )}
                seed={(size >= 9 && size <= 15 && round === 1 ? brackets.row1.a.seed + ' | ' + brackets2.row1.b.seed
                    : size === 16 && round === 1 ? brackets2.row1.a.seed + ' | ' + brackets2.row1.b.seed
                        : brackets3.row1.a.seed)}
                team2={(
                    round === 1 ?
                        <ActivateModal
                            openModal={openActivateModal}
                            winner={(brackets3 === undefined || brackets3.row1 === undefined || brackets3.row1.b === undefined ? 'activate' : brackets3.row1.b.name)}
                            pickTeam={
                                <Menu size='small' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row1'
                                        letter='b'
                                        onChange={handleChangeMatchup}
                                        options={(
                                            size >= 9 && size <= 11 ? options3({ brackets, rowNum: 'row3', rowNum2: 'row4' })
                                                : size === 12 ? options4({ brackets: brackets, brackets2: brackets2, rowNum: 'row3', rowNum2: 'row4' })
                                                    : size >= 13 && size <= 16 ? options3({ brackets: brackets2, rowNum: 'row3', rowNum2: 'row4' })
                                                        : null)}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>}
                            inputMatchupStats={
                                < InputMatchupStats
                                    title1={category.title1}
                                    title2={category.title2}
                                    title3={category.title3}
                                    teamA={(size >= 9 && size <= 11 ? brackets.row3.a.name : size === 12 ? brackets.row3.a.name : size >= 13 && size <= 16 ? brackets2.row3.a.name : null)}
                                    teamB={(size >= 9 && size <= 11 ? brackets.row4.a.name : size === 12 ? brackets2.row4.a.name : size >= 13 && size <= 16 ? brackets2.row4.a.name : null)}
                                    teamAStatOne={< InputStats
                                        onChange={handleInputChange1}
                                        num={'one'}
                                    />}
                                    teamAStatTwo={< InputStats
                                        onChange={handleInputChange1}
                                        num={'two'}
                                    />}
                                    teamAStatThree={< InputStats
                                        onChange={handleInputChange1}
                                        num={'three'}
                                    />}
                                    teamBStatOne={< InputStats
                                        onChange={handleInputChange2}
                                        num={'one'}
                                    />}
                                    teamBStatTwo={< InputStats
                                        onChange={handleInputChange2}
                                        num={'two'}
                                    />}
                                    teamBStatThree={< InputStats
                                        onChange={handleInputChange2}
                                        num={'three'}
                                    />}
                                />}
                            id={bracketID}
                            teamsize={size}
                            onClick={onSubmitChangeMatchup}
                            team1category={(size >= 9 && size <= 11 ? 'brackets.col1.row3.a.stats' : size === 12 ? 'brackets.col1.row3.a.stats' : size >= 13 && size <= 16 ? 'brackets.col2.row3.a.stats' : null)}
                            team2category={(size >= 9 && size <= 11 ? 'brackets.col1.row4.a.stats' : size === 12 ? 'brackets.col2.row4.a.stats' : size >= 13 && size <= 16 ? 'brackets.col2.row4.a.stats' : null)}
                            bracket={'brackets.col3.row1.b'}
                        />
                        :
                        brackets3.row1.b.name
                )}
                seed2={(size >= 9 && size <= 11 && round === 1 ? brackets.row3.a.seed + ' | ' + brackets.row4.a.seed
                    : size === 12 && round === 1 ? brackets.row3.a.seed + ' | ' + brackets2.row4.a.seed
                        : size >= 13 && size <= 16 && round === 1 ? brackets2.row3.a.seed + ' | ' + brackets2.row4.a.seed
                            : brackets3.row1.b.seed)}
            />
            <MatchUp
                popup={(size >= 9 && size <= 16 && round >= 3 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets3.row2.a.name}
                            teamB={brackets3.row2.b.name}
                            teamAStatOne={brackets3.row2.a.stats.one}
                            teamAStatTwo={brackets3.row2.a.stats.two}
                            teamAStatThree={brackets3.row2.a.stats.three}
                            teamBStatOne={brackets3.row2.b.stats.one}
                            teamBStatTwo={brackets3.row2.b.stats.two}
                            teamBStatThree={brackets3.row2.b.stats.three}
                        />}
                    />
                    : null)}
                team={(
                    round === 1 ?
                        <ActivateModal
                            openModal={openActivateModal}
                            winner={(brackets3 === undefined || brackets3.row2 === undefined || brackets3.row2.a === undefined ? 'activate' : brackets3.row2.a.name)}
                            pickTeam={
                                <Menu size='small' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row2'
                                        letter='a'
                                        onChange={handleChangeMatchup}
                                        options={(
                                            size === 9 ? options3({ brackets, rowNum: 'row5', rowNum2: 'row6' })
                                                : size >= 10 && size <= 14 ? options4({ brackets: brackets, brackets2: brackets2, rowNum: 'row5', rowNum2: 'row6' })
                                                    : size >= 15 && size <= 16 ? options3({ brackets: brackets2, rowNum: 'row5', rowNum2: 'row6' })
                                                        : null)}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>}
                            inputMatchupStats={
                                < InputMatchupStats
                                    title1={category.title1}
                                    title2={category.title2}
                                    title3={category.title3}
                                    teamA={(size === 9 ? brackets.row5.a.name : size >= 10 && size <= 14 ? brackets.row5.a.name : size >= 15 && size <= 16 ? brackets2.row5.a.name : null)}
                                    teamB={(size === 9 ? brackets.row6.a.name : size >= 10 && size <= 14 ? brackets2.row6.a.name : size >= 15 && size <= 16 ? brackets2.row6.a.name : null)}
                                    teamAStatOne={< InputStats
                                        onChange={handleInputChange1}
                                        num={'one'}
                                    />}
                                    teamAStatTwo={< InputStats
                                        onChange={handleInputChange1}
                                        num={'two'}
                                    />}
                                    teamAStatThree={< InputStats
                                        onChange={handleInputChange1}
                                        num={'three'}
                                    />}
                                    teamBStatOne={< InputStats
                                        onChange={handleInputChange2}
                                        num={'one'}
                                    />}
                                    teamBStatTwo={< InputStats
                                        onChange={handleInputChange2}
                                        num={'two'}
                                    />}
                                    teamBStatThree={< InputStats
                                        onChange={handleInputChange2}
                                        num={'three'}
                                    />}
                                />}
                            id={bracketID}
                            teamsize={size}
                            onClick={onSubmitChangeMatchup}
                            team1category={(size === 9 ? 'brackets.col1.row5.a.stats' : size >= 10 && size <= 14 ? 'brackets.col1.row5.a.stats' : size >= 15 && size <= 16 ? 'brackets.col2.row5.a.stats' : null)}
                            team2category={(size === 9 ? 'brackets.col1.row6.a.stats' : size >= 10 && size <= 14 ? 'brackets.col2.row6.a.stats' : size >= 15 && size <= 16 ? 'brackets.col2.row6.a.stats' : null)}
                            bracket={'brackets.col3.row2.a'}
                        />
                        : brackets3.row2.a.name
                )}
                seed={(size === 9 && round === 1 ? brackets.row5.a.seed + ' | ' + brackets.row6.a.seed
                    : size >= 10 && size <= 14 && round === 1 ? brackets.row5.a.seed + ' | ' + brackets2.row6.a.seed
                        : size >= 15 && size <= 16 && round === 1 ? brackets2.row5.a.seed + ' | ' + brackets2.row6.a.seed
                            : brackets3.row2.a.seed)}
                team2={(
                    round === 1 ?
                        <ActivateModal
                            openModal={openActivateModal}
                            winner={(brackets3 === undefined || brackets3.row2 === undefined || brackets3.row2.b === undefined ? 'activate' : brackets3.row2.b.name)}
                            pickTeam={
                                <Menu size='small' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row2'
                                        letter='b'
                                        onChange={handleChangeMatchup}
                                        options={(size >= 9 && size <= 10 ? options3({ brackets, rowNum: 'row7', rowNum2: 'row8' })
                                            : size >= 11 && size <= 13 ? options4({ brackets: brackets, brackets2: brackets2, rowNum: 'row7', rowNum2: 'row8' })
                                                : size >= 14 && size <= 16 ? options3({ brackets: brackets2, rowNum: 'row7', rowNum2: 'row8' })
                                                    : null)}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>}
                            inputMatchupStats={
                                < InputMatchupStats
                                    title1={category.title1}
                                    title2={category.title2}
                                    title3={category.title3}
                                    teamA={(size >= 9 && size <= 10 ? brackets.row7.a.name : size >= 11 && size <= 13 ? brackets.row7.a.name : size >= 14 && size <= 16 ? brackets2.row7.a.name : null)}
                                    teamB={(size >= 9 && size <= 10 ? brackets.row8.a.name : size >= 11 && size <= 13 ? brackets2.row8.a.name : size >= 14 && size <= 16 ? brackets2.row8.a.name : null)}
                                    teamAStatOne={< InputStats
                                        onChange={handleInputChange1}
                                        num={'one'}
                                    />}
                                    teamAStatTwo={< InputStats
                                        onChange={handleInputChange1}
                                        num={'two'}
                                    />}
                                    teamAStatThree={< InputStats
                                        onChange={handleInputChange1}
                                        num={'three'}
                                    />}
                                    teamBStatOne={< InputStats
                                        onChange={handleInputChange2}
                                        num={'one'}
                                    />}
                                    teamBStatTwo={< InputStats
                                        onChange={handleInputChange2}
                                        num={'two'}
                                    />}
                                    teamBStatThree={< InputStats
                                        onChange={handleInputChange2}
                                        num={'three'}
                                    />}
                                />}
                            id={bracketID}
                            teamsize={size}
                            onClick={onSubmitChangeMatchup}
                            team1category={(size >= 9 && size <= 10 ? 'brackets.col1.row7.a.stats' : size >= 11 && size <= 13 ? 'brackets.col1.row7.a.stats' : size >= 14 && size <= 16 ? 'brackets.col2.row7.a.stats' : null)}
                            team2category={(size >= 9 && size <= 10 ? 'brackets.col1.row8.a.stats' : size >= 11 && size <= 13 ? 'brackets.col2.row8.a.stats' : size >= 14 && size <= 16 ? 'brackets.col2.row8.a.stats' : null)}
                            bracket={'brackets.col3.row2.b'}
                        />
                        : brackets3.row2.b.name
                )}
                seed2={(size >= 9 && size <= 10 && round === 1 ? brackets.row7.a.seed + ' | ' + brackets.row8.a.seed
                    : size >= 11 && size <= 13 && round === 1 ? brackets.row7.a.seed + ' | ' + brackets2.row8.a.seed
                        : size >= 14 && size <= 16 && round === 1 ? brackets2.row7.a.seed + ' | ' + brackets2.row8.a.seed
                            : brackets3.row2.b.seed)}
            />
        </div>
    )
    const over8Champion = () => (
        <div style={style.grid}>
            <MatchUp
                popup={(size >= 9 && size <= 16 && round >= 4 ?
                    <PopupBoxScore
                        content={<InputMatchupStats
                            title1={category.title1}
                            title2={category.title2}
                            title3={category.title3}
                            teamA={brackets4.row1.a.name}
                            teamB={brackets4.row1.b.name}
                            teamAStatOne={brackets4.row1.a.stats.one}
                            teamAStatTwo={brackets4.row1.a.stats.two}
                            teamAStatThree={brackets4.row1.a.stats.three}
                            teamBStatOne={brackets4.row1.b.stats.one}
                            teamBStatTwo={brackets4.row1.b.stats.two}
                            teamBStatThree={brackets4.row1.b.stats.three}
                        />}
                    />
                    : null)}
                team={(
                    size >= 9 && size <= 16 && round === 2 ?
                        <ActivateModal
                            openModal={openActivateModal}
                            winner={(brackets4 === undefined || brackets4.row1 === undefined || brackets4.row1.a === undefined ? 'activate' : brackets4.row1.a.name)}
                            pickTeam={
                                <Menu size='small' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row1'
                                        letter='a'
                                        onChange={handleChangeMatchup}
                                        options={options({ brackets: brackets3, rowNum: 'row1' })}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>}
                            inputMatchupStats={
                                < InputMatchupStats
                                    title1={category.title1}
                                    title2={category.title2}
                                    title3={category.title3}
                                    teamA={brackets3.row1.a.name}
                                    teamB={brackets3.row1.b.name}
                                    teamAStatOne={< InputStats
                                        onChange={handleInputChange1}
                                        num={'one'}
                                    />}
                                    teamAStatTwo={< InputStats
                                        onChange={handleInputChange1}
                                        num={'two'}
                                    />}
                                    teamAStatThree={< InputStats
                                        onChange={handleInputChange1}
                                        num={'three'}
                                    />}
                                    teamBStatOne={< InputStats
                                        onChange={handleInputChange2}
                                        num={'one'}
                                    />}
                                    teamBStatTwo={< InputStats
                                        onChange={handleInputChange2}
                                        num={'two'}
                                    />}
                                    teamBStatThree={< InputStats
                                        onChange={handleInputChange2}
                                        num={'three'}
                                    />}
                                />}
                            id={bracketID}
                            teamsize={size}
                            onClick={onSubmitChangeMatchup}
                            team1category={'brackets.col3.row1.a.stats'}
                            team2category={'brackets.col3.row1.b.stats'}
                            bracket={'brackets.col4.row1.a'}
                        />
                        : size >= 9 && size <= 16 && round >= 3 ? brackets4.row1.a.name
                            : null)}
                seed={(size === 2 ? brackets.row1.a.seed
                    : size >= 9 && size <= 16 && round === 2 ? brackets3.row1.a.seed + ' | ' + brackets3.row1.b.seed
                        : size >= 9 && size <= 16 && round >= 3 ? brackets4.row1.a.seed
                            : null)}
                team2={(
                    size >= 9 && size <= 16 && round === 2 ?
                        <ActivateModal
                            openModal={openActivateModal}
                            winner={(brackets4 === undefined || brackets4.row1 === undefined || brackets4.row1.b === undefined ? 'activate' : brackets4.row1.b.name)}
                            pickTeam={
                                <Menu size='small' compact>
                                    <Dropdown
                                        size={size}
                                        rownum='row1'
                                        letter='b'
                                        onChange={handleChangeMatchup}
                                        options={options({ brackets: brackets3, rowNum: 'row2' })}
                                        placeholder='Select Winner'
                                        item
                                    />
                                </Menu>}
                            inputMatchupStats={
                                < InputMatchupStats
                                    title1={category.title1}
                                    title2={category.title2}
                                    title3={category.title3}
                                    teamA={brackets3.row2.a.name}
                                    teamB={brackets3.row2.b.name}
                                    teamAStatOne={< InputStats
                                        onChange={handleInputChange1}
                                        num={'one'}
                                    />}
                                    teamAStatTwo={< InputStats
                                        onChange={handleInputChange1}
                                        num={'two'}
                                    />}
                                    teamAStatThree={< InputStats
                                        onChange={handleInputChange1}
                                        num={'three'}
                                    />}
                                    teamBStatOne={< InputStats
                                        onChange={handleInputChange2}
                                        num={'one'}
                                    />}
                                    teamBStatTwo={< InputStats
                                        onChange={handleInputChange2}
                                        num={'two'}
                                    />}
                                    teamBStatThree={< InputStats
                                        onChange={handleInputChange2}
                                        num={'three'}
                                    />}
                                />}
                            id={bracketID}
                            teamsize={size}
                            onClick={onSubmitChangeMatchup}
                            team1category={'brackets.col3.row2.a.stats'}
                            team2category={'brackets.col3.row2.b.stats'}
                            bracket={'brackets.col4.row1.b'}
                        />
                        : size >= 9 && size <= 16 && round >= 3 ? brackets4.row1.b.name
                            : null)}
                seed2={(
                    size >= 9 && size <= 16 && round === 2 ? brackets3.row2.a.seed + ' | ' + brackets3.row2.b.seed
                        : size >= 9 && size <= 16 && round >= 3 ? brackets4.row1.b.seed
                            : null)}
            />
        </div>
    )
    const threeWinner = () => (
        <div style={style.grid}>
            <SingleMatchUp
                team={(size === 3 && round === 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets3 === undefined || brackets3.row1 === undefined || brackets3.row1.a === undefined ? 'activate' : brackets3.row1.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row1'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options2({ brackets: brackets, brackets2: brackets2, rowNum: 'row1' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            <InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets.row1.a.name}
                                teamB={brackets2.row1.b.name}
                                teamAStatOne={<InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={<InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={<InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={<InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={<InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={<InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col1.row1.a.stats'}
                        team2category={'brackets.col2.row1.b.stats'}
                        bracket={'brackets.col3.row1.a'}
                    />
                    : brackets3.row1.a.name
                )}
                seed={
                    (size === 3 && round === 1 ? brackets.row1.a.seed + ' | ' + brackets2.row1.b.seed
                        : brackets3.row1.a.seed
                    )}
            />
        </div>
    )
    const fourWinner = () => (
        <div style={style.grid}>
            <SingleMatchUp
                team={(size === 4 && round === 1 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets3 === undefined || brackets3.row1 === undefined || brackets3.row1.a === undefined ? 'activate' : brackets3.row1.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row1'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets: brackets2, rowNum: 'row1' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            <InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets2.row1.a.name}
                                teamB={brackets2.row1.b.name}
                                teamAStatOne={<InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={<InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={<InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={<InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={<InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={<InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col2.row1.a.stats'}
                        team2category={'brackets.col2.row1.b.stats'}
                        bracket={'brackets.col3.row1.a'}
                    />
                    : brackets3.row1.a.name
                )}
                seed={
                    (size === 4 && round === 1
                        ? brackets2.row1.a.seed + ' | ' + brackets2.row1.b.seed
                        : brackets3.row1.a.seed
                    )}
            />
        </div>
    )
    const over8Winner = () => (
        <div style={style.grid}>
            <SingleMatchUp
                team={(size >= 9 && size <= 16 && round === 3 ?
                    <ActivateModal
                        openModal={openActivateModal}
                        winner={(brackets5 === undefined || brackets5.row1 === undefined || brackets5.row1.a === undefined ? 'activate' : brackets5.row1.a.name)}
                        pickTeam={
                            <Menu size='small' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row1'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets: brackets4, rowNum: 'row1' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>}
                        inputMatchupStats={
                            < InputMatchupStats
                                title1={category.title1}
                                title2={category.title2}
                                title3={category.title3}
                                teamA={brackets4.row1.a.name}
                                teamB={brackets4.row1.b.name}
                                teamAStatOne={< InputStats
                                    onChange={handleInputChange1}
                                    num={'one'}
                                />}
                                teamAStatTwo={< InputStats
                                    onChange={handleInputChange1}
                                    num={'two'}
                                />}
                                teamAStatThree={< InputStats
                                    onChange={handleInputChange1}
                                    num={'three'}
                                />}
                                teamBStatOne={< InputStats
                                    onChange={handleInputChange2}
                                    num={'one'}
                                />}
                                teamBStatTwo={< InputStats
                                    onChange={handleInputChange2}
                                    num={'two'}
                                />}
                                teamBStatThree={< InputStats
                                    onChange={handleInputChange2}
                                    num={'three'}
                                />}
                            />}
                        id={bracketID}
                        teamsize={size}
                        onClick={onSubmitChangeMatchup}
                        team1category={'brackets.col4.row1.a.stats'}
                        team2category={'brackets.col4.row1.b.stats'}
                        bracket={'brackets.col5.row1.a'}
                    />
                    : brackets5.row1.a.name
                )}
                seed={
                    (
                        size >= 9 && size <= 16 && round === 3 ? brackets4.row1.a.seed + ' | ' + brackets4.row1.b.seed
                            : brackets5.row1.a.seed
                    )}
            />
        </div>
    )
    return (
        <div style={style.divContainer}>
            <Grid.Row>
                <Segment>
                    <Header content={title + ' Matchups'} />
                    <Table style={style.table} columns={5} collapsing>
                        <Table.Header >
                            <Table.Row textAlign='center'>
                                {(size > 8 ? roundAbove8 : null)}
                                {(size > 4 && size <= 8 ? roundAbove4 : null)}
                                {(size > 2 && size <= 4 ? roundAbove2 : null)}
                                {(size > 1 && size <= 2 ? round2 : null)}
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row textAlign='center'>
                                <Table.HeaderCell className='columnHeader' textAlign='center'>{(size > 4 ? 'Round 1' : size > 2 && size <= 4 ? 'Semis' : 'Championship')}</Table.HeaderCell>
                                <Table.Cell textAlign='center'>
                                    {(size > 8 ? overEight() : null)}
                                    {(size >= 5 && size <= 8 ? overFour() : null)}
                                    {(size > 2 && size <= 4 ? overTwo() : null)}
                                    {(size === 2 ? overOne() : null)}
                                </Table.Cell>
                                <Table.HeaderCell className='columnHeader' textAlign='center'>{(size > 8 ? 'Round 2' : size > 4 && size <= 8 ? 'Semis' : size > 2 && size <= 4 ? 'Championship' : 'Winner')}</Table.HeaderCell>
                                <Table.Cell textAlign='center'>
                                    {(size >= 9 && size <= 15 ? overFour() : null)}
                                    {(size === 16 ? sixteenRound2() : null)}
                                    {(size === 8 ? eightRound2() : null)}
                                    {(size === 4 ? fourRound2() : null)}
                                    {(size >= 5 && size <= 7 ? overTwo() : null)}
                                    {(size === 3 ? overOne() : null)}
                                    {(size === 2 ? oneTeam() : null)}
                                </Table.Cell>
                                <Table.HeaderCell className='columnHeader' textAlign='center'>{(size > 8 ? 'Semis' : size > 4 && size <= 8 ? 'Championship' : size > 2 && size <= 4 ? 'Winner' : null)}</Table.HeaderCell>
                                {(size >= 3 ?
                                    <Table.Cell textAlign='center'>
                                        {size === 3 && round >= 1 ? threeWinner() : null}
                                        {size === 4 && round >= 1 ? fourWinner() : null}
                                        {(size >= 5 && size <= 8 && round >= 1 ? overOne() : null)}
                                        {(size >= 9 && size <= 16 && round >= 1 ? fourRound3() : null)}
                                    </Table.Cell>
                                    : null)}
                                {(size >= 5 ?
                                    <Table.HeaderCell className='columnHeader' textAlign='center'>{(size > 8 ? 'Championship' : size > 4 && size <= 8 ? 'Winner' : null)}</Table.HeaderCell>
                                    : null)}
                                {(size >= 5 ?
                                    <Table.Cell textAlign='center'>
                                        {(size >= 5 && size <= 8 && round >= 2 ? oneTeam() : null)}
                                        {(size >= 9 && size <= 16 && round >= 2 ? over8Champion() : null)}
                                    </Table.Cell>
                                    : null)}
                                {(size >= 9 ?
                                    <Table.HeaderCell className='columnHeader' textAlign='center'>{(size > 8 ? 'Winner' : null)}</Table.HeaderCell>
                                    : null)}
                                {(size >= 9 ?
                                    <Table.Cell textAlign='center'>
                                        {(size >= 9 && size <= 16 && round >= 3 ? over8Winner() : null)}
                                    </Table.Cell>
                                    : null)}
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Segment>
            </Grid.Row>
            <Grid.Row >
                <Segment style={style.segment}>
                    <Button
                        style={style.divContainer}
                        id={bracketID}
                        size='mini'
                        floated='left'
                        color='red'
                        onClick={handleDeleteBracket}>
                        Delete Bracket
                    </Button>
                    {/* <BoxScores /> */}
                    {round === 0 ?
                        <Button
                            // disabled={(submissionCompleted === false? true: false)}
                            id={bracketID}
                            teamsize={size}
                            size='tiny'
                            color='green'
                            floated='right'
                            onClick={onSubmitChangeRound1}>
                            {(size <= 2 ? 'Submit Champ' : 'Submit Round 1')}
                        </Button>
                        : null}
                    {round === 1 && size > 2 ?
                        <Button
                            id={bracketID}
                            teamsize={size}
                            size='tiny'
                            color='green'
                            floated='right'
                            onClick={onSubmitChangeRound2}>
                            {(size === 4 || size === 3 ? 'Submit Champion' : 'Submit Round 2')}
                        </Button>
                        : null}
                    {round === 2 && size > 4 ?
                        <Button
                            teamsize={size}
                            id={bracketID}
                            size='tiny'
                            color='green'
                            floated='right'
                            onClick={onSubmitChangeRound3}>
                            {(size >= 4 && size <= 8 ? 'Submit Champion' : 'Submit Round 3')}
                        </Button>
                        : null}
                    {round === 3 && size > 8 ?
                        <Button
                            teamsize={size}
                            id={bracketID}
                            size='tiny'
                            color='green'
                            floated='right'
                            onClick={onSubmitChangeRound4}>
                            Submit Champion
                            </Button>
                        : null}
                </Segment>
            </Grid.Row>
        </div>
    )
}


export default Brackets