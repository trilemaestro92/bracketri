import React from 'react';
import { Input, Form} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'




const teamNameInput = ({ row, col, size, handleTeamOver8 }) => {

    return (

        <div>
            <Form.Group>
                <Input
                    className='input-width'
                    label={'#1'}
                    name={'a'}
                    row={'row1'}
                    col={col}
                    onChange={handleTeamOver8}
                    placeholder='Team name...'
                />

                {(size > 15 ?
                    <Input
                        className='input-width'
                        label={'#16'}
                        name={'b'}
                        row={'row1'}
                        col={col}
                        onChange={handleTeamOver8}
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
                    row={'row5'}
                    col={col}
                    onChange={handleTeamOver8}
                    placeholder='Team name...'
                />
                {(size > 14 ?
                    <Input
                        className='input-width'
                        label={'#15'}
                        name={'b'}
                        row={'row5'}
                        col={col}
                        onChange={handleTeamOver8}
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
                    row={'row7'}
                    col={col}
                    onChange={handleTeamOver8}
                    placeholder='Team name...'
                />
                {(size > 13 ?
                    <Input
                        className='input-width'
                        label={'#14'}
                        name={'b'}
                        row={'row7'}
                        col={col}
                        onChange={handleTeamOver8}
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
                    row={'row3'}
                    col={col}
                    onChange={handleTeamOver8}
                    placeholder='Team name...'
                />
                {(size > 12 ?
                    <Input
                        className='input-width'
                        label={'#13'}
                        name={'b'}
                        row={'row3'}
                        col={col}
                        onChange={handleTeamOver8}
                        placeholder='Team name...'
                    />
                    :
                    <Input className='input-width' label={'BYE'} disabled placeholder='Team name...' />
                )}
            </Form.Group>
            <Form.Group>
                <Input
                    className='input-width'
                    label={'#5'}
                    name={'a'}
                    row={'row4'}
                    col={col}
                    onChange={handleTeamOver8}
                    placeholder='Team name...'
                />
                {(size > 11 ?
                    <Input
                        className='input-width'
                        label={'#12'}
                        name={'b'}
                        row={'row4'}
                        col={col}
                        onChange={handleTeamOver8}
                        placeholder='Team name...'
                    />
                    :
                    <Input disabled className='input-width' label={'BYE'} placeholder='Team name...' />
                )}
            </Form.Group>
            <Form.Group>
                <Input
                    className='input-width'
                    label={'#6'}
                    name={'a'}
                    row={'row8'}
                    col={col}
                    onChange={handleTeamOver8}
                    placeholder='Team name...'
                />
                {(size > 10 ?
                    <Input
                        className='input-width'
                        label={'#11'}
                        name={'b'}
                        row={'row8'}
                        col={col}
                        onChange={handleTeamOver8}
                        placeholder='Team name...'
                    />
                    :
                    <Input disabled className='input-width' label={'BYE'} placeholder='Team name...' />
                )}
            </Form.Group>
            <Form.Group>
                <Input
                    className='input-width'
                    label={'#7'}
                    name={'a'}
                    row={'row6'}
                    col={col}
                    onChange={handleTeamOver8}
                    placeholder='Team name...'
                />
                {(size > 9 ?
                    <Input
                        className='input-width'
                        label={'#10'}
                        name={'b'}
                        row={'row6'}
                        col={col}
                        onChange={handleTeamOver8}
                        placeholder='Team name...'
                    />
                    :
                    <Input disabled className='input-width' label={'BYE'} placeholder='Team name...' />
                )}
            </Form.Group>
            <Form.Group>
                <Input
                    className='input-width'
                    label={'#8'}
                    name={'a'}
                    row={'row2'}
                    col={col}
                    onChange={handleTeamOver8}
                    placeholder='Team name...'
                />
                {(size > 8 ?
                    <Input
                        className='input-width'
                        label={'#9'}
                        name={'b'}
                        row={'row2'}
                        col={col}
                        onChange={handleTeamOver8}
                        placeholder='Team name...'
                    />
                    :
                    <Input disabled className='input-width' label={'BYE'} placeholder='Team name...'/>
                )}
            </Form.Group>


        </div>


    )


}


export default teamNameInput