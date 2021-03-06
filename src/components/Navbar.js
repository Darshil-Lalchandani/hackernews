import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Link to='/'>
          <Typography className='nav-link' variant="h6" noWrap>
            Hacker News
          </Typography>
          </Link>
          <Link to='/newest'>
          <Typography color="inherit" className='nav-link'>
            New
          </Typography>
          </Link>
          <Link to='/newcomments'>
          <Typography color="inherit" className='nav-link'>
            Comments
          </Typography>
          </Link>
          <Link to='/ask'>
          <Typography color="inherit" className='nav-link'>
            Ask
          </Typography>
          </Link>
          <Link to='/show'>
          <Typography color="inherit" className='nav-link'>
            Show
          </Typography>
          </Link>
          <Link to='/jobs'>
          <Typography color="inherit" className='nav-link'>
            Jobs
          </Typography>
          </Link>
          <Link to='/submit'>
          <Typography color="inherit" className='nav-link'>
            Submit
          </Typography>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search???"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Link to='/submit'>
          <Typography color="inherit" className='login'>
            Login
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
