import React from 'react';
import { Accordion, List, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'

const style = {

    help: {
        marginTop: '10px'
    },
    item: {
        fontWeight: '400'
    }
}

const InstructionTab = ({

    activeIndex,
    handleInstruction

}) => {
    return (
        <Accordion fluid styled>
            <h3 style={style.help}>Need Help ?</h3>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={handleInstruction}>
                <Icon color='pink' name='dropdown' />
                How to create a new bracket?
        </Accordion.Title>
            <Accordion.Content style={style.item} active={activeIndex === 0}>
                <List as='ol'>
                    <List.Item as='li'>Click on "+" button</List.Item>
                    <List.Item as='li'>Enter Bracket name </List.Item>
                    <List.Item as='li'>Select how many participants</List.Item>
                    <List.Item as='li'>Select if you want to add a scoreboard</List.Item>
                    <List.Item as='li'>Click on Generate</List.Item>
                    <List.Item as='li'>Fill in each team name to each seeded position as you like</List.Item>
                    <List.Item as='li'>Click the Create button after finishing all the steps above</List.Item>

                </List>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 1} index={1} onClick={handleInstruction}>
                <Icon color='pink' name='dropdown' />
                How to play a bracket ?
        </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                <List as='ol'>
                    <List.Item as='li'>Search for a bracket name, and click it!</List.Item>
                    <List.Item as='li'>Click on 'Activate' to select winner for every matchup in that round </List.Item>
                    <List.Item as='li'>If using stats, you must enter each stats for the matchup</List.Item>
                    <List.Item as='li'>Only after all the matchup is activated, then you can click Submit</List.Item>
                    <List.Item as='li'>Repeat steps 2-4 for every round until you completed the bracket</List.Item>
                    <List.Item as='li'>You can checkout each matchup statistics by clicking their box score</List.Item>
                    <List.Item as='li'>You can delete the bracket after completion</List.Item>

                </List>
            </Accordion.Content>

        </Accordion>
    )
}

export default InstructionTab