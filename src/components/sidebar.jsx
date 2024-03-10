import "../stylesheet/sidebar.css"
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PopUp from "./PopUp";
import ProfileSet from "./ProfileSet";


export default function GroupNotes() {
  const [popUp , setPopUp] = useState(false);
  let group = JSON.parse(localStorage.getItem("GroupName"))
    return(
      <>
      <div style={{display:"flex",flexDirection:"column",maxWidth:"24vw",height:"100vh",Border:"2px"}}>
        <p className="sidebarHeading">Pocket Notes</p>
        <div className="sidebarNote">
          
           <figure className="GroupsFigure">
           {group && <ProfileSet fullName={group.name} />}
                  {/* <ProfileSet fullName={group.name}/>     */}
           </figure>

            <div className="GroupsName">
            {group && group.name}
              {/* {group.name} */}
            </div>
        </div>

            <span className="sidebarAdd" onClick={() => setPopUp(true)}>+</span>

            <div>
               {popUp && <PopUp onClose={() => setPopUp(false)}/>}
            </div>
      </div>
      </>
    )
}