import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo } from '../features/todo/todoSlice'

function Todos() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const [editedText, setEditedText] = useState("")

  const handleEditToggle = (todo) => {
    setEditedText(todo.text)
    dispatch(editTodo({ id: todo.id })) // toggles IsEditable
  }

  const handleSaveEdit = (todo) => {
    dispatch(editTodo({ id: todo.id, newText: editedText })) // saves text
  }

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {todo.IsEditable ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                className="bg-gray-700 text-white rounded px-2 py-1"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className="flex gap-3">
              {todo.IsEditable ? (
                <button
                  onClick={() => handleSaveEdit(todo)}
                  className="text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600"
                >
                  💾 Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditToggle(todo)}
                  className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
                >
                  ✏️ Edit
                </button>
              )}

              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
