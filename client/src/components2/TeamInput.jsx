import React from 'react';
import { Input, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'


const teamNameInput = ({row, col, seed, handleTeamChange}) => (
    <Form.Group>
        <Input 
        label={'#' + seed + ' seed'} 
        name={'team' + seed} 
        row={row}
        col={col}
        onChange={handleTeamChange}
        placeholder='Team name...' 
        />
    </Form.Group>
)

export default teamNameInput