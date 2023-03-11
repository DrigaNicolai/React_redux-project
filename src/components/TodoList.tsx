import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
  const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo);
  const {fetchTodos, setTodoPage} = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return (
      <h2>Loading...</h2>
    );
  }

  if (error) {
    return (
      <h2>{error}</h2>
    );
  }

  return (
    <div>
      { todos.map(todo =>
          <div key={todo.id}>{todo.id} - {todo.title}</div>
        )
      }
      <div style={ { display: "flex" } }>
        { pages.map(p =>
            <div
              style={ { border: p === page ? "2px solid green" : "1px solid gray", padding: 10 } }
              key={p}
              onClick={() => setTodoPage(p)}
            >
              {p}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default TodoList;
