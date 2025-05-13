import React from 'react'

export default class Todo extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{paddingBottom: '.3em' }} >
        <span onClick={() => this.props.markComplete(this.props.id)}>{this.props.todo} {this.props.completed && '✓'}</span>
      </div>
    )
  }
}
