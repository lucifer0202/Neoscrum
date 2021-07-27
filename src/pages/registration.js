import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { Grid, Input, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        width: '50%',
        margin: 'auto ',
        marginTop: '10%',

    },

    form: {
        margin: theme.spacing(6),
        width: '26ch',
        margin: '80px',
        textAlign: 'justify'
    },
    Button: {
        margin: '20px',
    },

}));


export default function Registration() {

    const history = useHistory();
    const classes = useStyles();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    // const [isFilePicked, setIsFilePicked] = useState(false);

    const handleLogin = () => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        };
        fetch('/api/signup', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("----", data)
                // alert(`${name} has successfully register.`)
            });

    }


    return (
        <div className={classes.root} >
            <Paper elevation={3} className={classes.paper}>

                <Grid container direction={"column"} spacing={5}>
                    <Grid item>
                        <Typography>Registeration Here</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            type="name"
                            label="Name"
                            name="name"
                            variant="outlined"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField label="Email" type="email" variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                    <TextField label="Password" type="password" variant="outlined"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </Grid>
                </Grid>


                <Button
                    onClick={handleLogin}
                    className={classes.Button}
                    variant="contained"
                    color="primary"
                    disableElevation>
                    Submit
                </Button>


            </Paper >
        </div>
    )
}
