import React, { Component } from 'react'

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
    return (
      <div>Comments {this.state.loading ? <div>Loading</div> : this.state.comments.map(item => <div> {item.title} </div>) }</div>
    )
  }
}

export default Home
