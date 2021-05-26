import React, { Component } from 'react'
import Card from '../components/Card'
import UpdateComponent from '../components/HOC'

class Jobs extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { Arr } = this.props
    return <Card
      Arr={Arr}
      comments={false}
      points={false}
    />
  }
}

export default UpdateComponent(Jobs, {path: 'jobstories'})
