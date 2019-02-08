import React from 'react';
import { Modal, Checkbox, Menu, Select, Dropdown, Form, Segment, Header, Button, Icon, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'


export const size3 = (props) => (
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