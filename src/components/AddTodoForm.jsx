import { useState } from "react"

function AddTodoForm(props) {
    const activityArr = props.activityArr
    const setAddtoarr = props.setAddtoarr

    const [newActivity,setNewactivity] = useState("")

    function handleChange(evt){
        setNewactivity(evt.target.value)
    }

    function addActivity(){
        setAddtoarr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        setNewactivity("")
    }



    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Manage Activities</h1>
            <div>
                <input value = {newActivity} onChange={handleChange} type="text" placeholder="Next Activity...." className="border border-black bg-transparent" />
                <button onClick={addActivity} className="bg-black text-white border border-black">Add</button>
            </div>
        </div>
    )
}

export default AddTodoForm