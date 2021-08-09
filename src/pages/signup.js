import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button';
import { Grid, Input, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Logo from '../assets/image7.jpg'
import FeedbackContext from '../context/feedbackContext';

const useStyles = makeStyles((theme) => ({

    paper: {
        width: '400px',
        // margin: 'auto ',
        marginRight: '40px',
        // background: '#f1f6fb36'
        background: 'white'
    },

    form: {
        margin: theme.spacing(6),
        width: '26ch',
        margin: '80px',
        textAlign: 'justify',

    },
    Button: {
        margin: '20px',
    },

}));


export default function Signup() {

    const history = useHistory();
    const classes = useStyles();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const {handleUserProfileUpdate } = useContext(FeedbackContext)

    const handleLogin = (e) => {
        // POST request using fetch inside useEffect React hook
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, password })
        // };
        // fetch('/api/signup', requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log("----", data)
        //         e.preventDefault()
        //         setUserInfo(prevUserInfo => [...prevUserInfo, {name: name }])
        //         // alert(`${name} has successfully register.`)
        //     });
        e.preventDefault()
        handleUserProfileUpdate({ name, email })
        console.log("$$$", name)
        history.push("/dashboard")
    }


    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh', backgroundImage: `url(${Logo})` }}
        >
            <Grid >
                <Paper elevation={3} className={classes.paper}>

                    <Grid container direction={"column"} spacing={5}>
                        <Grid item>
                            <Typography style={{ fontWeight: 'bold', color: "cadetblue" }}> Neoscrum Sign Up</Typography>
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
            </Grid>

        </Grid>

    )
}
