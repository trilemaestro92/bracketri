import React from 'react';
import { Input, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'


const teamNameInput = ({ row, col, size, handleTeamOver2 }) => {


    return (
        <div>
            <Form.Group>
                <Input
                    className='input-width'
                    label={'#1'}
                    name={'a'}
                    row={'row1'}
                    col={col}
                    onChange={handleTeamOver2}
                    placeholder='Team name...'
                />

                {(size > 3 ?
                    <Input
                        className='input-width'
                        label={'#4'}
                        name={'b'}
                        row={'row1'}
                        col={col}
                        onChange={handleTeamOver2}
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
                    row={'row2'}
                    col={col}
                    onChange={handleTeamOver2}
                    placeholder='Team name...'
                />
                {(size > 2 ?
                    <Input
                        className='input-width'
                        label={'#3'}
                        name={'b'}
                        row={'row2'}
                        col={col}
                        onChange={handleTeamOver2}
                        placeholder='Team name...'
                    />
                    :
                    <Input disabled className='input-width' label={'BYE'} placeholder='Team name...'
                    />
                )}
            </Form.Group>
            
        </div>
    )


}


export default teamNameInput