import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"

function Landing (){

    const data = useLocation()
    console.log(data.state.user)

    return(
        <div className="bg-black p-20">
      <div className="bg-slate-50 p-12 border rounded-md ">
       <Header username={data.state.user}/>
       <div className="flex justify-between gap-7 my-4 flex-wrap">
        <Card bgcolor={"#8272DA"} title={"17"} subtitle={"chennai"}/>
        <Card bgcolor={"#FD6663"} title={"September"} subtitle={"14:3:34"}/>
        <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}/>
       </div>
       <TodoContainer/>
      </div>
    </div>
    )
}

export default Landing