import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import '../App.css';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (
    <div className='login-form'>
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errors.summary && <p className="error-message">{errors.summary}</p>}
          </Header>
          <Form size='large'>
            <Segment style={{ background: '#f8f8f9' }} stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Email' name='email' onChange={onChange} />
              <p id='login-select' className='err'>{errors.email}</p>
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' name='password' type='password' onChange={onChange} />
              <p id='login-select' className='err'>{errors.password}</p>


              <Button basic fluid size='large' onClick={onSubmit}>
                Login
             </Button>
            </Segment>
          </Form>
          <Message>
            <p id='error-message'>
              Don't have an account? <Link to={'/signup'}>Create one</Link>
            </p>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )



LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
