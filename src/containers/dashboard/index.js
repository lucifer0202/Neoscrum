import React, { useState } from 'react'
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
import GridView from '../../components/gridview'
import { useHistory } from "react-router-dom";
import Logo from '../../assets/login.png'
import { alpha, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function Dashboard() {
    const classes = useStyles();
    const history = useHistory();

    const [isDashboardVisible, setIsDashboardVisible] = useState(false)

    const handleFeedback = () => {
        history.push("/feedback");
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
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color='primary' onClick={handleFeedback}>Add Feedback</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color='secondary'>Log Out</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <GridView isDashboardVisible={isDashboardVisible} />
        </div>
    )
}
