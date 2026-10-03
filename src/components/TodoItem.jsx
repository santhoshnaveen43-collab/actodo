function AddtodoItem(props){
    const activityArr = props.activityArr
    const setAddtoarr = props.setAddtoarr
    

    function handledelete(deleteId){
        var temparr = activityArr.filter(function(item)
    {
        if(item.id === deleteId)
        {
            return false
        }
        else
        {
            return true
        }
    })
    setAddtoarr(temparr)
    }
    

        return (
        <div className="flex justify-between">
        <p>{props.index+1}.{props.activity}</p>
        <button className="text-red-600" onClick={()=>handledelete(props.id)}>Delete</button>
        </div>
    )
}

export default AddtodoItem