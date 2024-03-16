
import sendPic from "../assets/sendLogo.png"
import "../stylesheet/AddNote.css"
import { useState , useEffect } from "react"
import arrow from "../assets/backLogo.png"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
function AddNote() {
const navigate = useNavigate();
const file_detail = useSelector((state) => state.File_save.filename);
const color = useSelector((state) => state.File_save.colour);
const [name,setName]=useState(JSON.parse(localStorage.getItem("your_choice")))
const file_info = JSON.parse(localStorage.getItem(name[0])) || [];
const [update , setUpdate] = useState(file_info)

useEffect(() => {
    if (file_detail !== name[0]) {
        setUpdate(JSON.parse(localStorage.getItem(file_detail)))
    }
    setName([file_detail, color])
    setUpdate(JSON.parse(localStorage.getItem(file_detail)))
    if (update?.length !== 0) {
        localStorage.setItem(name[0], JSON.stringify(update))
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [file_detail, color, update])

const toCapital =()=>{
    const nameParts = name[0]?.split(" ");
    const firstName = nameParts[0]?.charAt(0).toUpperCase () ;
    const lastName = nameParts.length > 1 ? nameParts[1].charAt(0).toUpperCase ()  : "";
    return firstName+lastName
}
    
    return(
        <>

        <div className="AddNotePage" style={{height:"100vh",backgroundColor:"#DAE5F5"}}>
            <div className={"AddNoteProfile"}>
            <img src={arrow} className={"backLogo"} onClick={()=>navigate("/")}/>
            <div style={{background:name[1]}} className={"AddNoteDP"}>{toCapital()}</div>
            <p className={"AddNoteName"}>{name[0]}</p>
            </div>
                <div className="AddNote_note">
                    <div className="AddNote_content" >
                        <p></p>
                        <div className="AddNote_time">
                        </div>
                    </div>
                </div>
            <div>
                <textarea className="AddNote_textarea" rows="4" placeholder="Add Your Notes" />
                <img src={sendPic} alt="send Logo" className={"sendPic"}/>
            </div>
        </div>
        </>
    )
}
export default AddNote;