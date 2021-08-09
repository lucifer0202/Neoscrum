import React, { useState, useContext } from 'react'
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    Link,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Background from '../assets/image6.jpg'
import FeedbackContext from '../context/feedbackContext';
import './style.css'



const useStyles = makeStyles((theme) => ({
    paper: {
        width: '400px',
        margin: 'auto ',
        display: 'grid',
        height: '20rem'
    },


}));

export default function Login() {
    const classes = useStyles();
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const { setUserInfo } = useContext(FeedbackContext);


    const handleLogin = (e) => {
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email: email, password: password })
        // };
        e.preventDefault()
        setUserInfo({ email })
        console.log("$$$", email)

        // fetch('/api/login', requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        // console.log("----", data)
        // console.log("###",data.email)
        //     return (
        //         <div>{data.email}</div>
        //     )

        //     alert(`${email} has successfully logged in.`)
        // });

        history.push("/dashboard");
    }
    const handleRegister = () => {
        history.push("/signup")
    }
    return (
        <div style={{ background: '#9c9cf9' }}>

            <div className="split left">
                <div className="centered">
                    <h1>neoscrum</h1>
                    <p><h2> App helps you collect customer feedback</h2></p>
                </div>
            </div>

            <div className="split right">
                <div className="centered">
                    <Paper
                        variant="elevation"
                        elevation={2}
                        className={classes.paper}
                    >
                        <Grid container direction="column" spacing={2} style={{ margin: 'auto' }}>
                            <Grid item>
                                <TextField
                                    type="email"
                                    label="Email"
                                    name="username"
                                    variant="outlined"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    type="password"
                                    label="Password"
                                    name="password"
                                    variant="outlined"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className="button-block"
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                Forgot Password?
                            </Link>
                            <div></div>
                            <br />
                            <div style={{ border: 'solid', color: '#c1c1c1' }}></div>
                            <br />
                            <Button variant='contained' onClick={handleRegister} style={{ background: 'greenyellow' }}>Register</Button>
                        </Grid>
                    </Paper>
                </div>
            </div>
        </div >
    )
}
