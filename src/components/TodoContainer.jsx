import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import AddTodoList from "./TodoList"
function TodoContainer(){
    
    const[activityArr,setAddtoarr]=useState([
        {
            id:1,
            activity:"Watching Tv."
        },
        {
            id:2,
            activity:"Playing Games."
        },
        {
            id:3,
            activity:"Sleeping."
        }

    ])
    return(
        <div>
            <div className="flex gap-2 flex-wrap">
            
                <AddTodoForm activityArr = {activityArr} setAddtoarr = {setAddtoarr}/>
                <AddTodoList activityArr = {activityArr} setAddtoarr = {setAddtoarr}/>
        </div>
        </div>
    )
}

export default TodoContainer