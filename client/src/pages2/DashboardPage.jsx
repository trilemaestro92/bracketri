import React from 'react';
import Moment from 'moment';
import Auth from '../utils/Auth';
import UserInputForm from '../components2/UserInputForm'
import TestInputForm from '../components2/UserInputForm2'
import BracketModal from '../components2/BracketModal'
import API from '../utils/API';
import { Grid, Segment, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../App.css'

class DashboardPage extends React.Component {
  state = {
    secretData: '',
    user: {},
    formActivate: false,
    inputName: '',
    name: '',
    inputSize: 0,
    size: 0,
    teams: {
      col1: {
        team1:{
          name:'',
          seed: 1
        },
        team2:{
          name:'',
          seed:2,
        },
        team3:{
          name:'',
          seed:3,
        },
        team4:{
          name:'',
          seed:4,
        },
        team5:{
          name:'',
          seed:5,
        },
        team6:{
          name:'',
          seed:6,
        },
        team7:{
          name:'',
          seed:7,
        },
        team8:{
          name:'',
          seed:8,
        },
        team9:{
          name:'',
          seed:9,
        },
        team10:{
          name:'',
          seed:10,
        },
        team11:{
          name:'',
          seed:11,
        },
        team12:{
          name:'',
          seed:12,
        },
        team13:{
          name:'',
          seed:13,
        },
        team14:{
          name:'',
          seed:14,
        },
        team15:{
          name:'',
          seed:15,
        },
        team16:{
          name:'',
          seed:16,
        }
      }
    },
    modals: {},
    rounds: {
      one: ['Championship'],
      two: ['round 1', 'Championship'],
      eight: ['round 1', 'round 2', 'Championship'],
      sixteen: ['round 1', 'round 2', 'round 3', 'Championship']
    }
  }
  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    API.dashboard(Auth.getToken())
      .then(res => {
        this.setState({
          secretData: res.data.message,
          user: res.data.user
        });
        this.getUserBrackets()

      })
  }

  handleNameChange = (e, { value }) => {
    this.setState({ inputName: value });
  }
  handleSizeChange = (e, { value }) => {
    this.setState({ inputSize: value });
  }
  handleTeamChange = (e, { value, col, row }) => {
    const field = e.target.name
    console.log("col", col);
    console.log("row", row);
    const teams = this.state.teams;
    teams[col][field]['name'] = e.target.value;
    console.log(teams)
    this.setState({ teams })

  }
  onGenerate = (event) => {
    event.preventDefault();
    const { inputSize, inputName } = this.state
    this.setState({ size: inputSize, name: inputName, inputSize: 0, inputName: '' })

  }
  onSubmitBracket = () => {
    const { inputName, name, inputSize, size, teams, user } = this.state
    API.createBracket({
      creator: user.email,
      name: name,
      size: size,
      date: Moment().format('M-D-YYYY').toString(),
      brackets: this.state.teams
    })
    this.componentDidMount()
    window.location.href = '/dashboard'
  }
  openModal = () => {
    this.setState({ size: 0, name: '', inputSize: 0, inputName: '' })
  }

  getUserBrackets() {
    API.getPopulatedBracket()
      .then(allData => {
        const data = allData.data
        const dataList = []
        for (let i = 0; i < data.length; i++) {
          if (data[i].email === this.state.user.email) {
            dataList.push(data[i].tournaments)
          }
        }
        this.setState({ modals: dataList[0] })
        console.log(this.state.modals[0].brackets.col1)
      }).catch(err => console.log(err))
  }

  getBracketNames() {
    const data = []
    for (let i = 0; i < this.state.modals.length; i++) {
      data.push(this.state.modals[i])
    }
    return data
  }


  /**
   * Render the component.
   */
  render() {
    const { user, inputName, inputSize, size, name, teams, modals, rounds} = this.state

    const bracketModal = this.getBracketNames().map((input, i) => {
      return (
        <BracketModal key={i}
          rounds={rounds}
          title={input.name}
          size={input.size}
          date={input.date}
          brackets={input.brackets.col1}
        />)
    })
    return (
      <Grid stackable>
        <Grid.Column computer={4} mobile={6} tablet={6}>
          <Segment className='manager-card'>
            <p style={{ display: 'flex', fontWeight: '600', justifyContent: 'left' }}>League Manager</p>
            <Divider />
            <div style={{ gridRow: '3' }}>
              <strong style={{ fontWeight: '400', fontSize: '30px' }}>{user.name}</strong>
              <p style={{ color: 'lightslategray' }}>Brackets created (0)</p>
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column computer={8} mobile={8} tablet={9}>
          <Segment>
            <UserInputForm
              onGenerate={this.onGenerate}
              onSubmitBracket={this.onSubmitBracket}
              openModal={this.openModal}
              handleNameChange={this.handleNameChange}
              handleSizeChange={this.handleSizeChange}
              inputName={inputName}
              inputSize={inputSize}
              handleTeamChange={this.handleTeamChange}
              name={name}
              size={size}
              teams={teams}
            />
            <TestInputForm
              onGenerate={this.onGenerate}
              onSubmitBracket={this.onSubmitBracket}
              openModal={this.openModal}
              handleNameChange={this.handleNameChange}
              handleSizeChange={this.handleSizeChange}
              inputName={inputName}
              inputSize={inputSize}
              handleTeamChange={this.handleTeamChange}
              name={name}
              size={size}
              teams={teams}
            />
          </Segment>
          {bracketModal}
        </Grid.Column>
      </Grid>
    );
  }

}

export default DashboardPage;
