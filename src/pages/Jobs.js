import React, { Component } from 'react'
import Card from '../components/Card'

class Jobs extends Component {
  constructor(props){
    super(props)
    this.state = {
      jobStoriesArr: [],
    }
  }
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty')
      .then(response => response.json())
      .then(response => {
        const arr = [...response];
        this.setState((prevState) => {
          return {
            jobStoriesArr: arr
          }
        })
      })
      .then(response => {
        let stories = this.state.jobStoriesArr.slice(0, 30)
        let arrStories = []
        stories = stories.map(item => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
            .then(response => response.json())
            .then(response => arrStories.push(response))
            .then(response => this.setState({
              jobStoriesArr: arrStories
            }))
            .then(response => console.log(this.state))
        })
      })
  }
  render() {
    return <Card
      Arr={this.state.jobStoriesArr}
      comments={false}
    />
  }
}

export default Jobs
