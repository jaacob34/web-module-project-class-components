import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.submit}>
        <input type='text' name='todo' value={this.props.value} onChange={this.props.handleChange}/>
        <button type='submit' disabled={!this.props.value.trim()}>Submit</button>
      </form>
    )
  }
}

