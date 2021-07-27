import React, { useContext, useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Grid, Paper, Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/login.png'
import FeedbackContext from '../../context/feedbackContext';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";


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
}))
export default function Feedback() {
    const classes = useStyles();
    const history = useHistory();


    const [feedbacks, setFeedback] = useContext(FeedbackContext);

    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }
    const addFeedback = (e) => {
        e.preventDefault()
        setFeedback(prevFeedback => [...prevFeedback, { text: text }])
        setText('')
    }
    const handleBackbutton = () => {
        history.goBack()
    }
    return (
        <div>

            <AppBar position="static">
                <Toolbar>
                    <Button variant='contained' color="secondary" onClick={handleBackbutton}><ArrowBackIcon /></Button>
                </Toolbar>
            </AppBar>
            <div className={classes.root}>
                <Paper elevation={15} >
                    <Grid item>
                        <Grid style={{ margin: '30px' }}> <img style={{ width: '100px' }} src={Logo} />
                            <Grid >
                                <Typography>Name </Typography>
                            </Grid>

                            <Grid container margin='20px'>

                                <Grid item style={{ margin: '10px' }}>
                                    <input type='text' value={text} onChange={onChange} />
                                    {/* <Input multiline variant='outlined' placeholder='Write your Feedback here..' value= {text} onChange={onChange}/> */}
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='secondary'
                                    onClick={addFeedback}
                                > Submit Feedback</Button>

                            </Grid>

                        </Grid>

                    </Grid>

                </Paper>
            </div>
        </div>
    )
}
