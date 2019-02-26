import React from 'react';
import { List, Segment, Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css'

const style = {
    roundHeader: {
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    divContainer: {
        marginBottom: '10px'
    },
    triggerButton: {
        boxShadow: 'none',
        fontSize: '13px',
        fontWeight: 'bold',
        color:'#666666'
    },
    marinBottom: {
        marginBottom: '20px'
    },
    span: {
        fontSize: '26px',
    }
}

const BraketList = ({
 
    onClickBracket,
    size,
    title,
    date,  
    bracketID,

}) => {    
    return (
        <div  style={style.divContainer}>
            <Segment>
                <List selection divided verticalAlign='middle'>
                    <List.Item >
                        <List.Content
                            onClick={onClickBracket}
                            id={bracketID}
                            style={style.triggerButton}>
                            <div style={style.marinBottom} id={bracketID}><Icon color='yellow' id={bracketID} size='large' name='trophy'></Icon></div>
                            <span id={bracketID} style={style.span}>
                                {title}</span> / {size} teams / {date}
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
        </div>
    )
}

export default BraketList
