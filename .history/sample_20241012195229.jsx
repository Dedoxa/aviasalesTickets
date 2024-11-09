import { useState, useEffect } from "react";

const TASK_ADDED = "tasks/added";
const TASK_UPDATED = "tasks/updated";

function taskReducer(state, action) {
  switch (action.type) {
    case TASK_UPDATED:
      return state.map((task) => {
        return task.id === action.payload.id
          ? { ...task, ...action.payload }
          : task;
      });
    case TASK_ADDED:
      return [...state, action.payload];

    default:
      return state;
  }
}

function createStore(reducer, initState) {
  let state = initState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  return { getState, dispatch, subscribe };
}

const initState = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
];
const store = createStore(taskReducer, initState);

const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
      console.log(store.getState());
    });
  }, []);

  const completeTask = (taskId) => {
    const action = {
      type: TASK_UPDATED,
      payload: { id: taskId, completed: true },
    };
    store.dispatch(action);
  };

  const changeTitle = (taskId) => {
    const action = {
      type: TASK_UPDATED,
      payload: { id: taskId, title: `New Title ${taskId}` },
    };
    store.dispatch(action);
  };

  const addTask = () => {
    const action = {
      type: TASK_ADDED,
      payload: {
        id: Date.now(),
        title: "New Task",
        completed: false,
      },
    };
    store.dispatch(action);
  };

  return (
    <>
      <h1>App</h1>
      <p />
      {state.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>
          <span> {task.completed ? "" : ""}</span> <p />
          <button onClick={() => completeTask(task.id)}>Complete</button>{" "}
          <button onClick={() => changeTitle(task.id)}>Change Title</button>{" "}
          <hr />
        </li>
      ))}
      <button onClick={addTask}>Add Task</button>
    </>
  );
};

export default App;