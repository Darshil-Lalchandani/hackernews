import React, { Component } from 'react'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      topStoriesArr: [],
      storiesArr: []
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
      .then(response => this.getStories())
      //.then(response => this.setStories())
  }
  getStories() {
    let stories = this.state.topStoriesArr.slice(0, 30)
    let arrStories = []
    stories = stories.map(item => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
        .then(response => response.json())
        .then(response => arrStories.push(response))
        //.then(response => console.log(arrStories))
    })
    //console.log(arrStories);
  }
  setStories(arrStories) {
    console.log(this);
    this.setState((prevState) => {
      return {
        storiesArr: arrStories,
        ...prevState
      }
    })
    //console.log(this.state);
  }
  render() {
    return (
      <div>Hello from home</div>
    )
  }
}

export default Home
