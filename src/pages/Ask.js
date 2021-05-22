import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
      askStoriesArr: [],
    }
  }
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty')
      .then(response => response.json())
      .then(response => {
        const arr = [...response];
        this.setState((prevState) => {
          return {
            askStoriesArr: arr
          }
        })
      })
      .then(response => {
        let stories = this.state.askStoriesArr.slice(0, 30)
        let arrStories = []
        stories = stories.map(item => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
            .then(response => response.json())
            .then(response => arrStories.push(response))
            .then(response => this.setState({
              askStoriesArr: arrStories
            }))
            .then(response => console.log(this.state))
        })
      })
  }
  render() {
    const { classes } = this.props;
    var ts = Math.round((new Date()).getTime() / 1000)
    return (
      <div>
        {this.state.askStoriesArr.map((item, index) => {
        return <Card className='card'>
          <CardContent>
            <Typography className='title' gutterBottom>
              {`${index+1}. ${item.title}`}
            </Typography>
            <Typography>
              By: {item.by}
            </Typography>
            <Typography variant="body2" component="p">
              Points: {item.score}
              <br />
              Comments: {item.descendants}
              <br />
              {Math.trunc((ts - item.time)/3600)} {Math.trunc((ts - item.time)/3600) > 1 ? <span>hours</span> : <span>hour</span>} ago
            </Typography>
          </CardContent>          
        </Card>
      })}
      </div>
    )
  }
}

export default Home
