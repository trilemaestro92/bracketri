import React from 'react';
import { Modal, Menu, Dropdown, Segment, Header, Button, Icon, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'
import { options, options2, options3 } from './Options'


const RoundHead = (props) => (
    <div style={{ fontWeight: 'bold', textTransform: 'capitalize', display: 'grid', justifyContent: 'left', }} >
        {props.format}
    </div>
);

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


const BraketModal = ({
    onGenerate,
    onSubmitChangeRound1,
    onSubmitChangeRound2,
    onSubmitChangeRound3,
    onSubmitChangeRound4,
    handleChangeMatchup,
    handleChangeMatchupRound2,
    handleChangeMatchupRound3,
    handleChangeMatchupRound4,
    handleDeleteBracket,
    loadBracketInfo,
    size,
    title,
    date,
    format,
    brackets,
    brackets2,
    brackets3,
    brackets4,
    brackets5,
    bracketID,
    round

}) => {

    const roundAbove8 =
        format.sixteen.map((name, i) => {
            return (<RoundHead key={i} format={name} />)
        })
    const roundAbove4 =
        format.eight.map((name, i) => {
            return (<RoundHead key={i} format={name} />)
        })
    const roundAbove2 =
        format.two.map((name, i) => {
            return (<RoundHead key={i} format={name} />)
        })
    const round2 =
        format.one.map((name, i) => {
            return (<RoundHead key={i} format={name} />)
        })
    const overEight = () => (
        <div>
            <MatchUp
                style={(size > 8 && size <= 15 ? { display: 'none' } : null)}
                team={brackets.row1.a.name}
                seed={brackets.row1.a.seed}
                team2={(size > 8 && size <= 15 ? 'BYE' : brackets.row1.b.name)}
                seed2={(size > 8 && size <= 15 ? 'BYE' : brackets.row1.b.seed)}
            />
            <MatchUp
                team={brackets.row2.a.name}
                seed={brackets.row2.a.seed}
                team2={brackets.row2.b.name}
                seed2={brackets.row2.b.seed}
            />
            <MatchUp style={(size > 8 && size <= 12 ? { display: 'none' } : null)}
                team={brackets.row3.a.name}
                seed={brackets.row3.a.seed}
                team2={(size > 8 && size <= 12 ? 'BYE' : brackets.row3.b.name)}
                seed2={(size > 8 && size <= 12 ? 'BYE' : brackets.row3.b.seed)} />
            <MatchUp style={(size > 8 && size <= 11 ? { display: 'none' } : null)}
                team={brackets.row4.a.name}
                seed={brackets.row4.a.seed}
                team2={(size > 8 && size <= 11 ? 'BYE' : brackets.row4.b.name)}
                seed2={(size > 8 && size <= 11 ? 'BYE' : brackets.row4.b.seed)} />
            <MatchUp
                style={(size > 8 && size <= 14 ? { display: 'none' } : null)}
                team={brackets.row5.a.name}
                seed={brackets.row5.a.seed}
                team2={(size > 8 && size <= 14 ? 'BYE' : brackets.row5.b.name)}
                seed2={(size > 8 && size <= 14 ? 'BYE' : brackets.row5.b.seed)} />
            <MatchUp style={(size > 8 && size <= 9 ? { display: 'none' } : null)}
                team={brackets.row6.a.name}
                seed={brackets.row6.a.seed}
                team2={(size > 8 && size <= 9 ? 'BYE' : brackets.row6.b.name)}
                seed2={(size > 8 && size <= 9 ? 'BYE' : brackets.row6.b.seed)}

            />
            <MatchUp style={(size > 8 && size <= 13 ? { display: 'none' } : null)}
                team={brackets.row7.a.name}
                seed={brackets.row7.a.seed}
                team2={(size > 8 && size <= 13 ? 'BYE' : brackets.row7.b.name)}
                seed2={(size > 8 && size <= 13 ? 'BYE' : brackets.row7.b.seed)} />

            <MatchUp style={(size > 8 && size <= 10 ? { display: 'none' } : null)}
                team={brackets.row8.a.name}
                seed={brackets.row8.a.seed}
                team2={(size > 8 && size <= 10 ? 'BYE' : brackets.row8.b.name)}
                seed2={(size > 8 && size <= 10 ? 'BYE' : brackets.row8.b.seed)} />
        </div>
    )
    const overFour = () => (
        <div>
            <MatchUp
                style={(size <= 7 && size >= 5 ? { display: 'none' } : null)}
                team={(size < 16 ? brackets.row1.a.name : 'TBD')}
                seed={(size < 16 ? brackets.row1.a.seed : null)}
                team2={(size === 8 ? brackets.row1.b.name : round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='b'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row2' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : brackets2.row1.b.name)}
                seed2={(size === 8 ? brackets.row1.b.seed
                    : round < 1 ? brackets.row2.a.seed + ' | ' + brackets.row2.b.seed
                        : brackets2.row1.b.seed)}
            />
            <MatchUp
                team={(size >= 5 && size <= 8 ? brackets.row2.a.name
                    : size >= 9 && size <= 12 ? brackets.row3.a.name
                        : size >= 13 && size <= 15 && round < 1 ?
                            <Menu size='mini' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row3'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row3' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>
                            : brackets2.row3.a.name)}
                seed={(size >= 5 && size <= 8 ? brackets.row2.a.seed
                    : size >= 9 && size <= 12 ? brackets.row3.a.seed
                        : size >= 13 && size <= 15 && round < 1 ? brackets.row3.a.seed + ' | ' + brackets.row3.b.seed
                            : brackets2.row3.a.seed)}
                team2={(size >= 5 && size <= 8 ? brackets.row2.b.name
                    : size >= 9 && size <= 11 ? brackets.row4.a.name
                        : size >= 12 && size <= 15 && round < 1 ?
                            <Menu size='mini' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row4'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets: brackets, rowNum: 'row4' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>
                            :
                            brackets2.row4.a.name)}
                seed2={(size >= 5 && size <= 8 ? brackets.row2.b.seed
                    : size >= 9 && size <= 11 ? brackets.row4.a.seed
                        : size >= 12 && size <= 15 && round < 1 ? brackets.row4.a.seed + ' | ' + brackets.row4.b.seed
                            : brackets2.row4.a.seed)}
            />
            <MatchUp style={(size >= 5 && size <= 6 ? { display: 'none' } : null)}
                team={(size >= 5 && size <= 8 ? brackets.row3.a.name
                    : size >= 9 && size <= 14 ? brackets.row5.a.name
                        : size === 15 && round < 1 ?
                            <Menu size='mini' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row5'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row5' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>
                            : brackets2.row5.a.name)}
                seed={(size >= 5 && size <= 8 ? brackets.row3.a.seed
                    : size >= 9 && size <= 14 ? brackets.row5.a.seed
                        : size === 15 && round < 1 ? brackets.row5.a.seed + ' | ' + brackets.row5.b.seed
                            : brackets2.row5.a.seed)}
                team2={(size >= 5 && size <= 8 ? brackets.row3.b.name : size >= 10 && size <= 15 && round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row6'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row6' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    :
                    size === 9 ? brackets.row6.a.name : brackets2.row6.a.name)}
                seed2={(size >= 5 && size <= 8 ? brackets.row3.b.seed
                    : size === 9 ? brackets.row6.a.seed
                        : size >= 10 && size <= 15 && round < 1 ? brackets.row6.a.seed + ' | ' + brackets.row6.b.seed
                            : brackets2.row6.a.seed)}
            />
            <MatchUp style={(size === 5 ? { display: 'none' } : null)}
                team={(size >= 5 && size <= 8 ? brackets.row4.a.name
                    : size >= 9 && size <= 13 ? brackets.row7.a.name
                        : size >= 14 && size <= 15 && round < 1 ?
                            <Menu size='mini' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row7'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row7' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>
                            : brackets2.row7.a.name)}
                seed={(size >= 5 && size <= 8 ? brackets.row4.a.seed
                    : size >= 9 && size <= 13 ? brackets.row7.a.seed
                        : size >= 14 && size <= 15 && round < 1 ? brackets.row7.a.seed + ' | ' + brackets.row7.b.seed
                            : brackets2.row7.a.seed)}
                team2={(size >= 5 && size <= 8 ? brackets.row4.b.name : size >= 11 && size <= 15 && round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row8'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row8' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
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
        <div>
            <MatchUp
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
                        <Menu size='mini' compact>
                            <Dropdown
                                size={size}
                                rownum='row1'
                                letter='b'
                                onChange={handleChangeMatchup}
                                options={options({ brackets: brackets, rowNum: 'row2' })}
                                placeholder='Select Winner'
                                item
                            />
                        </Menu>
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
                team={(size <= 4 && size >= 3 ? brackets.row2.a.name
                    : size <= 6 && size >= 4 ? brackets.row3.a.name
                        : size === 7 && round < 1 ?
                            <Menu size='mini' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row3'
                                    letter='a'
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row3' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>
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
                                : size <= 7 && size >= 5 && round > 0 ? brackets2.row3.a.name
                                    : brackets2.row2.a.name)}
                seed={(size <= 4 && size >= 3 ? brackets.row2.a.seed
                    : size === 7 && round < 1 ? brackets.row3.a.seed + ' | ' + brackets.row3.b.seed
                        : size <= 6 && size >= 5 && round < 1 ? brackets.row3.a.seed
                            : size <= 16 && size >= 9 && round === 1 ? brackets2.row3.a.seed + ' | ' + brackets2.row3.b.seed
                                : brackets2.row3.a.seed)}
                team2={(size <= 4 && size >= 3 ? brackets.row2.b.name
                    : size <= 5 && size >= 4 && round < 1 ? brackets.row4.a.name
                        : size <= 7 && size >= 6 && round < 1 ?
                            <Menu size='mini' compact>
                                <Dropdown
                                    size={size}
                                    rownum={'row4'}
                                    letter={'a'}
                                    onChange={handleChangeMatchup}
                                    options={options({ brackets, rowNum: 'row4' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>
                            : size <= 7 && size >= 5 && round > 0 ? brackets2.row4.a.name : null)}
                seed2={(
                    size <= 4 && size >= 3 ? brackets.row2.b.seed
                        : size <= 7 && size >= 6 && round < 1 ? brackets.row4.a.seed + ' | ' + brackets.row4.b.seed
                            : size === 5 && round < 1 ? brackets.row4.a.seed
                                : brackets2.row4.a.seed)}
            />
        </div>
    )
    const overOne = () => (
        <div>
            <MatchUp
                team={(size === 2 ? brackets.row1.a.name
                    : size >= 5 && size <= 8 && round === 1 ?
                        <Menu size='mini' compact>
                            <Dropdown
                                size={size}
                                rownum='row1'
                                letter='a'
                                onChange={handleChangeMatchupRound2}
                                options={options({ brackets: brackets2, rowNum: 'row1' })}
                                placeholder='Select Winner'
                                item
                            />
                        </Menu>
                        : size >= 5 && size <= 8 && round >= 2 ? brackets3.row1.a.name
                            : brackets.row1.a.name)}
                seed={(size === 2 ? brackets.row1.a.seed
                    : size >= 5 && size <= 8 && round === 1 ? brackets2.row1.a.seed + ' | ' + brackets2.row1.b.seed
                        : size >= 5 && size <= 8 && round >= 2 ? brackets3.row1.a.seed
                            : brackets.row1.a.seed)}
                team2={(size === 2 ? brackets.row1.b.name
                    : size >= 5 && size <= 7 && round === 1 ?
                        <Menu size='mini' compact>
                            <Dropdown
                                size={size}
                                rownum='row1'
                                letter='b'
                                onChange={handleChangeMatchupRound2}
                                options={options3({ brackets: brackets2, rowNum: 'row3', rowNum2: 'row4' })}
                                placeholder='Select Winner'
                                item
                            />
                        </Menu>
                        : size === 8 && round === 1 ?
                            <Menu size='mini' compact>
                                <Dropdown
                                    size={size}
                                    rownum='row1'
                                    letter='b'
                                    onChange={handleChangeMatchupRound2}
                                    options={options({ brackets: brackets2, rowNum: 'row2' })}
                                    placeholder='Select Winner'
                                    item
                                />
                            </Menu>
                            : size >= 5 && size <= 8 && round >= 2 ? brackets3.row1.b.name
                                : size === 3 && round < 1 ?
                                    <Menu size='mini' compact>
                                        <Dropdown
                                            size={size}
                                            rownum='row1'
                                            letter='b'
                                            onChange={handleChangeMatchup}
                                            options={options({ brackets, rowNum: 'row2' })}
                                            placeholder='Select Winner'
                                            item
                                        />
                                    </Menu>
                                    : size === 3 && round > 0 ? brackets2.row1.b.name
                                        : brackets2.row1.b.name)}
                seed2={(size === 2 ? brackets.row1.b.seed
                    : size === 3 && round < 1 ? brackets.row2.a.seed + ' | ' + brackets.row2.b.seed
                        : size >= 5 && size <= 7 && round === 1 ? brackets2.row3.a.seed + ' | ' + brackets2.row4.a.seed
                            : size === 8 && round === 1 ? brackets2.row2.a.seed + ' | ' + brackets2.row2.b.seed
                                : size === 3 && round > 0 && brackets2.row1.b.name === brackets.row2.a.name ? brackets.row2.a.seed
                                    : size >= 5 && size <= 8 && round >= 2 ? brackets3.row1.b.seed
                                        : brackets.row2.b.seed
                )}
            />
        </div>
    )
    const oneTeam = () => (
        <div>
            <SingleMatchUp
                team={(size === 2 && round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row1' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : size >= 5 && size <= 8 && round === 2 ?
                        <Menu size='mini' compact>
                            <Dropdown
                                size={size}
                                rownum='row1'
                                letter='a'
                                onChange={handleChangeMatchupRound3}
                                options={options({ brackets: brackets3, rowNum: 'row1' })}
                                placeholder='Select Winner'
                                item
                            />
                        </Menu>
                        : size >= 5 && size <= 8 && round === 3 ? brackets4.row1.a.name
                            : brackets2.row1.a.name
                )}
                seed={(size === 2 && round < 1 ? brackets.row1.a.seed + ' | ' + brackets.row1.b.seed
                    : brackets2.row1.a.name === brackets.row1.a.name && size === 2 ? brackets.row1.a.seed
                        : size >= 5 && size <= 8 && round === 2 ? brackets3.row1.a.seed + ' | ' + brackets3.row1.b.seed
                            : size >= 5 && size <= 8 && round === 3 ? brackets4.row1.a.seed
                                : brackets.row1.b.seed)}
            />
        </div>
    )
    const sixteenRound2 = () => (
        <div>
            <MatchUp
                team={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row1' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : brackets2.row1.a.name
                )}
                seed={(round < 1 ? brackets.row1.a.seed + ' | ' + brackets.row1.b.seed
                    : brackets2.row1.a.seed)}
                team2={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='b'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row2' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    :
                    brackets2.row1.b.name
                )}
                seed2={(round < 1 ? brackets.row2.a.seed + ' | ' + brackets.row2.b.seed
                    : brackets2.row1.b.seed)}

            />
            <MatchUp
                team={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row3'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row3' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : brackets2.row3.a.name
                )}
                seed={(round < 1 ? brackets.row3.a.seed + ' | ' + brackets.row3.b.seed
                    : brackets2.row3.a.seed)}
                team2={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row4'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row4' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    :
                    brackets2.row4.a.name
                )}
                seed2={(round < 1 ? brackets.row4.a.seed + ' | ' + brackets.row4.b.seed
                    : brackets2.row4.a.seed)}
            />
            <MatchUp
                team={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row5'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row5' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : brackets2.row5.a.name
                )}
                seed={(round < 1 ? brackets.row5.a.seed + ' | ' + brackets.row5.b.seed
                    : brackets2.row5.a.seed)}
                team2={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row6'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row6' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    :
                    brackets2.row6.a.name
                )}
                seed2={(round < 1 ? brackets.row6.a.seed + ' | ' + brackets.row6.b.seed
                    : brackets2.row6.a.seed)}
            />
            <MatchUp
                team={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row7'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row7' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : brackets2.row7.a.name
                )}
                seed={(round < 1 ? brackets.row7.a.seed + ' | ' + brackets.row7.b.seed
                    : brackets2.row7.a.seed)}
                team2={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row8'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row8' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    :
                    brackets2.row8.a.name
                )}
                seed2={(round < 1 ? brackets.row8.a.seed + ' | ' + brackets.row8.b.seed
                    : brackets2.row8.a.seed)}
            />
        </div>
    )
    const eightRound2 = () => (
        <div>
            <MatchUp
                team={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row1' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : brackets2.row1.a.name
                )}
                seed={(round < 1 ? brackets.row1.a.seed + ' | ' + brackets.row1.b.seed
                    : brackets2.row1.a.name === brackets.row1.a.name ? brackets.row1.a.seed : brackets.row1.b.seed)}
                team2={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='b'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row2' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    :
                    brackets2.row1.b.name
                )}
                seed2={(round < 1 ? brackets.row2.a.seed + ' | ' + brackets.row2.b.seed
                    : brackets2.row1.b.name === brackets.row2.a.name ? brackets.row2.a.seed : brackets.row2.b.seed)}

            />
            <MatchUp
                team={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row2'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row3' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : brackets2.row2.a.name
                )}
                seed={(round < 1 ? brackets.row3.a.seed + ' | ' + brackets.row3.b.seed
                    : brackets2.row2.a.name === brackets.row3.a.name ? brackets.row3.a.seed : brackets.row3.b.seed)}
                team2={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row2'
                            letter='b'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row4' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    :
                    brackets2.row2.b.name
                )}
                seed2={(round < 1 ? brackets.row4.a.seed + ' | ' + brackets.row4.b.seed
                    : brackets2.row2.b.name === brackets.row4.a.name ? brackets.row4.a.seed : brackets.row4.b.seed)}
            />
        </div>
    )
    const fourRound2 = () => (
        <div>
            <MatchUp
                team={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='a'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row1' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : brackets2.row1.a.name
                )}
                seed={(round < 1 ? brackets.row1.a.seed + ' | ' + brackets.row1.b.seed
                    : brackets2.row1.a.name === brackets.row1.a.name ? brackets.row1.a.seed : brackets.row1.b.seed)}
                team2={(round < 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='b'
                            onChange={handleChangeMatchup}
                            options={options({ brackets, rowNum: 'row2' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    :
                    brackets2.row1.b.name
                )}
                seed2={(round < 1 ? brackets.row2.a.seed + ' | ' + brackets.row2.b.seed
                    : brackets2.row1.b.name === brackets.row2.a.name ? brackets.row2.a.seed : brackets.row2.b.seed)}
            />
        </div>
    )
    const fourRound3 = () => (
        <div>
            <MatchUp
                team={(size >= 9 && size <= 16 && round === 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='a'
                            onChange={handleChangeMatchupRound2}
                            options={options({ brackets: brackets2, rowNum: 'row1' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : brackets3.row1.a.name
                )}
                seed={(round === 1 ? brackets2.row1.a.seed + ' | ' + brackets2.row1.b.seed
                    : brackets3.row1.a.seed)}
                team2={(size >= 9 && size <= 16 && round === 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='b'
                            onChange={handleChangeMatchupRound2}
                            options={options3({ brackets: brackets2, rowNum: 'row3', rowNum2: 'row4' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    :
                    brackets3.row1.b.name
                )}
                seed2={(round === 1 ? brackets2.row3.a.seed + ' | ' + brackets2.row4.a.seed
                    : brackets3.row1.b.seed)}
            />
            <MatchUp
                team={(size >= 9 && size <= 16 && round === 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row2'
                            letter='a'
                            onChange={handleChangeMatchupRound2}
                            options={options3({ brackets: brackets2, rowNum: 'row5', rowNum2: 'row6' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : brackets3.row2.a.name
                )}
                seed={(round === 1 ? brackets2.row5.a.seed + ' | ' + brackets2.row6.a.seed
                    : brackets3.row2.a.seed)}
                team2={(size >= 9 && size <= 16 && round === 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row2'
                            letter='b'
                            onChange={handleChangeMatchupRound2}
                            options={options3({ brackets: brackets2, rowNum: 'row7', rowNum2: 'row8' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    :
                    brackets3.row2.b.name
                )}
                seed2={(round === 1 ? brackets2.row7.a.seed + ' | ' + brackets2.row8.a.seed
                    : brackets3.row2.b.seed)}
            />
        </div>
    )
    const over8Champion = () => (
        <div>
            <MatchUp
                team={(
                    size >= 9 && size <= 16 && round === 2 ?
                        <Menu size='mini' compact>
                            <Dropdown
                                size={size}
                                rownum='row1'
                                letter='a'
                                onChange={handleChangeMatchupRound3}
                                options={options({ brackets: brackets3, rowNum: 'row1' })}
                                placeholder='Select Winner'
                                item
                            />
                        </Menu>
                        : size >= 9 && size <= 16 && round >= 3 ? brackets4.row1.a.name
                            : null)}
                seed={(size === 2 ? brackets.row1.a.seed
                    : size >= 9 && size <= 16 && round === 2 ? brackets3.row1.a.seed + ' | ' + brackets3.row1.b.seed
                        : size >= 9 && size <= 16 && round >= 3 ? brackets4.row1.a.seed
                            : null)}
                team2={(
                    size >= 9 && size <= 16 && round === 2 ?
                        <Menu size='mini' compact>
                            <Dropdown
                                size={size}
                                rownum='row1'
                                letter='b'
                                onChange={handleChangeMatchupRound3}
                                options={options({ brackets: brackets3, rowNum: 'row2' })}
                                placeholder='Select Winner'
                                item
                            />
                        </Menu>
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
        <div>
            <SingleMatchUp
                team={(size === 3 && round === 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='a'
                            onChange={handleChangeMatchupRound2}
                            options={options2({ brackets: brackets, brackets2: brackets2, rowNum: 'row1' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : brackets3.row1.a.name
                )}
                seed={
                    (size === 3 && round === 1 && brackets2.row1.b.name === brackets.row2.a.name
                        ? brackets.row1.a.seed + ' | ' + brackets.row2.a.seed :
                        size === 3 && round >= 2 ? brackets3.row1.a.seed
                            : brackets.row1.a.seed + ' | ' + brackets.row2.b.seed
                    )}
            />
        </div>
    )
    const fourWinner = () => (
        <div>
            <SingleMatchUp
                team={(size === 4 && round === 1 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='a'
                            onChange={handleChangeMatchupRound2}
                            options={options2({ brackets: brackets2, brackets2: brackets2, rowNum: 'row1' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
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
        <div>
            <SingleMatchUp
                team={(size >=9 && size<=16 && round === 3 ?
                    <Menu size='mini' compact>
                        <Dropdown
                            size={size}
                            rownum='row1'
                            letter='a'
                            onChange={handleChangeMatchupRound4}
                            options={options({ brackets: brackets4, rowNum: 'row1' })}
                            placeholder='Select Winner'
                            item
                        />
                    </Menu>
                    : brackets5.row1.a.name
                )}
                seed={
                    (
                        size >=9 && size<=16 && round === 3 ? brackets4.row1.a.seed + ' | ' + brackets4.row1.b.seed
                        : brackets5.row1.a.seed
                    )}
            />
        </div>
    )
    return (
        <div style={{ marginBottom: '10px' }}>
            <Segment>
                <Modal size='large' closeIcon trigger={
                    <Button
                        onClick={loadBracketInfo}
                        id={bracketID}
                        style={{ boxShadow: 'none', fontSize: '12px', fontWeight: 'bold' }} fluid basic>
                        <div style={{ marginBottom: '20px' }} id={bracketID}><Icon id={bracketID} size='large' name='trophy'></Icon></div>
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
                                {(size > 1 && size <= 2 ? round2 : null)}
                            </div>
                            <div className='user-team-container'>
                                <div className='column1' >
                                    {(size > 8 ? overEight() : null)}
                                    {(size >= 5 && size <= 8 ? overFour() : null)}
                                    {(size > 2 && size <= 4 ? overTwo() : null)}
                                    {(size === 2 ? overOne() : null)}
                                </div>
                                <div className='column2'>
                                    {(size >= 9 && size <= 15 ? overFour() : null)}
                                    {(size === 16 ? sixteenRound2() : null)}
                                    {(size === 8 ? eightRound2() : null)}
                                    {(size === 4 ? fourRound2() : null)}
                                    {(size >= 5 && size <= 7 ? overTwo() : null)}
                                    {(size === 3 ? overOne() : null)}
                                    {(size === 2 ? oneTeam() : null)}

                                </div>
                                <div className='column3'>
                                    {size === 3 && round >= 1 ? threeWinner() : null}
                                    {size === 4 && round >= 1 ? fourWinner() : null}
                                    {(size >= 5 && size <= 8 && round >= 1 ? overOne() : null)}
                                    {(size >= 9 && size <= 16 && round >= 1 ? fourRound3() : null)}

                                </div>
                                <div className='column4'>
                                    {(size >= 5 && size <= 8 && round >= 2 ? oneTeam() : null)}
                                    {(size >= 9 && size <= 16 && round >= 2 ? over8Champion() : null)}
                                </div>
                                <div className='column5'>
                                    {(size >= 9 && size <= 16 && round >= 3 ? over8Winner() : null)}
                                </div>
                            </div>
                        </Container>
                    </div>
                    <Modal.Actions>
                        <Button
                            style={{ marginBottom: '10px' }}
                            id={bracketID}
                            size='mini'
                            floated='left'
                            color='red'
                            onClick={handleDeleteBracket}>
                            Delete Bracket
                            </Button>
                        {round === 0 ?
                            <Button
                                // disabled={(submissionCompleted === false? true: false)}
                                id={bracketID}
                                teamsize={size}
                                size='small'
                                color='green'
                                onClick={onSubmitChangeRound1}>
                                {(size <= 2 ? 'Submit Champ' : 'Submit Round 1')}
                            </Button>
                            : null}
                        {round === 1 && size > 2 ?
                            <Button
                                id={bracketID}
                                teamsize={size}
                                size='small'
                                color='green'
                                onClick={onSubmitChangeRound2}>
                                {(size === 4 || size === 3 ? 'Submit Champion' : 'Submit Round 2')}
                            </Button>
                            : null}
                        {round === 2 && size > 4 ?
                            <Button
                                teamsize={size}
                                id={bracketID}
                                size='small'
                                color='green'
                                onClick={onSubmitChangeRound3}>
                                {(size >= 4 && size <= 8 ? 'Submit Champion' : 'Submit Round 3')}
                            </Button>
                            : null}
                        {round === 3 && size > 8  ?
                            <Button
                                teamsize={size}
                                id={bracketID}
                                size='small'
                                color='green'
                                onClick={onSubmitChangeRound4}>
                                Submit Champion
                            </Button>
                            : null}
                    </Modal.Actions>
                </Modal>
            </Segment>
        </div>
    )
}

export default BraketModal
