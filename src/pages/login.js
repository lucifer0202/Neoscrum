import React from 'react'
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



const useStyles = makeStyles((theme) => ({
    
    root: {
        width: '50%',
        margin: 'auto ',
        marginTop: '10%',
        display: 'grid',
        height: '20rem',
        backgroundColor: 'white'
    },

}));

export default function Login() {
    const classes = useStyles();
    const history = useHistory();

    const handleDashboard = () => {
        
        history.push("/dashboard");
    }
    return (
        <Paper
            variant="elevation"
            elevation={2}
            className={classes.root}
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
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                type="password"
                                label="Password"
                                name="password"
                                variant="outlined"

                                required
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className="button-block"
                                onClick={handleDashboard}
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
    )
}
