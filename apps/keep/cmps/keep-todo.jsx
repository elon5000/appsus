import { utilService } from '../../../services/util.service.js'

export class KeepTodo extends React.Component {
  state = {
    newTextLine: '',
    todoData: [],
  }

  onTodos = (ev) => {
    ev.preventDefault()
  }

  onSubmit = (ev) => {
    ev.preventDefault()
    this.toObject().then((obj) => this.props.onSaveTodo(obj))
  }

  toObject = () => {
    const todos = this.state.todoData
    var obj = {}
    for (var i = 0; i < todos.length; i++) {
      obj[i] = todos[i]
    }
    return Promise.resolve(obj)
  }

  onAddNewLine = (ev) => {
    ev.preventDefault()
    const todos = this.state.todoData
    const textLine = [utilService.makeId(3), this.state.newTextLine, false]
    todos.push(textLine)
    this.setState({ newTextLine: '' })
  }

  handleChange = ({ target }) => {
    const val = target.value
    this.setState({ newTextLine: val })
  }

  onDeleteTodo = (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    const arr = this.state.todoData
    const todoID = ev.target.value
    const newArr = arr.filter((todo) => todo[0] !== todoID)
    this.setState({ todoData: newArr })
  }

  render() {
    const todosArr = this.state.todoData
    return (
      <div className="todo-container">
        <form className="todos-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="new-line"
            onChange={this.handleChange}
            placeholder="todo"
            value={this.state.newTextLine}
          />
          <section className='todo-btn-container'>
          <button onClick={this.onAddNewLine}>add todo</button>
          <button>save list</button>
          </section>
        </form>
        <div className="todo-container">
          <ul>
            {todosArr.map((todo) => (
              <li key={todo[0]} value={todo[0]}>
                {todo[1]}
                <button
                  className="delete"
                  value={todo[0]}
                  onClick={this.onDeleteTodo}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
