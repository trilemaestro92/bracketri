import React from 'react';
import { Input, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'


const teamNameInput = ({ row, col, size, handleTeamOver4 }) => {


    return (
        <div>
            <Form.Group>
                <Input
                    className='input-width'
                    label={'#1'}
                    name={'a'}
                    row={'row1'}
                    col={col}
                    onChange={handleTeamOver4}
                    placeholder='Team name...'
                />

                {(size > 7 ?
                    <Input
                        className='input-width'
                        label={'#8'}
                        name={'b'}
                        row={'row1'}
                        col={col}
                        onChange={handleTeamOver4}
                        placeholder='Team name...'
                    />
                    :
                    <Input disabled className='input-width' label={'BYE'} placeholder='Team name...' />
                )}

            </Form.Group>

            <Form.Group>
                <Input
                    className='input-width'
                    label={'#2'}
                    name={'a'}
                    row={'row3'}
                    col={col}
                    onChange={handleTeamOver4}
                    placeholder='Team name...'
                />
                {(size > 6 ?
                    <Input
                        className='input-width'
                        label={'#7'}
                        name={'b'}
                        row={'row3'}
                        col={col}
                        onChange={handleTeamOver4}
                        placeholder='Team name...'
                    />
                    :
                    <Input disabled className='input-width' label={'BYE'} placeholder='Team name...'
                    />
                )}
            </Form.Group>
            <Form.Group>
                <Input
                    className='input-width'
                    label={'#3'}
                    name={'a'}
                    row={'row4'}
                    col={col}
                    onChange={handleTeamOver4}
                    placeholder='Team name...'
                />
                {(size > 5 ?
                    <Input
                        className='input-width'
                        label={'#6'}
                        name={'b'}
                        row={'row4'}
                        col={col}
                        onChange={handleTeamOver4}
                        placeholder='Team name...'
                    />
                    :
                    <Input disabled className='input-width' label={'BYE'} placeholder='Team name...'
                    />
                )}
            </Form.Group>
            <Form.Group>
                <Input
                    className='input-width'
                    label={'#4'}
                    name={'a'}
                    row={'row2'}
                    col={col}
                    onChange={handleTeamOver4}
                    placeholder='Team name...'
                />
                {(size > 4 ?
                    <Input
                        className='input-width'
                        label={'#5'}
                        name={'b'}
                        row={'row2'}
                        col={col}
                        onChange={handleTeamOver4}
                        placeholder='Team name...'
                    />
                    :
                    <Input className='input-width' label={'BYE'} disabled placeholder='Team name...' />
                )}
            </Form.Group>
        </div>
    )


}


export default teamNameInput