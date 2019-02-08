import React from 'react';
import { Input, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'


const teamNameInput = ({ col, handleTeamOver1 }) => {


    return (
        <div>
            <Form.Group>
                <Input
                    className='input-width'
                    label={'#1'}
                    name={'a'}
                    row={'row1'}
                    col={col}
                    onChange={handleTeamOver1}
                    placeholder='Team name...'
                />

                <Input
                    className='input-width'
                    label={'#2'}
                    name={'b'}
                    row={'row1'}
                    col={col}
                    onChange={handleTeamOver1}
                    placeholder='Team name...'
                />


            </Form.Group>

        </div>
    )


}


export default teamNameInput