// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from 'react'
import "../stylesheet/sidebar.css";
import PopUp from "./PopUp";
import ProfileSet from "./ProfileSet";
function GroupNotes() {
  const allnew=JSON.parse(localStorage.getItem('new_add_group')) || []
  const [create_file,setcreate_file] = useState(false)
  const [add_group,setadd_group] = useState(allnew) 
  useEffect(()=>{
    localStorage.setItem('new_add_group',JSON.stringify(add_group))
  },[add_group])
  
  return (
    <>
    {create_file ? <PopUp create_new_group={setcreate_file} add_new_group={add_group} setadd_new_group={setadd_group} />:<></>}
    
    <div style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "24vw",
          height: "100vh",
          Border: "2px",
          color:"black"
        }}>
            <p className="sidebarHeading">Pocket Notes</p>
        <div className="sidebarGroups">
        {add_group.length ? <ProfileSet list={add_group}/> : <></>}
        </div>
        <span className="sidebarAdd" onClick={()=>setcreate_file(true)}>
          +
        </span>
        </div>
    
    </>
  )
}

export default GroupNotes