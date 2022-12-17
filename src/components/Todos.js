
import TodoForm from './TodoForm.js';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { markComplete } from "../store/actions/todoActions.js";
const Todos = ({todos,markComplete})=>{
  
  return(
    <div className="todo-list">
      <TodoForm></TodoForm>
      <ul>
        {todos.map(todo=>(
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.title}
            <input type="checkbox" onChange={markComplete.bind(this, todo.id)} />
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete:PropTypes.func.isRequired,

}
const mapStateToProps = state =>({
  todos: state.myTodos.todos
})
// nhặt hàm ở dấu ngoặc nhọn
export default connect(mapStateToProps, {markComplete}) (Todos);