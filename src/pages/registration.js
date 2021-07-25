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
    const [selectedFile, setSelectedFile] = useState('');
    // const [isFilePicked, setIsFilePicked] = useState(false);

    const handleLogin = () => {
        alert(`${name} has successfully register.` )

        history.push("/login");
    }

    const handleUpload = (event) => {
        setSelectedFile(event.target.files[0]);
        // setIsFilePicked(true);
    };
    const handleSubmission = () => {
        const formData = new FormData();

        // Update the formData object 

        formData.append('File', selectedFile);

        // Details of the uploaded file 
        console.log(selectedFile);

        // Request made to the backend api 
        // Send formData object 
        axios.post("api/uploadfile", formData);
    };

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
                        <TextField label="Email" variant="outlined" />
                    </Grid>
                    <Grid item>
                <Button variant='contained' color='secondary' >Upload Image</Button>
                    <Input disableUnderline placeholder='No File Chosen' value={selectedFile}></Input>

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
