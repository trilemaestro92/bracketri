import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
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
          </Header>
          <Form size='large'>
            <Segment style={{background:'#f8f8f9'}} stacked>
              <Form.Input fluid icon='user' iconPosition='left'  placeholder='Username' name="name" onChange={onChange} />
              <p id='select' className='err'>{errors.name}</p>
              <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' name="email" onChange={onChange}   />
              <p id='select2' className='err'>{errors.email}</p>
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name="password"  onChange={onChange}  />
              <p id='select3' className='err'>{errors.password}</p>
              {/* <Form.Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password' type='password' onChange={this.pass2Change} /> */}

              <Button basic  fluid size='large' onClick={onSubmit}>
                Sign Up
</Button>
            </Segment>
          </Form>
          <Message>
            <p id='error-message'>
              Already have an Account?  <Link to="/login">Log in</Link>
            </p>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )



SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;