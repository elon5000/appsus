export class KeepTodo extends React.Component {

    state = {
        newTextLine: '',
        todoList: []
    }

    onTodos = (ev) => {
        ev.preventDefault()
    }

    onSaveTodo = (ev) => {
        ev.preventDefault()
    }

    onAddNewLine = (ev) => {
        ev.preventDefault()
        const todos = this.state.todoList
        todos.push(this.state.newTextLine)
        this.setState({ newTextLine: '' })
    }

    handleChange = ({ target }) => {
        const val = target.value
        this.setState({ newTextLine: val })
    }

    onDeleteTodo = (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        this.setState({
            todoList:
                this.state.todoList.filter(todo => { todo !== ev.target.value })
        })
    }

    onToggleMark = (ev) => {
        ev.preventDefault()
        this.isFalse = !this.isFalse
        console.log(this.isFalse)
    }
    isFalse = false

    render() {
        return <div className="todo-container">
            <h1>hello from KeepTodo!</h1>
            <form className="todos-form" onSubmit={this.onSaveTodo}>
                <input
                    type="text"
                    name="new-line"
                    onChange={this.handleChange}
                    placeholder="todo"
                    value={this.state.newTextLine}
                />
                <button onClick={this.onAddNewLine}>
                    add new line
                </button>
                <button onClick={this.onTodos}>
                    add todos
                </button>
            </form>
            <div className="todo-container">
                Hello from todo
                <ul>
                    {this.state.todoList.map(todo =>
                        <li key={todo}
                            onClick={this.onToggleMark}
                            className={this.isFalse ? "marked" : null}>
                            {todo}
                            <button className="delete"
                                value={todo}
                                onClick={this.onDeleteTodo}>x</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    }
}