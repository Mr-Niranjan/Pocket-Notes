/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { update } from '../app/FileSlice'
import "../stylesheet/ProfileSet.css"
function ProfileSet(props) {
    const dispatch = useDispatch()
    const file_detail=(useSelector((state) => state.File_save.filename))
   const navigate=useNavigate()
    let filename_detail
    let show_group=props.list
    useEffect(()=>{
        dispatch(update())
    },[])
    const toCapital =(name)=>{
        const nameParts = name.split(" ");
        const firstName = nameParts[0].charAt(0).toUpperCase () ;
        const lastName = nameParts.length > 1 ? nameParts[1].charAt(0).toUpperCase ()  : "";
        return firstName+lastName
    }
    const note=(filename,color)=>{
       // localStorage.setItem('yourKey', 'new value');
        navigate("/collection")
        filename_detail=[filename,color]
        localStorage.setItem("your_choice",JSON.stringify(filename_detail))
        dispatch(update())
    }
  return (
    <div>
        {show_group.map((obj)=>(
            // eslint-disable-next-line react/jsx-key
            <div className="ProfileData" onClick={()=>note(obj.FileName,obj.colour)} style={{background:file_detail===obj.FileName?"rgb(126 215 142 / 17%)":""}}>
                <div className="ProfileSetDP" style={{background:obj.colour}}>{toCapital(obj.FileName)}</div>
                <p className="ProfileSetName">{obj.FileName}</p>
            </div>
        ))}
    </div>
  )
}

export default ProfileSet