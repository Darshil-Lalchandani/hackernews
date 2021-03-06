import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    maxWidth: '80vw',
    margin: 'auto',
    marginBottom: '10px',
    backgroundColor: '#E7E4F2',
  },
  title: {
    color: '#262223',
    fontWeight: 600,
    fontSize: 14,
  }
});

function CardComponent(props) {
    const classes = useStyles();
    var ts = Math.round((new Date()).getTime() / 1000)
    return (
      <div>
        {props.Arr.map((item, index) => {
        return <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              {`${index+1}. ${item.title}`}
            </Typography>
            <Typography>
              By: {item.by}
            </Typography>
            <Typography variant="body2" component="p">
              {props.points && <div> Points: {item.score}
                <br />
                </div>
              }
              {props.comments && <div> Comments: {item.descendants}
                <br />
                </div>
              }
              {Math.trunc((ts - item.time)/3600) > 1
                ? <span>{Math.trunc((ts - item.time)/3600)} hours</span>
                : (Math.trunc((ts - item.time)/60) > 1
                  ? <span>{Math.trunc((ts - item.time)/60)} minutes</span>
                  : <span>{Math.trunc((ts - item.time)/60)} minute</span>)} ago
              {/*Will display minutes upto 120, then will display in hours*/}
            </Typography>
          </CardContent>
          { item.url && <CardActions>
              <a href={item.url} target='_blank'>
                <Button size="small">Read More</Button>
              </a>
            </CardActions>
          }
        </Card>
      })}
      </div>
    )
}
export default CardComponent;
