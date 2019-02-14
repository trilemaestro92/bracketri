import React from 'react';
import { Input, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'

const categoriesInput = (props) => {


    return (
        <div style={{marginTop: '15px'}}>
            <Form.Group>
                <Form.Field
                    control={Input}
                    label='Category 1'
                    title='title1'
                    placeholder='Name a type of stat'
                    value={props.value1}
                    onChange={props.handleCategoryChange1}
                />
            </Form.Group>
            <Form.Group>
                <Form.Field
                    control={Input}
                    label='Category 2'
                    title='title2'
                    placeholder='Name a type of stat'
                    value={props.value2}
                    onChange={props.handleCategoryChange2}
                />
            </Form.Group>
            <Form.Group>
                <Form.Field
                    control={Input}
                    label='Category 3'
                    title='title3'
                    placeholder='Name a type of stat'
                    value={props.value3}
                    onChange={props.handleCategoryChange3}
                />
            </Form.Group>
        </div>
    )


}


export default categoriesInput