import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Theme, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center'
  },
  greenStrip: {
    position: 'absolute',
    height: 222,
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: -1
  },
  paper: {
    width: 500,
    height: 500,
    marginTop: 150,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  loginBtn: {
    marginTop: 20,
  }
}));

const Login: React.FC = (props) => {
  const classes = useStyles();

  const [ mobileNumber, setMobileNumber ] = useState('');

  return (
    <div className={classes.root}>
      <div className={classes.greenStrip}></div>
      <Paper className={classes.paper}>
        <TextField variant="outlined" placeholder="Mobile number" label="Mobile number" value={mobileNumber} onChange={e => setMobileNumber(e.currentTarget.value)} />
        <div className={classes.loginBtn}>
          <Button size="large" variant="contained" color="primary">Login</Button>
        </div>
      </Paper>
    </div>
  )
}

export default Login;