import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CustomAvatarIcon from "../CustomAvatarIcon";
import {ArrowUpward} from '@material-ui/icons';
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles(theme => ({
    trendIcon: {
        marginTop: '0.7rem',
    },
}));

export default function SummaryListItem(props) {

    const classes = useStyles();
    return (
        <div>
            {props.noDivider ? null : (<Divider/>)}
            <ListItem
                button
            >
                <CustomAvatarIcon/>
                <ListItemText primary="Promoter Customers"/>
                <ListItemText>
                    67.0
                </ListItemText>
                <ListItemText>
                    <ArrowUpward className={classes.trendIcon} fontSize="small"/>
                    1.4%
                </ListItemText>
            </ListItem>
        </div>
    );
}