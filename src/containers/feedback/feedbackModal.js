import MainModal from '../../components/mainModal'
import React from 'react'
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

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
    '& > *': {
        margin: theme.spacing(3),
        width: "auto",
        height: 'auto',
    },
}));
export default function FeedbackModal({ toggleModal, isModalOpened, addFeedback, onChange, onChangeText, handleClear, text, describe }) {
    const classes = useStyles();

    return (
        <MainModal
            open={isModalOpened}
            toggleModal={toggleModal}
        >
            <Paper
                className={classes.paper}
                style={{
                    height: '400px', width: '529px',
                    marginTop: '100px'
                }}
            >
                <Grid style={{ border: 'solid', borderRadius: '4px', background: 'aliceblue', borderColor: 'darkgrey' }}>
                    <h2 style={{ color: 'darkgrey' }}>Provide us Feedback</h2>
                </Grid>

                <Grid container spacing={4} style={{ justifyContent: 'center', marginTop: '20px' }}>
                    <Grid item justify='left' >
                        <Typography style={{ textAlign: 'left', }}>Your Feedback</Typography>
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
        </MainModal>
    )
}
