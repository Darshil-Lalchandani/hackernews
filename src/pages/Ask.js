import React, { Component } from 'react'
import Card from '../components/Card'

class Ask extends Component {
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
    return <Card
      Arr={this.state.askStoriesArr}
      comments={true}
    />
  }
}

export default Ask
