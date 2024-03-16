
// import backLogo from "../assets/backLogo.png"
// import { useSelector } from "react-redux"
import sendPic from "../assets/sendLogo.png"
import "../stylesheet/AddNote.css"
export default function AddNote() {
    return(
        <>
        <div className="AddNotePage" style={{height:"100vh",width:"74vw",backgroundColor:"#DAE5F5"}}>

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
