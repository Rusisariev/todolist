import React, {useState} from "react";
import '../App.css'
import {Button, Card, CardContent, Checkbox} from "@material-ui/core";
import {useDispatch} from "react-redux";


const TodoList = (props) => {
    const dispatch = useDispatch()
    const deleteButton = () => {
        dispatch({type: 'DELETE_TASK_LIST', payload: props.id})
    }
    return (
        <CardContent className='todoListComponent'>
            <Card className='cardcontend'>
                <div className='checkboxDiv'>
                    <Checkbox
                        color="primary"
                        inputProps={{'aria-label': 'secondary checkbox'}}
                    />
                </div>
                <div>
                    {props.taskList}
                </div>
                <div className='buttonDeleteDiv'>
                    <Button variant="contained" color="secondary" onClick={deleteButton}>
                        delete
                    </Button>
                </div>
            </Card>
        </CardContent>
    )
}

export default TodoList