import { utilService } from "../../../services/util.service.js"

export class KeepTodo extends React.Component {

    state = {
        newTextLine: '',
        todoData: [],
    }

    componentDidMount() {
        console.log('todos loaded...')
    }

    onTodos = (ev) => {
        ev.preventDefault()
    }

    onSubmit = (ev) => {
        ev.preventDefault()
        this.props.onSaveTodo(this.state.todoData)
        console.log(this.state.todoData)
    }

    onAddNewLine = (ev) => {
        ev.preventDefault()
        const todos = this.state.todoData
        const textLine = [
            utilService.makeId(3),
            this.state.newTextLine,
            false
        ]
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
        console.log('curr array:', arr)
        const todoID = ev.target.value
        const newArr = arr.filter(todo => todo[0] !== todoID)
        this.setState({ todoData: newArr })
    }


    render() {
        const todosArr = this.state.todoData
        return <div className="todo-container">
            <form className="todos-form" onSubmit={this.onSubmit}>
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
                <button>
                    save todos
                </button>
            </form>
            <div className="todo-container">
                <ul>
                    {todosArr.map(todo =>
                        <li key={todo[0]}
                            value={todo[0]}
                        >
                            {todo[1]}
                            <button className="delete"
                                value={todo[0]}
                                onClick={this.onDeleteTodo}>x</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    }
}