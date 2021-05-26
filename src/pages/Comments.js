import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Parser from 'html-react-parser/dist/html-react-parser'

const useStyles = withStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments: [],
      maxitem: 0,
      loading: true
    }
  }
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty')
      .then(response => response.json())
      .then(response => {
        this.setState((prevState) => {
          return {
            ...prevState,
            maxitem: response
          }
        })
      })
      .then(response => {
        let maxitem = this.state.maxitem
        let comments = []
        for (var i = 0; i < 50; i++) {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${maxitem-i}.json?print=pretty`)
            .then(response => response.json())
            .then(response => comments.push(response))
            .then(response => this.setState(prevState => {
              return {
                ...prevState,
                comments: comments
              }
            }))
            console.log(this.state);
        }
      })
      .then(response => this.setState(prevState => {
        return {
          ...prevState,
          loading: false
        }
      }))
  }
  render() {
    const { classes } = this.props;
    var ts = Math.round((new Date()).getTime() / 1000)
    return (
      <div>
        {this.state.comments.map((item, index) => {
          if(item.type !== 'comment') return;
        return <Card className='card'>
          <CardContent>
            <Typography className='title' gutterBottom>
              {/*`${index+1}. ${item.text}`*/}
              {Parser(`${item.text}`)}
            </Typography>
            <Typography>
              By: {item.by}
            </Typography>
            <Typography variant="body2" component="p">
              {Math.trunc((ts - item.time)/60)} {Math.trunc((ts - item.time)/60) > 1 ? <span>minutes</span> : <span>minute</span>} ago
            </Typography>
          </CardContent>
        </Card>
      })}
      </div>
    )
  }
}

export default Home
