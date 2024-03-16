/* eslint-disable react/prop-types */
import color1 from "../assets/color 1.png"
import color2 from "../assets/color 2.png"
import color3 from "../assets/color 3.png"
import color4 from "../assets/color 4.png"
import color5 from "../assets/color 5.png"
import color6 from "../assets/color 6.png"
import { useRef , useState , useEffect } from "react";
import "../stylesheet/PopUp.css"
function PopUp(props) {
    const [file_name,setfile_name]=useState({
        FileName:'',
        colour:''
    })
    const [error,seterror] = useState({})
    const save_file=(event)=>{
        event.preventDefault();
        setfile_name({
            ...file_name,[event.target.name]:event.target.value
        }) 
    }
    const popRef = useRef(null);
    useEffect(() => {
        const close = (event) => {
            if (popRef.current && !popRef.current.contains(event.target)) {
                props.create_new_group(false) 
            }
        };
        document.addEventListener('mousedown', close);
        return () => {
            document.removeEventListener('mousedown', close);
        };
    }, []); 
    const create = ()=>{
        event.preventDefault();
        const errors={}
        props.add_new_group?.map((obj)=>{
            if(obj.FileName===file_name.FileName){
                errors.same="Group Name is already exists"
            }
        })
       if(!file_name.FileName.trim().length){
           errors.FileName="Group Name is Requires"
       }
       if(!file_name.colour.trim().length){
           errors.colour="Colour is Requires"
       }
       seterror(errors)
        if(!Object.keys(errors).length){
            props.setadd_new_group([...props.add_new_group,file_name])
            props.create_new_group(false)  
            localStorage.setItem(file_name.FileName,JSON.stringify([]))
       }
    } 
  return (
    <div className={"popup-box"} >
        <div >
    </div>
        <div className={"popup-content"} ref={popRef}>
            <p>Create New group</p>
            {error.same?<p style={{"fontSize":"10px","color":"red"}}>{error.same}</p>:<></>}
            <form className={"popup-group"}>
                <label>Group Name</label>
                <input name='FileName'className="popup-groupInput" type='text' placeholder='Enter group name'onChange={(event)=>save_file(event)}/>
                {error.FileName?<span style={{"fontSize":"10px","color":"red"}}>{error.FileName}</span>:<></>}
                <br />
                <div className="popup-colorLine">
                <label style={{"margin-right":"10px"}} >Choose colour</label>
                <input name="colour" className="popup-color" value={"#B38BFA"} type="image" src={color1} onClick={(event)=>save_file(event)} />
                <input name="colour" className="popup-color" value={"#FF79F2"} type='image' src={color2} onClick={(event)=>save_file(event)} />
                <input name="colour" className="popup-color" value={"#43E6FC"} type='image' src={color3} onClick={(event)=>save_file(event)} />
                <input name="colour" className="popup-color" value={"#F19576"} type='image' src={color4} onClick={(event)=>save_file(event)} />
                <input name="colour" className="popup-color" value={"#0047FF"} type='image' src={color5} onClick={(event)=>save_file(event)} />
                <input name="colour" className="popup-color" value={"#6691FF"} type='image' src={color6} onClick={(event)=>save_file(event)} />
                {error.colour?<p style={{"fontSize":"10px","color":"red"}}>{error.colour}</p>:<></>}
                <br />
                </div>
                <button className="create-button" onClick={create} >Create</button>
            </form>
            
        </div>
    </div>
  )
}

export default PopUp