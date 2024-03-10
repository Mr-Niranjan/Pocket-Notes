import color1 from "../assets/color 1.png"
import color2 from "../assets/color 2.png"
import color3 from "../assets/color 3.png"
import color4 from "../assets/color 4.png"
import color5 from "../assets/color 5.png"
import color6 from "../assets/color 6.png"
import { useRef , useState } from "react";
import "../stylesheet/PopUp.css"
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function PopUp({onClose}){
    const navigate = useNavigate();
    const modalRef = useRef()

    const[values , setValues] = useState({ name:""});
    const[errors , setErrors] = useState({name:null});

    const handleChange = (e) => {
        setValues({ values , [e.target.name]:e.target.value})
    }
    // localStorage.setItem("GroupName",JSON.stringify(values));
    const closeModal = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }
    const handleCreate =()=>{
        let isErrors = false;
        if(values.name.trim().length === 0){
            setErrors((prev)=>({...prev, name:"Group Name is Required"}));
            isErrors = true;
        } else{
            setErrors((prev)=>({...prev , name:null }));
        }
        if(!isErrors){
            localStorage.setItem("GroupName",JSON.stringify(values));
             navigate("/collection");
        }
    }
    function handleClick(){
        // onClose();
        handleCreate();
    }
    return(
        <>
        <div ref={modalRef} onClick={closeModal} className="popup-box">
            <div className="popup-content">
            <p>Create New Group</p>
            <div className="popup-group">
                <span>Group Name</span>
                
                <input type="text" required placeholder="Enter Group Name" name="name" value={values.name} onChange={handleChange}/>
                {errors.name ? <p style={{color:"red"}}>{errors.name}</p> : <></>}
            </div>
            <div className="popup-color">
                <span>Choose Color</span>
                <img src={color1} alt="color1" id="#B38BFA" />
                <img src={color2} alt="color2" id="#FF79F2"/>
                <img src={color3} alt="color3" id="#43E6FC"/>
                <img src={color4} alt="color4" id="#F19576"/>
                <img src={color5} alt="color5" id="#0047FF"/>
                <img src={color6} alt="color6" id="#6691FF"/>
            </div>
            <button className="create-button" onClick={handleClick} >create</button>
            </div>
        </div>
        </>
    )
}