import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Menu, Image, Icon, Dropdown, DropdownMenu, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import {
    PrivateRoute,
    PropsRoute,
    LoggedOutRoute
} from './components/Routes';

import HomePage from './pages/HomePage.jsx';
import Sample from './components/InputForm2.jsx'
import LoginPage from './pages/LoginPage.jsx';
import LogoutFunction from './pages/LogoutFunction.jsx';
import SignUpPage2 from './pages/SignUpPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import Auth from './utils/Auth';
import API from './utils/API';



const NoMatch = ({ location }) => (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h2>No match for <code>{location.pathname}</code></h2>
    </div>
)

const trigger = (e) => {
    return (
        <span>
            <Icon name='user' />Hello, {e.toString()}
        </span>
    )
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            activeItem: '',
            user: ''
        }
    }
    componentDidMount() {
        // check if user is logged in on refresh
        this.getUserInfo()
        this.toggleAuthenticateStatus()
    }

    getUserInfo = () => {
        API.dashboard(Auth.getToken())
            .then(res => {
                this.setState({
                    user: res.data.user.name
                })
            })
    }

    toggleAuthenticateStatus = () => {
        // check authenticated status and toggle state based on that
        this.setState({ authenticated: Auth.isUserAuthenticated() })
    }
    handleSignupClick = () => {
        window.location.href = '/signup'
    }
    handleLoginClick = () => {
        window.location.href = '/login'

    }
    logoClick = () => {
        window.location.href = '/'
    }
    logoutClick = () => {
        window.location.href = '/logout'
    }
    handleClickSample = () => {
        window.location.href = '/sample'
    }
    handleClickMyBracket = () => {
        window.location.href = '/dashboard'
    }

    render() {
        return (
            <Router>
                <div className='grid'>
                    <nav>
                        <Menu stackable fixed='top' inverted style={{ backgroundColor: '#2b2c2d' }}  >
                            <Menu.Item as='a' header onClick={this.logoClick} >
                                <Image size='mini'
                                    src='https://i-h2.pinimg.com/564x/14/aa/fd/14aafd2fc2a60c78e1d98740812d2a91.jpg'
                                    style={{ marginRight: '1.5em' }}
                                />
                                BRACKETRI
                            </Menu.Item>
                            {this.state.authenticated ? (
                                <Menu.Menu position='right'>
                                    <Menu.Item name='dashboard' >
                                        <Button fluid onClick={this.handleClickMyBracket} color='teal'> My Bracketri</Button>
                                    </Menu.Item>
                                    <Menu.Item position='right' style={{ marginRight: '2.5em' }}>
                                        <Dropdown
                                            item
                                            simple
                                            trigger={trigger(this.state.user)}
                                        >
                                            <DropdownMenu>
                                                <Dropdown.Item onClick={this.logoutClick}>Log-out</Dropdown.Item>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </Menu.Item>
                                </Menu.Menu>
                            ) : (
                                    <Menu.Menu position='right'>
                                        <Menu.Item name='signup' active={this.state.activeItem === 'signup'} onClick={this.handleSignupClick}>
                                            Sign Up
                                </Menu.Item>

                                        <Menu.Item name='help' active={this.state.activeItem === 'help'} onClick={this.handleLoginClick}>
                                            Log-in
                                </Menu.Item>
                                    </Menu.Menu>
                                )}

                        </Menu>
                    </nav>
                    <Switch>
                        <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} handleClickSample={this.handleClickSample} />
                        <PropsRoute exact path="/sample" component={Sample} />
                        <PrivateRoute path="/dashboard" component={DashboardPage} />
                        <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={this.toggleAuthenticateStatus} getUserInfo={this.getUserInfo} />
                        <LoggedOutRoute path="/signup" component={SignUpPage2} />
                        <Route path="/logout" component={LogoutFunction} />
                        <Route component={NoMatch} />
                    </Switch>

                    <span style={{ fontWeight: '600', width: '100%', bottom: '0', fontSize: '11px', color: 'gray' }}>
                        &copy; Tri Nguyen. All rights reserved.
                         </span>

                </div>
            </Router>
        );
    }
}


export default App;
