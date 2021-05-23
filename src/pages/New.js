import React, { Component } from 'react'
import Card from '../components/Card'

class New extends Component {
  constructor(props){
    super(props)
    this.state = {
      newStoriesArr: [],
    }
  }
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      .then(response => response.json())
      .then(response => {
        const arr = [...response];
        this.setState((prevState) => {
          return {
            newStoriesArr: arr
          }
        })
      })
      .then(response => {
        let stories = this.state.newStoriesArr.slice(0, 30)
        let arrStories = []
        stories = stories.map(item => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
            .then(response => response.json())
            .then(response => arrStories.push(response))
            .then(response => this.setState({
              newStoriesArr: arrStories
            }))
            .then(response => console.log(this.state))
        })
      })
  }
  render() {
    return <Card
      Arr={this.state.newStoriesArr}
      comments={true}
    />
  }
}

export default New
