import React, { Component } from 'react'
import Card from '../components/Card'
import UpdateComponent from '../components/HOC'

class Show extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { Arr } = this.props
    return <Card
      Arr={Arr}
      comments={true}
      points={true}
    />
  }
}

export default UpdateComponent(Show, {path: 'showstories'})
