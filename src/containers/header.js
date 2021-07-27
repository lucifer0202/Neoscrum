import React, { useState, useContext } from 'react'
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    InputBase,
    Link,
} from "@material-ui/core";
import { alpha, makeStyles } from '@material-ui/core/styles';
import Logo from '../assets/login.png'
import { useHistory } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import FeedbackContext from '../context/feedbackContext'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            width: "auto",
            height: 'auto',
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '689px',
            height: '496px',

        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            width: '689px',
            height: '496px',
            margin: 'auto'
        },
    },
}));


export default function Header() {
    const history = useHistory();

    const classes = useStyles();

    const [isModalOpened, setIsModalOpened] = useState(false)
    const [feedbacks, setFeedback] = useContext(FeedbackContext);

    const [text, setText] = useState('')
    const [describe, setDescribe] = useState("")

    const toggleModal = () => {
        if (isModalOpened) {
            setIsModalOpened(true)
        }

        setIsModalOpened(!isModalOpened)

    }

    const handleClose = () => {
        setIsModalOpened(!true);
    };
    const onChange = (e) => {
        setText(e.target.value)
    }
    const onChangeText = (e) => {
        setDescribe(e.target.value)
    }
    const addFeedback = (e) => {
        e.preventDefault()
        setFeedback(prevFeedback => [...prevFeedback, { text: text, describe: describe }])
        setText('')
        setDescribe('')
    }
    const handleBackbutton = () => {
        history.goBack()
    }
    const handleClear = () => {
        setText('')
        setDescribe('')
    }
    return (
        <div>
            <AppBar position="static" alignitems="center" style={{ background: 'grey' }}>
                <Toolbar>
                    <Grid style={{ display: 'flex' }} >
                        <div ><img style={{ width: '50px' }} src={Logo} /> </div>
                        <div style={{ padding: '12px' }}> <Typography>SonamBasil@gmail.com</Typography></div>
                    </Grid>
                    <Grid container spacing={4} justify='flex-end' wrap="wrap">
                        <Grid item>
                            <Button variant="contained" color='primary' onClick={toggleModal}>Add Feedback</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color='secondary'>Log Out</Button>
                        </Grid>
                    </Grid>

                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={isModalOpened}
                        style={{ margin: 'auto' }}
                        onClose={handleClose}


                    >
                        <Paper className={classes.paper}
                            style={{ width: '600px', height: '400px', margin: '100px' }}
                        > 
                            <Grid style={{ border: 'solid', borderRadius: '4px', background: 'aliceblue' }}>
                                
                                <h2>Provide us Feedback</h2>
                            </Grid>


                            <Grid container spacing={4} style={{ justifyContent: 'center', marginTop: '20px' }}>
                                <Grid item justify='left' >
                                    <Typography style={{ textAlign: 'left' ,}}>Your Feedback</Typography>
                                    <TextField multiline variant='outlined' placeholder='Summary' 
                                        style={{ width: '400px' }} onChange={onChange} value={text}>

                                    </TextField>
                                </Grid>
                                <Grid item >
                                    <Typography style={{ textAlign: 'left' }}>Further Details</Typography>
                                    <TextField multiline variant='outlined' placeholder='Optionally add more Details'
                                        value={describe} onChange={onChangeText} style={{ width: '400px' }}></TextField>
                                </Grid>

                            </Grid>
                            <Grid item>
                                <Button variant="contained" color='secondary' onClick={handleClear}>Clear</Button>
                                <Button variant='contained' color='primary'
                                    onClick={addFeedback}
                                    style={{ margin: '20px' }}
                                > Submit Feedback</Button>

                            </Grid>
                        </Paper>

                    </Modal>
                </Toolbar>
            </AppBar>
        </div>
    )
}
