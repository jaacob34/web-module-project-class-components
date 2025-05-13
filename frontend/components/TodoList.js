import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Todos: </h1>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} todo={todo.name} id={todo.id} completed={todo.completed} markComplete={this.props.markComplete} />
        ))}
      </div>
    )
  }
}
