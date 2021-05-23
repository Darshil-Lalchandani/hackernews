import React, { Component } from 'react'
import Card from '../components/Card'

class Show extends Component {
  constructor(props){
    super(props)
    this.state = {
      showStoriesArr: [],
    }
  }
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty')
      .then(response => response.json())
      .then(response => {
        const arr = [...response];
        this.setState((prevState) => {
          return {
            showStoriesArr: arr
          }
        })
      })
      .then(response => {
        let stories = this.state.showStoriesArr.slice(0, 30)
        let arrStories = []
        stories = stories.map(item => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
            .then(response => response.json())
            .then(response => arrStories.push(response))
            .then(response => this.setState({
              showStoriesArr: arrStories
            }))
            .then(response => console.log(this.state))
        })
      })
  }
  render() {
    return <Card
      Arr={this.state.showStoriesArr}
      comments={true}
    />
  }
}

export default Show
