import React, { useState } from 'react'
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



const useStyles = makeStyles((theme) => ({

    // root: {
    //     flexGrow: 1,
    //     background: 'red',
    //     height: '100vh'

    // },
    paper: {
        width: '400px',
        margin: 'auto ',
        display: 'grid',
        height: '20rem',
        background: 'linear-gradient( 45deg, #f1f6fb, #6f636300)'
    },

}));

export default function Login() {
    const classes = useStyles();
    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        };
        fetch('/api/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("----", data)

                // alert(`${name} has successfully logged in.`)
            });

        history.push("/dashboard");
    }
    return (

        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh',background: 'linear-gradient(45deg, #000000eb, transparent)' }}
        >

            <Grid item >
                
            <Paper
                variant="elevation"
                elevation={2}
                className={classes.paper}
            >
                <Grid item>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                </Grid>
                <Grid item>
                    <form >
                        <Grid container direction="column" spacing={2}>
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
                    </form>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                        Forgot Password?
                    </Link>
                </Grid>
            </Paper>
            </Grid>

        </Grid>
    )
}
