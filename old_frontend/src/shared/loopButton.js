import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

/**
 * Class Usage:
 * Props required: redirect => the function that this button executes
 * text => what the button text is
 * 
 * note that if you return something from your redirect funtion
 * 
 * ex: return false, then the the button will be reset and will not go into
 * the green state
 */

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
    
  },
  buttonNormal: {
    color: 'white'
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function CircularIntegration(props) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  
  //console.log('props in loop button:', props)

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        if(props.redirect !== 'none')
        {
          let redirectSuccess = props.redirect()
          //console.log('redirect success', redirectSuccess)
          if(typeof redirectSuccess !== 'undefined')
          {
            //console.log('set success is called')
            setSuccess(false);
          }
        }
        
      }, 1000);
    }
  };

  return (
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          <p className={classes.buttonNormal}>
            {props.text}
          </p>
          
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
  );
}