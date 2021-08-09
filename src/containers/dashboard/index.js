import React, { useState, useContext } from 'react'
import {
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { alpha, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import FeedbackContext from '../../context/feedbackContext';
import moment from 'moment';

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
  container: {
    
  }

}));


export default function Dashboard({ text, describe }) {
  const classes = useStyles();
  const history = useHistory();
  

  const {feedback, setFeedback} = useContext(FeedbackContext)
  const time = new Date()

  return (
    <>
      <div className={classes.root}>

        <Paper elevation={15} >
          <Grid item style={{ width: '300px' }} >
            <Grid item style={{ background: 'cadetblue', margin: '10px', width: 'auto', height: '30px', display: 'flex', justifyContent: 'space-between'}}>
              <Typography >Feedbacks</Typography>
              <Typography>{moment(time).local().startOf('seconds').fromNow()}</Typography>
            </Grid>
            <Grid container margin='10px'>

              <Grid item style={{ background: 'antiquewhite', width: 'inherit', margin: '10px', height: '50px' ,display: 'flex', justifyContent: 'center' }}>
                <Typography style={{alignSelf: 'center'}}> {text}</Typography>
              </Grid>
              <Grid item style={{ background: 'white', width: 'inherit', margin: '10px', height: '100px', fontStyle: 'italic',textAlign: 'left' }}>
                <Typography style={{ fontStyle: 'italic',textAlign: 'left'}}> Description: {describe}</Typography>
              </Grid>
            </Grid>
            <Grid style={{ display: 'block', justifyContent: 'flex-end', margin: '20px' }}>
              <Grid container style={{ display: 'block', justifyContent: 'flex-end', margin: '20px' }}>
                <Grid item>
                  <Typography>Send By:</Typography>
                </Grid>
                <Grid item>
                  <Typography>Posted on: {time.toDateString()}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Paper>
      </div>
    </>
  )
}
