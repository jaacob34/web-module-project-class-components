import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1232423,
          completed: true
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

  markComplete = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed}
          : todo
      )
    }))
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} markComplete={this.markComplete} />
        <Form handleChange={this.handleChange} value={this.state.input} submit={this.handleSubmit} />
      </div>
    )
  }
}
