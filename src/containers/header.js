import React, { useState, useContext } from 'react'
import {
    Button,
    Grid,
    AppBar,
    Typography,
    Toolbar,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../assets/login.png'
import { useHistory } from "react-router-dom";
import FeedbackContext from '../context/feedbackContext'
import FeedbackModal from './feedback/feedbackModal';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
  
    '& > *': {
        margin: theme.spacing(3),
        width: "auto",
        height: 'auto',
    },
}));


export default function Header({email}) {
    const history = useHistory();

    const classes = useStyles();

    const [isModalOpened, setIsModalOpened] = useState(false)
    const { setFeedback, userInfo } = useContext(FeedbackContext);

    const [text, setText] = useState('')
    const [describe, setDescribe] = useState("")


    const toggleModal = () => {
        setIsModalOpened(!isModalOpened)
    }
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
    const handleClear = () => {
        setText('')
        setDescribe('')
    }
    const handleImage = () => {
        history.push('/profile')
    }
    const handleLogout = () => {
        history.push('/')
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" alignitems="center" style={{ background: 'grey' }}>
                <Toolbar>
                    <Grid style={{ display: 'flex' }} >
                        <img style={{ width: '60px' }} src={userInfo.image ? userInfo.image : Logo} onClick={handleImage} /> 
                        <Typography style={{margin: '10px'}}>Welcome: {userInfo.email}</Typography>
                    </Grid>
                    <Grid container spacing={4} justify='flex-end' wrap="wrap">
                        <Grid item>
                            <Button variant="contained" color='primary' onClick={toggleModal}>Add Feedback</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color='secondary' onClick={handleLogout}>Log Out</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <FeedbackModal
                text={text}
                describe={describe}
                handleClear={handleClear}
                onChangeText={onChangeText}
                onChange={onChange}
                toggleModal={toggleModal}
                isModalOpened={isModalOpened}
                addFeedback={addFeedback}

            />

        </div>
    )
}
