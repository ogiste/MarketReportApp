import React from 'react';
import List from '@material-ui/core/List';
import Grid from "@material-ui/core/Grid";
import CustomCardHeader from "../CustomCardHeader";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import SummaryListItem from "../SummaryListItem";


const useStyles = makeStyles(theme => ({
    trendIcon: {
        marginTop: '0.7rem',
    },
}));

export default function SummaryList() {

    const classes = useStyles();
    return (
        <Grid item xs={12} md={6}>
            <CustomCardHeader/>
            <Card>
                <List>
                    <SummaryListItem noDivider/>
                    <SummaryListItem/>
                    <SummaryListItem/>
                    <SummaryListItem/>
                    <SummaryListItem/>
                    <SummaryListItem/>
                    <SummaryListItem/>
                    <SummaryListItem/>
                    <SummaryListItem/>
                    <SummaryListItem/>
                </List>
            </Card>
        </Grid>
    );
}