import React, { Component } from 'react'
import Card from '../components/Card'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      topStoriesArr: [],
    }
  }
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(response => response.json())
      .then(response => {
        const arr = [...response];
        this.setState((prevState) => {
          return {
            topStoriesArr: arr
          }
        })
      })
      .then(response => {
        let stories = this.state.topStoriesArr.slice(0, 30)
        let arrStories = []
        stories = stories.map(item => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
            .then(response => response.json())
            .then(response => arrStories.push(response))
            .then(response => this.setState({
              topStoriesArr: arrStories
            }))
            .then(response => console.log(this.state))
        })
      })
  }
  render() {
    return <Card
      Arr={this.state.topStoriesArr}
      comments={true}
    />
  }
}

export default Home
