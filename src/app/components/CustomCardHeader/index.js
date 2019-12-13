import React from 'react';
import Typography from '@material-ui/core/Typography';

// This is where we place our Title and Description for the Analysis
export default function CustomCardHeader() {
    return (
        <div>
            <Typography variant="h6" component="h6" gutterBottom>
                {/* Place the title here e.g Top Segment*/}
                Top Segment
            </Typography>
            <Typography variant="subtitle1" component="h5">
                {/* The description e.g Which is my top performing segment? */}
                Which is my top performing segment?
            </Typography>
        </div>
    );
}