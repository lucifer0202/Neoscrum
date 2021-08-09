import React, { useState, useContext } from 'react'
import FeedbackContext from '../../context/feedbackContext'
import Dashboard from '.'
import Header from '../header'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

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

}));

export default function FeedbackList() {
    const classes = useStyles();
    const {feedbacks} = useContext(FeedbackContext)

    return (
        <div>
            <Header />
            <Grid container className={classes.root}>
                {feedbacks.map(feedback => (
                    <>
                        <Dashboard
                            text={feedback.text}
                            describe={feedback.describe}
                            key={feedback.id} />
                    </>
                ))}

            </Grid>
        </div>
    )
}
