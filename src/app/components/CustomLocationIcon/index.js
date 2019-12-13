import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    locationDetails: {
        float: "right",
    },
    locationIcon: {
        float: "right",
        paddingLeft: "0.6rem"
    }
});

export default function CustomLocationIcon() {
    const classes = useStyles();

    return (
        <span>
            {/* For some reason the Icon needs to be declared first before the actual text
            even though the text appears first (as it should) and the icon after when you load the page*/}
            <LocationOnIcon className={classes.locationIcon} fontSize="large"/>
           <Typography className={classes.locationDetails} variant="h6" display="inline" align="center">
            {/*   Location value e.g Nairobi */}
               Nairobi
            </Typography>
        </span>
    );
}