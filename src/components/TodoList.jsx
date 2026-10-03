import { useState } from "react"
import AddtodoItem from "./TodoItem"
function AddTodoList(props){
    const activityArr = props.activityArr
    const setAddtoarr = props.setAddtoarr

    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
                <h1 className="text-2xl font-medium">Today's Activities.</h1>
                {
                    activityArr.length === 0?<p>You haven't added anything yet... </p>:""
                }
                {
                    activityArr.map(function(item,index)
                {
                    return <AddtodoItem id={item.id} activity={item.activity} index= {index} activityArr={activityArr} setAddtoarr={setAddtoarr}/>
                })

                }
            </div>
    )
}

export default AddTodoList