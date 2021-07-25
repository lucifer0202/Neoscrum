import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import Logo from '../assets/login.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            width: "auto",
            height: 'auto',
        },
    },
}));

export default function GridView({ isImageVisible = true, isDashboardVisible = true }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={15} >
                {
                    !isImageVisible ?
                        <>
                            <Grid item>
                                <Grid style={{ margin: '30px' }}> <img style={{ width: '100px' }} src={Logo} />
                                    <Grid >
                                        <Typography>Name</Typography>
                                    </Grid>

                                    <Grid container margin='20px'>

                                        <Grid item style={{ margin: '10px' }}>
                                            <TextField multiline variant='outlined' placeholder='Write your Feedback here..' />
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Button variant='contained' color='secondary'> Submit Feedback</Button>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </> :
                        <>
                            <Grid item>
                                <Grid item style={{ background: 'cadetblue', margin: '20px', width: 'auto' }}>
                                    <Typography>Header</Typography>
                                </Grid>
                                <Grid container margin='10px'>

                                    <Grid item style={{ background: 'grey', margin: '20px' }}>
                                        <TextField multiline variant='outlined'></TextField>
                                    </Grid>
                                </Grid>
                                <Grid style={{ display: 'flex', justifyContent: 'flex-end', margin: '40px' }}>
                                    <Typography>Send By:</Typography>
                                    <Typography>Posted on: </Typography>
                                </Grid>
                            </Grid>
                        </>

                }
            </Paper>
        </div>
    );
}
