
// import backLogo from "../assets/backLogo.png"
// import { useSelector } from "react-redux"
import sendPic from "../assets/sendLogo.png"
import "../stylesheet/AddNote.css"
export default function AddNote() {
    return(
        <>
        <div className="AddNotePage" style={{height:"100vh",width:"74vw",backgroundColor:"#DAE5F5"}}>
            {/* <div style={{display:"flex",flexDireaction:"row",backgroundColor:"#001F8B",alignItems:"center"}}>
            <img src={backLogo} alt="back" className="backLogo" style={{width:"23px",padding:"5px"}}/>
                <div>
                    <figure className="GroupsFigure" style={{backgroundColor:color}}>
                     {group && <ProfileSet fullName={group.name} />}
                    </figure>

                </div>
                <div className="GroupsName" style={{color:"white"}}> 

                    {group && group.name}

                </div>
            </div> */}
            <div>
                <div className="AddNote_note">
                    <div className="AddNote_content" style={{width:"100%",height:"76vh"}}>
                        <p></p>
                        <div className="AddNote_time">
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <textarea className="AddNote_textarea" rows="4"  />
                <img src={sendPic} alt="send Logo"/>
            </div>
        </div>
        </>
    )
}