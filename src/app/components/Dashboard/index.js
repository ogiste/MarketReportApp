import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SummaryCard from "../SummaryCard";
import SummaryList from "../SummaryList";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

// Container that setups the Grid for the Dashboard page
export default function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* We need the container for the gutters to the left and right */}
            {/* We will also need a container for passing in all the required Summary data as an array (each element
            is a card with summary e.g Top Segments
            */}
            <Grid container justify="space-between" spacing={3}>
                <SummaryCard/>
                <SummaryCard/>
                <SummaryCard/>
            </Grid>
            {/*Container for the Table data*/}
            <Grid container justify="space-between" spacing={3}>
                <SummaryList/>
                <SummaryList/>
            </Grid>
        </div>
    );
}