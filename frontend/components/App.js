import React from 'react'
import Form from './Form'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1232423,
          completed: false
        },
      ],
      input: '',
      disabled: true
    }
  }

  handleChange = (evt) => {
    this.setState({input: evt.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({todos: [...this.state.todos, {
      name: this.state.input,
      id: Date.now(),
      completed: false

    }]})
    
    this.setState({input: ''})
  }

  render() {
    return (
      <div>
        Todo App
        <Form handleChange={this.handleChange} value={this.state.input} submit={this.handleSubmit} />
      </div>
    )
  }
}
