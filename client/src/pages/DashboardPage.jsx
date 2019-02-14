import React from 'react';
import Moment from 'moment';
import Auth from '../utils/Auth';
import UserInputForm from '../components/UserInputForm'
import BracketModal2 from '../components/BracketModal'
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
    bracketsCreated: 0,
    submissionCompleted: false,
    teams: {
      col1: {
        row1: {
          a: {
            name: '',
            seed: 1
          },
          b: {
            name: '',
            seed: 16
          }
        },
        row2: {
          a: {
            name: '',
            seed: 8
          },
          b: {
            name: '',
            seed: 9
          }
        },
        row3: {
          a: {
            name: '',
            seed: 4
          },
          b: {
            name: '',
            seed: 13
          }
        },
        row4: {
          a: {
            name: '',
            seed: 5
          },
          b: {
            name: '',
            seed: 12
          }
        },
        row5: {
          a: {
            name: '',
            seed: 2
          },
          b: {
            name: '',
            seed: 15
          }
        },
        row6: {
          a: {
            name: '',
            seed: 7
          },
          b: {
            name: '',
            seed: 10
          }
        },
        row7: {
          a: {
            name: '',
            seed: 3
          },
          b: {
            name: '',
            seed: 14
          }
        },
        row8: {
          a: {
            name: '',
            seed: 6
          },
          b: {
            name: '',
            seed: 11
          }
        }
      }
    },
    teams2: {
      col1: {
        row1: {
          a: {
            name: '',
            seed: 1
          },
          b: {
            name: '',
            seed: 8
          }
        },
        row2: {
          a: {
            name: '',
            seed: 4
          },
          b: {
            name: '',
            seed: 5
          }
        },
        row3: {
          a: {
            name: '',
            seed: 2
          },
          b: {
            name: '',
            seed: 7
          }
        },
        row4: {
          a: {
            name: '',
            seed: 3
          },
          b: {
            name: '',
            seed: 6
          }
        }
      }
    },
    teams3: {
      col1: {
        row1: {
          a: {
            name: '',
            seed: 1
          },
          b: {
            name: '',
            seed: 4
          }
        },
        row2: {
          a: {
            name: '',
            seed: 2
          },
          b: {
            name: '',
            seed: 3
          }
        }
      }
    },
    teams4: {
      col1: {
        row1: {
          a: {
            name: '',
            seed: 1
          },
          b: {
            name: '',
            seed: 2
          }
        }
      }
    },
    secondColumn: {
      row1: {
        a: {
          name: '',
          seed: 0
        },
        b: {
          name: '',
          seed: 0
        }
      },
      row2: {
        a: {
          name: '',
          seed: 0
        },
        b: {
          name: '',
          seed: 0
        }
      },
      row3: {
        a: {
          name: '',
          seed: 0
        },
        b: {
          name: '',
          seed: 0
        }
      },
      row4: {
        a: {
          name: '',
          seed: 0
        },
        b: {
          name: '',
          seed: 0
        }
      },
      row5: {
        a: {
          name: '',
          seed: 0
        },
        b: {
          name: '',
          seed: 0
        }
      },
      row6: {
        a: {
          name: '',
          seed: 0
        },
        b: {
          name: '',
          seed: 0
        }
      },
      row7: {
        a: {
          name: '',
          seed: 3
        },
        b: {
          name: '',
          seed: 0
        }
      },
      row8: {
        a: {
          name: '',
          seed: 0
        },
        b: {
          name: '',
          seed: 0
        }
      }
    },
    thirdColumn: {
      row1: {
        a: {
          name: '',
          seed: 0
        },
        b: {
          name: '',
          seed: 0
        }
      },
      row2: {
        a: {
          name: '',
          seed: 0
        },
        b: {
          name: '',
          seed: 0
        }
      }
    },
    fourthColumn: {
      row1: {
        a: {
          name: '',
          seed: 0
        },
        b: {
          name: '',
          seed: 0
        }
      }
    },
    fifthColumn: {
      row1: {
        a: {
          name: '',
          seed: 0
        }
      }
    },
    modals: {},
    bracketInfo: {},
    format: {
      one: ['Championship', 'Winner'],
      two: ['Semis', 'Championship', 'Winner'],
      eight: ['Round 1', 'Semis', 'Championship', 'Winner'],
      sixteen: ['Round 1', 'Round 2', 'Semis', 'Championship', 'Winner']
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
  handleTeamOver8 = (e, { value, col, row }) => {
    const field = e.target.name
    const teams = this.state.teams;
    teams[col][row][field]['name'] = e.target.value;
    this.setState({ teams })
  }
  handleTeamOver4 = (e, { value, col, row }) => {
    const field = e.target.name
    const teams = this.state.teams2;
    teams[col][row][field]['name'] = e.target.value;
    this.setState({ teams })
  }
  handleTeamOver2 = (e, { value, col, row }) => {
    const field = e.target.name
    const teams = this.state.teams3;
    teams[col][row][field]['name'] = e.target.value;
    this.setState({ teams })
  }
  handleTeamOver1 = (e, { value, col, row }) => {
    const field = e.target.name
    const teams = this.state.teams4;
    teams[col][row][field]['name'] = e.target.value;
    this.setState({ teams })
  }
  handleChangeMatchup = (e, { value, rownum, letter, size, options }) => {
    let seedOption
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === value) {
        seedOption = options[i].seed
      }
    }
    if (size >= 9) {
      let team = Object.assign({}, this.state.secondColumn);
      team[rownum][letter].name = value;
      team[rownum][letter].seed = seedOption;
    }
    if (size >= 5 && size <= 8) {
      let team = Object.assign({}, this.state.thirdColumn);
      team[rownum][letter].name = value;
      team[rownum][letter].seed = seedOption;
    }
    if (size >= 3 && size <= 4) {
      let team = Object.assign({}, this.state.fourthColumn);
      team[rownum][letter].name = value;
      team[rownum][letter].seed = seedOption;
      // if (this.state.fourthColumn.row1.b.name !== '' && this.state.fourthColumn.row1.a.name !== '') {
      //   this.setState({ submissionCompleted: true })
      // }
    }
    if (size === 2) {
      let team = Object.assign({}, this.state.fifthColumn);
      team[rownum][letter].name = value;
      team[rownum][letter].seed = seedOption;
    }
  }
  handleChangeMatchupRound2 = (e, { value, rownum, letter, size, options }) => {
    let seedOption
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === value) {
        seedOption = options[i].seed
      }
    }
    if (size >= 9) {
      let team = Object.assign({}, this.state.thirdColumn);
      team[rownum][letter].name = value;
      team[rownum][letter].seed = seedOption;
    }
    if (size >= 5 && size <= 8) {
      let team = Object.assign({}, this.state.fourthColumn);
      team[rownum][letter].name = value;
      team[rownum][letter].seed = seedOption;
    }
    if (size >= 3 && size <= 4) {
      let team = Object.assign({}, this.state.fifthColumn);
      team[rownum][letter].name = value;
      team[rownum][letter].seed = seedOption;
      // if(this.state.fourthColumn.row1.b.name !== '' && this.state.fourthColumn.row1.a.name !== '' ){
      //   this.setState({submissionCompleted: true})
      // }
    }
  }
  handleChangeMatchupRound3 = (e, { value, rownum, letter, size, options }) => {
    let seedOption
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === value) {
        seedOption = options[i].seed
      }
    }
    if (size >= 9) {
      let team = Object.assign({}, this.state.fourthColumn);
      team[rownum][letter].name = value;
      team[rownum][letter].seed = seedOption;
    }
    if (size >= 5 && size <= 8) {
      let team = Object.assign({}, this.state.fifthColumn);
      team[rownum][letter].name = value;
      team[rownum][letter].seed = seedOption;
    }
  }
  handleChangeMatchupRound4 = (e, { value, rownum, letter, size, options }) => {
    let seedOption
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === value) {
        seedOption = options[i].seed
      }
    }
    if (size >= 9) {
      let team = Object.assign({}, this.state.fifthColumn);
      team[rownum][letter].name = value;
      team[rownum][letter].seed = seedOption;
    }
  }
  onGenerate = (event) => {
    event.preventDefault();
    const { inputSize, inputName } = this.state
    this.setState({ size: inputSize, name: inputName, inputSize: 0, inputName: '' })
  }
  onSubmitBracket = () => {
    const { name, size, user } = this.state
    API.createBracket({
      creator: user.email,
      name: name,
      size: size,
      date: Moment().format('M-D-YYYY').toString(),
      round: 0,
      brackets: this.state.teams
    })
    window.location.href = '/dashboard'
  }
  onSubmitChangeRound1 = (e, { teamsize }) => {
    const newChange = {
      round: 1
    }
    API.editRound(
      {
        userData: e.target.id,
        data: newChange
      },
    ).catch(function (e) { console.log(e) })
    if (teamsize >= 9) {
      API.editBracket(
        {
          userData: e.target.id,
          data: this.state.secondColumn
        }
      ).catch(function (e) { console.log(e) })
    } else if (teamsize <= 8 && teamsize >= 5) {
      API.editBracket(
        {
          userData: e.target.id,
          data: this.state.thirdColumn
        }
      ).catch(function (e) { console.log(e) })
    } else if (teamsize <= 4 && teamsize >= 3) {
      API.editBracket(
        {
          userData: e.target.id,
          data: this.state.fourthColumn
        }
      ).catch(function (e) { console.log(e) })
    } else if (teamsize === 2) {
      API.editBracket(
        {
          userData: e.target.id,
          data: this.state.fifthColumn
        }
      ).catch(function (e) { console.log(e) })
    }
    this.getUserBrackets();
  }
  onSubmitChangeRound2 = (e, { teamsize }) => {
    const newChange = {
      round: 2,
    }
    API.editRound(
      {
        userData: e.target.id,
        data: newChange
      },
    ).catch(function (e) { console.log(e) })
    if (teamsize >= 9) {
      API.editBracket2(
        {
          userData: e.target.id,
          data: this.state.thirdColumn
        }
      ).catch(function (e) { console.log(e) })
    } else if (teamsize <= 8 && teamsize >= 5) {
      API.editBracket2(
        {
          userData: e.target.id,
          data: this.state.fourthColumn
        }
      ).catch(function (e) { console.log(e) })
    } else if (teamsize <= 4 && teamsize >= 3) {
      API.editBracket2(
        {
          userData: e.target.id,
          data: this.state.fifthColumn
        }
      ).catch(function (e) { console.log(e) })
    }
    this.getUserBrackets();
  }
  onSubmitChangeRound3 = (e, { teamsize }) => {
    const newChange = {
      round: 3,
    }
    API.editRound(
      {
        userData: e.target.id,
        data: newChange
      },
    ).catch(function (e) { console.log(e) })
    if (teamsize >= 9) {
      API.editBracket3(
        {
          userData: e.target.id,
          data: this.state.fourthColumn
        }
      ).catch(function (e) { console.log(e) })
    } else if (teamsize <= 8 && teamsize >= 5) {
      API.editBracket3(
        {
          userData: e.target.id,
          data: this.state.fifthColumn
        }
      ).catch(function (e) { console.log(e) })
    }
    this.getUserBrackets();
  }
  onSubmitChangeRound4 = (e, { teamsize }) => {
    const newChange = {
      round: 4,
    }
    API.editRound(
      {
        userData: e.target.id,
        data: newChange
      },
    ).catch(function (e) { console.log(e) })
    if (teamsize >= 9) {
      API.editBracket4(
        {
          userData: e.target.id,
          data: this.state.fifthColumn
        }
      ).catch(function (e) { console.log(e) })
    }
    this.getUserBrackets();
  }
  handleDeleteBracket = (event) => {
    API.deleteBracket(
      { userData: event.target.id }
    )
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
        this.setState({ modals: dataList[0], bracketsCreated: dataList[0].length })
      }).catch(err => console.log(err))
  }
  getBracketNames() {
    const data = []
    for (let i = 0; i < this.state.modals.length; i++) {
      data.push(this.state.modals[i])
    }
    return data
  }
  loadBracketInfo = (e) => {
    const eventType = e.target.id
    API.getPopulatedBracket()
      .then(allData => {
        const data = allData.data
        const dataList = []
        for (let i = 0; i < data.length; i++) {
          if (data[i].email === this.state.user.email) {
            dataList.push(data[i].tournaments)
          }
        }
        return dataList[0]
      }).then(data => {
        for (let i = 0; i < data.length; i++) {
          if
            (data[i]._id === eventType && data[i].size <= 15 && data[i].size >= 9
          ) {
            this.setState({ secondColumn: data[i].brackets.col1 })
          }
          if (data[i]._id === eventType && data[i].size <= 7 && data[i].size >= 5) {
            this.setState({ thirdColumn: data[i].brackets.col1 })
          }
          if (data[i]._id === eventType && data[i].size === 3 && data[i].round === 0) {
            this.setState({ fourthColumn: data[i].brackets.col1 })
          }
        }
      })

  }

  render() {
    const { submissionCompleted, bracketsCreated, user, inputName, inputSize, size, name, teams, teams2, teams3, teams4, format } = this.state

    const bracketModal = this.getBracketNames().map((input, i) => {
      return (
        <BracketModal2
          key={i}
          format={format}
          round={input.round}
          title={input.name}
          size={input.size}
          date={input.date}
          brackets={input.brackets.col1}
          brackets2={input.brackets.col2}
          brackets3={input.brackets.col3}
          brackets4={input.brackets.col4}
          brackets5={input.brackets.col5}
          bracketID={input._id}
          submissionCompleted={submissionCompleted}
          handleDeleteBracket={this.handleDeleteBracket}
          handleChangeMatchup={this.handleChangeMatchup}
          handleChangeMatchupRound2={this.handleChangeMatchupRound2}
          handleChangeMatchupRound3={this.handleChangeMatchupRound3}
          handleChangeMatchupRound4={this.handleChangeMatchupRound4}
          loadBracketInfo={this.loadBracketInfo}
          onSubmitChangeRound1={this.onSubmitChangeRound1}
          onSubmitChangeRound2={this.onSubmitChangeRound2}
          onSubmitChangeRound3={this.onSubmitChangeRound3}
          onSubmitChangeRound4={this.onSubmitChangeRound4}
        />)
    })
    return (
      <Grid stackable>
        <style>{`
      body > div,
      body > div  {
        height: 100%;
      }
    `}</style>
        <Grid.Column computer={4} mobile={6} tablet={6}>
          <Segment className='manager-card'>
            <p style={{ display: 'flex', fontWeight: '600', justifyContent: 'left' }}>League Manager</p>
            <Divider />
            <div style={{ gridRow: '3' }}>
              <strong style={{ fontWeight: '400', fontSize: '30px' }}>{user.name}</strong>
              <p style={{ color: 'lightslategray' }}>Brackets created ({bracketsCreated})</p>
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
              handleTeamOver8={this.handleTeamOver8}
              handleTeamOver4={this.handleTeamOver4}
              handleTeamOver2={this.handleTeamOver2}
              handleTeamOver1={this.handleTeamOver1}
              name={name}
              size={size}
              teams={teams}
              teams2={teams2}
              teams3={teams3}
              teams4={teams4}
            />
          </Segment>
          {bracketModal}
        </Grid.Column>
      </Grid>
    );
  }

}

export default DashboardPage;
