import React from 'react';

const UpdateComponent = (OldComponent, props) => {
  class NewComponent extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        StoriesArr: [],
      }
    }
    componentDidMount() {
      fetch(`https://hacker-news.firebaseio.com/v0/${props.path}.json?print=pretty`)
        .then(response => response.json())
        .then(response => {
          const arr = [...response];
          this.setState((prevState) => {
            return {
              StoriesArr: arr
            }
          })
        })
        .then(response => {
          let stories = this.state.StoriesArr.slice(0, 30)
          let arrStories = []
          stories = stories.map(item => {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
              .then(response => response.json())
              .then(response => arrStories.push(response))
              .then(response => this.setState({
                StoriesArr: arrStories
              }))
              //.then(response => console.log(this.state))
          })
        })
    }
    render() {
      return (
        <OldComponent Arr={this.state.StoriesArr}/>
      );
    }
  }
  return NewComponent;
}
export default UpdateComponent;
