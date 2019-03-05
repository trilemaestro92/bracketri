/**
 * Date: 3/4/2019
 * @version 1.0 
 * @author Tri Nguyen
 * @description
 *  1.0
 *  - build dashboard page for logged in user.
 *  - build a component modal that allow users to fill out a form for creating a new bracket.
 *  - build a GET Route to retrieve all user's brackets and render on page 
 *  - check authenticated status and toggle state based on that
 */

import React from 'react';
import Moment from 'moment';
import Auth from '../utils/Auth';
import UserInputForm from '../components/UserInputForm'
import BracketList from '../components/BracketList'
import Brackets from '../components/Brackets'
import Instruction from '../components/Instruction'
import API from '../utils/API';
import { Grid, Segment, Divider, Icon, Container, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../App.css'

const style = {
  managerCard: {
    display: 'flex',
    fontWeight: '600',
    justifyContent: 'left'
  },
  divManager: {
    gridRow: '3'
  },
  strong: {
    fontWeight: '400',
    fontSize: '30px'
  },
  span: {
    color: 'gray'
  },
  modal: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  input: {
    width: '250px'
  }
}

class DashboardPage extends React.Component {
  state = {
    secretData: '',
    user: {},
    scoreboard: false,
    inputName: '',
    name: '',
    category: {
      title1: '',
      title2: '',
      title3: '',
    },
    inputSize: 0,
    size: 0,
    bracketsCreated: 0,
    activeIndex: 0,
    newTeams: {

    },
    team1Stats: {
    },
    team2Stats: {
    },
    teams: {
      col1: {
        row1: {
          a: {
            name: '',
            seed: 1,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          },
          b: {
            name: '',
            seed: 16,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          }
        },
        row2: {
          a: {
            name: '',
            seed: 8,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          },
          b: {
            name: '',
            seed: 9,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          }
        },
        row3: {
          a: {
            name: '',
            seed: 4,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          },
          b: {
            name: '',
            seed: 13,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          }
        },
        row4: {
          a: {
            name: '',
            seed: 5,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          },
          b: {
            name: '',
            seed: 12,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          }
        },
        row5: {
          a: {
            name: '',
            seed: 2,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          },
          b: {
            name: '',
            seed: 15,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          }
        },
        row6: {
          a: {
            name: '',
            seed: 7,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          },
          b: {
            name: '',
            seed: 10,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          }
        },
        row7: {
          a: {
            name: '',
            seed: 3,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          },
          b: {
            name: '',
            seed: 14,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          }
        },
        row8: {
          a: {
            name: '',
            seed: 6,
            stats: {
              one: '',
              two: '',
              three: ''
            }
          },
          b: {
            name: '',
            seed: 11,
            stats: {
              one: '',
              two: '',
              three: ''
            }
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
    initialBrackets: [],
    modals: [],
    bracketInfo: {},
    searchInput: '',
    format: {
      one: ['Championship', 'Winner'],
      two: ['Semis', 'Championship', 'Winner'],
      eight: ['Round 1', 'Semis', 'Championship', 'Winner'],
      sixteen: ['Round 1', 'Round 2', 'Semis', 'Championship', 'Winner']
    }
  }
  /**
   * Check if user is authenticated.
   */
  componentDidMount() {
    API.dashboard(Auth.getToken())
      .then(res => {
        this.setState({
          secretData: res.data.message,
          user: res.data.user
        });
        this.getUserBrackets()
        this.loadBracketInfo()
      })

  }
  /**
 * Toggle between instructions 
 * @param {Object} titleProps 
 * @setState {Number} number index of instruction
 */
  handleInstruction = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }
  /**
   * input to search for brackets for search bar  
   * @return {String} of searched input
   */
  handleInputChange = (event) => {
    var searchQuery = event.target.value.toLowerCase();
    var modals = this.state.initialBrackets.filter(function (el) {
      var searchValue = el.name.toLowerCase();

      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.setState({
      modals: modals
    });
  }
  /**
   * input the name of a brackets  
   * @setState {String} set name of inpuName
   */
  handleNameChange = (e, { value }) => {
    this.setState({ inputName: value });
  }
  /**
  * input the size of a brackets  
  * @setState {Number} set size of inpuSize
  */
  handleSizeChange = (e, { value }) => {
    this.setState({ inputSize: value });
  }
  /**
* input the name of each team with size > 8, size > 4, size > 2, size > 1   
* @setState {String} set teams with  name inputs
*/
  handleTeamOver8 = (e, { col, row }) => {
    const field = e.target.name
    const teams = this.state.teams;
    teams[col][row][field]['name'] = e.target.value;
    this.setState({ teams })
  }
  handleTeamOver4 = (e, { col, row }) => {
    const field = e.target.name
    const teams = this.state.teams2;
    teams[col][row][field]['name'] = e.target.value;
    this.setState({ teams })
  }
  handleTeamOver2 = (e, { col, row }) => {
    const field = e.target.name
    const teams = this.state.teams3;
    teams[col][row][field]['name'] = e.target.value;
    this.setState({ teams })
  }
  handleTeamOver1 = (e, { col, row }) => {
    const field = e.target.name
    const teams = this.state.teams4;
    teams[col][row][field]['name'] = e.target.value;
    this.setState({ teams })
  }
  /**
* input the name for 3 of each statistic criteria   
* @setState {String} set category 
*/
  handleCategoryChange = (e, { title }) => {
    const category = this.state.category;
    category[title] = e.target.value;
    this.setState({ category })
  }
  /**
* selecting the winner of a matchup  
* @setState {String} set newTeams with the winner seed and name 
*/
  handleChangeMatchup = (e, { value, options }) => {
    let seedOption
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === value) {
        seedOption = options[i].seed
      }
    }
    let team = {};
    team['name'] = value
    team['seed'] = seedOption
    this.setState({ newTeams: team })
  }
  /**
* input the 3 number input for team A criteria  
* @setState {Number} set team1Stats with team A 3 criteria  
*/
  handleInputChange1 = (e, { num }) => {
    let team1Stats = this.state.team1Stats;
    const field = e.target.value
    team1Stats[num] = field
    this.setState({ team1Stats })
  }
  /**
* input the 3 number input for team B criteria  
* @setState {Number} set team1Stats with team B 3 criteria  
*/
  handleInputChange2 = (e, { num }) => {
    let team2Stats = this.state.team2Stats;
    const field = e.target.value
    team2Stats[num] = field
    this.setState({ team2Stats })
  }
  /**
* toggle if user wants to add a scoreboard with criteria 
* @setState {Boolean} toggle scoreboard to true or false  
*/
  handleCheckboxToggle = (e) => {
    this.setState({ scoreboard: !this.state.scoreboard })
  }
  /**
* render the amount of inputs the brackets team/participents choses 
* @setState {Number} size of team in the brackets, set team name to '' and team size to 0   
*/
  onGenerate = (event) => {
    event.preventDefault();
    const { inputSize, inputName } = this.state
    this.setState({ size: inputSize, name: inputName, inputSize: 0, inputName: '' })
  }
  /**
* post/create the bracket information into database 
* @Post {Number, String, Boolean} size of team, team name, date, the team brackets, scoreboard  
*/
  onSubmitBracket = () => {
    const { name, size, user } = this.state
    API.createBracket({
      creator: user.email,
      name: name,
      size: size,
      date: Moment().format('M-D-YYYY').toString(),
      round: 0,
      brackets: this.state.teams,
      category: this.state.category,
      scoreboard: this.state.scoreboard
    })
    window.location.href = '/dashboard'
  }
  /**
* post/create the complete information of a matchup 
* @Post {Number, String, Boolean} winner, team A stats, team B stats 
*/
  onSubmitChangeMatchup = (e, { team1category, team2category, bracket }) => {
    const newChange = {
      column: this.state.newTeams,
      bracket: bracket,
      team1stats: this.state.team1Stats,
      team2stats: this.state.team2Stats,
      team1category: team1category,
      team2category: team2category
    }
    const queryURL = window.location.pathname
    API.editBracket(
      {
        userData: e.target.id,
        data: newChange
      }
    ).catch(function (e) { console.log(e) })
    this.getUserBrackets();
    window.location.pathname = queryURL
  }
  /**
* post/create the complete information for every matchup for round 1, round 2, round 3, round 4
* @Post {Number, String, Boolean} winner, team A stats, team B stats 
*/
  onSubmitChangeRound1 = (e) => {
    const newChange = {
      round: 1,
    }
    API.editRound(
      {
        userData: e.target.id,
        data: newChange,
      },
    ).catch(function (e) { console.log(e) })
    this.getUserBrackets();
  }
  onSubmitChangeRound2 = (e) => {
    const newChange = {
      round: 2,
    }
    API.editRound(
      {
        userData: e.target.id,
        data: newChange
      },
    ).catch(function (e) { console.log(e) })
    this.getUserBrackets();
  }
  onSubmitChangeRound3 = (e) => {
    const newChange = {
      round: 3,
    }
    API.editRound(
      {
        userData: e.target.id,
        data: newChange
      },
    ).catch(function (e) { console.log(e) })
    this.getUserBrackets();
  }
  onSubmitChangeRound4 = (e) => {
    const newChange = {
      round: 4,
    }
    API.editRound(
      {
        userData: e.target.id,
        data: newChange
      },
    ).catch(function (e) { console.log(e) })
    this.getUserBrackets();
  }
  /**
* delete the selected bracket
* @Delete {Object} the bracket with the target id 
*/
  handleDeleteBracket = (event) => {
    API.deleteBracket(
      { userData: event.target.id }
    )
    window.location.href = '/dashboard'
  }
  /**
* open the modal to the input form for creating a bracket
* @setState {Object} size, name, category, and scoreboard to null
*/
  openModal = () => {
    this.setState({
      size: 0, name: '', inputSize: 0, inputName: '',
      category: {
        title1: '',
        title2: '',
        title3: ''
      },
      scoreboard: false
    })
  }
  /**
* open the modal to the input form for a matchup 
* @setState {Object} team1Stats, team2Stats to null
*/
  openActivateModal = () => {
    this.setState({
      team1Stats: {}, team2Stats: {}
    })
  }
  /**
* GET every brackets for authenticated user 
* @setState {Object} initialBrackets with dataList, bracketsCreated with dataList.length 
* @setState {Object} modals with initialBrackets
*/
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
        this.setState({
          initialBrackets: dataList[0],
          bracketsCreated: dataList[0].length
        })
        this.setState({ modals: this.state.initialBrackets })
      }).catch(err => console.log(err))
  }
  /**
* set the query URL string to render each bracket
* @return {Object} every brackets data that matches the id 
*/
  getBracketID() {
    const data = []
    const queryURL = window.location.pathname.substring(11)
    for (let i = 0; i < this.state.modals.length; i++) {
      if (this.state.modals[i]._id === queryURL)
        data.push(this.state.modals[i])
    }
    return data
  }
  /**
* set the query URL string to render out one bracket onClick 
* @return {Object} the specific brackets data that matches the id 
*/
  loadBracketInfo = () => {
    const queryURL = window.location.pathname.substring(11)
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
      })
      .then(data => {

        for (let i = 0; i < data.length; i++) {
          if
            (data[i]._id === queryURL && data[i].size <= 15 && data[i].size >= 9
          ) {
            this.setState({ secondColumn: data[i].brackets.col1 })
          }
          if (data[i]._id === queryURL && data[i].size <= 7 && data[i].size >= 5) {
            this.setState({ thirdColumn: data[i].brackets.col1 })
          }
          if (data[i]._id === queryURL && data[i].size === 3 && data[i].round === 0) {
            this.setState({ fourthColumn: data[i].brackets.col1 })
          }
        }

      })

  }
  /**
* set the URL pathname with bracket id and change window location to that URL  
*/
  onClickBracket = (e) => {
    const eventType = e.target.id
    window.location.pathname = `dashboard/${eventType}`
  }
  render() {
    const { submissionCompleted, bracketsCreated, user, inputName, inputSize, size, name, teams, teams2, teams3, teams4, format, category, scoreboard, modals, activeIndex } = this.state

    const bracketModal = modals.map((input, i) => {
      return (
        <BracketList
          key={i}
          title={input.name}
          size={input.size}
          date={input.date}
          bracketID={input._id}
          onClickBracket={this.onClickBracket}
        />)
    })
    const brackets = this.getBracketID().map((input, i) => {
      return (
        <Brackets
          key={i}
          format={format}
          round={input.round}
          title={input.name}
          size={input.size}
          date={input.date}
          scoreboard={input.scoreboard}
          category={input.category}
          brackets={input.brackets.col1}
          brackets2={input.brackets.col2}
          brackets3={input.brackets.col3}
          brackets4={input.brackets.col4}
          brackets5={input.brackets.col5}
          bracketID={input._id}
          submissionCompleted={submissionCompleted}
          handleDeleteBracket={this.handleDeleteBracket}
          onSubmitChangeMatchup={this.onSubmitChangeMatchup}
          handleChangeMatchup={this.handleChangeMatchup}
          handleInputChange1={this.handleInputChange1}
          handleInputChange2={this.handleInputChange2}
          loadBracketInfo={this.loadBracketInfo}
          onSubmitChangeRound1={this.onSubmitChangeRound1}
          onSubmitChangeRound2={this.onSubmitChangeRound2}
          onSubmitChangeRound3={this.onSubmitChangeRound3}
          onSubmitChangeRound4={this.onSubmitChangeRound4}
          openActivateModal={this.openActivateModal}
        />)
    })
    return (
      <Grid relaxed stackable>
        <style>{`
      body > div,
      body > div  {
        height: 100%;
      }
    `}</style>
        <Grid.Column computer={4} mobile={6} tablet={6}>
          {(window.location.pathname === '/dashboard' ?
            <Segment className='manager-card'>
              <p style={style.managerCard}>League Manager</p>
              <Divider />
              <div style={style.divManager}>
                <strong style={style.strong}>{user.name}</strong>
                <p style={style.span}>Brackets created ({bracketsCreated})</p>
              </div>
            </Segment>
            :
            <Container textAlign='left'>
              <a href='/dashboard'>
                <Icon size='large' color='grey' name='arrow alternate circle left'></Icon>
                <span style={style.span}>Back to Dashboard</span>
              </a>
            </Container>
          )}
        </Grid.Column>
        {(window.location.pathname === '/dashboard' ?
          <Grid.Column computer={8} mobile={8} tablet={9}>
            <Segment style={style.modal}>
              <Input onChange={this.handleInputChange} icon={<Icon color='pink' name='search' circular link />} placeholder='Search...' />
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
                handleCategoryChange={this.handleCategoryChange}
                name={name}
                size={size}
                teams={teams}
                teams2={teams2}
                teams3={teams3}
                teams4={teams4}
                category={category}
                scoreboard={scoreboard}
                handleCheckboxToggle={this.handleCheckboxToggle}
              />
            </Segment>
            {bracketModal}
          </Grid.Column>
          :
          <Grid.Row >
            <Grid.Column>
              {brackets}
            </Grid.Column>
          </Grid.Row>
        )}
        {(window.location.pathname === '/dashboard' ?
          <Grid.Column computer={4} mobile={3} tablet={9}>
            <Segment style={style.modal}>
              <Instruction
                handleInstruction={this.handleInstruction}
                activeIndex={activeIndex}
              />
            </Segment>
          </Grid.Column>
          : null
        )}
      </Grid>
    );
  }
}

export default DashboardPage;
