import React, { useState, useContext } from 'react'
import FeedbackContext from './feedbackContext'
import Dashboard from '../containers/dashboard'
import Header from '../containers/header'
import { Grid } from '@material-ui/core'

export default function FeedbackList() {
    const [feedbacks, setFeedback] = useContext(FeedbackContext)

    return (
        <div>
            <Header />
            <Grid style={{display: 'flex'}}>
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
