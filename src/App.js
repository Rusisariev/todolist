import React, {useState} from "react";
import './App.css';
import TodoList from "./component/todoList";
import {useDispatch, useSelector} from "react-redux";
import DenseAppBar from "./component/header";
import {Button, Card, CardContent, TextField} from "@material-ui/core";

function App() {
    const list = useSelector(state => state.todolist.posts)
    const dispatch = useDispatch()
    const [state, setState] = useState('')
    const addTaskList = () => {
        dispatch({type: 'ADD_TASK_LIST', payload: state})
    }
    let onTaskListChange = (e) => {
        setState(e.target.value)
    }
    return (
        <div className="App">
            <div >
                <DenseAppBar />
                <CardContent >
                    <Card className='card'>
                        <div className='textField'>
                        <TextField
                            id="outlined-textarea"
                            label="нажмите"
                            placeholder="ведите текст"
                            multiline
                            variant="outlined"
                            onChange={onTaskListChange}

                        />
                        </div>
                    <div>
                        <Button variant="contained" color="primary" onClick={addTaskList} >
                            ADD
                        </Button>
                    </div>
                    </Card>
                </CardContent>
                <div>
                    {list.map((l, idx) => <TodoList key={idx} taskList={l.taskList} id={idx} performed={l.performed} />)}
                </div>
            </div>
        </div>
    );
}

export default App;
