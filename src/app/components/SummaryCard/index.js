import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import CustomLocationIcon from "../CustomLocationIcon";
import CustomCardHeader from "../CustomCardHeader";
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    cardContent: {
        padding: "0.4rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.4rem",
    },
    title: {
        fontSize: 14,
    },
    locationDetails: {
        float: "right",
    },
    locationIcon: {
        float: "right",
        paddingLeft: "0.6rem"
    },
    trendDetailsContainer: {
        marginTop: "0.5rem",
    }
});

export default function SummaryCard() {
    const classes = useStyles();
    const trendType = 1;
    let trendIcon = <ArrowDownward fontSize="small"/>;
    if (trendType) {
        trendIcon = <ArrowUpward fontSize="small"/>;
    }

    return (
        <Grid item xs={12} sm={6}>
            <div>
                <CustomCardHeader/>
                <Card className={classes.card}>
                    <div className={classes.cardContent}>
                        <div>
                            <Typography variant="h4">
                                <Typography variant="overline" display="inline">
                                    {/* Currency */}
                                    KES
                                </Typography>
                                {/* Amount */}
                                678.9B
                                <CustomLocationIcon/>
                            </Typography>
                        </div>
                        <Divider/>
                        <Typography className={classes.trendDetailsContainer} variant="caption" display="block">
                            {/* Percentage Trend Value */}
                            {trendIcon} 1.4% in the last 30 days
                        </Typography>
                    </div>
                </Card>
            </div>
        </Grid>
    );
}